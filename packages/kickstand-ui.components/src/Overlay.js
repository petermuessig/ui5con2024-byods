/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-overlay"
], function(StencilComponent, Overlay) {
	"use strict";

	// define the custom element tag
	//Overlay.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Overlay", {

		metadata: {
			tag: "ks-overlay",
			properties: {
				// 
				titleId: {
					type: "string",
					mapping: {
						to: "title-id"
					},
				},
				// 
				absolute: {
					type: "boolean",
					mapping: {
						to: "absolute"
					},
				},
				// 
				theme: {
					type: "string",
					mapping: {
						to: "theme"
					},
					defaultValue: 'dark'
				},
				// 
				preventClose: {
					type: "boolean",
					mapping: {
						to: "prevent-close"
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
				// 
				shown: {},
				// 
				hidden: {},
				// native click event
				click: {}
			},
			methods: [
				// 
				"show",
				// 
				"hide",
			],
		}

	});

});
