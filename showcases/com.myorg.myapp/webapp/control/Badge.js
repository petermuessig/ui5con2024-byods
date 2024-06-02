sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Badge", {
		metadata: {
			tag: "ks-badge",
			properties: {
				"color": {
					type: "string"
				},
				"hollow": {
					type: "boolean"
				},
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
