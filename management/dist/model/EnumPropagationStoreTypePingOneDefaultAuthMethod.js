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
* Enum class EnumPropagationStoreTypePingOneDefaultAuthMethod.
* @enum {}
* @readonly
*/
export default class EnumPropagationStoreTypePingOneDefaultAuthMethod {
  /**
   * value: "Email 1"
   * @const
   */
  "Email 1" = "Email 1";

  /**
   * value: "SMS 1"
   * @const
   */
  "SMS 1" = "SMS 1";

  /**
   * value: "Voice 1"
   * @const
   */
  "Voice 1" = "Voice 1";

  /**
  * Returns a <code>EnumPropagationStoreTypePingOneDefaultAuthMethod</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumPropagationStoreTypePingOneDefaultAuthMethod} The enum <code>EnumPropagationStoreTypePingOneDefaultAuthMethod</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}