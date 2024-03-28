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
 * The RiskEvaluationDetailsIpVelocityByUserVelocity model module.
 * @module model/RiskEvaluationDetailsIpVelocityByUserVelocity
 * @version 2023-06-29
 */
class RiskEvaluationDetailsIpVelocityByUserVelocity {
    /**
     * Constructs a new <code>RiskEvaluationDetailsIpVelocityByUserVelocity</code>.
     * Integer values for the measures used to calculate velocity.
     * @alias module:model/RiskEvaluationDetailsIpVelocityByUserVelocity
     */
    constructor() { 
        
        RiskEvaluationDetailsIpVelocityByUserVelocity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RiskEvaluationDetailsIpVelocityByUserVelocity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskEvaluationDetailsIpVelocityByUserVelocity} obj Optional instance to populate.
     * @return {module:model/RiskEvaluationDetailsIpVelocityByUserVelocity} The populated <code>RiskEvaluationDetailsIpVelocityByUserVelocity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskEvaluationDetailsIpVelocityByUserVelocity();

            if (data.hasOwnProperty('distinctCount')) {
                obj['distinctCount'] = ApiClient.convertToType(data['distinctCount'], 'Number');
            }
            if (data.hasOwnProperty('during')) {
                obj['during'] = ApiClient.convertToType(data['during'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskEvaluationDetailsIpVelocityByUserVelocity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationDetailsIpVelocityByUserVelocity</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * This is the distinct count for the previous seconds indicated by the during value.
 * @member {Number} distinctCount
 */
RiskEvaluationDetailsIpVelocityByUserVelocity.prototype['distinctCount'] = undefined;

/**
 * The interval (in seconds) during which the velocity is calculated.
 * @member {Number} during
 */
RiskEvaluationDetailsIpVelocityByUserVelocity.prototype['during'] = undefined;






export default RiskEvaluationDetailsIpVelocityByUserVelocity;
