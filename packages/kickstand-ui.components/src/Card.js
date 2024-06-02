/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-card"
], function(StencilComponent, Card) {
	"use strict";

	// define the custom element tag
	//Card.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Card", {

		metadata: {
			tag: "ks-card",
			properties: {
				// 
				imgSrc: {
					type: "string",
					mapping: {
						to: "img-src"
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
				fallbackSrc: {
					type: "string",
					mapping: {
						to: "fallback-src"
					},
				},
				// 
				lazy: {
					type: "boolean",
					mapping: {
						to: "lazy"
					},
				},
				// 
				threshold: {
					type: "int",
					mapping: {
						to: "threshold"
					},
				},
				// 
				imgDirection: {
					type: "string",
					mapping: {
						to: "img-direction"
					},
					defaultValue: 'top'
				},
				// 
				href: {
					type: "string",
					mapping: {
						to: "href"
					},
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
				collapse: {
					type: "string",
					mapping: {
						to: "collapse"
					},
					defaultValue: 'xs'
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
