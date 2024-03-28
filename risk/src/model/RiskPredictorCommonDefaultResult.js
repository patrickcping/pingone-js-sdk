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
import EnumResultType from './EnumResultType';
import EnumRiskLevel from './EnumRiskLevel';

/**
 * The RiskPredictorCommonDefaultResult model module.
 * @module model/RiskPredictorCommonDefaultResult
 * @version 2023-06-29
 */
class RiskPredictorCommonDefaultResult {
    /**
     * Constructs a new <code>RiskPredictorCommonDefaultResult</code>.
     * This specifies the result assigned to the predictor if the predictor could not be calculated during the risk evaluation. If this field is not provided, and the predictor could not be calculated during risk evaluation, the following options are: If the predictor is used in an override, the override is skipped. In the weighted policy, the predictor will have a weight of 0.
     * @alias module:model/RiskPredictorCommonDefaultResult
     * @param type {module:model/EnumResultType} 
     */
    constructor(type) { 
        
        RiskPredictorCommonDefaultResult.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RiskPredictorCommonDefaultResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPredictorCommonDefaultResult} obj Optional instance to populate.
     * @return {module:model/RiskPredictorCommonDefaultResult} The populated <code>RiskPredictorCommonDefaultResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPredictorCommonDefaultResult();

            if (data.hasOwnProperty('level')) {
                obj['level'] = EnumRiskLevel.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumResultType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPredictorCommonDefaultResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorCommonDefaultResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RiskPredictorCommonDefaultResult.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RiskPredictorCommonDefaultResult.RequiredProperties = ["type"];

/**
 * @member {module:model/EnumRiskLevel} level
 */
RiskPredictorCommonDefaultResult.prototype['level'] = undefined;

/**
 * @member {module:model/EnumResultType} type
 */
RiskPredictorCommonDefaultResult.prototype['type'] = undefined;






export default RiskPredictorCommonDefaultResult;

