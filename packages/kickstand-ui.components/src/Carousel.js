/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-carousel"
], function(StencilComponent, Carousel) {
	"use strict";

	// define the custom element tag
	//Carousel.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Carousel", {

		metadata: {
			tag: "ks-carousel",
			properties: {
				// 
				timer: {
					type: "int",
					mapping: {
						to: "timer"
					},
					defaultValue: 6000
				},
				// 
				autoplay: {
					type: "boolean",
					mapping: {
						to: "autoplay"
					},
					defaultValue: false
				},
				// 
				hideIndicators: {
					type: "boolean",
					mapping: {
						to: "hide-indicators"
					},
					defaultValue: false
				},
				// 
				hideControls: {
					type: "boolean",
					mapping: {
						to: "hide-controls"
					},
					defaultValue: false
				},
				// 
				thumbnails: {
					type: "boolean",
					mapping: {
						to: "thumbnails"
					},
					defaultValue: false
				},
				// 
				playText: {
					type: "string",
					mapping: {
						to: "play-text"
					},
					defaultValue: 'play slides'
				},
				// 
				pauseText: {
					type: "string",
					mapping: {
						to: "pause-text"
					},
					defaultValue: 'pause slides'
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
