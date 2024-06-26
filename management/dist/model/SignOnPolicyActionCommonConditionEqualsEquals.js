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
 * The SignOnPolicyActionCommonConditionEqualsEquals model module.
 * @module model/SignOnPolicyActionCommonConditionEqualsEquals
 * @version 2023-06-29
 */
class SignOnPolicyActionCommonConditionEqualsEquals {
  /**
   * Constructs a new <code>SignOnPolicyActionCommonConditionEqualsEquals</code>.
   * @alias module:model/SignOnPolicyActionCommonConditionEqualsEquals
   * @param {(module:model/Boolean|module:model/String)} instance The actual instance to initialize SignOnPolicyActionCommonConditionEqualsEquals.
   */
  constructor(instance = null) {
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      // validate string
      if (!(typeof instance === 'string')) {
        throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
      }
      this.actualInstance = instance;
      match++;
    } catch (err) {
      // json data failed to deserialize into String
      errorMessages.push("Failed to construct String: " + err);
    }
    try {
      // validate boolean
      if (!(typeof instance === 'boolean')) {
        throw new Error("Invalid value. Must be boolean. Input: " + JSON.stringify(instance));
      }
      this.actualInstance = instance;
      match++;
    } catch (err) {
      // json data failed to deserialize into Boolean
      errorMessages.push("Failed to construct Boolean: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `SignOnPolicyActionCommonConditionEqualsEquals` with oneOf schemas Boolean, String. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `SignOnPolicyActionCommonConditionEqualsEquals` with oneOf schemas Boolean, String. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>SignOnPolicyActionCommonConditionEqualsEquals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionCommonConditionEqualsEquals} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionCommonConditionEqualsEquals} The populated <code>SignOnPolicyActionCommonConditionEqualsEquals</code> instance.
   */
  static constructFromObject(data, obj) {
    return new SignOnPolicyActionCommonConditionEqualsEquals(data);
  }

  /**
   * Gets the actual instance, which can be <code>Boolean</code>, <code>String</code>.
   * @return {(module:model/Boolean|module:model/String)} The actual instance.
   */
  getActualInstance() {
    return this.actualInstance;
  }

  /**
   * Sets the actual instance, which can be <code>Boolean</code>, <code>String</code>.
   * @param {(module:model/Boolean|module:model/String)} obj The actual instance.
   */
  setActualInstance(obj) {
    this.actualInstance = SignOnPolicyActionCommonConditionEqualsEquals.constructFromObject(obj).getActualInstance();
  }

  /**
   * Returns the JSON representation of the actual instance.
   * @return {string}
   */
  toJSON = function () {
    return this.getActualInstance();
  };

  /**
   * Create an instance of SignOnPolicyActionCommonConditionEqualsEquals from a JSON string.
   * @param {string} json_string JSON string.
   * @return {module:model/SignOnPolicyActionCommonConditionEqualsEquals} An instance of SignOnPolicyActionCommonConditionEqualsEquals.
   */
  static fromJSON = function (json_string) {
    return SignOnPolicyActionCommonConditionEqualsEquals.constructFromObject(JSON.parse(json_string));
  };
}
SignOnPolicyActionCommonConditionEqualsEquals.OneOf = ["Boolean", "String"];
export default SignOnPolicyActionCommonConditionEqualsEquals;