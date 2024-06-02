/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-button-bar"
], function(StencilComponent, ButtonBar) {
	"use strict";

	// define the custom element tag
	//ButtonBar.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.ButtonBar", {

		metadata: {
			tag: "ks-button-bar",
			properties: {
				// 
				stacked: {
					type: "boolean",
					mapping: {
						to: "stacked"
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
