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
import EnumIdentityProviderAttributeMappingType from './EnumIdentityProviderAttributeMappingType';
import EnumIdentityProviderAttributeMappingUpdate from './EnumIdentityProviderAttributeMappingUpdate';
import IdentityProviderAttributeIdentityProvider from './IdentityProviderAttributeIdentityProvider';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The IdentityProviderAttribute model module.
 * @module model/IdentityProviderAttribute
 * @version 2023-06-29
 */
class IdentityProviderAttribute {
  /**
   * Constructs a new <code>IdentityProviderAttribute</code>.
   * @alias module:model/IdentityProviderAttribute
   * @param name {String} The user attribute, which is unique per provider. The attribute must not be defined as read only from the user schema or of type COMPLEX based on the user schema. Valid examples username, and name.first. The following attributes may not be used account, id, created, updated, lifecycle, mfaEnabled, and enabled.
   * @param value {String} A placeholder referring to the attribute (or attributes) from the provider. Placeholders must be valid for the attributes returned by the IdP type and use the ${} syntax (for example, username=`${email}`). For SAML, any placeholder is acceptable, and it is mapped against the attributes available in the SAML assertion after authentication. The ${samlAssertion.subject} placeholder is a special reserved placeholder used to refer to the subject name ID in the SAML assertion response.
   * @param update {module:model/EnumIdentityProviderAttributeMappingUpdate} 
   */
  constructor(name, value, update) {
    IdentityProviderAttribute.initialize(this, name, value, update);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name, value, update) {
    obj['name'] = name;
    obj['value'] = value;
    obj['update'] = update;
  }

  /**
   * Constructs a <code>IdentityProviderAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentityProviderAttribute} obj Optional instance to populate.
   * @return {module:model/IdentityProviderAttribute} The populated <code>IdentityProviderAttribute</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdentityProviderAttribute();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('mappingType')) {
        obj['mappingType'] = EnumIdentityProviderAttributeMappingType.constructFromObject(data['mappingType']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('update')) {
        obj['update'] = EnumIdentityProviderAttributeMappingUpdate.constructFromObject(data['update']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('identityProvider')) {
        obj['identityProvider'] = IdentityProviderAttributeIdentityProvider.constructFromObject(data['identityProvider']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>IdentityProviderAttribute</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentityProviderAttribute</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of IdentityProviderAttribute.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    // ensure the json data is a string
    if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
      throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // validate the optional field `environment`
    if (data['environment']) {
      // data not null
      ObjectEnvironment.validateJSON(data['environment']);
    }
    // validate the optional field `identityProvider`
    if (data['identityProvider']) {
      // data not null
      IdentityProviderAttributeIdentityProvider.validateJSON(data['identityProvider']);
    }
    // ensure the json data is a string
    if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
      throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
    }
    // ensure the json data is a string
    if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
      throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
    }
    return true;
  }
}
IdentityProviderAttribute.RequiredProperties = ["name", "value", "update"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
IdentityProviderAttribute.prototype['_links'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderAttributeMappingType} mappingType
 */
IdentityProviderAttribute.prototype['mappingType'] = undefined;

/**
 * The user attribute, which is unique per provider. The attribute must not be defined as read only from the user schema or of type COMPLEX based on the user schema. Valid examples username, and name.first. The following attributes may not be used account, id, created, updated, lifecycle, mfaEnabled, and enabled.
 * @member {String} name
 */
IdentityProviderAttribute.prototype['name'] = undefined;

/**
 * A placeholder referring to the attribute (or attributes) from the provider. Placeholders must be valid for the attributes returned by the IdP type and use the ${} syntax (for example, username=`${email}`). For SAML, any placeholder is acceptable, and it is mapped against the attributes available in the SAML assertion after authentication. The ${samlAssertion.subject} placeholder is a special reserved placeholder used to refer to the subject name ID in the SAML assertion response.
 * @member {String} value
 */
IdentityProviderAttribute.prototype['value'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderAttributeMappingUpdate} update
 */
IdentityProviderAttribute.prototype['update'] = undefined;

/**
 * The unique identifier for the resource.
 * @member {String} id
 */
IdentityProviderAttribute.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
IdentityProviderAttribute.prototype['environment'] = undefined;

/**
 * @member {module:model/IdentityProviderAttributeIdentityProvider} identityProvider
 */
IdentityProviderAttribute.prototype['identityProvider'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
IdentityProviderAttribute.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
IdentityProviderAttribute.prototype['updatedAt'] = undefined;
export default IdentityProviderAttribute;