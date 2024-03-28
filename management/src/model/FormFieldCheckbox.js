/**
 * PingOne Platform API - SSO and Base
 * The PingOne Platform API covering the base and SSO services (otherwise known as the Management APIs)
 *
 * The version of the OpenAPI document: 2023-06-29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnumFormElementLabelMode from './EnumFormElementLabelMode';
import EnumFormElementLayout from './EnumFormElementLayout';
import EnumFormFieldType from './EnumFormFieldType';
import FormElement from './FormElement';
import FormElementOption from './FormElementOption';
import FormElementValidation from './FormElementValidation';
import FormFieldCommon from './FormFieldCommon';
import FormFieldCommonPosition from './FormFieldCommonPosition';

/**
 * The FormFieldCheckbox model module.
 * @module model/FormFieldCheckbox
 * @version 2023-06-29
 */
class FormFieldCheckbox {
    /**
     * Constructs a new <code>FormFieldCheckbox</code>.
     * @alias module:model/FormFieldCheckbox
     * @implements module:model/FormFieldCommon
     * @implements module:model/FormElement
     * @param type {module:model/EnumFormFieldType} 
     * @param position {module:model/FormFieldCommonPosition} 
     * @param key {String} A string that specifies an identifier for the field component.
     * @param label {String} A string of escaped JSON that is designed to store a series of text and translatable keys.
     * @param layout {module:model/EnumFormElementLayout} 
     * @param options {Array.<module:model/FormElementOption>} An array of objects (label/value pairs) that specifies the unique list of options. This is a required property when the type is `RADIO`, `CHECKBOX`, or `DROPDOWN`.
     */
    constructor(type, position, key, label, layout, options) { 
        FormFieldCommon.initialize(this, type, position);FormElement.initialize(this, key, label);
        FormFieldCheckbox.initialize(this, type, position, key, label, layout, options);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, position, key, label, layout, options) { 
        obj['type'] = type;
        obj['position'] = position;
        obj['key'] = key;
        obj['label'] = label;
        obj['layout'] = layout;
        obj['options'] = options;
    }

