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
* Enum class EnumFIDOResidentKeyRequirement.
* @enum {}
* @readonly
*/
export default class EnumFIDOResidentKeyRequirement {
    
        /**
         * value: "DISCOURAGED"
         * @const
         */
        "DISCOURAGED" = "DISCOURAGED";

    
        /**
         * value: "REQUIRED"
         * @const
         */
        "REQUIRED" = "REQUIRED";

    

    /**
    * Returns a <code>EnumFIDOResidentKeyRequirement</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumFIDOResidentKeyRequirement} The enum <code>EnumFIDOResidentKeyRequirement</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

