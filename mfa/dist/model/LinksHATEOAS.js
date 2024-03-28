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
import LinksHATEOASNext from './LinksHATEOASNext';
import LinksHATEOASSelf from './LinksHATEOASSelf';

/**
 * The LinksHATEOAS model module.
 * @module model/LinksHATEOAS
 * @version 2023-06-29
 */
class LinksHATEOAS {
  /**
   * Constructs a new <code>LinksHATEOAS</code>.
   * @alias module:model/LinksHATEOAS
   * @extends Object
   */
  constructor() {
    LinksHATEOAS.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LinksHATEOAS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinksHATEOAS} obj Optional instance to populate.
   * @return {module:model/LinksHATEOAS} The populated <code>LinksHATEOAS</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LinksHATEOAS();
      ApiClient.constructFromObject(data, obj, 'Object');
      if (data.hasOwnProperty('self')) {
        obj['self'] = LinksHATEOASSelf.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = LinksHATEOASNext.constructFromObject(data['next']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>LinksHATEOAS</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinksHATEOAS</code>.
   */
  static validateJSON(data) {
    // validate the optional field `self`
    if (data['self']) {
      // data not null
      LinksHATEOASSelf.validateJSON(data['self']);
    }
    // validate the optional field `next`
    if (data['next']) {
      // data not null
      LinksHATEOASNext.validateJSON(data['next']);
    }
    return true;
  }
}

/**
 * @member {module:model/LinksHATEOASSelf} self
 */
LinksHATEOAS.prototype['self'] = undefined;

/**
 * @member {module:model/LinksHATEOASNext} next
 */
LinksHATEOAS.prototype['next'] = undefined;
export default LinksHATEOAS;