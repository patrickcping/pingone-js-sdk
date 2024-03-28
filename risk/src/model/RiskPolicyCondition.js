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
import EnumRiskPolicyConditionType from './EnumRiskPolicyConditionType';
import RiskPolicyConditionAggregatedScoresInner from './RiskPolicyConditionAggregatedScoresInner';
import RiskPolicyConditionAggregatedWeightsInner from './RiskPolicyConditionAggregatedWeightsInner';
import RiskPolicyConditionBetween from './RiskPolicyConditionBetween';
import RiskPolicyConditionEquals from './RiskPolicyConditionEquals';

/**
 * The RiskPolicyCondition model module.
 * @module model/RiskPolicyCondition
 * @version 2023-06-29
 */
class RiskPolicyCondition {
    /**
     * Constructs a new <code>RiskPolicyCondition</code>.
     * Contains the condition logic that determines when a policy is evaluated to true and when it is evaluated to false.
     * @alias module:model/RiskPolicyCondition
     */
    constructor() { 
        
        RiskPolicyCondition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RiskPolicyCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPolicyCondition} obj Optional instance to populate.
     * @return {module:model/RiskPolicyCondition} The populated <code>RiskPolicyCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPolicyCondition();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumRiskPolicyConditionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('contains')) {
                obj['contains'] = ApiClient.convertToType(data['contains'], 'String');
            }
            if (data.hasOwnProperty('ipRange')) {
                obj['ipRange'] = ApiClient.convertToType(data['ipRange'], ['String']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('equals')) {
                obj['equals'] = RiskPolicyConditionEquals.constructFromObject(data['equals']);
            }
            if (data.hasOwnProperty('aggregatedWeights')) {
                obj['aggregatedWeights'] = ApiClient.convertToType(data['aggregatedWeights'], [RiskPolicyConditionAggregatedWeightsInner]);
            }
            if (data.hasOwnProperty('aggregatedScores')) {
                obj['aggregatedScores'] = ApiClient.convertToType(data['aggregatedScores'], [RiskPolicyConditionAggregatedScoresInner]);
            }
            if (data.hasOwnProperty('between')) {
                obj['between'] = RiskPolicyConditionBetween.constructFromObject(data['between']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPolicyCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPolicyCondition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contains'] && !(typeof data['contains'] === 'string' || data['contains'] instanceof String)) {
            throw new Error("Expected the field `contains` to be a primitive type in the JSON string but got " + data['contains']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ipRange'])) {
            throw new Error("Expected the field `ipRange` to be an array in the JSON data but got " + data['ipRange']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // validate the optional field `equals`
        if (data['equals']) { // data not null
          RiskPolicyConditionEquals.validateJSON(data['equals']);
        }
        if (data['aggregatedWeights']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['aggregatedWeights'])) {
                throw new Error("Expected the field `aggregatedWeights` to be an array in the JSON data but got " + data['aggregatedWeights']);
            }
            // validate the optional field `aggregatedWeights` (array)
            for (const item of data['aggregatedWeights']) {
                RiskPolicyConditionAggregatedWeightsInner.validateJSON(item);
            };
        }
        if (data['aggregatedScores']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['aggregatedScores'])) {
                throw new Error("Expected the field `aggregatedScores` to be an array in the JSON data but got " + data['aggregatedScores']);
            }
            // validate the optional field `aggregatedScores` (array)
            for (const item of data['aggregatedScores']) {
                RiskPolicyConditionAggregatedScoresInner.validateJSON(item);
            };
        }
        // validate the optional field `between`
        if (data['between']) { // data not null
          RiskPolicyConditionBetween.validateJSON(data['between']);
        }

        return true;
    }


}



/**
 * @member {module:model/EnumRiskPolicyConditionType} type
 */
RiskPolicyCondition.prototype['type'] = undefined;

/**
 * @member {String} contains
 */
RiskPolicyCondition.prototype['contains'] = undefined;

/**
 * @member {Array.<String>} ipRange
 */
RiskPolicyCondition.prototype['ipRange'] = undefined;

/**
 * @member {String} value
 */
RiskPolicyCondition.prototype['value'] = undefined;

/**
 * @member {module:model/RiskPolicyConditionEquals} equals
 */
RiskPolicyCondition.prototype['equals'] = undefined;

/**
 * Required for weights-based policies. The elements in the array are `value`-`weight` pairs, representing a weighting for the weighted average calculation that should be assigned to a specific predictor when it is determined that there is a high risk for the predictor.
 * @member {Array.<module:model/RiskPolicyConditionAggregatedWeightsInner>} aggregatedWeights
 */
RiskPolicyCondition.prototype['aggregatedWeights'] = undefined;

/**
 * Required for score-based policies. The elements in the array are `value`-`score` pairs, representing the score that should be assigned to a specific predictor when it is determined that there is a high risk for the predictor.
 * @member {Array.<module:model/RiskPolicyConditionAggregatedScoresInner>} aggregatedScores
 */
RiskPolicyCondition.prototype['aggregatedScores'] = undefined;

/**
 * @member {module:model/RiskPolicyConditionBetween} between
 */
RiskPolicyCondition.prototype['between'] = undefined;






export default RiskPolicyCondition;

