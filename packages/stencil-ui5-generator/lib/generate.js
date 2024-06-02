#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url"
import { createRequire } from 'node:module';
import { existsSync, readFileSync, rmSync, mkdirSync, writeFileSync, readdirSync } from "node:fs";
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url);

function resolveDep(p) {
	try {
		return require.resolve(p, {
			paths: [process.cwd()]
		});
	} catch (ex) {
		return undefined;
	}
}

function resolvePackage(p) {
	let file = resolveDep(p);
	if (!file) {
		file = resolveDep(`${p}/package.json`);
		return path.dirname(file);
	}
	// traverse up the directory tree to find the package.json
	let dir = path.dirname(file);
	while (dir !== "/") {
		const packageJson = path.join(dir, "package.json");
		if (existsSync(packageJson)) {
			return dir;
		}
		dir = path.dirname(dir);
	}
}

function readJson(file) {
	try {
		if (existsSync(file)) {
			return JSON.parse(readFileSync(file, { encoding: "utf8" }));
		}
	} catch (ex) {
		return undefined;
	}
}

function camelize(s) {
	return s?.replace(/-(.)/ig, (sMatch, sChar) => {
		return sChar.toUpperCase();
	});
}

function removeNewLines(s) {
	return s?.replace(/(\r\n|\n|\r)/gm, " ")
}

const npmPackage = process.argv[2];
if (!npmPackage) {
	throw new Error("Please specify the npm package of the Stencil Web Components to generate the UI5 Control wrappers for!");
}
const npmPackageRoot = resolvePackage(npmPackage);
if (!npmPackageRoot) {
	throw new Error(`The npm package "${npmPackage}" cannot be found! Did you forget to import it?`);
}

const namespace = process.argv[3];
if (!namespace) {
	throw new Error("Please specify the namespace of the UI5 Control wrappers!");
}

const targetDir = process.argv[4] && path.resolve(process.cwd(), process.argv[4]);
if (!existsSync(targetDir)) {
	throw new Error(`The target directory "${targetDir}" doesn't exist. Please create the directory!`);
}

const templatesDir = process.argv[5] && path.resolve(process.cwd(), process.argv[5]);

