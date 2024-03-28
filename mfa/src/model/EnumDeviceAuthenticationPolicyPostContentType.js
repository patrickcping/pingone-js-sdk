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
* Enum class EnumDeviceAuthenticationPolicyPostContentType.
* @enum {}
* @readonly
*/
export default class EnumDeviceAuthenticationPolicyPostContentType {
    
        /**
         * value: "application/json"
         * @const
         */
        "json" = "application/json";

    
        /**
         * value: "application/vnd.pingidentity.deviceAuthenticationPolicy.fido2.migrate+json"
         * @const
         */
        "vnd.pingidentity.deviceAuthenticationPolicy.fido2.migrate+json" = "application/vnd.pingidentity.deviceAuthenticationPolicy.fido2.migrate+json";

    

    /**
    * Returns a <code>EnumDeviceAuthenticationPolicyPostContentType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumDeviceAuthenticationPolicyPostContentType} The enum <code>EnumDeviceAuthenticationPolicyPostContentType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

