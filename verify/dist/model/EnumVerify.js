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
* Enum class EnumVerify.
* @enum {}
* @readonly
*/
export default class EnumVerify {
  /**
   * value: "REQUIRED"
   * @const
   */
  "REQUIRED" = "REQUIRED";

  /**
   * value: "OPTIONAL"
   * @const
   */
  "OPTIONAL" = "OPTIONAL";

  /**
   * value: "DISABLED"
   * @const
   */
  "DISABLED" = "DISABLED";

  /**
  * Returns a <code>EnumVerify</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumVerify} The enum <code>EnumVerify</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}