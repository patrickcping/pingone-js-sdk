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
 * The FIDO2PolicyBackupEligibility model module.
 * @module model/FIDO2PolicyBackupEligibility
 * @version 2023-06-29
 */
class FIDO2PolicyBackupEligibility {
    /**
     * Constructs a new <code>FIDO2PolicyBackupEligibility</code>.
     * Used to control whether users should be allowed to register and authenticate with a device that uses cloud-synced credentials, such as a passkey.
     * @alias module:model/FIDO2PolicyBackupEligibility
     * @param allow {Boolean} Set to `true` if you want to let users register and authenticate with a device that uses cloud-synced credentials. Set to `false` if you don't want to allow this.
     * @param enforceDuringAuthentication {Boolean} Set to `true` if you want the backup eligibility of the device to be checked again at each authentication attempt and not just once during registration. Set to `false` to have it checked only at registration.
     */
    constructor(allow, enforceDuringAuthentication) { 
        
        FIDO2PolicyBackupEligibility.initialize(this, allow, enforceDuringAuthentication);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allow, enforceDuringAuthentication) { 
        obj['allow'] = allow;
        obj['enforceDuringAuthentication'] = enforceDuringAuthentication;
    }

    /**
     * Constructs a <code>FIDO2PolicyBackupEligibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FIDO2PolicyBackupEligibility} obj Optional instance to populate.
     * @return {module:model/FIDO2PolicyBackupEligibility} The populated <code>FIDO2PolicyBackupEligibility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FIDO2PolicyBackupEligibility();

            if (data.hasOwnProperty('allow')) {
                obj['allow'] = ApiClient.convertToType(data['allow'], 'Boolean');
            }
            if (data.hasOwnProperty('enforceDuringAuthentication')) {
                obj['enforceDuringAuthentication'] = ApiClient.convertToType(data['enforceDuringAuthentication'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FIDO2PolicyBackupEligibility</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FIDO2PolicyBackupEligibility</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FIDO2PolicyBackupEligibility.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

FIDO2PolicyBackupEligibility.RequiredProperties = ["allow", "enforceDuringAuthentication"];

/**
 * Set to `true` if you want to let users register and authenticate with a device that uses cloud-synced credentials. Set to `false` if you don't want to allow this.
 * @member {Boolean} allow
 */
FIDO2PolicyBackupEligibility.prototype['allow'] = undefined;

/**
 * Set to `true` if you want the backup eligibility of the device to be checked again at each authentication attempt and not just once during registration. Set to `false` to have it checked only at registration.
 * @member {Boolean} enforceDuringAuthentication
 */
FIDO2PolicyBackupEligibility.prototype['enforceDuringAuthentication'] = undefined;






export default FIDO2PolicyBackupEligibility;

