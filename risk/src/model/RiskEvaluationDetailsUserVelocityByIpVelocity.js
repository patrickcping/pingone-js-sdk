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
 * The RiskEvaluationDetailsUserVelocityByIpVelocity model module.
 * @module model/RiskEvaluationDetailsUserVelocityByIpVelocity
 * @version 2023-06-29
 */
class RiskEvaluationDetailsUserVelocityByIpVelocity {
    /**
     * Constructs a new <code>RiskEvaluationDetailsUserVelocityByIpVelocity</code>.
     * Integer values for the measures used to calculate velocity.
     * @alias module:model/RiskEvaluationDetailsUserVelocityByIpVelocity
     */
    constructor() { 
        
        RiskEvaluationDetailsUserVelocityByIpVelocity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RiskEvaluationDetailsUserVelocityByIpVelocity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskEvaluationDetailsUserVelocityByIpVelocity} obj Optional instance to populate.
     * @return {module:model/RiskEvaluationDetailsUserVelocityByIpVelocity} The populated <code>RiskEvaluationDetailsUserVelocityByIpVelocity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskEvaluationDetailsUserVelocityByIpVelocity();

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
     * Validates the JSON data with respect to <code>RiskEvaluationDetailsUserVelocityByIpVelocity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationDetailsUserVelocityByIpVelocity</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Relevant only for predictors having a measure value of \"DISTINCT_COUNT\". This is the number of users that accessed the IP in the past during seconds.
 * @member {Number} distinctCount
 */
RiskEvaluationDetailsUserVelocityByIpVelocity.prototype['distinctCount'] = undefined;

/**
 * The interval (in seconds) during which the velocity is calculated.
 * @member {Number} during
 */
RiskEvaluationDetailsUserVelocityByIpVelocity.prototype['during'] = undefined;






export default RiskEvaluationDetailsUserVelocityByIpVelocity;

