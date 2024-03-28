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
 * The RiskEvaluationResult model module.
 * @module model/RiskEvaluationResult
 * @version 2023-06-29
 */
class RiskEvaluationResult {
    /**
     * Constructs a new <code>RiskEvaluationResult</code>.
     * @alias module:model/RiskEvaluationResult
     */
    constructor() { 
        
        RiskEvaluationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RiskEvaluationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskEvaluationResult} obj Optional instance to populate.
     * @return {module:model/RiskEvaluationResult} The populated <code>RiskEvaluationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskEvaluationResult();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumResultType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = EnumRiskLevel.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskEvaluationResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {module:model/EnumResultType} type
 */
RiskEvaluationResult.prototype['type'] = undefined;

/**
 * @member {module:model/EnumRiskLevel} level
 */
RiskEvaluationResult.prototype['level'] = undefined;

/**
 * A string that specifies any custom attribute the administrator defines.
 * @member {String} value
 */
RiskEvaluationResult.prototype['value'] = undefined;






export default RiskEvaluationResult;
