/*!
 * ${copyright}
 */

// THE FILE HAS BEEN GENERATED! CHANGES WILL BE LOST!
sap.ui.define([
	"./_StencilComponent",
	//"kickstand-ui/dist/components/ks-form-field"
], function(StencilComponent, FormField) {
	"use strict";

	// define the custom element tag
	//FormField.defineCustomElement();

	return StencilComponent.extend("kickstand-ui.components.FormField", {

		metadata: {
			tag: "ks-form-field",
			properties: {
				// 
				label: {
					type: "string",
					mapping: {
						to: "label"
					},
				},
				// 
				hideLabel: {
					type: "boolean",
					mapping: {
						to: "hide-label"
					},
					defaultValue: false
				},
				// 
				helpText: {
					type: "string",
					mapping: {
						to: "help-text"
					},
				},
				// 
				tooltipLabel: {
					type: "string",
					mapping: {
						to: "tooltip-label"
					},
					defaultValue: 'additional information'
				},
				// 
				tooltipText: {
					type: "string",
					mapping: {
						to: "tooltip-text"
					},
				},
				// 
				tooltipSize: {
					type: "string",
					mapping: {
						to: "tooltip-size"
					},
					defaultValue: 'sm'
				},
				// 
				placeholder: {
					type: "string",
					mapping: {
						to: "placeholder"
					},
				},
				// 
				name: {
					type: "string",
					mapping: {
						to: "name"
					},
				},
				// 
				required: {
					type: "boolean",
					mapping: {
						to: "required"
					},
				},
				// 
				requiredText: {
					type: "string",
					mapping: {
						to: "required-text"
					},
					defaultValue: 'Required'
				},
				// 
				invalid: {
					type: "boolean",
					mapping: {
						to: "invalid"
					},
					defaultValue: false
				},
				// 
				disabled: {
					type: "boolean",
					mapping: {
						to: "disabled"
					},
				},
				// 
				value: {
					type: "any",
					mapping: {
						to: "value"
					},
				},
				// 
				pattern: {
					type: "string",
					mapping: {
						to: "pattern"
					},
				},
				// 
				min: {
					type: "int",
					mapping: {
						to: "min"
					},
					defaultValue: undefined
				},
				// 
				max: {
					type: "int",
					mapping: {
						to: "max"
					},
					defaultValue: undefined
				},
				// 
				step: {
					type: "int",
					mapping: {
						to: "step"
					},
					defaultValue: 1
				},
				// 
				minlength: {
					type: "int",
					mapping: {
						to: "minlength"
					},
					defaultValue: undefined
				},
				// 
				maxlength: {
					type: "int",
					mapping: {
						to: "maxlength"
					},
					defaultValue: undefined
				},
				// 
				autocomplete: {
					type: "string",
					mapping: {
						to: "autocomplete"
					},
				},
				// 
				type: {
					type: "string",
					mapping: {
						to: "type"
					},
					defaultValue: 'text'
				},
				// 
				validateOnInput: {
					type: "boolean",
					mapping: {
						to: "validate-on-input"
					},
					defaultValue: false
				},
				// 
				debounce: {
					type: "int",
					mapping: {
						to: "debounce"
					},
					defaultValue: 0
				},
				// 
				inline: {
					type: "boolean",
					mapping: {
						to: "inline"
					},
					defaultValue: false
				},
				// 
				datalist: {
					type: "boolean",
					mapping: {
						to: "datalist"
					},
					defaultValue: false
				},
				// 
				checked: {
					type: "boolean",
					mapping: {
						to: "checked"
					},
					defaultValue: false
				},
				// 
				indeterminate: {
					type: "boolean",
					mapping: {
						to: "indeterminate"
					},
					defaultValue: false
				},
				// 
				icon: {
					type: "string",
					mapping: {
						to: "icon"
					},
				},
				// 
				iconDirection: {
					type: "string",
					mapping: {
						to: "icon-direction"
					},
					defaultValue: 'right'
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
				inputClass: {
					type: "string",
					mapping: {
						to: "input-class"
					},
				},
				// 
				autoExpand: {
					type: "boolean",
					mapping: {
						to: "auto-expand"
					},
					defaultValue: false
				},
				// 
				accept: {
					type: "string",
					mapping: {
						to: "accept"
					},
				},
				// 
				multiple: {
					type: "boolean",
					mapping: {
						to: "multiple"
					},
				},
				// 
				webkitdirectory: {
					type: "boolean",
					mapping: {
						to: "webkitdirectory"
					},
				},
				// 
				capture: {
					type: "string",
					mapping: {
						to: "capture"
					},
				},
				// 
				defaultErrorMessage: {
					type: "string",
					mapping: {
						to: "default-error-message"
					},
					defaultValue: 'The value entered is not valid.'
				},
				// 
				badInputErrorMessage: {
					type: "string",
					mapping: {
						to: "bad-input-error-message"
					},
					defaultValue: 'There was a problem processing the value.'
				},
				// 
				patternErrorMessage: {
					type: "string",
					mapping: {
						to: "pattern-error-message"
					},
					defaultValue: 'The value was not in the right format.'
				},
				// 
				maxErrorMessage: {
					type: "string",
					mapping: {
						to: "max-error-message"
					},
					defaultValue: `Your value must be less than ${this.max ? this.max + 1 : ''}.`
				},
				// 
				minErrorMessage: {
					type: "string",
					mapping: {
						to: "min-error-message"
					},
					defaultValue: `Your value must be at least ${this.min}.`
				},
				// 
				stepErrorMessage: {
					type: "string",
					mapping: {
						to: "step-error-message"
					},
					defaultValue: `Your value must be an increment of ${this.step || 1}.`
				},
				// 
				maxlengthErrorMessage: {
					type: "string",
					mapping: {
						to: "maxlength-error-message"
					},
					defaultValue: `Your value must be no more than ${this.maxlength} characters.`
				},
				// 
				minlengthErrorMessage: {
					type: "string",
					mapping: {
						to: "minlength-error-message"
					},
					defaultValue: `Your value must be at least ${this.minlength} characters.`
				},
				// 
				typeErrorMessage: {
					type: "string",
					mapping: {
						to: "type-error-message"
					},
					defaultValue: `Your value must be a valid ${this.type === 'tel' ? 'telephone number' : this.type}.`
				},
				// 
				requiredErrorMessage: {
					type: "string",
					mapping: {
						to: "required-error-message"
					},
					defaultValue: this.type === 'autocomplete' ? 'The value entered is not one of the available options.' : 'This field is required.'
				},
				// 
				disableErrorMessage: {
					type: "boolean",
					mapping: {
						to: "disable-error-message"
					},
					defaultValue: false
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
				updated: {},
				// 
				blurred: {},
				// 
				cleared: {},
				// native click event
				click: {}
			},
			methods: [
				// 
				"validate",
			],
		}

	});

});
