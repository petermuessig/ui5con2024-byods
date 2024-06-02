/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-checklist"
], function(StencilComponent, Checklist) {
	"use strict";

	// define the custom element tag
	//Checklist.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Checklist", {

		metadata: {
			tag: "ks-checklist",
			properties: {
				// 
				type: {
					type: "string",
					mapping: {
						to: "type"
					},
					defaultValue: 'checkbox'
				},
				// 
				label: {
					type: "string",
					mapping: {
						to: "label"
					},
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
				requiredErrorMessage: {
					type: "string",
					mapping: {
						to: "required-error-message"
					},
					defaultValue: `This field is required.`
				},
				// 
				name: {
					type: "string",
					mapping: {
						to: "name"
					},
				},
				// 
				helpText: {
					type: "string",
					mapping: {
						to: "help-text"
					},
				},
				// 
				invalid: {
					type: "boolean",
					mapping: {
						to: "invalid"
					},
					defaultValue: false
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
				checked: {},
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
