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
* Enum class EnumSignOnPolicyType.
* @enum {}
* @readonly
*/
export default class EnumSignOnPolicyType {
    
        /**
         * value: "LOGIN"
         * @const
         */
        "LOGIN" = "LOGIN";

    
        /**
         * value: "MULTI_FACTOR_AUTHENTICATION"
         * @const
         */
        "MULTI_FACTOR_AUTHENTICATION" = "MULTI_FACTOR_AUTHENTICATION";

    
        /**
         * value: "IDENTIFIER_FIRST"
         * @const
         */
        "IDENTIFIER_FIRST" = "IDENTIFIER_FIRST";

    
        /**
         * value: "IDENTITY_PROVIDER"
         * @const
         */
        "IDENTITY_PROVIDER" = "IDENTITY_PROVIDER";

    
        /**
         * value: "PROGRESSIVE_PROFILING"
         * @const
         */
        "PROGRESSIVE_PROFILING" = "PROGRESSIVE_PROFILING";

    
        /**
         * value: "AGREEMENT"
         * @const
         */
        "AGREEMENT" = "AGREEMENT";

    
        /**
         * value: "PINGID_WINLOGIN_PASSWORDLESS_AUTHENTICATION"
         * @const
         */
        "PINGID_WINLOGIN_PASSWORDLESS_AUTHENTICATION" = "PINGID_WINLOGIN_PASSWORDLESS_AUTHENTICATION";

    
        /**
         * value: "PINGID_AUTHENTICATION"
         * @const
         */
        "PINGID_AUTHENTICATION" = "PINGID_AUTHENTICATION";

    

    /**
    * Returns a <code>EnumSignOnPolicyType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumSignOnPolicyType} The enum <code>EnumSignOnPolicyType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
