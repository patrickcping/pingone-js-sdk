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
 * The OTPDeviceConfigurationOtpNotification model module.
 * @module model/OTPDeviceConfigurationOtpNotification
 * @version 2023-07-20
 */
class OTPDeviceConfigurationOtpNotification {
    /**
     * Constructs a new <code>OTPDeviceConfigurationOtpNotification</code>.
     * OTP notification template configuration.
     * @alias module:model/OTPDeviceConfigurationOtpNotification
     * @param templateName {String} 
     */
    constructor(templateName) { 
        
        OTPDeviceConfigurationOtpNotification.initialize(this, templateName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, templateName) { 
        obj['templateName'] = templateName;
    }

    /**
     * Constructs a <code>OTPDeviceConfigurationOtpNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OTPDeviceConfigurationOtpNotification} obj Optional instance to populate.
     * @return {module:model/OTPDeviceConfigurationOtpNotification} The populated <code>OTPDeviceConfigurationOtpNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OTPDeviceConfigurationOtpNotification();

            if (data.hasOwnProperty('templateName')) {
                obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
            }
            if (data.hasOwnProperty('variantName')) {
                obj['variantName'] = ApiClient.convertToType(data['variantName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OTPDeviceConfigurationOtpNotification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPDeviceConfigurationOtpNotification</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OTPDeviceConfigurationOtpNotification.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['templateName'] && !(typeof data['templateName'] === 'string' || data['templateName'] instanceof String)) {
            throw new Error("Expected the field `templateName` to be a primitive type in the JSON string but got " + data['templateName']);
        }
        // ensure the json data is a string
        if (data['variantName'] && !(typeof data['variantName'] === 'string' || data['variantName'] instanceof String)) {
            throw new Error("Expected the field `variantName` to be a primitive type in the JSON string but got " + data['variantName']);
        }

        return true;
    }


}

OTPDeviceConfigurationOtpNotification.RequiredProperties = ["templateName"];

/**
 * @member {String} templateName
 */
OTPDeviceConfigurationOtpNotification.prototype['templateName'] = undefined;

/**
 * @member {String} variantName
 */
OTPDeviceConfigurationOtpNotification.prototype['variantName'] = undefined;






export default OTPDeviceConfigurationOtpNotification;

