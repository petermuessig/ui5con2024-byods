/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-row"
], function(StencilComponent, Row) {
	"use strict";

	// define the custom element tag
	//Row.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Row", {

		metadata: {
			tag: "ks-row",
			properties: {
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'start'
				},
				// 
				gutter: {
					type: "string",
					mapping: {
						to: "gutter"
					},
					defaultValue: 'sm'
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
