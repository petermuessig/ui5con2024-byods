/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-scroll-to-top"
], function(StencilComponent, ScrollToTop) {
	"use strict";

	// define the custom element tag
	//ScrollToTop.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.ScrollToTop", {

		metadata: {
			tag: "ks-scroll-to-top",
			properties: {
				// 
				color: {
					type: "string",
					mapping: {
						to: "color"
					},
					defaultValue: 'primary'
				},
				// 
				display: {
					type: "string",
					mapping: {
						to: "display"
					},
					defaultValue: 'solid'
				},
				// 
				size: {
					type: "string",
					mapping: {
						to: "size"
					},
					defaultValue: 'md'
				},
				// 
				threshold: {
					type: "int",
					mapping: {
						to: "threshold"
					},
					defaultValue: 100
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
