/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-img"
], function(StencilComponent, Img) {
	"use strict";

	// define the custom element tag
	//Img.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Img", {

		metadata: {
			tag: "ks-img",
			properties: {
				// 
				src: {
					type: "string",
					mapping: {
						to: "src"
					},
				},
				// 
				alt: {
					type: "string",
					mapping: {
						to: "alt"
					},
				},
				// 
				fallbackSrc: {
					type: "string",
					mapping: {
						to: "fallback-src"
					},
				},
				// 
				width: {
					type: "int",
					mapping: {
						to: "width"
					},
				},
				// 
				height: {
					type: "int",
					mapping: {
						to: "height"
					},
				},
				// 
				lazy: {
					type: "boolean",
					mapping: {
						to: "lazy"
					},
				},
				// 
				aspectRatio: {
					type: "string",
					mapping: {
						to: "aspect-ratio"
					},
				},
				// 
				threshold: {
					type: "int",
					mapping: {
						to: "threshold"
					},
					defaultValue: 300
				},
				// The inner text of the component. (HINT: automatically injected to every component!)
				text: {
					type: "string",
					mapping: {
						type: "textContent"
					},
				},
			},
			defaultAggregation: "default",
			aggregations: {
				// The default aggregation of the component. (HINT: automatically injected to every component!)
				default: {
					type: "sap.ui.core.Control",
					multiple: true
				},
			},
			events: {
				// native click event
				click: {}
			},
		}

	});

});
