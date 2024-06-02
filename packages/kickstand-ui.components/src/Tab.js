/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-tab"
], function(StencilComponent, Tab) {
	"use strict";

	// define the custom element tag
	//Tab.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Tab", {

		metadata: {
			tag: "ks-tab",
			properties: {
				// 
				tabText: {
					type: "string",
					mapping: {
						to: "tab-text"
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
