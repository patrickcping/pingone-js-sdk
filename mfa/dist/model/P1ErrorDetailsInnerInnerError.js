/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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

/**
 * The P1ErrorDetailsInnerInnerError model module.
 * @module model/P1ErrorDetailsInnerInnerError
 * @version 2023-06-29
 */
class P1ErrorDetailsInnerInnerError {
  /**
   * Constructs a new <code>P1ErrorDetailsInnerInnerError</code>.
   * Additional details to help the client developer resolve the fault (primarily for UI validation reasons).
   * @alias module:model/P1ErrorDetailsInnerInnerError
   */
  constructor() {
    P1ErrorDetailsInnerInnerError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>P1ErrorDetailsInnerInnerError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/P1ErrorDetailsInnerInnerError} obj Optional instance to populate.
   * @return {module:model/P1ErrorDetailsInnerInnerError} The populated <code>P1ErrorDetailsInnerInnerError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new P1ErrorDetailsInnerInnerError();
      if (data.hasOwnProperty('rangeMinimumValue')) {
        obj['rangeMinimumValue'] = ApiClient.convertToType(data['rangeMinimumValue'], 'Number');
      }
      if (data.hasOwnProperty('rangeMaximumValue')) {
        obj['rangeMaximumValue'] = ApiClient.convertToType(data['rangeMaximumValue'], 'Number');
      }
      if (data.hasOwnProperty('allowedPattern')) {
        obj['allowedPattern'] = ApiClient.convertToType(data['allowedPattern'], 'String');
      }
      if (data.hasOwnProperty('allowedValues')) {
        obj['allowedValues'] = ApiClient.convertToType(data['allowedValues'], ['String']);
      }
      if (data.hasOwnProperty('maximumValue')) {
        obj['maximumValue'] = ApiClient.convertToType(data['maximumValue'], 'Number');
      }
      if (data.hasOwnProperty('referencedValues')) {
        obj['referencedValues'] = ApiClient.convertToType(data['referencedValues'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>P1ErrorDetailsInnerInnerError</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>P1ErrorDetailsInnerInnerError</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['allowedPattern'] && !(typeof data['allowedPattern'] === 'string' || data['allowedPattern'] instanceof String)) {
      throw new Error("Expected the field `allowedPattern` to be a primitive type in the JSON string but got " + data['allowedPattern']);
    }
    // ensure the json data is an array
    if (!Array.isArray(data['allowedValues'])) {
      throw new Error("Expected the field `allowedValues` to be an array in the JSON data but got " + data['allowedValues']);
    }
    // ensure the json data is an array
    if (!Array.isArray(data['referencedValues'])) {
      throw new Error("Expected the field `referencedValues` to be an array in the JSON data but got " + data['referencedValues']);
    }
    return true;
  }
}

/**
 * Errors that failed due to range violation. This attribute represents the minimum value of the range.
 * @member {Number} rangeMinimumValue
 */
P1ErrorDetailsInnerInnerError.prototype['rangeMinimumValue'] = undefined;

/**
 * The maximum range or value of an attribute.
 * @member {Number} rangeMaximumValue
 */
P1ErrorDetailsInnerInnerError.prototype['rangeMaximumValue'] = undefined;

/**
 * A regex pattern describing an acceptable input pattern.
 * @member {String} allowedPattern
 */
P1ErrorDetailsInnerInnerError.prototype['allowedPattern'] = undefined;

/**
 * A list describing acceptable values.
 * @member {Array.<String>} allowedValues
 */
P1ErrorDetailsInnerInnerError.prototype['allowedValues'] = undefined;

/**
 * The maximum value allowed for the request.
 * @member {Number} maximumValue
 */
P1ErrorDetailsInnerInnerError.prototype['maximumValue'] = undefined;

/**
 * @member {Array.<String>} referencedValues
 */
P1ErrorDetailsInnerInnerError.prototype['referencedValues'] = undefined;
export default P1ErrorDetailsInnerInnerError;