/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
* Enum class EnumCredentialIssuanceRuleStagedChangeAction.
* @enum {}
* @readonly
*/
export default class EnumCredentialIssuanceRuleStagedChangeAction {
    
        /**
         * value: "ISSUE"
         * @const
         */
        "ISSUE" = "ISSUE";

    
        /**
         * value: "UPDATE"
         * @const
         */
        "UPDATE" = "UPDATE";

    
        /**
         * value: "REVOKE"
         * @const
         */
        "REVOKE" = "REVOKE";

    

    /**
    * Returns a <code>EnumCredentialIssuanceRuleStagedChangeAction</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumCredentialIssuanceRuleStagedChangeAction} The enum <code>EnumCredentialIssuanceRuleStagedChangeAction</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

