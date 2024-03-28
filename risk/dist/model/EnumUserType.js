/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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
* Enum class EnumUserType.
* @enum {}
* @readonly
*/
export default class EnumUserType {
  /**
   * value: "EXTERNAL"
   * @const
   */
  "EXTERNAL" = "EXTERNAL";

  /**
  * Returns a <code>EnumUserType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumUserType} The enum <code>EnumUserType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}