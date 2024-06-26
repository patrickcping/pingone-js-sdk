/**
 * PingOne Platform API - SSO and Base
 * The PingOne Platform API covering the base and SSO services (otherwise known as the Management APIs)
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
* Enum class EnumLicenseStatus.
* @enum {}
* @readonly
*/
export default class EnumLicenseStatus {
    
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE" = "ACTIVE";

    
        /**
         * value: "EXPIRED"
         * @const
         */
        "EXPIRED" = "EXPIRED";

    
        /**
         * value: "FUTURE"
         * @const
         */
        "FUTURE" = "FUTURE";

    
        /**
         * value: "TERMINATED"
         * @const
         */
        "TERMINATED" = "TERMINATED";

    

    /**
    * Returns a <code>EnumLicenseStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumLicenseStatus} The enum <code>EnumLicenseStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

