/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-button"
], function(StencilComponent, Button) {
	"use strict";

	// define the custom element tag
	//Button.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.Button", {

		metadata: {
			tag: "ks-button",
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
				type: {
					type: "string",
					mapping: {
						to: "type"
					},
					defaultValue: 'button'
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
				href: {
					type: "string",
					mapping: {
						to: "href"
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
				// 
				cssClass: {
					type: "string",
					mapping: {
						to: "css-class"
					},
					defaultValue: ''
				},
				// 
				buttonClass: {
					type: "string",
					mapping: {
						to: "button-class"
					},
					defaultValue: ''
				},
				// 
				role: {
					type: "string",
					mapping: {
						to: "role"
					},
				},
				// 
				haspopup: {
					type: "boolean",
					mapping: {
						to: "haspopup"
					},
					defaultValue: false
				},
				// 
				selected: {
					type: "boolean",
					mapping: {
						to: "selected"
					},
					defaultValue: false
				},
				// 
				expanded: {
					type: "boolean",
					mapping: {
						to: "expanded"
					},
					defaultValue: false
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
				controls: {
					type: "string",
					mapping: {
						to: "controls"
					},
				},
				// 
				describedBy: {
					type: "string",
					mapping: {
						to: "described-by"
					},
				},
				// 
				shows: {
					type: "string",
					mapping: {
						to: "shows"
					},
				},
				// 
				hides: {
					type: "string",
					mapping: {
						to: "hides"
					},
				},
				// 
				target: {
					type: "string",
					mapping: {
						to: "target"
					},
				},
				// 
				download: {
					type: "boolean",
					mapping: {
						to: "download"
					},
				},
				// 
				loadingTheme: {
					type: "string",
					mapping: {
						to: "loading-theme"
					},
					defaultValue: 'light'
				},
				// 
				loadingMessage: {
					type: "string",
					mapping: {
						to: "loading-message"
					},
					defaultValue: 'Loading...'
				},
				// 
				showLoadingMessage: {
					type: "boolean",
					mapping: {
						to: "show-loading-message"
					},
					defaultValue: false
				},
				// 
				loadingIcon: {
					type: "string",
					mapping: {
						to: "loading-icon"
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
				// 
				clicked: {},
				// 
				blurred: {},
				// native click event
				click: {}
			},
		}

	});

});
