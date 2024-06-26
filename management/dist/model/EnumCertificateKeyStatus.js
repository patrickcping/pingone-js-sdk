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
* Enum class EnumCertificateKeyStatus.
* @enum {}
* @readonly
*/
export default class EnumCertificateKeyStatus {
  /**
   * value: "VALID"
   * @const
   */
  "VALID" = "VALID";

  /**
   * value: "EXPIRING"
   * @const
   */
  "EXPIRING" = "EXPIRING";

  /**
   * value: "EXPIRED"
   * @const
   */
  "EXPIRED" = "EXPIRED";

  /**
   * value: "NOT_YET_VALID"
   * @const
   */
  "NOT_YET_VALID" = "NOT_YET_VALID";

  /**
   * value: "REVOKED"
   * @const
   */
  "REVOKED" = "REVOKED";

  /**
  * Returns a <code>EnumCertificateKeyStatus</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumCertificateKeyStatus} The enum <code>EnumCertificateKeyStatus</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}