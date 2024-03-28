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
import EnumResourceAttributeType from './EnumResourceAttributeType';
import IdentityProviderAttributeIdentityProvider from './IdentityProviderAttributeIdentityProvider';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The ResourceAttribute model module.
 * @module model/ResourceAttribute
 * @version 2023-06-29
 */
class ResourceAttribute {
  /**
   * Constructs a new <code>ResourceAttribute</code>.
   * @alias module:model/ResourceAttribute
   * @param name {String} A string that specifies the name of the custom resource attribute to be included in the access token. The following are reserved names and cannot be used. Thesese reserved names are applicable only when the resource's type property is `OPENID_CONNECT`: - `acr` - `amr` - `aud` - `auth_time` - `client_id` - `env` - `exp` - `iat` - `iss` - `jti` - `org` - `p1.*` (any name starting with the p1. prefix) - `scope` - `sid` - `sub` 
   * @param value {String} A string that specifies the value of the custom resource attribute. This value can be a placeholder that references an attribute in the user schema, expressed as `${user.path.to.value}`, or it can be a static string. Placeholders must be valid, enabled attributes in the environment’s user schema. Examples fo valid values are `${user.email}`, `${user.name.family}`, and `myClaimValueString`
   */
  constructor(name, value) {
    ResourceAttribute.initialize(this, name, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name, value) {
    obj['name'] = name;
    obj['value'] = value;
  }

  /**
   * Constructs a <code>ResourceAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceAttribute} obj Optional instance to populate.
   * @return {module:model/ResourceAttribute} The populated <code>ResourceAttribute</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResourceAttribute();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumResourceAttributeType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = IdentityProviderAttributeIdentityProvider.constructFromObject(data['resource']);
      }
      if (data.hasOwnProperty('idToken')) {
        obj['idToken'] = ApiClient.convertToType(data['idToken'], 'Boolean');
      }
      if (data.hasOwnProperty('userInfo')) {
        obj['userInfo'] = ApiClient.convertToType(data['userInfo'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ResourceAttribute</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceAttribute</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of ResourceAttribute.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    // ensure the json data is a string
    if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
      throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
    }
    // validate the optional field `environment`
    if (data['environment']) {
      // data not null
      ObjectEnvironment.validateJSON(data['environment']);
    }
    // validate the optional field `resource`
    if (data['resource']) {
      // data not null
      IdentityProviderAttributeIdentityProvider.validateJSON(data['resource']);
    }
    return true;
  }
}
ResourceAttribute.RequiredProperties = ["name", "value"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
ResourceAttribute.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
ResourceAttribute.prototype['id'] = undefined;

/**
 * A string that specifies the name of the custom resource attribute to be included in the access token. The following are reserved names and cannot be used. Thesese reserved names are applicable only when the resource's type property is `OPENID_CONNECT`: - `acr` - `amr` - `aud` - `auth_time` - `client_id` - `env` - `exp` - `iat` - `iss` - `jti` - `org` - `p1.*` (any name starting with the p1. prefix) - `scope` - `sid` - `sub` 
 * @member {String} name
 */
ResourceAttribute.prototype['name'] = undefined;

/**
 * @member {module:model/EnumResourceAttributeType} type
 */
ResourceAttribute.prototype['type'] = undefined;

/**
 * A string that specifies the value of the custom resource attribute. This value can be a placeholder that references an attribute in the user schema, expressed as `${user.path.to.value}`, or it can be a static string. Placeholders must be valid, enabled attributes in the environment’s user schema. Examples fo valid values are `${user.email}`, `${user.name.family}`, and `myClaimValueString`
 * @member {String} value
 */
ResourceAttribute.prototype['value'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
ResourceAttribute.prototype['environment'] = undefined;

/**
 * @member {module:model/IdentityProviderAttributeIdentityProvider} resource
 */
ResourceAttribute.prototype['resource'] = undefined;

/**
 * A boolean that specifies whether the attribute mapping should be available in the ID Token. This property is applicable only when the application's protocol property is `OPENID_CONNECT`. If omitted, the default is `true`. Note that the `idToken` and `userInfo` properties cannot both be set to `false`. At least one of these properties must have a value of `true`.
 * @member {Boolean} idToken
 */
ResourceAttribute.prototype['idToken'] = undefined;

/**
 * A boolean that specifies whether the attribute mapping should be available through the `/as/userinfo` endpoint. This property is applicable only when the application's protocol property is `OPENID_CONNECT`. If omitted, the default is `true`. Note that the `idToken` and `userInfo` properties cannot both be set to `false`. At least one of these properties must have a value of `true`.
 * @member {Boolean} userInfo
 */
ResourceAttribute.prototype['userInfo'] = undefined;
export default ResourceAttribute;