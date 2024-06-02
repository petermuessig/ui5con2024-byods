sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/mvc/XMLView"], function (UIComponent, XMLView) {
	"use strict";
	return UIComponent.extend("ui5-bookshop.app.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json",
		},
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
		},
		createContent: function () {
			let params = new URLSearchParams(document.location.search);
			let ds = params.get("ds");
			if (ds === "kickstand-ui") {
				return XMLView.create({
					viewName: "ui5-bookshop.app.view.WebCApp"
				});
			} else {
				// use View the SAP Fiori design system
				return XMLView.create({
					viewName: "ui5-bookshop.app.view.App"
				});
			}
		}
	});
});
