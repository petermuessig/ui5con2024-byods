/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-menu-bar"
], function(StencilComponent, MenuBar) {
	"use strict";

	// define the custom element tag
	//MenuBar.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.MenuBar", {

		metadata: {
			tag: "ks-menu-bar",
			properties: {
				// 
				altText: {
					type: "string",
					mapping: {
						to: "alt-text"
					},
				},
				// 
				collapse: {
					type: "string",
					mapping: {
						to: "collapse"
					},
					defaultValue: 'sm'
				},
				// 
				fixed: {
					type: "string",
					mapping: {
						to: "fixed"
					},
				},
				// 
				color: {
					type: "string",
					mapping: {
						to: "color"
					},
					defaultValue: 'primary'
				},
				// 
				inverted: {
					type: "boolean",
					mapping: {
						to: "inverted"
					},
					defaultValue: false
				},
				// 
				logoUrl: {
					type: "string",
					mapping: {
						to: "logo-url"
					},
				},
				// 
				tagline: {
					type: "string",
					mapping: {
						to: "tagline"
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
