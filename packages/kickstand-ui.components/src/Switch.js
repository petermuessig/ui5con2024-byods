/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-switch"
], function(StencilComponent, Switch) {
	"use strict";

	// define the custom element tag
	//Switch.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Switch", {

		metadata: {
			tag: "ks-switch",
			properties: {
				// 
				label: {
					type: "string",
					mapping: {
						to: "label"
					},
				},
				// 
				name: {
					type: "string",
					mapping: {
						to: "name"
					},
				},
				// 
				disable: {
					type: "boolean",
					mapping: {
						to: "disable"
					},
					defaultValue: false
				},
				// 
				checked: {
					type: "boolean",
					mapping: {
						to: "checked"
					},
					defaultValue: false
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
				// 
				updated: {},
				// native click event
				click: {}
			},
		}

	});

});
