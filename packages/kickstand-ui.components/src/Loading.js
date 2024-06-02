/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-loading"
], function(StencilComponent, Loading) {
	"use strict";

	// define the custom element tag
	//Loading.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Loading", {

		metadata: {
			tag: "ks-loading",
			properties: {
				// 
				icon: {
					type: "string",
					mapping: {
						to: "icon"
					},
					defaultValue: 'loading_circle_spinner'
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
				showMessage: {
					type: "boolean",
					mapping: {
						to: "show-message"
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
				// native click event
				click: {}
			},
		}

	});

});
