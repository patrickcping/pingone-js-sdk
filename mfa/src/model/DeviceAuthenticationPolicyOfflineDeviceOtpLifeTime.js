/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
import EnumTimeUnit from './EnumTimeUnit';

/**
 * The DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime model module.
 * @module model/DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime {
    /**
     * Constructs a new <code>DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime</code>.
     * @alias module:model/DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime
     * @param duration {Number} The duration (number of time units) that the passcode is valid before it expires.
     * @param timeUnit {module:model/EnumTimeUnit} 
     */
    constructor(duration, timeUnit) { 
        
        DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime.initialize(this, duration, timeUnit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, duration, timeUnit) { 
        obj['duration'] = duration;
        obj['timeUnit'] = timeUnit;
    }

    /**
     * Constructs a <code>DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime} obj Optional instance to populate.
     * @return {module:model/DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime} The populated <code>DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime();

            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('timeUnit')) {
                obj['timeUnit'] = EnumTimeUnit.constructFromObject(data['timeUnit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime.RequiredProperties = ["duration", "timeUnit"];

/**
 * The duration (number of time units) that the passcode is valid before it expires.
 * @member {Number} duration
 */
DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime.prototype['duration'] = undefined;

/**
 * @member {module:model/EnumTimeUnit} timeUnit
 */
DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime.prototype['timeUnit'] = undefined;






export default DeviceAuthenticationPolicyOfflineDeviceOtpLifeTime;

