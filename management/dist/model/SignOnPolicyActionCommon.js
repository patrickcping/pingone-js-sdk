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
import EnumSignOnPolicyType from './EnumSignOnPolicyType';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import SignOnPolicyActionCommonConditionOrOrInner from './SignOnPolicyActionCommonConditionOrOrInner';
import SignOnPolicyActionCommonSignOnPolicy from './SignOnPolicyActionCommonSignOnPolicy';

/**
 * The SignOnPolicyActionCommon model module.
 * @module model/SignOnPolicyActionCommon
 * @version 2023-06-29
 */
class SignOnPolicyActionCommon {
  /**
   * Constructs a new <code>SignOnPolicyActionCommon</code>.
   * @alias module:model/SignOnPolicyActionCommon
   * @param priority {Number} An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. This is a required property.
   * @param type {module:model/EnumSignOnPolicyType} 
   */
  constructor(priority, type) {
    SignOnPolicyActionCommon.initialize(this, priority, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, priority, type) {
    obj['priority'] = priority;
    obj['type'] = type;
  }

  /**
   * Constructs a <code>SignOnPolicyActionCommon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionCommon} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionCommon} The populated <code>SignOnPolicyActionCommon</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionCommon();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = SignOnPolicyActionCommonConditionOrOrInner.constructFromObject(data['condition']);
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
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumSignOnPolicyType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionCommon</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionCommon</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyActionCommon.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `condition`
    if (data['condition']) {
      // data not null
      SignOnPolicyActionCommonConditionOrOrInner.validateJSON(data['condition']);
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
SignOnPolicyActionCommon.RequiredProperties = ["priority", "type"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
SignOnPolicyActionCommon.prototype['_links'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonConditionOrOrInner} condition
 */
SignOnPolicyActionCommon.prototype['condition'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
SignOnPolicyActionCommon.prototype['environment'] = undefined;

/**
 * A string that specifies the sign-on policy assignment resource’s unique identifier.
 * @member {String} id
 */
SignOnPolicyActionCommon.prototype['id'] = undefined;

/**
 * An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. This is a required property.
 * @member {Number} priority
 */
SignOnPolicyActionCommon.prototype['priority'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonSignOnPolicy} signOnPolicy
 */
SignOnPolicyActionCommon.prototype['signOnPolicy'] = undefined;

/**
 * @member {module:model/EnumSignOnPolicyType} type
 */
SignOnPolicyActionCommon.prototype['type'] = undefined;
export default SignOnPolicyActionCommon;