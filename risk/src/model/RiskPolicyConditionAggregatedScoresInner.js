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
 * The RiskPolicyConditionAggregatedScoresInner model module.
 * @module model/RiskPolicyConditionAggregatedScoresInner
 * @version 2023-06-29
 */
class RiskPolicyConditionAggregatedScoresInner {
    /**
     * Constructs a new <code>RiskPolicyConditionAggregatedScoresInner</code>.
     * @alias module:model/RiskPolicyConditionAggregatedScoresInner
     * @param value {String} Text that identifies a specific risk predictor in the environment. It uses the form `${details.xxxxxxx.level}`, where the string between `details` and `level` is the compact name of the relevant predictor.
     * @param score {Number} The score you want to assign to the predictor when it is determined that there is a high risk for the predictor. Value should be between 0 and 100. If it is determined that there is medium risk, the predictor will automatically be assigned a score equal to half of the value you specified for high risk.
     */
    constructor(value, score) { 
        
        RiskPolicyConditionAggregatedScoresInner.initialize(this, value, score);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, score) { 
        obj['value'] = value;
        obj['score'] = score;
    }

    /**
     * Constructs a <code>RiskPolicyConditionAggregatedScoresInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPolicyConditionAggregatedScoresInner} obj Optional instance to populate.
     * @return {module:model/RiskPolicyConditionAggregatedScoresInner} The populated <code>RiskPolicyConditionAggregatedScoresInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPolicyConditionAggregatedScoresInner();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPolicyConditionAggregatedScoresInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPolicyConditionAggregatedScoresInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RiskPolicyConditionAggregatedScoresInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

RiskPolicyConditionAggregatedScoresInner.RequiredProperties = ["value", "score"];

/**
 * Text that identifies a specific risk predictor in the environment. It uses the form `${details.xxxxxxx.level}`, where the string between `details` and `level` is the compact name of the relevant predictor.
 * @member {String} value
 */
RiskPolicyConditionAggregatedScoresInner.prototype['value'] = undefined;

/**
 * The score you want to assign to the predictor when it is determined that there is a high risk for the predictor. Value should be between 0 and 100. If it is determined that there is medium risk, the predictor will automatically be assigned a score equal to half of the value you specified for high risk.
 * @member {Number} score
 */
RiskPolicyConditionAggregatedScoresInner.prototype['score'] = undefined;






export default RiskPolicyConditionAggregatedScoresInner;
