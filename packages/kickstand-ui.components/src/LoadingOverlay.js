/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-loading-overlay"
], function(StencilComponent, LoadingOverlay) {
	"use strict";

	// define the custom element tag
	//LoadingOverlay.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.LoadingOverlay", {

		metadata: {
			tag: "ks-loading-overlay",
			properties: {
				// 
				absolute: {
					type: "boolean",
					mapping: {
						to: "absolute"
					},
					defaultValue: false
				},
				// 
				theme: {
					type: "string",
					mapping: {
						to: "theme"
					},
					defaultValue: 'light'
				},
				// 
				message: {
					type: "string",
					mapping: {
						to: "message"
					},
					defaultValue: 'Loading...'
				},
				// 
				size: {
					type: "string",
					mapping: {
						to: "size"
					},
					defaultValue: 'sm'
				},
				// 
				showMessage: {
					type: "boolean",
					mapping: {
						to: "show-message"
					},
					defaultValue: false
				},
				// 
				icon: {
					type: "string",
					mapping: {
						to: "icon"
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
