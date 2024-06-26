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
* Enum class EnumFormQrCodeType.
* @enum {}
* @readonly
*/
export default class EnumFormQrCodeType {
    
        /**
         * value: "MFA_AUTH"
         * @const
         */
        "MFA_AUTH" = "MFA_AUTH";

    

    /**
    * Returns a <code>EnumFormQrCodeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumFormQrCodeType} The enum <code>EnumFormQrCodeType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

