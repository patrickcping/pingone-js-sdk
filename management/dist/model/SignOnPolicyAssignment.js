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
import LinksHATEOAS from './LinksHATEOAS';
import ObjectApplication from './ObjectApplication';
import ObjectEnvironment from './ObjectEnvironment';
import SignOnPolicyActionCommonSignOnPolicy from './SignOnPolicyActionCommonSignOnPolicy';

/**
 * The SignOnPolicyAssignment model module.
 * @module model/SignOnPolicyAssignment
 * @version 2023-06-29
 */
class SignOnPolicyAssignment {
  /**
   * Constructs a new <code>SignOnPolicyAssignment</code>.
   * @alias module:model/SignOnPolicyAssignment
   * @param priority {Number} The order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first.
   * @param signOnPolicy {module:model/SignOnPolicyActionCommonSignOnPolicy} 
   */
  constructor(priority, signOnPolicy) {
    SignOnPolicyAssignment.initialize(this, priority, signOnPolicy);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, priority, signOnPolicy) {
    obj['priority'] = priority;
    obj['signOnPolicy'] = signOnPolicy;
  }

  /**
   * Constructs a <code>SignOnPolicyAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyAssignment} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyAssignment} The populated <code>SignOnPolicyAssignment</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyAssignment();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('application')) {
        obj['application'] = ObjectApplication.constructFromObject(data['application']);
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
      if (data.hasOwnProperty('signOnPolicy')) {
        obj['signOnPolicy'] = SignOnPolicyActionCommonSignOnPolicy.constructFromObject(data['signOnPolicy']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyAssignment</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyAssignment</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyAssignment.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `application`
    if (data['application']) {
      // data not null
      ObjectApplication.validateJSON(data['application']);
    }
    // validate the optional field `environment`
    if (data['environment']) {
      // data not null
      ObjectEnvironment.validateJSON(data['environment']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // validate the optional field `signOnPolicy`
    if (data['signOnPolicy']) {
      // data not null
      SignOnPolicyActionCommonSignOnPolicy.validateJSON(data['signOnPolicy']);
    }
    return true;
  }
}
SignOnPolicyAssignment.RequiredProperties = ["priority", "signOnPolicy"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
SignOnPolicyAssignment.prototype['_links'] = undefined;

/**
 * @member {module:model/ObjectApplication} application
 */
SignOnPolicyAssignment.prototype['application'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
SignOnPolicyAssignment.prototype['environment'] = undefined;

/**
 * A string that specifies the sign-on policy assignment resource’s unique identifier.
 * @member {String} id
 */
SignOnPolicyAssignment.prototype['id'] = undefined;

/**
 * The order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first.
 * @member {Number} priority
 */
SignOnPolicyAssignment.prototype['priority'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonSignOnPolicy} signOnPolicy
 */
SignOnPolicyAssignment.prototype['signOnPolicy'] = undefined;
export default SignOnPolicyAssignment;