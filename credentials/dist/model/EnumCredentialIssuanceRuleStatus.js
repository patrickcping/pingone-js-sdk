/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
* Enum class EnumCredentialIssuanceRuleStatus.
* @enum {}
* @readonly
*/
export default class EnumCredentialIssuanceRuleStatus {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE" = "ACTIVE";

  /**
   * value: "DISABLED"
   * @const
   */
  "DISABLED" = "DISABLED";

  /**
  * Returns a <code>EnumCredentialIssuanceRuleStatus</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumCredentialIssuanceRuleStatus} The enum <code>EnumCredentialIssuanceRuleStatus</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}