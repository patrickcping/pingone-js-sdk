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
* Enum class EnumFIDO2PolicyDiscoverableCredentials.
* @enum {}
* @readonly
*/
export default class EnumFIDO2PolicyDiscoverableCredentials {
  /**
   * value: "DISCOURAGED"
   * @const
   */
  "DISCOURAGED" = "DISCOURAGED";

  /**
   * value: "REQUIRED"
   * @const
   */
  "REQUIRED" = "REQUIRED";

  /**
   * value: "PREFERRED"
   * @const
   */
  "PREFERRED" = "PREFERRED";

  /**
  * Returns a <code>EnumFIDO2PolicyDiscoverableCredentials</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumFIDO2PolicyDiscoverableCredentials} The enum <code>EnumFIDO2PolicyDiscoverableCredentials</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}