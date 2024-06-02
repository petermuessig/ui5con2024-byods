/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-icon"
], function(StencilComponent, Icon) {
	"use strict";

	// define the custom element tag
	//Icon.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Icon", {

		metadata: {
			tag: "ks-icon",
			properties: {
				// 
				label: {
					type: "string",
					mapping: {
						to: "label"
					},
				},
				// 
				labelledBy: {
					type: "string",
					mapping: {
						to: "labelled-by"
					},
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
		}

	});

});
