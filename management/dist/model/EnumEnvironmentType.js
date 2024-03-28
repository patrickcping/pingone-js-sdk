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
* Enum class EnumEnvironmentType.
* @enum {}
* @readonly
*/
export default class EnumEnvironmentType {
  /**
   * value: "PRODUCTION"
   * @const
   */
  "PRODUCTION" = "PRODUCTION";

  /**
   * value: "SANDBOX"
   * @const
   */
  "SANDBOX" = "SANDBOX";

  /**
  * Returns a <code>EnumEnvironmentType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumEnvironmentType} The enum <code>EnumEnvironmentType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}