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
* Enum class EnumFIDOAttestationRequirements.
* @enum {}
* @readonly
*/
export default class EnumFIDOAttestationRequirements {
    
        /**
         * value: "NONE"
         * @const
         */
        "NONE" = "NONE";

    
        /**
         * value: "AUDIT_ONLY"
         * @const
         */
        "AUDIT_ONLY" = "AUDIT_ONLY";

    
        /**
         * value: "GLOBAL"
         * @const
         */
        "GLOBAL" = "GLOBAL";

    
        /**
         * value: "CERTIFIED"
         * @const
         */
        "CERTIFIED" = "CERTIFIED";

    
        /**
         * value: "SPECIFIC"
         * @const
         */
        "SPECIFIC" = "SPECIFIC";

    

    /**
    * Returns a <code>EnumFIDOAttestationRequirements</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumFIDOAttestationRequirements} The enum <code>EnumFIDOAttestationRequirements</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

