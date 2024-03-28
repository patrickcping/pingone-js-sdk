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
* Enum class EnumIdentityProviderSAMLSSOBinding.
* @enum {}
* @readonly
*/
export default class EnumIdentityProviderSAMLSSOBinding {
  /**
   * value: "HTTP_POST"
   * @const
   */
  "POST" = "HTTP_POST";

  /**
   * value: "HTTP_REDIRECT"
   * @const
   */
  "REDIRECT" = "HTTP_REDIRECT";

  /**
  * Returns a <code>EnumIdentityProviderSAMLSSOBinding</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumIdentityProviderSAMLSSOBinding} The enum <code>EnumIdentityProviderSAMLSSOBinding</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}