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

/**
 * The LinksHATEOASNext model module.
 * @module model/LinksHATEOASNext
 * @version 2023-06-29
 */
class LinksHATEOASNext {
  /**
   * Constructs a new <code>LinksHATEOASNext</code>.
   * An object that describes the next page of results. This property is present only if there is a next page of results and the &#x60;limit&#x60; parameter is used.
   * @alias module:model/LinksHATEOASNext
   */
  constructor() {
    LinksHATEOASNext.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LinksHATEOASNext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinksHATEOASNext} obj Optional instance to populate.
   * @return {module:model/LinksHATEOASNext} The populated <code>LinksHATEOASNext</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LinksHATEOASNext();
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>LinksHATEOASNext</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinksHATEOASNext</code>.
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
LinksHATEOASNext.prototype['href'] = undefined;
export default LinksHATEOASNext;