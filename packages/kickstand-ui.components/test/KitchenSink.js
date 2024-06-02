sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"kickstand-ui/components/MenuBar",
	"kickstand-ui/components/Button",
	"kickstand-ui/components/FormField",
	"kickstand-ui/components/Row",
	"kickstand-ui/components/Column",
	"kickstand-ui/components/Gallery",
	"kickstand-ui/components/Badge",
	"kickstand-ui/components/Overlay",
], function (JSONModel, MenuBar, Button, FormField, Row, Column, Gallery, Badge, Overlay) {
	"use strict";

	const model = new JSONModel({
		value: "Hello World",
		items: [{
			value: "Item 1"
		}, {
			value: "Item 2"
		}, {
			value: "Item 3"
		}, {
			value: "Item 4"
		}, {
			value: "Item 5"
		}]
	});
	sap.ui.getCore().setModel(model);

	new MenuBar({
		tagline: "Bookshop"
	}).placeAt("content");

	new Button({
		text: "{/value}"
	}).placeAt("content");

	new FormField({
		label: "Label",
		value: "{/value}",
		icon: "email",
		iconDirection: "left"
	}).placeAt("content");

	new Row({
		default: {
			path: "/items",
			template: new Column({
				default: new FormField({
					value: "{value}"
				})
			})
		}
	}).placeAt("content");

	new Gallery({
		heading: "Items",
		itemWidth: "250px",
		default: {
			path: "/items",
			template: new Badge({
				text: "{value}"
			})
		}
	}).placeAt("content");

	new Overlay({
		id: "basic-overlay",
		default: new Button({
			text: "Hide Overlay",
			color: "light",
			hides: "basic-overlay",
		})
	}).placeAt("content");

	new Button({
		text: "Show Overlay",
		shows: "basic-overlay",
	}).placeAt("content");

});
