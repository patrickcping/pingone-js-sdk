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
/**
* Enum class EnumMFADevicePolicyNewDeviceNotification.
* @enum {}
* @readonly
*/
export default class EnumMFADevicePolicyNewDeviceNotification {
    
        /**
         * value: "NONE"
         * @const
         */
        "NONE" = "NONE";

    
        /**
         * value: "EMAIL_THEN_SMS"
         * @const
         */
        "EMAIL_THEN_SMS" = "EMAIL_THEN_SMS";

    
        /**
         * value: "SMS_THEN_EMAIL"
         * @const
         */
        "SMS_THEN_EMAIL" = "SMS_THEN_EMAIL";

    

    /**
    * Returns a <code>EnumMFADevicePolicyNewDeviceNotification</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumMFADevicePolicyNewDeviceNotification} The enum <code>EnumMFADevicePolicyNewDeviceNotification</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

