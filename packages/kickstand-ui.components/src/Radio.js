/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-radio"
], function(StencilComponent, Radio) {
	"use strict";

	// define the custom element tag
	//Radio.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Radio", {

		metadata: {
			tag: "ks-radio",
			properties: {
				// 
				label: {
					type: "string",
					mapping: {
						to: "label"
					},
				},
				// 
				checked: {
					type: "boolean",
					mapping: {
						to: "checked"
					},
				},
				// 
				inline: {
					type: "boolean",
					mapping: {
						to: "inline"
					},
					defaultValue: false
				},
				// 
				name: {
					type: "string",
					mapping: {
						to: "name"
					},
				},
				// 
				disabled: {
					type: "boolean",
					mapping: {
						to: "disabled"
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
				selected: {},
				// native click event
				click: {}
			},
		}

	});

});
