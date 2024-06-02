/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-tooltip"
], function(StencilComponent, Tooltip) {
	"use strict";

	// define the custom element tag
	//Tooltip.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Tooltip", {

		metadata: {
			tag: "ks-tooltip",
			properties: {
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'top'
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
				disable: {
					type: "boolean",
					mapping: {
						to: "disable"
					},
					defaultValue: false
				},
				// 
				hideDecoration: {
					type: "boolean",
					mapping: {
						to: "hide-decoration"
					},
					defaultValue: false
				},
				// 
				text: {
					type: "string",
					mapping: {
						to: "text"
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
		}

	});

});
