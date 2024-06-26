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
* Enum class EnumGatewayType.
* @enum {}
* @readonly
*/
export default class EnumGatewayType {
  /**
   * value: "LDAP"
   * @const
   */
  "LDAP" = "LDAP";

  /**
   * value: "PING_FEDERATE"
   * @const
   */
  "PING_FEDERATE" = "PING_FEDERATE";

  /**
   * value: "PING_INTELLIGENCE"
   * @const
   */
  "PING_INTELLIGENCE" = "PING_INTELLIGENCE";

  /**
   * value: "API_GATEWAY_INTEGRATION"
   * @const
   */
  "API_GATEWAY_INTEGRATION" = "API_GATEWAY_INTEGRATION";

  /**
   * value: "RADIUS"
   * @const
   */
  "RADIUS" = "RADIUS";

  /**
  * Returns a <code>EnumGatewayType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumGatewayType} The enum <code>EnumGatewayType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}