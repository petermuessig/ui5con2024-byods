/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-dropdown-item"
], function(StencilComponent, DropdownItem) {
	"use strict";

	// define the custom element tag
	//DropdownItem.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.DropdownItem", {

		metadata: {
			tag: "ks-dropdown-item",
			properties: {
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
				closeDropdown: {},
				// native click event
				click: {}
			},
		}

	});

});
