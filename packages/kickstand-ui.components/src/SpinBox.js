/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-spin-box"
], function(StencilComponent, SpinBox) {
	"use strict";

	// define the custom element tag
	//SpinBox.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.SpinBox", {

		metadata: {
			tag: "ks-spin-box",
			properties: {
				// 
				value: {
					type: "any",
					mapping: {
						to: "value"
					},
					defaultValue: 0
				},
				// 
				min: {
					type: "int",
					mapping: {
						to: "min"
					},
				},
				// 
				max: {
					type: "int",
					mapping: {
						to: "max"
					},
				},
				// 
				step: {
					type: "int",
					mapping: {
						to: "step"
					},
					defaultValue: 1
				},
				// 
				name: {
					type: "string",
					mapping: {
						to: "name"
					},
				},
				// 
				inputId: {
					type: "string",
					mapping: {
						to: "input-id"
					},
				},
				// 
				required: {
					type: "boolean",
					mapping: {
						to: "required"
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
				// 
				invalid: {
					type: "boolean",
					mapping: {
						to: "invalid"
					},
					defaultValue: false
				},
				// 
				size: {
					type: "string",
					mapping: {
						to: "size"
					},
					defaultValue: 'md'
				},
				// 
				inputClass: {
					type: "string",
					mapping: {
						to: "input-class"
					},
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
			methods: [
				// 
				"validate",
			],
		}

	});

});
