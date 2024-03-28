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
* Enum class EnumPredictorNewDeviceDetectType.
* @enum {}
* @readonly
*/
export default class EnumPredictorNewDeviceDetectType {
  /**
   * value: "NEW_DEVICE"
   * @const
   */
  "NEW_DEVICE" = "NEW_DEVICE";

  /**
   * value: "SUSPICIOUS_DEVICE"
   * @const
   */
  "SUSPICIOUS_DEVICE" = "SUSPICIOUS_DEVICE";

  /**
  * Returns a <code>EnumPredictorNewDeviceDetectType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumPredictorNewDeviceDetectType} The enum <code>EnumPredictorNewDeviceDetectType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}