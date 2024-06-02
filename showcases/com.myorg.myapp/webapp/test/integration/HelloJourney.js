sap.ui.define(["sap/ui/test/opaQunit", "./pages/Main"], function () {
	"use strict";

	QUnit.module("Sample Hello Journey");

	opaTest("Should open the Hello dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "com.myorg.myapp"
			}
		});

		// Actions
		When.onTheMainPage.iPressTheSayHelloButton();

		// Assertions
		Then.onTheMainPage.iShouldSeeTheHelloDialog();

		// Actions
		When.onTheMainPage.iPressTheOkButtonInTheDialog();

		// Assertions
		Then.onTheMainPage.iShouldNotSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("Should close the Hello dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "com.myorg.myapp"
			}
		});

		// Actions
		When.onTheMainPage.iPressTheSayHelloButton();
		When.onTheMainPage.iPressTheOkButtonInTheDialog();

		// Assertions
		Then.onTheMainPage.iShouldNotSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
