/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-accordion-slide"
], function(StencilComponent, AccordionSlide) {
	"use strict";

	// define the custom element tag
	//AccordionSlide.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.AccordionSlide", {

		metadata: {
			tag: "ks-accordion-slide",
			properties: {
				// 
				heading: {
					type: "string",
					mapping: {
						to: "heading"
					},
				},
				// 
				expanded: {
					type: "boolean",
					mapping: {
						to: "expanded"
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
			methods: [
				// 
				"toggleSlide",
			],
		}

	});

});
