/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-modal"
], function(StencilComponent, Modal) {
	"use strict";

	// define the custom element tag
	//Modal.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Modal", {

		metadata: {
			tag: "ks-modal",
			properties: {
				// 
				modalTitle: {
					type: "string",
					mapping: {
						to: "modal-title"
					},
				},
				// 
				preventClose: {
					type: "boolean",
					mapping: {
						to: "prevent-close"
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
			methods: [
				// 
				"show",
				// 
				"hide",
			],
		}

	});

});
