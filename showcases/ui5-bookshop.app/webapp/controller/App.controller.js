sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/model/Filter", "sap/ui/model/FilterType", "sap/ui/model/FilterOperator", "sap/m/MessageToast"],
	function (Controller, JSONModel, Filter, FilterType, FilterOperator, MessageToast) {
		"use strict";

		return Controller.extend("ui5-bookshop.app.controller.App", {
			onInit: function () {
				this.getView().setModel(
					new JSONModel({
						quantity: 1,
						status: "",
					}),
					"order"
				);
			},
			onSearch: function (oEvent) {
				const sValue = oEvent.getParameter("newValue"),
					oFilter = new Filter("title", FilterOperator.Contains, sValue);
				this.byId("booksTable").getBinding("items").filter(oFilter, FilterType.Application);
			},
		});
	}
);
