/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
import P1ErrorDetailsInner from './P1ErrorDetailsInner';

/**
 * The P1Error model module.
 * @module model/P1Error
 * @version 2023-06-29
 */
class P1Error {
  /**
   * Constructs a new <code>P1Error</code>.
   * @alias module:model/P1Error
   */
  constructor() {
    P1Error.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>P1Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/P1Error} obj Optional instance to populate.
   * @return {module:model/P1Error} The populated <code>P1Error</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new P1Error();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [P1ErrorDetailsInner]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>P1Error</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>P1Error</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
      throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
    }
    // ensure the json data is a string
    if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
      throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
    }
    if (data['details']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['details'])) {
        throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
      }
      // validate the optional field `details` (array)
      for (const item of data['details']) {
        P1ErrorDetailsInner.validateJSON(item);
      }
      ;
    }
    return true;
  }
}

/**
 * A unique identifier that is stored in log files and always included in an error response. This value can be used to track the error received by the client, with server-side activity included for troubleshooting purposes.
 * @member {String} id
 */
P1Error.prototype['id'] = undefined;

/**
 * A general fault code which the client must handle to provide all exception handling routines and to localize messages for users. This code is common across all PingOne services and is human readable (such as a defined constant rather than a number).
 * @member {String} code
 */
P1Error.prototype['code'] = undefined;

/**
 * A short description of the error. This message is intended to assist with debugging and is returned in English only.
 * @member {String} message
 */
P1Error.prototype['message'] = undefined;

/**
 * Additional details about the error. Optional information to help resolve the error and to display to users.
 * @member {Array.<module:model/P1ErrorDetailsInner>} details
 */
P1Error.prototype['details'] = undefined;
export default P1Error;