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
import SignOnPolicyActionLoginAllOfRegistrationPopulation from './SignOnPolicyActionLoginAllOfRegistrationPopulation';

/**
 * The SignOnPolicyActionIDPAllOfRegistration model module.
 * @module model/SignOnPolicyActionIDPAllOfRegistration
 * @version 2023-06-29
 */
class SignOnPolicyActionIDPAllOfRegistration {
  /**
   * Constructs a new <code>SignOnPolicyActionIDPAllOfRegistration</code>.
   * Specifies the account registration options.
   * @alias module:model/SignOnPolicyActionIDPAllOfRegistration
   * @param enabled {Boolean} A boolean that specifies the enabled/disabled state of the policy action. The property is disabled by default when creating a new policy. When enabled, it allows the use of the new user registration flow. This attribute should be set to true when implementing the social login sign-on policy option.
   */
  constructor(enabled) {
    SignOnPolicyActionIDPAllOfRegistration.initialize(this, enabled);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, enabled) {
    obj['enabled'] = enabled;
  }

  /**
   * Constructs a <code>SignOnPolicyActionIDPAllOfRegistration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionIDPAllOfRegistration} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionIDPAllOfRegistration} The populated <code>SignOnPolicyActionIDPAllOfRegistration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionIDPAllOfRegistration();
      if (data.hasOwnProperty('confirmIdentityProviderAttributes')) {
        obj['confirmIdentityProviderAttributes'] = ApiClient.convertToType(data['confirmIdentityProviderAttributes'], 'Boolean');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('population')) {
        obj['population'] = SignOnPolicyActionLoginAllOfRegistrationPopulation.constructFromObject(data['population']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionIDPAllOfRegistration</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionIDPAllOfRegistration</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyActionIDPAllOfRegistration.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `population`
    if (data['population']) {
      // data not null
      SignOnPolicyActionLoginAllOfRegistrationPopulation.validateJSON(data['population']);
    }
    return true;
  }
}
SignOnPolicyActionIDPAllOfRegistration.RequiredProperties = ["enabled"];

/**
 * A boolean that specifies whether users must confirm data returned from an identity provider prior to registration. Users can modify the data and omit non-required attributes. Modified attributes are added to the user's profile during account creation. This is an optional property. If omitted, the default value is set to false.
 * @member {Boolean} confirmIdentityProviderAttributes
 * @default false
 */
SignOnPolicyActionIDPAllOfRegistration.prototype['confirmIdentityProviderAttributes'] = false;

/**
 * A boolean that specifies the enabled/disabled state of the policy action. The property is disabled by default when creating a new policy. When enabled, it allows the use of the new user registration flow. This attribute should be set to true when implementing the social login sign-on policy option.
 * @member {Boolean} enabled
 */
SignOnPolicyActionIDPAllOfRegistration.prototype['enabled'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionLoginAllOfRegistrationPopulation} population
 */
SignOnPolicyActionIDPAllOfRegistration.prototype['population'] = undefined;
export default SignOnPolicyActionIDPAllOfRegistration;