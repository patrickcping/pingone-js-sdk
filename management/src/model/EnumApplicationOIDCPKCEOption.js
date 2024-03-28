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
* Enum class EnumApplicationOIDCPKCEOption.
* @enum {}
* @readonly
*/
export default class EnumApplicationOIDCPKCEOption {
    
        /**
         * value: "OPTIONAL"
         * @const
         */
        "OPTIONAL" = "OPTIONAL";

    
        /**
         * value: "REQUIRED"
         * @const
         */
        "REQUIRED" = "REQUIRED";

    
        /**
         * value: "S256_REQUIRED"
         * @const
         */
        "S256_REQUIRED" = "S256_REQUIRED";

    

    /**
    * Returns a <code>EnumApplicationOIDCPKCEOption</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumApplicationOIDCPKCEOption} The enum <code>EnumApplicationOIDCPKCEOption</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
