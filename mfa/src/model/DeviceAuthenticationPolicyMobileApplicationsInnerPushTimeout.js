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
import EnumTimeUnitPushTimeout from './EnumTimeUnitPushTimeout';

/**
 * The DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout model module.
 * @module model/DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout {
    /**
     * Constructs a new <code>DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout</code>.
     * @alias module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout
     * @param duration {Number} The amount of time a user has to respond to a push notification before it expires. Minimum is 40 seconds and maximum is 150 seconds. If this parameter is not provided, the duration is set to 40 seconds.
     * @param timeUnit {module:model/EnumTimeUnitPushTimeout} 
     */
    constructor(duration, timeUnit) { 
        
        DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.initialize(this, duration, timeUnit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, duration, timeUnit) { 
        obj['duration'] = duration || 40;
        obj['timeUnit'] = timeUnit;
    }

    /**
     * Constructs a <code>DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout} obj Optional instance to populate.
     * @return {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout} The populated <code>DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout();

            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('timeUnit')) {
                obj['timeUnit'] = EnumTimeUnitPushTimeout.constructFromObject(data['timeUnit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.RequiredProperties = ["duration", "timeUnit"];

/**
 * The amount of time a user has to respond to a push notification before it expires. Minimum is 40 seconds and maximum is 150 seconds. If this parameter is not provided, the duration is set to 40 seconds.
 * @member {Number} duration
 * @default 40
 */
DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.prototype['duration'] = 40;

/**
 * @member {module:model/EnumTimeUnitPushTimeout} timeUnit
 */
DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.prototype['timeUnit'] = undefined;






export default DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout;

