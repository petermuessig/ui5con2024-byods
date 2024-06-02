/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-column"
], function(StencilComponent, Column) {
	"use strict";

	// define the custom element tag
	//Column.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Column", {

		metadata: {
			tag: "ks-column",
			properties: {
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
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
