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
* Enum class EnumCredentialIssuanceRuleAutomationMethod.
* @enum {}
* @readonly
*/
export default class EnumCredentialIssuanceRuleAutomationMethod {
  /**
   * value: "PERIODIC"
   * @const
   */
  "PERIODIC" = "PERIODIC";

  /**
   * value: "ON_DEMAND"
   * @const
   */
  "ON_DEMAND" = "ON_DEMAND";

  /**
  * Returns a <code>EnumCredentialIssuanceRuleAutomationMethod</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumCredentialIssuanceRuleAutomationMethod} The enum <code>EnumCredentialIssuanceRuleAutomationMethod</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}