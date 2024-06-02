/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-progress-bar"
], function(StencilComponent, ProgressBar) {
	"use strict";

	// define the custom element tag
	//ProgressBar.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.ProgressBar", {

		metadata: {
			tag: "ks-progress-bar",
			properties: {
				// 
				color: {
					type: "string",
					mapping: {
						to: "color"
					},
					defaultValue: 'primary'
				},
				// 
				value: {
					type: "int",
					mapping: {
						to: "value"
					},
					defaultValue: 0
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
				description: {
					type: "string",
					mapping: {
						to: "description"
					},
					defaultValue: 'Loading...'
				},
				// 
				hideDescription: {
					type: "boolean",
					mapping: {
						to: "hide-description"
					},
				},
				// 
				progressLabel: {
					type: "string",
					mapping: {
						to: "progress-label"
					},
					defaultValue: 'Progress'
				},
				// 
				hideProgressLabel: {
					type: "boolean",
					mapping: {
						to: "hide-progress-label"
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
