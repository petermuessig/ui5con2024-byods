/*!
 * ${copyright}
 */

sap.ui.define([
	"sap/ui/core/webc/WebComponent",
	"./library"
], function(WebComponent) {
	"use strict";

	/*
	 * The StencilComponent base class takes care to force a re-rendering for all properties and aggregations
	 * which are not accessible via properties at the StencilComponent instance and thus no DOM patching is
	 * possible.
	 *
	 * Additionally, we restore the scrollbar position because after the forced re-rendering of the wrapper control
	 * the scrollbar could jump to another coordinate.
	 */

	return WebComponent.extend("kickstand-ui.components._StencilComponent", {

		init: function() {
			if (this.getMetadata().hasProperty("value")) {
				this.attachBrowserEvent("updated", function(event) {
					this.setValue(event.target.value);
				}.bind(this));
			}
		},

		invalidate: function() {
			if (this.getDomRef() && this.getVisible()) {
				// workaround with visible property to trigger the re-rendering of the component
				WebComponent.prototype.setProperty.call(this, "visible", false, true);
				setTimeout(function(scrollX, scrollY) {
					WebComponent.prototype.setProperty.call(this, "visible", true)
					setTimeout(window.scrollTo.bind(window, scrollX, scrollY), 10);
				}.bind(this, window.scrollX, window.scrollY), 1);
			}
			return WebComponent.prototype.invalidate.apply(this, arguments);
		},

		setProperty: function(sPropertyName, oValue, bSuppressInvalidate) {
			// the text property always requires an invalidation of the component to re-render
			var suppressInvalidate = this.getDomRef() && sPropertyName in this.getDomRef();
			var r = WebComponent.prototype.setProperty.call(this, sPropertyName, oValue, suppressInvalidate /* bSuppressInvalidate */);
			if (suppressInvalidate) {
				if (sPropertyName !== "text") {
					// if we do not invalidate we patch the component properties
					this.getDomRef()[sPropertyName] = this.getProperty(sPropertyName);
				} else {
					this.getDomRef().text.textContent = this.getProperty(sPropertyName);
				}
			}
			return r;
		}

	});

});
