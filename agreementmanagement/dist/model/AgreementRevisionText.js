/**
 * PingOne Platform API - Agreement Management
 * The PingOne Platform API covering the PingOne Agreement Management service
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
 * The AgreementRevisionText model module.
 * @module model/AgreementRevisionText
 * @version 2023-06-29
 */
class AgreementRevisionText {
  /**
   * Constructs a new <code>AgreementRevisionText</code>.
   * @alias module:model/AgreementRevisionText
   */
  constructor() {
    AgreementRevisionText.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AgreementRevisionText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgreementRevisionText} obj Optional instance to populate.
   * @return {module:model/AgreementRevisionText} The populated <code>AgreementRevisionText</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AgreementRevisionText();
      if (data.hasOwnProperty('resourcePath')) {
        obj['resourcePath'] = ApiClient.convertToType(data['resourcePath'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('dataType')) {
        obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>AgreementRevisionText</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgreementRevisionText</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['resourcePath'] && !(typeof data['resourcePath'] === 'string' || data['resourcePath'] instanceof String)) {
      throw new Error("Expected the field `resourcePath` to be a primitive type in the JSON string but got " + data['resourcePath']);
    }
    // ensure the json data is a string
    if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
      throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
    }
    // ensure the json data is a string
    if (data['dataType'] && !(typeof data['dataType'] === 'string' || data['dataType'] instanceof String)) {
      throw new Error("Expected the field `dataType` to be a primitive type in the JSON string but got " + data['dataType']);
    }
    return true;
  }
}

/**
 * @member {String} resourcePath
 */
AgreementRevisionText.prototype['resourcePath'] = undefined;

/**
 * @member {String} data
 */
AgreementRevisionText.prototype['data'] = undefined;

/**
 * @member {String} dataType
 */
AgreementRevisionText.prototype['dataType'] = undefined;
export default AgreementRevisionText;