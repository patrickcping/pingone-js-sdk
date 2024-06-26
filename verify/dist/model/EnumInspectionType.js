/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class EnumInspectionType.
* @enum {}
* @readonly
*/
export default class EnumInspectionType {
  /**
   * value: "AUTOMATIC"
   * @const
   */
  "AUTOMATIC" = "AUTOMATIC";

  /**
   * value: "MANUAL"
   * @const
   */
  "MANUAL" = "MANUAL";

  /**
   * value: "STEP_UP"
   * @const
   */
  "STEP_UP" = "STEP_UP";

  /**
  * Returns a <code>EnumInspectionType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumInspectionType} The enum <code>EnumInspectionType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}