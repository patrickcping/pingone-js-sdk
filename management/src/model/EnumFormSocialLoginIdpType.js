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
* Enum class EnumFormSocialLoginIdpType.
* @enum {}
* @readonly
*/
export default class EnumFormSocialLoginIdpType {
    
        /**
         * value: "FACEBOOK"
         * @const
         */
        "FACEBOOK" = "FACEBOOK";

    
        /**
         * value: "APPLE"
         * @const
         */
        "APPLE" = "APPLE";

    
        /**
         * value: "GOOGLE"
         * @const
         */
        "GOOGLE" = "GOOGLE";

    
        /**
         * value: "AMAZON"
         * @const
         */
        "AMAZON" = "AMAZON";

    
        /**
         * value: "LINKEDIN"
         * @const
         */
        "LINKEDIN" = "LINKEDIN";

    
        /**
         * value: "MICROSOFT"
         * @const
         */
        "MICROSOFT" = "MICROSOFT";

    
        /**
         * value: "TWITTER"
         * @const
         */
        "TWITTER" = "TWITTER";

    
        /**
         * value: "YAHOO"
         * @const
         */
        "YAHOO" = "YAHOO";

    
        /**
         * value: "PAYPAL"
         * @const
         */
        "PAYPAL" = "PAYPAL";

    
        /**
         * value: "GITHUB"
         * @const
         */
        "GITHUB" = "GITHUB";

    
        /**
         * value: "OPENID_CONNECT"
         * @const
         */
        "OPENID_CONNECT" = "OPENID_CONNECT";

    
        /**
         * value: "SAML"
         * @const
         */
        "SAML" = "SAML";

    
        /**
         * value: "LDAP"
         * @const
         */
        "LDAP" = "LDAP";

    

    /**
    * Returns a <code>EnumFormSocialLoginIdpType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumFormSocialLoginIdpType} The enum <code>EnumFormSocialLoginIdpType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

