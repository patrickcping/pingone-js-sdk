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
import EnumFormFieldType from './EnumFormFieldType';
import EnumFormItemAlignment from './EnumFormItemAlignment';
import EnumFormQrCodeType from './EnumFormQrCodeType';
import FormFieldCommon from './FormFieldCommon';
import FormFieldCommonPosition from './FormFieldCommonPosition';
import FormQrCode from './FormQrCode';

/**
 * The FormFieldQrCode model module.
 * @module model/FormFieldQrCode
 * @version 2023-06-29
 */
class FormFieldQrCode {
  /**
   * Constructs a new <code>FormFieldQrCode</code>.
   * @alias module:model/FormFieldQrCode
   * @implements module:model/FormFieldCommon
   * @implements module:model/FormQrCode
   * @param type {module:model/EnumFormFieldType} 
   * @param position {module:model/FormFieldCommonPosition} 
   * @param key {String} A string that specifies an identifier for the field component.
   * @param qrCodeType {module:model/EnumFormQrCodeType} 
   * @param alignment {module:model/EnumFormItemAlignment} 
   */
  constructor(type, position, key, qrCodeType, alignment) {
    FormFieldCommon.initialize(this, type, position);
    FormQrCode.initialize(this, key, qrCodeType, alignment);
    FormFieldQrCode.initialize(this, type, position, key, qrCodeType, alignment);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, type, position, key, qrCodeType, alignment) {
    obj['type'] = type;
    obj['position'] = position;
    obj['key'] = key;
    obj['qrCodeType'] = qrCodeType;
    obj['alignment'] = alignment;
  }

  /**
   * Constructs a <code>FormFieldQrCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormFieldQrCode} obj Optional instance to populate.
   * @return {module:model/FormFieldQrCode} The populated <code>FormFieldQrCode</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FormFieldQrCode();
      FormFieldCommon.constructFromObject(data, obj);
      FormQrCode.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumFormFieldType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = FormFieldCommonPosition.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('qrCodeType')) {
        obj['qrCodeType'] = EnumFormQrCodeType.constructFromObject(data['qrCodeType']);
      }
      if (data.hasOwnProperty('alignment')) {
        obj['alignment'] = EnumFormItemAlignment.constructFromObject(data['alignment']);
      }
      if (data.hasOwnProperty('showBorder')) {
        obj['showBorder'] = ApiClient.convertToType(data['showBorder'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>FormFieldQrCode</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormFieldQrCode</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of FormFieldQrCode.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `position`
    if (data['position']) {
      // data not null
      FormFieldCommonPosition.validateJSON(data['position']);
    }
    // ensure the json data is a string
    if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
      throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
    }
    return true;
  }
}
FormFieldQrCode.RequiredProperties = ["type", "position", "key", "qrCodeType", "alignment"];

/**
 * @member {module:model/EnumFormFieldType} type
 */
FormFieldQrCode.prototype['type'] = undefined;

/**
 * @member {module:model/FormFieldCommonPosition} position
 */
FormFieldQrCode.prototype['position'] = undefined;

/**
 * A string that specifies an identifier for the field component.
 * @member {String} key
 */
FormFieldQrCode.prototype['key'] = undefined;

/**
 * @member {module:model/EnumFormQrCodeType} qrCodeType
 */
FormFieldQrCode.prototype['qrCodeType'] = undefined;

/**
 * @member {module:model/EnumFormItemAlignment} alignment
 */
FormFieldQrCode.prototype['alignment'] = undefined;

/**
 * A boolean that specifies the border visibility.
 * @member {Boolean} showBorder
 */
FormFieldQrCode.prototype['showBorder'] = undefined;

// Implement FormFieldCommon interface:
/**
 * @member {module:model/EnumFormFieldType} type
 */
FormFieldCommon.prototype['type'] = undefined;
/**
 * @member {module:model/FormFieldCommonPosition} position
 */
FormFieldCommon.prototype['position'] = undefined;
// Implement FormQrCode interface:
/**
 * A string that specifies an identifier for the field component.
 * @member {String} key
 */
FormQrCode.prototype['key'] = undefined;
/**
 * @member {module:model/EnumFormQrCodeType} qrCodeType
 */
FormQrCode.prototype['qrCodeType'] = undefined;
/**
 * @member {module:model/EnumFormItemAlignment} alignment
 */
FormQrCode.prototype['alignment'] = undefined;
/**
 * A boolean that specifies the border visibility.
 * @member {Boolean} showBorder
 */
FormQrCode.prototype['showBorder'] = undefined;
export default FormFieldQrCode;