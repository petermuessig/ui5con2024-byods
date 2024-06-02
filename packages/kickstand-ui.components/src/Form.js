/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-form"
], function(StencilComponent, Form) {
	"use strict";

	// define the custom element tag
	//Form.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Form", {

		metadata: {
			tag: "ks-form",
			properties: {
				// 
				action: {
					type: "string",
					mapping: {
						to: "action"
					},
				},
				// 
				target: {
					type: "string",
					mapping: {
						to: "target"
					},
				},
				// 
				method: {
					type: "string",
					mapping: {
						to: "method"
					},
				},
				// 
				enctype: {
					type: "string",
					mapping: {
						to: "enctype"
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
				errorMessage: {
					type: "string",
					mapping: {
						to: "error-message"
					},
					defaultValue: 'One or more of the from fields are not valid. Please, review the form and try again.'
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
				formClass: {
					type: "string",
					mapping: {
						to: "form-class"
					},
				},
				// 
				disableErrorMessage: {
					type: "boolean",
					mapping: {
						to: "disable-error-message"
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
				submitted: {},
				// 
				cleared: {},
				// native click event
				click: {}
			},
			methods: [
				// 
				"clear",
				// 
				"submit",
			],
		}

	});

});
