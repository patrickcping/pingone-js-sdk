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
import OTPDeviceConfigurationOtpDeliveriesCooldown from './OTPDeviceConfigurationOtpDeliveriesCooldown';

/**
 * The OTPDeviceConfigurationOtpDeliveries model module.
 * @module model/OTPDeviceConfigurationOtpDeliveries
 * @version 2023-07-20
 */
class OTPDeviceConfigurationOtpDeliveries {
    /**
     * Constructs a new <code>OTPDeviceConfigurationOtpDeliveries</code>.
     * OTP delivery configuration.
     * @alias module:model/OTPDeviceConfigurationOtpDeliveries
     * @param count {Number} Count of OTP deliveries.
     * @param cooldown {module:model/OTPDeviceConfigurationOtpDeliveriesCooldown} 
     */
    constructor(count, cooldown) { 
        
        OTPDeviceConfigurationOtpDeliveries.initialize(this, count, cooldown);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count, cooldown) { 
        obj['count'] = count;
        obj['cooldown'] = cooldown;
    }

    /**
     * Constructs a <code>OTPDeviceConfigurationOtpDeliveries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OTPDeviceConfigurationOtpDeliveries} obj Optional instance to populate.
     * @return {module:model/OTPDeviceConfigurationOtpDeliveries} The populated <code>OTPDeviceConfigurationOtpDeliveries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OTPDeviceConfigurationOtpDeliveries();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('cooldown')) {
                obj['cooldown'] = OTPDeviceConfigurationOtpDeliveriesCooldown.constructFromObject(data['cooldown']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OTPDeviceConfigurationOtpDeliveries</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPDeviceConfigurationOtpDeliveries</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OTPDeviceConfigurationOtpDeliveries.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cooldown`
        if (data['cooldown']) { // data not null
          OTPDeviceConfigurationOtpDeliveriesCooldown.validateJSON(data['cooldown']);
        }

        return true;
    }


}

OTPDeviceConfigurationOtpDeliveries.RequiredProperties = ["count", "cooldown"];

/**
 * Count of OTP deliveries.
 * @member {Number} count
 */
OTPDeviceConfigurationOtpDeliveries.prototype['count'] = undefined;

/**
 * @member {module:model/OTPDeviceConfigurationOtpDeliveriesCooldown} cooldown
 */
OTPDeviceConfigurationOtpDeliveries.prototype['cooldown'] = undefined;






export default OTPDeviceConfigurationOtpDeliveries;

