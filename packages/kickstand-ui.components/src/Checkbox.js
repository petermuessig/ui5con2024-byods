/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-checkbox"
], function(StencilComponent, Checkbox) {
	"use strict";

	// define the custom element tag
	//Checkbox.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Checkbox", {

		metadata: {
			tag: "ks-checkbox",
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
					defaultValue: false
				},
				// 
				required: {
					type: "boolean",
					mapping: {
						to: "required"
					},
				},
				// 
				tooltipText: {
					type: "string",
					mapping: {
						to: "tooltip-text"
					},
				},
				// 
				tooltipLabel: {
					type: "string",
					mapping: {
						to: "tooltip-label"
					},
				},
				// 
				tooltipSize: {
					type: "string",
					mapping: {
						to: "tooltip-size"
					},
					defaultValue: 'sm'
				},
				// 
				requiredText: {
					type: "string",
					mapping: {
						to: "required-text"
					},
					defaultValue: 'Required'
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
				// 
				indeterminate: {
					type: "boolean",
					mapping: {
						to: "indeterminate"
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
				changed: {},
				// native click event
				click: {}
			},
			methods: [
				// 
				"validate",
			],
		}

	});

});
