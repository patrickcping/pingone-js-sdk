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
import FormFieldCommon from './FormFieldCommon';
import FormFieldCommonPosition from './FormFieldCommonPosition';
import FormItem from './FormItem';

/**
 * The FormFieldSlateTextblob model module.
 * @module model/FormFieldSlateTextblob
 * @version 2023-06-29
 */
class FormFieldSlateTextblob {
  /**
   * Constructs a new <code>FormFieldSlateTextblob</code>.
   * @alias module:model/FormFieldSlateTextblob
   * @implements module:model/FormFieldCommon
   * @implements module:model/FormItem
   * @param type {module:model/EnumFormFieldType} 
   * @param position {module:model/FormFieldCommonPosition} 
   */
  constructor(type, position) {
    FormFieldCommon.initialize(this, type, position);
    FormItem.initialize(this);
    FormFieldSlateTextblob.initialize(this, type, position);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, type, position) {
    obj['type'] = type;
    obj['position'] = position;
  }

  /**
   * Constructs a <code>FormFieldSlateTextblob</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormFieldSlateTextblob} obj Optional instance to populate.
   * @return {module:model/FormFieldSlateTextblob} The populated <code>FormFieldSlateTextblob</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FormFieldSlateTextblob();
      FormFieldCommon.constructFromObject(data, obj);
      FormItem.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumFormFieldType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = FormFieldCommonPosition.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>FormFieldSlateTextblob</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormFieldSlateTextblob</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of FormFieldSlateTextblob.RequiredProperties) {
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
    if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
      throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
    }
    return true;
  }
}
FormFieldSlateTextblob.RequiredProperties = ["type", "position"];

/**
 * @member {module:model/EnumFormFieldType} type
 */
FormFieldSlateTextblob.prototype['type'] = undefined;

/**
 * @member {module:model/FormFieldCommonPosition} position
 */
FormFieldSlateTextblob.prototype['position'] = undefined;

/**
 * A string that specifies the field content.
 * @member {String} content
 */
FormFieldSlateTextblob.prototype['content'] = undefined;

// Implement FormFieldCommon interface:
/**
 * @member {module:model/EnumFormFieldType} type
 */
FormFieldCommon.prototype['type'] = undefined;
/**
 * @member {module:model/FormFieldCommonPosition} position
 */
FormFieldCommon.prototype['position'] = undefined;
// Implement FormItem interface:
/**
 * A string that specifies the field content.
 * @member {String} content
 */
FormItem.prototype['content'] = undefined;
export default FormFieldSlateTextblob;