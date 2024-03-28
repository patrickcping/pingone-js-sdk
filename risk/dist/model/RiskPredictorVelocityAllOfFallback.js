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
import EnumPredictorVelocityFallbackStrategy from './EnumPredictorVelocityFallbackStrategy';

/**
 * The RiskPredictorVelocityAllOfFallback model module.
 * @module model/RiskPredictorVelocityAllOfFallback
 * @version 2023-06-29
 */
class RiskPredictorVelocityAllOfFallback {
  /**
   * Constructs a new <code>RiskPredictorVelocityAllOfFallback</code>.
   * @alias module:model/RiskPredictorVelocityAllOfFallback
   */
  constructor() {
    RiskPredictorVelocityAllOfFallback.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>RiskPredictorVelocityAllOfFallback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskPredictorVelocityAllOfFallback} obj Optional instance to populate.
   * @return {module:model/RiskPredictorVelocityAllOfFallback} The populated <code>RiskPredictorVelocityAllOfFallback</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskPredictorVelocityAllOfFallback();
      if (data.hasOwnProperty('strategy')) {
        obj['strategy'] = EnumPredictorVelocityFallbackStrategy.constructFromObject(data['strategy']);
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('medium')) {
        obj['medium'] = ApiClient.convertToType(data['medium'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>RiskPredictorVelocityAllOfFallback</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorVelocityAllOfFallback</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * @member {module:model/EnumPredictorVelocityFallbackStrategy} strategy
 */
RiskPredictorVelocityAllOfFallback.prototype['strategy'] = undefined;

/**
 * @member {Number} high
 */
RiskPredictorVelocityAllOfFallback.prototype['high'] = undefined;

/**
 * @member {Number} medium
 */
RiskPredictorVelocityAllOfFallback.prototype['medium'] = undefined;
export default RiskPredictorVelocityAllOfFallback;