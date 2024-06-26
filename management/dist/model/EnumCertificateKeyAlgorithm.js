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
* Enum class EnumCertificateKeyAlgorithm.
* @enum {}
* @readonly
*/
export default class EnumCertificateKeyAlgorithm {
  /**
   * value: "RSA"
   * @const
   */
  "RSA" = "RSA";

  /**
   * value: "EC"
   * @const
   */
  "EC" = "EC";

  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN" = "UNKNOWN";

  /**
  * Returns a <code>EnumCertificateKeyAlgorithm</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumCertificateKeyAlgorithm} The enum <code>EnumCertificateKeyAlgorithm</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}