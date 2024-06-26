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
import EnumCredentialIssuanceRuleAutomationMethod from './EnumCredentialIssuanceRuleAutomationMethod';

/**
 * The CredentialIssuanceRuleAutomation model module.
 * @module model/CredentialIssuanceRuleAutomation
 * @version 2023-06-29
 */
class CredentialIssuanceRuleAutomation {
    /**
     * Constructs a new <code>CredentialIssuanceRuleAutomation</code>.
     * @alias module:model/CredentialIssuanceRuleAutomation
     * @param issue {module:model/EnumCredentialIssuanceRuleAutomationMethod} 
     * @param update {module:model/EnumCredentialIssuanceRuleAutomationMethod} 
     * @param revoke {module:model/EnumCredentialIssuanceRuleAutomationMethod} 
     */
    constructor(issue, update, revoke) { 
        
        CredentialIssuanceRuleAutomation.initialize(this, issue, update, revoke);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issue, update, revoke) { 
        obj['issue'] = issue;
        obj['update'] = update;
        obj['revoke'] = revoke;
    }

    /**
     * Constructs a <code>CredentialIssuanceRuleAutomation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialIssuanceRuleAutomation} obj Optional instance to populate.
     * @return {module:model/CredentialIssuanceRuleAutomation} The populated <code>CredentialIssuanceRuleAutomation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CredentialIssuanceRuleAutomation();

            if (data.hasOwnProperty('issue')) {
                obj['issue'] = EnumCredentialIssuanceRuleAutomationMethod.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = EnumCredentialIssuanceRuleAutomationMethod.constructFromObject(data['update']);
            }
            if (data.hasOwnProperty('revoke')) {
                obj['revoke'] = EnumCredentialIssuanceRuleAutomationMethod.constructFromObject(data['revoke']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CredentialIssuanceRuleAutomation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialIssuanceRuleAutomation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CredentialIssuanceRuleAutomation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

CredentialIssuanceRuleAutomation.RequiredProperties = ["issue", "update", "revoke"];

/**
 * @member {module:model/EnumCredentialIssuanceRuleAutomationMethod} issue
 */
CredentialIssuanceRuleAutomation.prototype['issue'] = undefined;

/**
 * @member {module:model/EnumCredentialIssuanceRuleAutomationMethod} update
 */
CredentialIssuanceRuleAutomation.prototype['update'] = undefined;

/**
 * @member {module:model/EnumCredentialIssuanceRuleAutomationMethod} revoke
 */
CredentialIssuanceRuleAutomation.prototype['revoke'] = undefined;






export default CredentialIssuanceRuleAutomation;

