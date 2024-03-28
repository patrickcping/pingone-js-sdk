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
* Enum class EnumPropagationStoreTypeSCIMAuthenticationMethod.
* @enum {}
* @readonly
*/
export default class EnumPropagationStoreTypeSCIMAuthenticationMethod {
  /**
   * value: "OAuth 2 Client Credentials"
   * @const
   */
  "OAuth 2 Client Credentials" = "OAuth 2 Client Credentials";

  /**
   * value: "OAuth 2 Bearer Token"
   * @const
   */
  "OAuth 2 Bearer Token" = "OAuth 2 Bearer Token";

  /**
   * value: "Basic Authentication"
   * @const
   */
  "Basic Authentication" = "Basic Authentication";

  /**
  * Returns a <code>EnumPropagationStoreTypeSCIMAuthenticationMethod</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumPropagationStoreTypeSCIMAuthenticationMethod} The enum <code>EnumPropagationStoreTypeSCIMAuthenticationMethod</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}