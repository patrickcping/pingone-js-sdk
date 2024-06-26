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
* Enum class EnumTemplateName.
* @enum {}
* @readonly
*/
export default class EnumTemplateName {
    
        /**
         * value: "credential_issued"
         * @const
         */
        "credential_issued" = "credential_issued";

    
        /**
         * value: "credential_revoked"
         * @const
         */
        "credential_revoked" = "credential_revoked";

    
        /**
         * value: "credential_updated"
         * @const
         */
        "credential_updated" = "credential_updated";

    
        /**
         * value: "credential_verification"
         * @const
         */
        "credential_verification" = "credential_verification";

    
        /**
         * value: "device_pairing"
         * @const
         */
        "device_pairing" = "device_pairing";

    
        /**
         * value: "digital_wallet_pairing"
         * @const
         */
        "digital_wallet_pairing" = "digital_wallet_pairing";

    
        /**
         * value: "email_verification_admin"
         * @const
         */
        "email_verification_admin" = "email_verification_admin";

    
        /**
         * value: "email_verification_user"
         * @const
         */
        "email_verification_user" = "email_verification_user";

    
        /**
         * value: "email_phone_verification"
         * @const
         */
        "email_phone_verification" = "email_phone_verification";

    
        /**
         * value: "general"
         * @const
         */
        "general" = "general";

    
        /**
         * value: "id_verification"
         * @const
         */
        "id_verification" = "id_verification";

    
        /**
         * value: "new_device_paired"
         * @const
         */
        "new_device_paired" = "new_device_paired";

    
        /**
         * value: "recovery_code_template"
         * @const
         */
        "recovery_code_template" = "recovery_code_template";

    
        /**
         * value: "strong_authentication"
         * @const
         */
        "strong_authentication" = "strong_authentication";

    
        /**
         * value: "transaction"
         * @const
         */
        "transaction" = "transaction";

    
        /**
         * value: "verification_code_template"
         * @const
         */
        "verification_code_template" = "verification_code_template";

    

    /**
    * Returns a <code>EnumTemplateName</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumTemplateName} The enum <code>EnumTemplateName</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

