/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-alert"
], function(StencilComponent, Alert) {
	"use strict";

	// define the custom element tag
	//Alert.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Alert", {

		metadata: {
			tag: "ks-alert",
			properties: {
				// 
				header: {
					type: "string",
					mapping: {
						to: "header"
					},
				},
				// 
				closeText: {
					type: "string",
					mapping: {
						to: "close-text"
					},
					defaultValue: 'Close'
				},
				// 
				note: {
					type: "boolean",
					mapping: {
						to: "note"
					},
					defaultValue: false
				},
				// 
				dismissible: {
					type: "boolean",
					mapping: {
						to: "dismissible"
					},
					defaultValue: false
				},
				// 
				icon: {
					type: "string",
					mapping: {
						to: "icon"
					},
					defaultValue: 'warning'
				},
				// 
				hideIcon: {
					type: "boolean",
					mapping: {
						to: "hide-icon"
					},
					defaultValue: false
				},
				// 
				display: {
					type: "boolean",
					mapping: {
						to: "display"
					},
					defaultValue: false
				},
				// 
				color: {
					type: "string",
					mapping: {
						to: "color"
					},
					defaultValue: 'primary'
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
