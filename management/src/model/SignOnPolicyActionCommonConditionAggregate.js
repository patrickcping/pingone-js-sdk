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
import SignOnPolicyActionCommonConditionAnonymousNetwork from './SignOnPolicyActionCommonConditionAnonymousNetwork';
import SignOnPolicyActionCommonConditionEquals from './SignOnPolicyActionCommonConditionEquals';
import SignOnPolicyActionCommonConditionEqualsEquals from './SignOnPolicyActionCommonConditionEqualsEquals';
import SignOnPolicyActionCommonConditionGeovelocity from './SignOnPolicyActionCommonConditionGeovelocity';
import SignOnPolicyActionCommonConditionGreater from './SignOnPolicyActionCommonConditionGreater';
import SignOnPolicyActionCommonConditionIPRange from './SignOnPolicyActionCommonConditionIPRange';
import SignOnPolicyActionCommonConditionIPRisk from './SignOnPolicyActionCommonConditionIPRisk';
import SignOnPolicyActionCommonConditionIPRiskIpRisk from './SignOnPolicyActionCommonConditionIPRiskIpRisk';

/**
 * The SignOnPolicyActionCommonConditionAggregate model module.
 * @module model/SignOnPolicyActionCommonConditionAggregate
 * @version 2023-06-29
 */
class SignOnPolicyActionCommonConditionAggregate {
    /**
     * Constructs a new <code>SignOnPolicyActionCommonConditionAggregate</code>.
     * @alias module:model/SignOnPolicyActionCommonConditionAggregate
     * @param {(module:model/SignOnPolicyActionCommonConditionAnonymousNetwork|module:model/SignOnPolicyActionCommonConditionEquals|module:model/SignOnPolicyActionCommonConditionGeovelocity|module:model/SignOnPolicyActionCommonConditionGreater|module:model/SignOnPolicyActionCommonConditionIPRange|module:model/SignOnPolicyActionCommonConditionIPRisk)} instance The actual instance to initialize SignOnPolicyActionCommonConditionAggregate.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "SignOnPolicyActionCommonConditionGreater") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SignOnPolicyActionCommonConditionGreater.validateJSON(instance); // throw an exception if no match
                // create SignOnPolicyActionCommonConditionGreater from JS object
                this.actualInstance = SignOnPolicyActionCommonConditionGreater.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SignOnPolicyActionCommonConditionGreater
            errorMessages.push("Failed to construct SignOnPolicyActionCommonConditionGreater: " + err)
        }

        try {
            if (typeof instance === "SignOnPolicyActionCommonConditionIPRisk") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SignOnPolicyActionCommonConditionIPRisk.validateJSON(instance); // throw an exception if no match
                // create SignOnPolicyActionCommonConditionIPRisk from JS object
                this.actualInstance = SignOnPolicyActionCommonConditionIPRisk.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SignOnPolicyActionCommonConditionIPRisk
            errorMessages.push("Failed to construct SignOnPolicyActionCommonConditionIPRisk: " + err)
        }

        try {
            if (typeof instance === "SignOnPolicyActionCommonConditionIPRange") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SignOnPolicyActionCommonConditionIPRange.validateJSON(instance); // throw an exception if no match
                // create SignOnPolicyActionCommonConditionIPRange from JS object
                this.actualInstance = SignOnPolicyActionCommonConditionIPRange.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SignOnPolicyActionCommonConditionIPRange
            errorMessages.push("Failed to construct SignOnPolicyActionCommonConditionIPRange: " + err)
        }

        try {
            if (typeof instance === "SignOnPolicyActionCommonConditionGeovelocity") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SignOnPolicyActionCommonConditionGeovelocity.validateJSON(instance); // throw an exception if no match
                // create SignOnPolicyActionCommonConditionGeovelocity from JS object
                this.actualInstance = SignOnPolicyActionCommonConditionGeovelocity.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SignOnPolicyActionCommonConditionGeovelocity
            errorMessages.push("Failed to construct SignOnPolicyActionCommonConditionGeovelocity: " + err)
        }

        try {
            if (typeof instance === "SignOnPolicyActionCommonConditionAnonymousNetwork") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SignOnPolicyActionCommonConditionAnonymousNetwork.validateJSON(instance); // throw an exception if no match
                // create SignOnPolicyActionCommonConditionAnonymousNetwork from JS object
                this.actualInstance = SignOnPolicyActionCommonConditionAnonymousNetwork.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SignOnPolicyActionCommonConditionAnonymousNetwork
            errorMessages.push("Failed to construct SignOnPolicyActionCommonConditionAnonymousNetwork: " + err)
        }

        try {
            if (typeof instance === "SignOnPolicyActionCommonConditionEquals") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SignOnPolicyActionCommonConditionEquals.validateJSON(instance); // throw an exception if no match
                // create SignOnPolicyActionCommonConditionEquals from JS object
                this.actualInstance = SignOnPolicyActionCommonConditionEquals.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SignOnPolicyActionCommonConditionEquals
            errorMessages.push("Failed to construct SignOnPolicyActionCommonConditionEquals: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `SignOnPolicyActionCommonConditionAggregate` with oneOf schemas SignOnPolicyActionCommonConditionAnonymousNetwork, SignOnPolicyActionCommonConditionEquals, SignOnPolicyActionCommonConditionGeovelocity, SignOnPolicyActionCommonConditionGreater, SignOnPolicyActionCommonConditionIPRange, SignOnPolicyActionCommonConditionIPRisk. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `SignOnPolicyActionCommonConditionAggregate` with oneOf schemas SignOnPolicyActionCommonConditionAnonymousNetwork, SignOnPolicyActionCommonConditionEquals, SignOnPolicyActionCommonConditionGeovelocity, SignOnPolicyActionCommonConditionGreater, SignOnPolicyActionCommonConditionIPRange, SignOnPolicyActionCommonConditionIPRisk. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>SignOnPolicyActionCommonConditionAggregate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignOnPolicyActionCommonConditionAggregate} obj Optional instance to populate.
     * @return {module:model/SignOnPolicyActionCommonConditionAggregate} The populated <code>SignOnPolicyActionCommonConditionAggregate</code> instance.
     */
    static constructFromObject(data, obj) {
        return new SignOnPolicyActionCommonConditionAggregate(data);
    }

