/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-breadcrumbs"
], function(StencilComponent, Breadcrumbs) {
	"use strict";

	// define the custom element tag
	//Breadcrumbs.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Breadcrumbs", {

		metadata: {
			tag: "ks-breadcrumbs",
			properties: {
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