    /**
     * Constructs a <code>FormFieldCheckbox</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormFieldCheckbox} obj Optional instance to populate.
     * @return {module:model/FormFieldCheckbox} The populated <code>FormFieldCheckbox</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormFieldCheckbox();
            FormFieldCommon.constructFromObject(data, obj);
            FormElement.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumFormFieldType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = FormFieldCommonPosition.constructFromObject(data['position']);
            }
            if (data.hasOwnProperty('attributeDisabled')) {
                obj['attributeDisabled'] = ApiClient.convertToType(data['attributeDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('labelMode')) {
                obj['labelMode'] = EnumFormElementLabelMode.constructFromObject(data['labelMode']);
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('otherOptionEnabled')) {
                obj['otherOptionEnabled'] = ApiClient.convertToType(data['otherOptionEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('otherOptionKey')) {
                obj['otherOptionKey'] = ApiClient.convertToType(data['otherOptionKey'], 'String');
            }
            if (data.hasOwnProperty('otherOptionLabel')) {
                obj['otherOptionLabel'] = ApiClient.convertToType(data['otherOptionLabel'], 'String');
            }
            if (data.hasOwnProperty('otherOptionInputLabel')) {
                obj['otherOptionInputLabel'] = ApiClient.convertToType(data['otherOptionInputLabel'], 'String');
            }
            if (data.hasOwnProperty('otherOptionAttributeDisabled')) {
                obj['otherOptionAttributeDisabled'] = ApiClient.convertToType(data['otherOptionAttributeDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('layout')) {
                obj['layout'] = EnumFormElementLayout.constructFromObject(data['layout']);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [FormElementOption]);
            }
            if (data.hasOwnProperty('validation')) {
                obj['validation'] = FormElementValidation.constructFromObject(data['validation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormFieldCheckbox</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormFieldCheckbox</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FormFieldCheckbox.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `position`
        if (data['position']) { // data not null
          FormFieldCommonPosition.validateJSON(data['position']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['otherOptionKey'] && !(typeof data['otherOptionKey'] === 'string' || data['otherOptionKey'] instanceof String)) {
            throw new Error("Expected the field `otherOptionKey` to be a primitive type in the JSON string but got " + data['otherOptionKey']);
        }
        // ensure the json data is a string
        if (data['otherOptionLabel'] && !(typeof data['otherOptionLabel'] === 'string' || data['otherOptionLabel'] instanceof String)) {
            throw new Error("Expected the field `otherOptionLabel` to be a primitive type in the JSON string but got " + data['otherOptionLabel']);
        }
        // ensure the json data is a string
        if (data['otherOptionInputLabel'] && !(typeof data['otherOptionInputLabel'] === 'string' || data['otherOptionInputLabel'] instanceof String)) {
            throw new Error("Expected the field `otherOptionInputLabel` to be a primitive type in the JSON string but got " + data['otherOptionInputLabel']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                FormElementOption.validateJSON(item);
            };
        }
        // validate the optional field `validation`
        if (data['validation']) { // data not null
          FormElementValidation.validateJSON(data['validation']);
        }

        return true;
    }


}

FormFieldCheckbox.RequiredProperties = ["type", "position", "key", "label", "layout", "options"];

/**
 * @member {module:model/EnumFormFieldType} type
 */
FormFieldCheckbox.prototype['type'] = undefined;

/**
 * @member {module:model/FormFieldCommonPosition} position
 */
FormFieldCheckbox.prototype['position'] = undefined;

/**
 * A boolean that specifies whether the linked directory attribute is disabled.
 * @member {Boolean} attributeDisabled
 */
FormFieldCheckbox.prototype['attributeDisabled'] = undefined;

/**
 * A string that specifies an identifier for the field component.
 * @member {String} key
 */
FormFieldCheckbox.prototype['key'] = undefined;

/**
 * A string of escaped JSON that is designed to store a series of text and translatable keys.
 * @member {String} label
 */
FormFieldCheckbox.prototype['label'] = undefined;

/**
 * @member {module:model/EnumFormElementLabelMode} labelMode
 */
FormFieldCheckbox.prototype['labelMode'] = undefined;

/**
 * A boolean that specifies whether the field is required.
 * @member {Boolean} required
 */
FormFieldCheckbox.prototype['required'] = undefined;

/**
 * A boolean that specifies whether the end user can type an entry that is not in a predefined list.
 * @member {Boolean} otherOptionEnabled
 */
FormFieldCheckbox.prototype['otherOptionEnabled'] = undefined;

/**
 * A string that specifies whether the form identifies that the choice is a custom choice not from a predefined list.
 * @member {String} otherOptionKey
 */
FormFieldCheckbox.prototype['otherOptionKey'] = undefined;

/**
 * A string that specifies the label for a custom or \"other\" choice in a list.
 * @member {String} otherOptionLabel
 */
FormFieldCheckbox.prototype['otherOptionLabel'] = undefined;

/**
 * A string that specifies the label for the other option in drop-down controls.
 * @member {String} otherOptionInputLabel
 */
FormFieldCheckbox.prototype['otherOptionInputLabel'] = undefined;

/**
 * A boolean that specifies whether the directory attribute option is disabled. Set to true if it references a PingOne directory attribute.
 * @member {Boolean} otherOptionAttributeDisabled
 */
FormFieldCheckbox.prototype['otherOptionAttributeDisabled'] = undefined;

/**
 * @member {module:model/EnumFormElementLayout} layout
 */
FormFieldCheckbox.prototype['layout'] = undefined;

/**
 * An array of objects (label/value pairs) that specifies the unique list of options. This is a required property when the type is `RADIO`, `CHECKBOX`, or `DROPDOWN`.
 * @member {Array.<module:model/FormElementOption>} options
 */
FormFieldCheckbox.prototype['options'] = undefined;

/**
 * @member {module:model/FormElementValidation} validation
 */
FormFieldCheckbox.prototype['validation'] = undefined;


// Implement FormFieldCommon interface:
/**
 * @member {module:model/EnumFormFieldType} type
 */
FormFieldCommon.prototype['type'] = undefined;
/**
 * @member {module:model/FormFieldCommonPosition} position
 */
FormFieldCommon.prototype['position'] = undefined;
// Implement FormElement interface:
/**
 * A boolean that specifies whether the linked directory attribute is disabled.
 * @member {Boolean} attributeDisabled
 */
FormElement.prototype['attributeDisabled'] = undefined;
/**
 * A string that specifies an identifier for the field component.
 * @member {String} key
 */
FormElement.prototype['key'] = undefined;
/**
 * A string of escaped JSON that is designed to store a series of text and translatable keys.
 * @member {String} label
 */
FormElement.prototype['label'] = undefined;
/**
 * @member {module:model/EnumFormElementLabelMode} labelMode
 */
FormElement.prototype['labelMode'] = undefined;
/**
 * A boolean that specifies whether the field is required.
 * @member {Boolean} required
 */
FormElement.prototype['required'] = undefined;
/**
 * A boolean that specifies whether the end user can type an entry that is not in a predefined list.
 * @member {Boolean} otherOptionEnabled
 */
FormElement.prototype['otherOptionEnabled'] = undefined;
/**
 * A string that specifies whether the form identifies that the choice is a custom choice not from a predefined list.
 * @member {String} otherOptionKey
 */
FormElement.prototype['otherOptionKey'] = undefined;
/**
 * A string that specifies the label for a custom or \"other\" choice in a list.
 * @member {String} otherOptionLabel
 */
FormElement.prototype['otherOptionLabel'] = undefined;
/**
 * A string that specifies the label for the other option in drop-down controls.
 * @member {String} otherOptionInputLabel
 */
FormElement.prototype['otherOptionInputLabel'] = undefined;
/**
 * A boolean that specifies whether the directory attribute option is disabled. Set to true if it references a PingOne directory attribute.
 * @member {Boolean} otherOptionAttributeDisabled
 */
FormElement.prototype['otherOptionAttributeDisabled'] = undefined;




export default FormFieldCheckbox;