(async function ({ npmPackage, namespace, targetDir, templatesDir }) {

	// TODO: check the web-types.json for the metadata
	//   ==> manifest: 
	//     "web-types": "dist/web-types.json",
	//     "collection": "dist/collection/collection-manifest.json",
	//     "collection:main": "dist/collection/index.js",	

	// find the package.json of the npm package
	const packageRoot = resolvePackage(npmPackage);
	if (!packageRoot) {
		throw new Error(`The package.json for "${npmPackage}" cannot be found!`);
	}

	// the package.json of the npm package must contain a "collection" property
	const packageJson = readJson(path.join(packageRoot, "package.json"));
	if (!packageJson.collection) {
		throw new Error(`The package.json for "${npmPackage}" doesn't contain a "collection" property!`);
	}
	const collectionJsonFile = path.join(packageRoot, packageJson.collection);
	const collectionJson = readJson(collectionJsonFile);

	// read the vscode metadata (or for older versions the custom-elements.json)
	const metadata = {};

	// read the collection metadata
	const collectionJsonRoot = path.dirname(collectionJsonFile);
	const clazzes = collectionJson?.entries.map(entry => {
		const clazzPath = path.join(collectionJsonRoot, entry);

		// extract the static parts from the collection file (with a simple line parser!)
		const clazzMetadata = { slots: {}, props: {} };
		const clazzString = readFileSync(clazzPath, { encoding: "utf8" });
		let includeTheRest = false;
		const lines = clazzString.split("\n").filter(line => {
			// identifying slots and properties from JSDoc
			const match = /\s+\*\s+@(slot|prop)\s+(?:([^\s]+)\s+)?-\s+(.*)/g.exec(line);
			if (match) {
				const type = match[1], name = match[2] || "default", description = match[3];
				clazzMetadata[`${type}s`][name] = description;
				if (type === "slot" && clazzMetadata.defaultSlot === undefined) {
					clazzMetadata.defaultSlot = name;
				}
			}
			// find the start for the metadata content
			if (line.indexOf("static get is()") !== -1) {
				includeTheRest = true;
			}
			// find the end of the class definition
			if (line === "}") {
				includeTheRest = false;
				return true;
			}
			return includeTheRest || line.indexOf("export class") !== -1;
		}).map((line) => {
			if (line.indexOf("export class") !== -1) {
				return line.replace(/export class/, "class");
			}
			return line;
		});

		// access the static collection file to read the metadata
		const clazz = eval(`(${lines.join("\n")})`);
		clazz.shortName = camelize(/(?:[^-]+)([^.]+)/g.exec(clazz.is)[1]);
		clazz.metadata = {
			properties: Object.entries(clazz.properties || {}).map(([name, property]) => {
				property.name = name;
				if (clazzMetadata.slots[property.name]) {
					property.name += "Text"; // rename property when aggregation with the same name exists!
				}
				property.description = removeNewLines(property.description);
				if (property.name.indexOf("-") !== -1) {
					property.attribute = property.name;
					property.name = camelize(property.name);
				}
				// map property types
				switch (property.type) {
					case "string":
					case "boolean":
						break;
					case "number":
						property.type = "int";
						break;
					default:
						property.type = "any";
				}
				return property;
			}),
			defaultAggregation: clazzMetadata.defaultSlot,
			aggregations: Object.keys(clazzMetadata.slots || {}).map(slotName => {
				return {
					name: camelize(slotName),
					description: clazzMetadata.slots[slotName],
					slotName: slotName && slotName !== "default" ? slotName : undefined
				}
			}),
			events: clazz.events?.map(event => {
				if (event.docs?.text) {
					event.docs.text = removeNewLines(event.docs.text);
				}
				return event;
			}),
			methods: Object.keys(clazz.methods || {}).map(methodName => {
				const method = {
					name: methodName,
					...clazz.methods[methodName]
				};
				if (method.docs?.text) {
					method.docs.text = removeNewLines(method.docs.text);
				}
				return method;
			})
		};

		// TODO: we assign the text property to every component for now
		clazz.metadata.properties.push({
			name: "text",
			description: `The inner text of the component. (HINT: automatically injected to every component!)`,
			type: "string",
			mappingType: "textContent"
		});

		// TODO: we assign the default aggregation for any content to every component for now
		clazz.metadata.aggregations.push({
			name: "default",
			description: `The default aggregation of the component. (HINT: automatically injected to every component!)`,
			type: "sap.ui.core.Control"
		});
		clazz.metadata.defaultAggregation = "default";

		return clazz;
	});

	const templateString = readFileSync(path.join(__dirname, "../templates/WebComponent.js.ejs"), { encoding: "utf8" });
	const template = ejs.compile(templateString, {});
	clazzes.forEach(clazz => {

		const filename = path.join(targetDir, `${clazz.shortName}.js`);
		if (existsSync(filename)) {
			console.log(`Updating file "${filename}"...`)
			rmSync(filename);
		} else {
			console.log(`Writing file "${filename}"...`)
		}
		mkdirSync(path.dirname(filename), { recursive: true });
		writeFileSync(filename, template({ npmPackage, namespace, clazz }), { encoding: "utf8", recursive: true });

	});

	if (existsSync(templatesDir)) {
		const templates = readdirSync(templatesDir, {
			withFileTypes: true
		});
		templates.filter(file => file.isFile() && file.name.endsWith(".ejs")).forEach(file => {
			const templateFilename = path.join(templatesDir, file.name);
			const templateString = readFileSync(templateFilename, { encoding: "utf8" });
			const template = ejs.compile(templateString, {});
			const filename = path.join(targetDir, file.name.replace(".ejs", ""));
			if (existsSync(filename)) {
				console.log(`Updating file "${filename}"...`)
				rmSync(filename);
			} else {
				console.log(`Writing file "${filename}"...`)
			}
			mkdirSync(path.dirname(filename), { recursive: true });
			writeFileSync(filename, template({ npmPackage, namespace, clazzes }), { encoding: "utf8", recursive: true });
		});
	}

}({ npmPackage, namespace, targetDir, templatesDir }));
