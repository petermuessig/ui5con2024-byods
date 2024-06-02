/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-side-drawer"
], function(StencilComponent, SideDrawer) {
	"use strict";

	// define the custom element tag
	//SideDrawer.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.SideDrawer", {

		metadata: {
			tag: "ks-side-drawer",
			properties: {
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'left'
				},
				// 
				size: {
					type: "string",
					mapping: {
						to: "size"
					},
					defaultValue: 'sm'
				},
				// 
				headerText: {
					type: "string",
					mapping: {
						to: "header-text"
					},
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
				"hide",
				// 
				"show",
			],
		}

	});

});
