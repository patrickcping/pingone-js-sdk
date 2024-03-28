/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LinksHATEOASSelf model module.
 * @module model/LinksHATEOASSelf
 * @version 2023-07-20
 */
class LinksHATEOASSelf {
  /**
   * Constructs a new <code>LinksHATEOASSelf</code>.
   * An object that describes the current resource.
   * @alias module:model/LinksHATEOASSelf
   */
  constructor() {
    LinksHATEOASSelf.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LinksHATEOASSelf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinksHATEOASSelf} obj Optional instance to populate.
   * @return {module:model/LinksHATEOASSelf} The populated <code>LinksHATEOASSelf</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LinksHATEOASSelf();
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>LinksHATEOASSelf</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinksHATEOASSelf</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
      throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
    }
    return true;
  }
}

/**
 * The URI of the resource.
 * @member {String} href
 */
LinksHATEOASSelf.prototype['href'] = undefined;
export default LinksHATEOASSelf;