/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-carousel-slide"
], function(StencilComponent, CarouselSlide) {
	"use strict";

	// define the custom element tag
	//CarouselSlide.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.CarouselSlide", {

		metadata: {
			tag: "ks-carousel-slide",
			properties: {
				// 
				src: {
					type: "string",
					mapping: {
						to: "src"
					},
				},
				// 
				alt: {
					type: "string",
					mapping: {
						to: "alt"
					},
				},
				// 
				href: {
					type: "string",
					mapping: {
						to: "href"
					},
				},
				// 
				align: {
					type: "string",
					mapping: {
						to: "align"
					},
					defaultValue: 'center'
				},
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'center'
				},
				// 
				clickable: {
					type: "boolean",
					mapping: {
						to: "clickable"
					},
					defaultValue: false
				},
				// 
				lazy: {
					type: "boolean",
					mapping: {
						to: "lazy"
					},
					defaultValue: false
				},
				// 
				threshold: {
					type: "int",
					mapping: {
						to: "threshold"
					},
					defaultValue: 300
				},
				// 
				imgWidth: {
					type: "int",
					mapping: {
						to: "img-width"
					},
				},
				// 
				imgHeight: {
					type: "int",
					mapping: {
						to: "img-height"
					},
				},
				// 
				imgAspectRatio: {
					type: "string",
					mapping: {
						to: "img-aspect-ratio"
					},
				},
				// 
				fallbackSrc: {
					type: "string",
					mapping: {
						to: "fallback-src"
					},
				},
				// 
				linkTag: {
					type: "string",
					mapping: {
						to: "link-tag"
					},
					defaultValue: 'a'
				},
				// 
				hrefProp: {
					type: "string",
					mapping: {
						to: "href-prop"
					},
					defaultValue: 'href'
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
