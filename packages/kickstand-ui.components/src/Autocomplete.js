/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-autocomplete"
], function(StencilComponent, Autocomplete) {
	"use strict";

	// define the custom element tag
	//Autocomplete.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Autocomplete", {

		metadata: {
			tag: "ks-autocomplete",
			properties: {
				// 
				value: {
					type: "any",
					mapping: {
						to: "value"
					},
					defaultValue: ''
				},
				// 
				required: {
					type: "boolean",
					mapping: {
						to: "required"
					},
				},
				// 
				disabled: {
					type: "boolean",
					mapping: {
						to: "disabled"
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
				inputId: {
					type: "string",
					mapping: {
						to: "input-id"
					},
				},
				// 
				debounce: {
					type: "int",
					mapping: {
						to: "debounce"
					},
					defaultValue: 0
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
				// 
				autoExpand: {
					type: "boolean",
					mapping: {
						to: "auto-expand"
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
				// 
				cleared: {},
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
