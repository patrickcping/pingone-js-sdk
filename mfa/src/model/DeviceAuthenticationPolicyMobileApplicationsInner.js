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
import DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment from './DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment';
import DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization from './DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization';
import DeviceAuthenticationPolicyMobileApplicationsInnerOtp from './DeviceAuthenticationPolicyMobileApplicationsInnerOtp';
import DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime from './DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime';
import DeviceAuthenticationPolicyMobileApplicationsInnerPush from './DeviceAuthenticationPolicyMobileApplicationsInnerPush';
import DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit from './DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit';
import DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout from './DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout';
import EnumMFADevicePolicyMobileIntegrityDetection from './EnumMFADevicePolicyMobileIntegrityDetection';

/**
 * The DeviceAuthenticationPolicyMobileApplicationsInner model module.
 * @module model/DeviceAuthenticationPolicyMobileApplicationsInner
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyMobileApplicationsInner {
    /**
     * Constructs a new <code>DeviceAuthenticationPolicyMobileApplicationsInner</code>.
     * @alias module:model/DeviceAuthenticationPolicyMobileApplicationsInner
     * @param id {String} The application's ID.
     */
    constructor(id) { 
        
        DeviceAuthenticationPolicyMobileApplicationsInner.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>DeviceAuthenticationPolicyMobileApplicationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceAuthenticationPolicyMobileApplicationsInner} obj Optional instance to populate.
     * @return {module:model/DeviceAuthenticationPolicyMobileApplicationsInner} The populated <code>DeviceAuthenticationPolicyMobileApplicationsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceAuthenticationPolicyMobileApplicationsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('push')) {
                obj['push'] = DeviceAuthenticationPolicyMobileApplicationsInnerPush.constructFromObject(data['push']);
            }
            if (data.hasOwnProperty('pushTimeout')) {
                obj['pushTimeout'] = DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.constructFromObject(data['pushTimeout']);
            }
            if (data.hasOwnProperty('pairingKeyLifetime')) {
                obj['pairingKeyLifetime'] = DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime.constructFromObject(data['pairingKeyLifetime']);
            }
            if (data.hasOwnProperty('pushLimit')) {
                obj['pushLimit'] = DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit.constructFromObject(data['pushLimit']);
            }
            if (data.hasOwnProperty('otp')) {
                obj['otp'] = DeviceAuthenticationPolicyMobileApplicationsInnerOtp.constructFromObject(data['otp']);
            }
            if (data.hasOwnProperty('deviceAuthorization')) {
                obj['deviceAuthorization'] = DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization.constructFromObject(data['deviceAuthorization']);
            }
            if (data.hasOwnProperty('autoEnrollment')) {
                obj['autoEnrollment'] = DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment.constructFromObject(data['autoEnrollment']);
            }
            if (data.hasOwnProperty('pairingDisabled')) {
                obj['pairingDisabled'] = ApiClient.convertToType(data['pairingDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('integrityDetection')) {
                obj['integrityDetection'] = EnumMFADevicePolicyMobileIntegrityDetection.constructFromObject(data['integrityDetection']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyMobileApplicationsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyMobileApplicationsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceAuthenticationPolicyMobileApplicationsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `push`
        if (data['push']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerPush.validateJSON(data['push']);
        }
        // validate the optional field `pushTimeout`
        if (data['pushTimeout']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout.validateJSON(data['pushTimeout']);
        }
        // validate the optional field `pairingKeyLifetime`
        if (data['pairingKeyLifetime']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime.validateJSON(data['pairingKeyLifetime']);
        }
        // validate the optional field `pushLimit`
        if (data['pushLimit']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit.validateJSON(data['pushLimit']);
        }
        // validate the optional field `otp`
        if (data['otp']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerOtp.validateJSON(data['otp']);
        }
        // validate the optional field `deviceAuthorization`
        if (data['deviceAuthorization']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization.validateJSON(data['deviceAuthorization']);
        }
        // validate the optional field `autoEnrollment`
        if (data['autoEnrollment']) { // data not null
          DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment.validateJSON(data['autoEnrollment']);
        }

        return true;
    }


}

DeviceAuthenticationPolicyMobileApplicationsInner.RequiredProperties = ["id"];

/**
 * The application's ID.
 * @member {String} id
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['id'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPush} push
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['push'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPushTimeout} pushTimeout
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['pushTimeout'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPairingKeyLifetime} pairingKeyLifetime
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['pairingKeyLifetime'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerPushLimit} pushLimit
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['pushLimit'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerOtp} otp
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['otp'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerDeviceAuthorization} deviceAuthorization
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['deviceAuthorization'] = undefined;

/**
 * @member {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerAutoEnrollment} autoEnrollment
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['autoEnrollment'] = undefined;

/**
 * You can set `pairingDisabled` to true to prevent users from pairing new devices with the relevant method. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.
 * @member {Boolean} pairingDisabled
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['pairingDisabled'] = undefined;

/**
 * @member {module:model/EnumMFADevicePolicyMobileIntegrityDetection} integrityDetection
 */
DeviceAuthenticationPolicyMobileApplicationsInner.prototype['integrityDetection'] = undefined;






export default DeviceAuthenticationPolicyMobileApplicationsInner;

