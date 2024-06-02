/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-responsive-embed"
], function(StencilComponent, ResponsiveEmbed) {
	"use strict";

	// define the custom element tag
	//ResponsiveEmbed.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.ResponsiveEmbed", {

		metadata: {
			tag: "ks-responsive-embed",
			properties: {
				// 
				aspectRatio: {
					type: "string",
					mapping: {
						to: "aspect-ratio"
					},
					defaultValue: '16x9'
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
