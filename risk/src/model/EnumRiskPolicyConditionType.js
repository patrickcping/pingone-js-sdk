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
* Enum class EnumRiskPolicyConditionType.
* @enum {}
* @readonly
*/
export default class EnumRiskPolicyConditionType {
    
        /**
         * value: "AGGREGATED_WEIGHTS"
         * @const
         */
        "AGGREGATED_WEIGHTS" = "AGGREGATED_WEIGHTS";

    
        /**
         * value: "AGGREGATED_SCORES"
         * @const
         */
        "AGGREGATED_SCORES" = "AGGREGATED_SCORES";

    
        /**
         * value: "VALUE_COMPARISON"
         * @const
         */
        "VALUE_COMPARISON" = "VALUE_COMPARISON";

    
        /**
         * value: "IP_RANGE"
         * @const
         */
        "IP_RANGE" = "IP_RANGE";

    

    /**
    * Returns a <code>EnumRiskPolicyConditionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumRiskPolicyConditionType} The enum <code>EnumRiskPolicyConditionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

