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
import EnumRiskLevel from './EnumRiskLevel';

/**
 * The RiskEvaluationDetailsUserRiskBehavior model module.
 * @module model/RiskEvaluationDetailsUserRiskBehavior
 * @version 2023-06-29
 */
class RiskEvaluationDetailsUserRiskBehavior {
  /**
   * Constructs a new <code>RiskEvaluationDetailsUserRiskBehavior</code>.
   * @alias module:model/RiskEvaluationDetailsUserRiskBehavior
   */
  constructor() {
    RiskEvaluationDetailsUserRiskBehavior.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>RiskEvaluationDetailsUserRiskBehavior</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskEvaluationDetailsUserRiskBehavior} obj Optional instance to populate.
   * @return {module:model/RiskEvaluationDetailsUserRiskBehavior} The populated <code>RiskEvaluationDetailsUserRiskBehavior</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskEvaluationDetailsUserRiskBehavior();
      if (data.hasOwnProperty('level')) {
        obj['level'] = EnumRiskLevel.constructFromObject(data['level']);
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>RiskEvaluationDetailsUserRiskBehavior</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationDetailsUserRiskBehavior</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
      throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
    }
    return true;
  }
}

/**
 * @member {module:model/EnumRiskLevel} level
 */
RiskEvaluationDetailsUserRiskBehavior.prototype['level'] = undefined;

/**
 * A string that describes the reason (or reasons) provided for the user behavior risk score classification within the organization (for example, the operating system or browser type used by the device, and country in which the accessing device is located). Each reason is classified as Unusual or Very Unusual, to indicate how much it deviates from normal user behavior, and its effect in calculating the overall user behavior risk score.
 * @member {String} reason
 */
RiskEvaluationDetailsUserRiskBehavior.prototype['reason'] = undefined;
export default RiskEvaluationDetailsUserRiskBehavior;