    /**
     * Gets the actual instance, which can be <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code>, <code>SignOnPolicyActionCommonConditionEquals</code>, <code>SignOnPolicyActionCommonConditionGeovelocity</code>, <code>SignOnPolicyActionCommonConditionGreater</code>, <code>SignOnPolicyActionCommonConditionIPRange</code>, <code>SignOnPolicyActionCommonConditionIPRisk</code>.
     * @return {(module:model/SignOnPolicyActionCommonConditionAnonymousNetwork|module:model/SignOnPolicyActionCommonConditionEquals|module:model/SignOnPolicyActionCommonConditionGeovelocity|module:model/SignOnPolicyActionCommonConditionGreater|module:model/SignOnPolicyActionCommonConditionIPRange|module:model/SignOnPolicyActionCommonConditionIPRisk)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code>, <code>SignOnPolicyActionCommonConditionEquals</code>, <code>SignOnPolicyActionCommonConditionGeovelocity</code>, <code>SignOnPolicyActionCommonConditionGreater</code>, <code>SignOnPolicyActionCommonConditionIPRange</code>, <code>SignOnPolicyActionCommonConditionIPRisk</code>.
     * @param {(module:model/SignOnPolicyActionCommonConditionAnonymousNetwork|module:model/SignOnPolicyActionCommonConditionEquals|module:model/SignOnPolicyActionCommonConditionGeovelocity|module:model/SignOnPolicyActionCommonConditionGreater|module:model/SignOnPolicyActionCommonConditionIPRange|module:model/SignOnPolicyActionCommonConditionIPRisk)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = SignOnPolicyActionCommonConditionAggregate.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of SignOnPolicyActionCommonConditionAggregate from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/SignOnPolicyActionCommonConditionAggregate} An instance of SignOnPolicyActionCommonConditionAggregate.
     */
    static fromJSON = function(json_string){
        return SignOnPolicyActionCommonConditionAggregate.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * An integer that specifies the maximum number of seconds to wait since the last sign on before prompting for a new sign-on action.
 * @member {Number} greater
 */
SignOnPolicyActionCommonConditionAggregate.prototype['greater'] = undefined;

/**
 * A string representing a condition variable.  For more information, see documenation at https://apidocs.pingidentity.com/pingone/platform/v1/api/#sign-on-policy-actions .
 * @member {String} secondsSince
 */
SignOnPolicyActionCommonConditionAggregate.prototype['secondsSince'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonConditionIPRiskIpRisk} ipRisk
 */
SignOnPolicyActionCommonConditionAggregate.prototype['ipRisk'] = undefined;

/**
 * @member {String} valid
 */
SignOnPolicyActionCommonConditionAggregate.prototype['valid'] = undefined;

/**
 * @member {String} contains
 */
SignOnPolicyActionCommonConditionAggregate.prototype['contains'] = undefined;

/**
 * @member {Array.<String>} ipRange
 */
SignOnPolicyActionCommonConditionAggregate.prototype['ipRange'] = undefined;

/**
 * @member {String} geoVelocity
 */
SignOnPolicyActionCommonConditionAggregate.prototype['geoVelocity'] = undefined;

/**
 * @member {Array.<String>} anonymousNetwork
 */
SignOnPolicyActionCommonConditionAggregate.prototype['anonymousNetwork'] = undefined;

/**
 * @member {String} value
 */
SignOnPolicyActionCommonConditionAggregate.prototype['value'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonConditionEqualsEquals} equals
 */
SignOnPolicyActionCommonConditionAggregate.prototype['equals'] = undefined;


SignOnPolicyActionCommonConditionAggregate.OneOf = ["SignOnPolicyActionCommonConditionAnonymousNetwork", "SignOnPolicyActionCommonConditionEquals", "SignOnPolicyActionCommonConditionGeovelocity", "SignOnPolicyActionCommonConditionGreater", "SignOnPolicyActionCommonConditionIPRange", "SignOnPolicyActionCommonConditionIPRisk"];

export default SignOnPolicyActionCommonConditionAggregate;

