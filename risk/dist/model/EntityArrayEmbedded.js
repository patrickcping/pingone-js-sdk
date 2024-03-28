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
import RiskPolicySet from './RiskPolicySet';
import RiskPredictor from './RiskPredictor';

/**
 * The EntityArrayEmbedded model module.
 * @module model/EntityArrayEmbedded
 * @version 2023-06-29
 */
class EntityArrayEmbedded {
  /**
   * Constructs a new <code>EntityArrayEmbedded</code>.
   * @alias module:model/EntityArrayEmbedded
   */
  constructor() {
    EntityArrayEmbedded.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EntityArrayEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityArrayEmbedded} obj Optional instance to populate.
   * @return {module:model/EntityArrayEmbedded} The populated <code>EntityArrayEmbedded</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EntityArrayEmbedded();
      if (data.hasOwnProperty('riskPolicySets')) {
        obj['riskPolicySets'] = ApiClient.convertToType(data['riskPolicySets'], [RiskPolicySet]);
      }
      if (data.hasOwnProperty('riskPredictors')) {
        obj['riskPredictors'] = ApiClient.convertToType(data['riskPredictors'], [RiskPredictor]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>EntityArrayEmbedded</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EntityArrayEmbedded</code>.
   */
  static validateJSON(data) {
    if (data['riskPolicySets']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['riskPolicySets'])) {
        throw new Error("Expected the field `riskPolicySets` to be an array in the JSON data but got " + data['riskPolicySets']);
      }
      // validate the optional field `riskPolicySets` (array)
      for (const item of data['riskPolicySets']) {
        RiskPolicySet.validateJSON(item);
      }
      ;
    }
    if (data['riskPredictors']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['riskPredictors'])) {
        throw new Error("Expected the field `riskPredictors` to be an array in the JSON data but got " + data['riskPredictors']);
      }
      // validate the optional field `riskPredictors` (array)
      for (const item of data['riskPredictors']) {
        RiskPredictor.validateJSON(item);
      }
      ;
    }
    return true;
  }
}

/**
 * @member {Array.<module:model/RiskPolicySet>} riskPolicySets
 */
EntityArrayEmbedded.prototype['riskPolicySets'] = undefined;

/**
 * @member {Array.<module:model/RiskPredictor>} riskPredictors
 */
EntityArrayEmbedded.prototype['riskPredictors'] = undefined;
export default EntityArrayEmbedded;