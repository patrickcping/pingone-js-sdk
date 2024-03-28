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
* Enum class EnumUserRiskBehaviorRiskModel.
* @enum {}
* @readonly
*/
export default class EnumUserRiskBehaviorRiskModel {
  /**
   * value: "points"
   * @const
   */
  "points" = "points";

  /**
   * value: "login_anomaly_statistic"
   * @const
   */
  "login_anomaly_statistic" = "login_anomaly_statistic";

  /**
  * Returns a <code>EnumUserRiskBehaviorRiskModel</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumUserRiskBehaviorRiskModel} The enum <code>EnumUserRiskBehaviorRiskModel</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}