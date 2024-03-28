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
* Enum class EnumApplicationOIDCTokenAuthMethod.
* @enum {}
* @readonly
*/
export default class EnumApplicationOIDCTokenAuthMethod {
  /**
   * value: "NONE"
   * @const
   */
  "NONE" = "NONE";

  /**
   * value: "CLIENT_SECRET_BASIC"
   * @const
   */
  "CLIENT_SECRET_BASIC" = "CLIENT_SECRET_BASIC";

  /**
   * value: "CLIENT_SECRET_POST"
   * @const
   */
  "CLIENT_SECRET_POST" = "CLIENT_SECRET_POST";

  /**
   * value: "PRIVATE_KEY_JWT"
   * @const
   */
  "PRIVATE_KEY_JWT" = "PRIVATE_KEY_JWT";

  /**
   * value: "CLIENT_SECRET_JWT"
   * @const
   */
  "CLIENT_SECRET_JWT" = "CLIENT_SECRET_JWT";

  /**
  * Returns a <code>EnumApplicationOIDCTokenAuthMethod</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumApplicationOIDCTokenAuthMethod} The enum <code>EnumApplicationOIDCTokenAuthMethod</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}