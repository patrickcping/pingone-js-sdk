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
import EnumThresholdSource from './EnumThresholdSource';

/**
 * The RiskEvaluationDetailsUserVelocityByIpThreshold model module.
 * @module model/RiskEvaluationDetailsUserVelocityByIpThreshold
 * @version 2023-06-29
 */
class RiskEvaluationDetailsUserVelocityByIpThreshold {
    /**
     * Constructs a new <code>RiskEvaluationDetailsUserVelocityByIpThreshold</code>.
     * The information about the calculated threshold used.
     * @alias module:model/RiskEvaluationDetailsUserVelocityByIpThreshold
     */
    constructor() { 
        
        RiskEvaluationDetailsUserVelocityByIpThreshold.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RiskEvaluationDetailsUserVelocityByIpThreshold</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskEvaluationDetailsUserVelocityByIpThreshold} obj Optional instance to populate.
     * @return {module:model/RiskEvaluationDetailsUserVelocityByIpThreshold} The populated <code>RiskEvaluationDetailsUserVelocityByIpThreshold</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskEvaluationDetailsUserVelocityByIpThreshold();

            if (data.hasOwnProperty('high')) {
                obj['high'] = ApiClient.convertToType(data['high'], 'Number');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = EnumThresholdSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('calculatedAt')) {
                obj['calculatedAt'] = ApiClient.convertToType(data['calculatedAt'], 'String');
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskEvaluationDetailsUserVelocityByIpThreshold</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationDetailsUserVelocityByIpThreshold</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['calculatedAt'] && !(typeof data['calculatedAt'] === 'string' || data['calculatedAt'] instanceof String)) {
            throw new Error("Expected the field `calculatedAt` to be a primitive type in the JSON string but got " + data['calculatedAt']);
        }
        // ensure the json data is a string
        if (data['expiresAt'] && !(typeof data['expiresAt'] === 'string' || data['expiresAt'] instanceof String)) {
            throw new Error("Expected the field `expiresAt` to be a primitive type in the JSON string but got " + data['expiresAt']);
        }

        return true;
    }


}



/**
 * An integer indicating the value calculated for the high threshold. If the IP was accessed by more than the high number of users during the past hour, the IP is flagged as a HIGH userVelocityByIp.level.
 * @member {Number} high
 */
RiskEvaluationDetailsUserVelocityByIpThreshold.prototype['high'] = undefined;

/**
 * An integer indicating the value calculated for the medium threshold. If the IP was accessed by more than the medium number of users during the past hour, the IP is flagged as a MEDIUM userVelocityByIp.level
 * @member {Number} medium
 */
RiskEvaluationDetailsUserVelocityByIpThreshold.prototype['medium'] = undefined;

/**
 * @member {module:model/EnumThresholdSource} source
 */
RiskEvaluationDetailsUserVelocityByIpThreshold.prototype['source'] = undefined;

/**
 * A date-time indicating the timestamp for the calculated threshold.
 * @member {String} calculatedAt
 */
RiskEvaluationDetailsUserVelocityByIpThreshold.prototype['calculatedAt'] = undefined;

/**
 * A date-time indicating when the threshold will be recalculated. The recalculation will happen before this time.
 * @member {String} expiresAt
 */
RiskEvaluationDetailsUserVelocityByIpThreshold.prototype['expiresAt'] = undefined;






export default RiskEvaluationDetailsUserVelocityByIpThreshold;
