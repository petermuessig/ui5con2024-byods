sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Button", {
		metadata: {
			tag: "ks-button",
			properties: {
				"text": {
					type: "string",
					mapping: "textContent"
				}
			},
			events: {
				"click": {}
			}
		}
	});
});
