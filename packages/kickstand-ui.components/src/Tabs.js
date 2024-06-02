/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-tabs"
], function(StencilComponent, Tabs) {
	"use strict";

	// define the custom element tag
	//Tabs.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Tabs", {

		metadata: {
			tag: "ks-tabs",
			properties: {
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'top'
				},
				// 
				align: {
					type: "string",
					mapping: {
						to: "align"
					},
					defaultValue: 'start'
				},
				// 
				label: {
					type: "string",
					mapping: {
						to: "label"
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
