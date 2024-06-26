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
import LinksHATEOAS from './LinksHATEOAS';

/**
 * The BrandingThemeDefault model module.
 * @module model/BrandingThemeDefault
 * @version 2023-06-29
 */
class BrandingThemeDefault {
  /**
   * Constructs a new <code>BrandingThemeDefault</code>.
   * @alias module:model/BrandingThemeDefault
   * @param _default {Boolean} A boolean to specify whether the theme is the default in the environment
   */
  constructor(_default) {
    BrandingThemeDefault.initialize(this, _default);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, _default) {
    obj['default'] = _default;
  }

  /**
   * Constructs a <code>BrandingThemeDefault</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandingThemeDefault} obj Optional instance to populate.
   * @return {module:model/BrandingThemeDefault} The populated <code>BrandingThemeDefault</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrandingThemeDefault();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>BrandingThemeDefault</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingThemeDefault</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of BrandingThemeDefault.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    return true;
  }
}
BrandingThemeDefault.RequiredProperties = ["default"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
BrandingThemeDefault.prototype['_links'] = undefined;

/**
 * A boolean to specify whether the theme is the default in the environment
 * @member {Boolean} default
 */
BrandingThemeDefault.prototype['default'] = undefined;
export default BrandingThemeDefault;