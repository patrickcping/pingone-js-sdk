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
import SignOnPolicyActionCommon from './SignOnPolicyActionCommon';
import SignOnPolicyActionCommonConditionOrOrInner from './SignOnPolicyActionCommonConditionOrOrInner';
import SignOnPolicyActionCommonSignOnPolicy from './SignOnPolicyActionCommonSignOnPolicy';
import SignOnPolicyActionIDPAllOfIdentityProvider from './SignOnPolicyActionIDPAllOfIdentityProvider';
import SignOnPolicyActionIDPAllOfRegistration from './SignOnPolicyActionIDPAllOfRegistration';

/**
 * The SignOnPolicyActionIDP model module.
 * @module model/SignOnPolicyActionIDP
 * @version 2023-06-29
 */
class SignOnPolicyActionIDP {
  /**
   * Constructs a new <code>SignOnPolicyActionIDP</code>.
   * @alias module:model/SignOnPolicyActionIDP
   * @implements module:model/SignOnPolicyActionCommon
   * @param priority {Number} An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. This is a required property.
   * @param type {module:model/EnumSignOnPolicyType} 
   * @param identityProvider {module:model/SignOnPolicyActionIDPAllOfIdentityProvider} 
   */
  constructor(priority, type, identityProvider) {
    SignOnPolicyActionCommon.initialize(this, priority, type);
    SignOnPolicyActionIDP.initialize(this, priority, type, identityProvider);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, priority, type, identityProvider) {
    obj['priority'] = priority;
    obj['type'] = type;
    obj['identityProvider'] = identityProvider;
  }

  /**
   * Constructs a <code>SignOnPolicyActionIDP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionIDP} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionIDP} The populated <code>SignOnPolicyActionIDP</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionIDP();
      SignOnPolicyActionCommon.constructFromObject(data, obj);
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
      if (data.hasOwnProperty('acrValues')) {
        obj['acrValues'] = ApiClient.convertToType(data['acrValues'], 'String');
      }
      if (data.hasOwnProperty('identityProvider')) {
        obj['identityProvider'] = SignOnPolicyActionIDPAllOfIdentityProvider.constructFromObject(data['identityProvider']);
      }
      if (data.hasOwnProperty('passUserContext')) {
        obj['passUserContext'] = ApiClient.convertToType(data['passUserContext'], 'Boolean');
      }
      if (data.hasOwnProperty('registration')) {
        obj['registration'] = SignOnPolicyActionIDPAllOfRegistration.constructFromObject(data['registration']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionIDP</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionIDP</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyActionIDP.RequiredProperties) {
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
    // ensure the json data is a string
    if (data['acrValues'] && !(typeof data['acrValues'] === 'string' || data['acrValues'] instanceof String)) {
      throw new Error("Expected the field `acrValues` to be a primitive type in the JSON string but got " + data['acrValues']);
    }
    // validate the optional field `identityProvider`
    if (data['identityProvider']) {
      // data not null
      SignOnPolicyActionIDPAllOfIdentityProvider.validateJSON(data['identityProvider']);
    }
    // validate the optional field `registration`
    if (data['registration']) {
      // data not null
      SignOnPolicyActionIDPAllOfRegistration.validateJSON(data['registration']);
    }
    return true;
  }
}
SignOnPolicyActionIDP.RequiredProperties = ["priority", "type", "identityProvider"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
SignOnPolicyActionIDP.prototype['_links'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonConditionOrOrInner} condition
 */
SignOnPolicyActionIDP.prototype['condition'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
SignOnPolicyActionIDP.prototype['environment'] = undefined;

/**
 * A string that specifies the sign-on policy assignment resource’s unique identifier.
 * @member {String} id
 */
SignOnPolicyActionIDP.prototype['id'] = undefined;

/**
 * An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first. This is a required property.
 * @member {Number} priority
 */
SignOnPolicyActionIDP.prototype['priority'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonSignOnPolicy} signOnPolicy
 */
SignOnPolicyActionIDP.prototype['signOnPolicy'] = undefined;

/**
 * @member {module:model/EnumSignOnPolicyType} type
 */
SignOnPolicyActionIDP.prototype['type'] = undefined;

/**
 * A string that designates the sign-on policies included in the authorization flow request. Options can include the PingOne predefined sign-on policies, Single_Factor and Multi_Factor, or any custom defined sign-on policy names. Sign-on policy names should be listed in order of preference, and they must be assigned to the application. This property can be configured on the identity provider action and is passed to the identity provider if the identity provider is of type `SAML` or `OPENID_CONNECT`.
 * @member {String} acrValues
 */
SignOnPolicyActionIDP.prototype['acrValues'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionIDPAllOfIdentityProvider} identityProvider
 */
SignOnPolicyActionIDP.prototype['identityProvider'] = undefined;

/**
 * A boolean that specifies whether to pass in a login hint to the identity provider on the authentication request. Based on user context, the login hint is set if (1) the user is set on the flow, and (2) the user already has an account link for the identity provider. If both of these conditions are true, then the user is sent to the identity provider with a login hint equal to their externalId for the identity provider (saved on the account link). If these conditions are not true, then the API checks see if there is an OIDC login hint on the flow. If so, that login hint is used. If none of these conditions are true, the login hint parameter is not included on the authorization request to the identity provider.
 * @member {Boolean} passUserContext
 */
SignOnPolicyActionIDP.prototype['passUserContext'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionIDPAllOfRegistration} registration
 */
SignOnPolicyActionIDP.prototype['registration'] = undefined;

// Implement SignOnPolicyActionCommon interface:
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
export default SignOnPolicyActionIDP;