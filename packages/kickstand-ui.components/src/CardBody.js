/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-card-body"
], function(StencilComponent, CardBody) {
	"use strict";

	// define the custom element tag
	//CardBody.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.CardBody", {

		metadata: {
			tag: "ks-card-body",
			properties: {
				// 
				cardTitle: {
					type: "string",
					mapping: {
						to: "card-title"
					},
				},
				// 
				cardSubtitle: {
					type: "string",
					mapping: {
						to: "card-subtitle"
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
