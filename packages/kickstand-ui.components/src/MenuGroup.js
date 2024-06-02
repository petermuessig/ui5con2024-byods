/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-menu-group"
], function(StencilComponent, MenuGroup) {
	"use strict";

	// define the custom element tag
	//MenuGroup.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.MenuGroup", {

		metadata: {
			tag: "ks-menu-group",
			properties: {
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'right'
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
