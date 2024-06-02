/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-gallery"
], function(StencilComponent, Gallery) {
	"use strict";

	// define the custom element tag
	//Gallery.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Gallery", {

		metadata: {
			tag: "ks-gallery",
			properties: {
				// 
				heading: {
					type: "string",
					mapping: {
						to: "heading"
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
				gutter: {
					type: "string",
					mapping: {
						to: "gutter"
					},
					defaultValue: 'md'
				},
				// 
				itemWidth: {
					type: "string",
					mapping: {
						to: "item-width"
					},
				},
				// 
				prevButtonText: {
					type: "string",
					mapping: {
						to: "prev-button-text"
					},
					defaultValue: 'scroll left'
				},
				// 
				nextButtonText: {
					type: "string",
					mapping: {
						to: "next-button-text"
					},
					defaultValue: 'scroll right'
				},
				// 
				linkText: {
					type: "string",
					mapping: {
						to: "link-text"
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
