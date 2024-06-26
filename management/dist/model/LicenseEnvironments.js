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
import EnumRegionCodeLicense from './EnumRegionCodeLicense';

/**
 * The LicenseEnvironments model module.
 * @module model/LicenseEnvironments
 * @version 2023-06-29
 */
class LicenseEnvironments {
  /**
   * Constructs a new <code>LicenseEnvironments</code>.
   * @alias module:model/LicenseEnvironments
   */
  constructor() {
    LicenseEnvironments.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LicenseEnvironments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseEnvironments} obj Optional instance to populate.
   * @return {module:model/LicenseEnvironments} The populated <code>LicenseEnvironments</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LicenseEnvironments();
      if (data.hasOwnProperty('allowAddResources')) {
        obj['allowAddResources'] = ApiClient.convertToType(data['allowAddResources'], 'Boolean');
      }
      if (data.hasOwnProperty('allowConnections')) {
        obj['allowConnections'] = ApiClient.convertToType(data['allowConnections'], 'Boolean');
      }
      if (data.hasOwnProperty('allowCustomDomain')) {
        obj['allowCustomDomain'] = ApiClient.convertToType(data['allowCustomDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('allowCustomSchema')) {
        obj['allowCustomSchema'] = ApiClient.convertToType(data['allowCustomSchema'], 'Boolean');
      }
      if (data.hasOwnProperty('allowProduction')) {
        obj['allowProduction'] = ApiClient.convertToType(data['allowProduction'], 'Boolean');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'Number');
      }
      if (data.hasOwnProperty('regions')) {
        obj['regions'] = ApiClient.convertToType(data['regions'], [EnumRegionCodeLicense]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>LicenseEnvironments</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseEnvironments</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data['regions'])) {
      throw new Error("Expected the field `regions` to be an array in the JSON data but got " + data['regions']);
    }
    return true;
  }
}

/**
 * @member {Boolean} allowAddResources
 */
LicenseEnvironments.prototype['allowAddResources'] = undefined;

/**
 * A boolean that specifies whether the license supports creation of application connections in the specified environment.
 * @member {Boolean} allowConnections
 */
LicenseEnvironments.prototype['allowConnections'] = undefined;

/**
 * A read-only boolean that specifies whether the license supports creation of a custom domain in the specified environment.
 * @member {Boolean} allowCustomDomain
 */
LicenseEnvironments.prototype['allowCustomDomain'] = undefined;

/**
 * A read-only boolean that specifies whether the license supports using custom schema attributes in the specified environment.
 * @member {Boolean} allowCustomSchema
 */
LicenseEnvironments.prototype['allowCustomSchema'] = undefined;

/**
 * A read-only boolean that specifies whether production environments are allowed.
 * @member {Boolean} allowProduction
 */
LicenseEnvironments.prototype['allowProduction'] = undefined;

/**
 * A read-only integer that specifies the maximum number of environments allowed.
 * @member {Number} max
 */
LicenseEnvironments.prototype['max'] = undefined;

/**
 * @member {Array.<module:model/EnumRegionCodeLicense>} regions
 */
LicenseEnvironments.prototype['regions'] = undefined;
export default LicenseEnvironments;