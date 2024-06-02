/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-dropdown"
], function(StencilComponent, Dropdown) {
	"use strict";

	// define the custom element tag
	//Dropdown.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Dropdown", {

		metadata: {
			tag: "ks-dropdown",
			properties: {
				// 
				text: {
					type: "string",
					mapping: {
						to: "text"
					},
				},
				// 
				position: {
					type: "string",
					mapping: {
						to: "position"
					},
					defaultValue: 'left'
				},
				// 
				icon: {
					type: "string",
					mapping: {
						to: "icon"
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
				display: {
					type: "string",
					mapping: {
						to: "display"
					},
					defaultValue: 'solid'
				},
				// 
				size: {
					type: "string",
					mapping: {
						to: "size"
					},
					defaultValue: 'md'
				},
				// 
				loading: {
					type: "boolean",
					mapping: {
						to: "loading"
					},
				},
				// 
				disabled: {
					type: "boolean",
					mapping: {
						to: "disabled"
					},
				},
				// 
				hideText: {
					type: "boolean",
					mapping: {
						to: "hide-text"
					},
					defaultValue: false
				},
				// 
				hideIndicator: {
					type: "boolean",
					mapping: {
						to: "hide-indicator"
					},
					defaultValue: false
				},
				// 
				megaMenu: {
					type: "boolean",
					mapping: {
						to: "mega-menu"
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
				"hide",
				// 
				"show",
			],
		}

	});

});
