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
* Enum class EnumMFADevicePolicySelection.
* @enum {}
* @readonly
*/
export default class EnumMFADevicePolicySelection {
  /**
   * value: "DEFAULT_TO_FIRST"
   * @const
   */
  "DEFAULT_TO_FIRST" = "DEFAULT_TO_FIRST";

  /**
   * value: "PROMPT_TO_SELECT"
   * @const
   */
  "PROMPT_TO_SELECT" = "PROMPT_TO_SELECT";

  /**
   * value: "ALWAYS_DISPLAY_DEVICES"
   * @const
   */
  "ALWAYS_DISPLAY_DEVICES" = "ALWAYS_DISPLAY_DEVICES";

  /**
  * Returns a <code>EnumMFADevicePolicySelection</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumMFADevicePolicySelection} The enum <code>EnumMFADevicePolicySelection</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}