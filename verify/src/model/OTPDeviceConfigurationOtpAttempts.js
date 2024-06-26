/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OTPDeviceConfigurationOtpAttempts model module.
 * @module model/OTPDeviceConfigurationOtpAttempts
 * @version 2023-07-20
 */
class OTPDeviceConfigurationOtpAttempts {
    /**
     * Constructs a new <code>OTPDeviceConfigurationOtpAttempts</code>.
     * OTP attempts configuration.
     * @alias module:model/OTPDeviceConfigurationOtpAttempts
     * @param count {Number} Count of OTP failures.
     */
    constructor(count) { 
        
        OTPDeviceConfigurationOtpAttempts.initialize(this, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count) { 
        obj['count'] = count;
    }

    /**
     * Constructs a <code>OTPDeviceConfigurationOtpAttempts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OTPDeviceConfigurationOtpAttempts} obj Optional instance to populate.
     * @return {module:model/OTPDeviceConfigurationOtpAttempts} The populated <code>OTPDeviceConfigurationOtpAttempts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OTPDeviceConfigurationOtpAttempts();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OTPDeviceConfigurationOtpAttempts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPDeviceConfigurationOtpAttempts</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OTPDeviceConfigurationOtpAttempts.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

OTPDeviceConfigurationOtpAttempts.RequiredProperties = ["count"];

/**
 * Count of OTP failures.
 * @member {Number} count
 */
OTPDeviceConfigurationOtpAttempts.prototype['count'] = undefined;






export default OTPDeviceConfigurationOtpAttempts;

