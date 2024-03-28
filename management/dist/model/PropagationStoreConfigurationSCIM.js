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
import EnumPropagationStoreTypeRemoveActionDisableDelete from './EnumPropagationStoreTypeRemoveActionDisableDelete';
import EnumPropagationStoreTypeSCIMAuthenticationMethod from './EnumPropagationStoreTypeSCIMAuthenticationMethod';
import EnumPropagationStoreTypeSCIMGroupNameSource from './EnumPropagationStoreTypeSCIMGroupNameSource';
import EnumPropagationStoreTypeSCIMUniqueUserIdentifier from './EnumPropagationStoreTypeSCIMUniqueUserIdentifier';

/**
 * The PropagationStoreConfigurationSCIM model module.
 * @module model/PropagationStoreConfigurationSCIM
 * @version 2023-06-29
 */
class PropagationStoreConfigurationSCIM {
  /**
   * Constructs a new <code>PropagationStoreConfigurationSCIM</code>.
   * @alias module:model/PropagationStoreConfigurationSCIM
   * @param AUTHENTICATION_METHOD {module:model/EnumPropagationStoreTypeSCIMAuthenticationMethod} 
   * @param AUTHORIZATION_TYPE {String} The authorization header type.
   * @param SCIM_URL {String} The SCIM URL.
   * @param SCIM_VERSION {String} The SCIM version.
   * @param UNIQUE_USER_IDENTIFIER {module:model/EnumPropagationStoreTypeSCIMUniqueUserIdentifier} 
   * @param USER_FILTER {String} A string that specifies a SCIM filter expression.
   * @param USERS_RESOURCE {String} API endpoint path to the user entity.
   */
  constructor(AUTHENTICATION_METHOD, AUTHORIZATION_TYPE, SCIM_URL, SCIM_VERSION, UNIQUE_USER_IDENTIFIER, USER_FILTER, USERS_RESOURCE) {
    PropagationStoreConfigurationSCIM.initialize(this, AUTHENTICATION_METHOD, AUTHORIZATION_TYPE, SCIM_URL, SCIM_VERSION, UNIQUE_USER_IDENTIFIER, USER_FILTER, USERS_RESOURCE);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, AUTHENTICATION_METHOD, AUTHORIZATION_TYPE, SCIM_URL, SCIM_VERSION, UNIQUE_USER_IDENTIFIER, USER_FILTER, USERS_RESOURCE) {
    obj['AUTHENTICATION_METHOD'] = AUTHENTICATION_METHOD;
    obj['AUTHORIZATION_TYPE'] = AUTHORIZATION_TYPE;
    obj['SCIM_URL'] = SCIM_URL;
    obj['SCIM_VERSION'] = SCIM_VERSION;
    obj['UNIQUE_USER_IDENTIFIER'] = UNIQUE_USER_IDENTIFIER;
    obj['USER_FILTER'] = USER_FILTER;
    obj['USERS_RESOURCE'] = USERS_RESOURCE;
  }

  /**
   * Constructs a <code>PropagationStoreConfigurationSCIM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropagationStoreConfigurationSCIM} obj Optional instance to populate.
   * @return {module:model/PropagationStoreConfigurationSCIM} The populated <code>PropagationStoreConfigurationSCIM</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PropagationStoreConfigurationSCIM();
      if (data.hasOwnProperty('AUTHENTICATION_METHOD')) {
        obj['AUTHENTICATION_METHOD'] = EnumPropagationStoreTypeSCIMAuthenticationMethod.constructFromObject(data['AUTHENTICATION_METHOD']);
      }
      if (data.hasOwnProperty('AUTHORIZATION_TYPE')) {
        obj['AUTHORIZATION_TYPE'] = ApiClient.convertToType(data['AUTHORIZATION_TYPE'], 'String');
      }
      if (data.hasOwnProperty('BASIC_AUTH_PASSWORD')) {
        obj['BASIC_AUTH_PASSWORD'] = ApiClient.convertToType(data['BASIC_AUTH_PASSWORD'], 'String');
      }
      if (data.hasOwnProperty('BASIC_AUTH_USER')) {
        obj['BASIC_AUTH_USER'] = ApiClient.convertToType(data['BASIC_AUTH_USER'], 'String');
      }
      if (data.hasOwnProperty('CREATE_USERS')) {
        obj['CREATE_USERS'] = ApiClient.convertToType(data['CREATE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('DISABLE_USERS')) {
        obj['DISABLE_USERS'] = ApiClient.convertToType(data['DISABLE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('GROUP_NAME_SOURCE')) {
        obj['GROUP_NAME_SOURCE'] = EnumPropagationStoreTypeSCIMGroupNameSource.constructFromObject(data['GROUP_NAME_SOURCE']);
      }
      if (data.hasOwnProperty('GROUPS_RESOURCE')) {
        obj['GROUPS_RESOURCE'] = ApiClient.convertToType(data['GROUPS_RESOURCE'], 'String');
      }
      if (data.hasOwnProperty('OAUTH_ACCESS_TOKEN')) {
        obj['OAUTH_ACCESS_TOKEN'] = ApiClient.convertToType(data['OAUTH_ACCESS_TOKEN'], 'String');
      }
      if (data.hasOwnProperty('OAUTH_CLIENT_ID')) {
        obj['OAUTH_CLIENT_ID'] = ApiClient.convertToType(data['OAUTH_CLIENT_ID'], 'String');
      }
      if (data.hasOwnProperty('OAUTH_CLIENT_SECRET')) {
        obj['OAUTH_CLIENT_SECRET'] = ApiClient.convertToType(data['OAUTH_CLIENT_SECRET'], 'String');
      }
      if (data.hasOwnProperty('OAUTH_TOKEN_REQUEST')) {
        obj['OAUTH_TOKEN_REQUEST'] = ApiClient.convertToType(data['OAUTH_TOKEN_REQUEST'], 'String');
      }
      if (data.hasOwnProperty('REMOVE_ACTION')) {
        obj['REMOVE_ACTION'] = EnumPropagationStoreTypeRemoveActionDisableDelete.constructFromObject(data['REMOVE_ACTION']);
      }
      if (data.hasOwnProperty('SCIM_URL')) {
        obj['SCIM_URL'] = ApiClient.convertToType(data['SCIM_URL'], 'String');
      }
      if (data.hasOwnProperty('SCIM_VERSION')) {
        obj['SCIM_VERSION'] = ApiClient.convertToType(data['SCIM_VERSION'], 'String');
      }
      if (data.hasOwnProperty('UNIQUE_USER_IDENTIFIER')) {
        obj['UNIQUE_USER_IDENTIFIER'] = EnumPropagationStoreTypeSCIMUniqueUserIdentifier.constructFromObject(data['UNIQUE_USER_IDENTIFIER']);
      }
      if (data.hasOwnProperty('UPDATE_USERS')) {
        obj['UPDATE_USERS'] = ApiClient.convertToType(data['UPDATE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('USER_FILTER')) {
        obj['USER_FILTER'] = ApiClient.convertToType(data['USER_FILTER'], 'String');
      }
      if (data.hasOwnProperty('USERS_RESOURCE')) {
        obj['USERS_RESOURCE'] = ApiClient.convertToType(data['USERS_RESOURCE'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PropagationStoreConfigurationSCIM</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreConfigurationSCIM</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of PropagationStoreConfigurationSCIM.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['AUTHORIZATION_TYPE'] && !(typeof data['AUTHORIZATION_TYPE'] === 'string' || data['AUTHORIZATION_TYPE'] instanceof String)) {
      throw new Error("Expected the field `AUTHORIZATION_TYPE` to be a primitive type in the JSON string but got " + data['AUTHORIZATION_TYPE']);
    }
    // ensure the json data is a string
    if (data['BASIC_AUTH_PASSWORD'] && !(typeof data['BASIC_AUTH_PASSWORD'] === 'string' || data['BASIC_AUTH_PASSWORD'] instanceof String)) {
      throw new Error("Expected the field `BASIC_AUTH_PASSWORD` to be a primitive type in the JSON string but got " + data['BASIC_AUTH_PASSWORD']);
    }
    // ensure the json data is a string
    if (data['BASIC_AUTH_USER'] && !(typeof data['BASIC_AUTH_USER'] === 'string' || data['BASIC_AUTH_USER'] instanceof String)) {
      throw new Error("Expected the field `BASIC_AUTH_USER` to be a primitive type in the JSON string but got " + data['BASIC_AUTH_USER']);
    }
    // ensure the json data is a string
    if (data['GROUPS_RESOURCE'] && !(typeof data['GROUPS_RESOURCE'] === 'string' || data['GROUPS_RESOURCE'] instanceof String)) {
      throw new Error("Expected the field `GROUPS_RESOURCE` to be a primitive type in the JSON string but got " + data['GROUPS_RESOURCE']);
    }
    // ensure the json data is a string
    if (data['OAUTH_ACCESS_TOKEN'] && !(typeof data['OAUTH_ACCESS_TOKEN'] === 'string' || data['OAUTH_ACCESS_TOKEN'] instanceof String)) {
      throw new Error("Expected the field `OAUTH_ACCESS_TOKEN` to be a primitive type in the JSON string but got " + data['OAUTH_ACCESS_TOKEN']);
    }
    // ensure the json data is a string
    if (data['OAUTH_CLIENT_ID'] && !(typeof data['OAUTH_CLIENT_ID'] === 'string' || data['OAUTH_CLIENT_ID'] instanceof String)) {
      throw new Error("Expected the field `OAUTH_CLIENT_ID` to be a primitive type in the JSON string but got " + data['OAUTH_CLIENT_ID']);
    }
    // ensure the json data is a string
    if (data['OAUTH_CLIENT_SECRET'] && !(typeof data['OAUTH_CLIENT_SECRET'] === 'string' || data['OAUTH_CLIENT_SECRET'] instanceof String)) {
      throw new Error("Expected the field `OAUTH_CLIENT_SECRET` to be a primitive type in the JSON string but got " + data['OAUTH_CLIENT_SECRET']);
    }
    // ensure the json data is a string
    if (data['OAUTH_TOKEN_REQUEST'] && !(typeof data['OAUTH_TOKEN_REQUEST'] === 'string' || data['OAUTH_TOKEN_REQUEST'] instanceof String)) {
      throw new Error("Expected the field `OAUTH_TOKEN_REQUEST` to be a primitive type in the JSON string but got " + data['OAUTH_TOKEN_REQUEST']);
    }
    // ensure the json data is a string
    if (data['SCIM_URL'] && !(typeof data['SCIM_URL'] === 'string' || data['SCIM_URL'] instanceof String)) {
      throw new Error("Expected the field `SCIM_URL` to be a primitive type in the JSON string but got " + data['SCIM_URL']);
    }
    // ensure the json data is a string
    if (data['SCIM_VERSION'] && !(typeof data['SCIM_VERSION'] === 'string' || data['SCIM_VERSION'] instanceof String)) {
      throw new Error("Expected the field `SCIM_VERSION` to be a primitive type in the JSON string but got " + data['SCIM_VERSION']);
    }
    // ensure the json data is a string
    if (data['USER_FILTER'] && !(typeof data['USER_FILTER'] === 'string' || data['USER_FILTER'] instanceof String)) {
      throw new Error("Expected the field `USER_FILTER` to be a primitive type in the JSON string but got " + data['USER_FILTER']);
    }
    // ensure the json data is a string
    if (data['USERS_RESOURCE'] && !(typeof data['USERS_RESOURCE'] === 'string' || data['USERS_RESOURCE'] instanceof String)) {
      throw new Error("Expected the field `USERS_RESOURCE` to be a primitive type in the JSON string but got " + data['USERS_RESOURCE']);
    }
    return true;
  }
}
PropagationStoreConfigurationSCIM.RequiredProperties = ["AUTHENTICATION_METHOD", "AUTHORIZATION_TYPE", "SCIM_URL", "SCIM_VERSION", "UNIQUE_USER_IDENTIFIER", "USER_FILTER", "USERS_RESOURCE"];

/**
 * @member {module:model/EnumPropagationStoreTypeSCIMAuthenticationMethod} AUTHENTICATION_METHOD
 */
PropagationStoreConfigurationSCIM.prototype['AUTHENTICATION_METHOD'] = undefined;

/**
 * The authorization header type.
 * @member {String} AUTHORIZATION_TYPE
 */
PropagationStoreConfigurationSCIM.prototype['AUTHORIZATION_TYPE'] = undefined;

/**
 * The password for account authentication. Required when `AUTHENTICATION_METHOD` is `Basic Authentication`, otherwise optional.
 * @member {String} BASIC_AUTH_PASSWORD
 */
PropagationStoreConfigurationSCIM.prototype['BASIC_AUTH_PASSWORD'] = undefined;

/**
 * The user name for account authentication. Required when `AUTHENTICATION_METHOD` is `Basic Authentication`, otherwise optional.
 * @member {String} BASIC_AUTH_USER
 */
PropagationStoreConfigurationSCIM.prototype['BASIC_AUTH_USER'] = undefined;

/**
 * Whether or not users are allowed to be created.
 * @member {Boolean} CREATE_USERS
 */
PropagationStoreConfigurationSCIM.prototype['CREATE_USERS'] = undefined;

/**
 * Whether or not users are allowed to be disabled.
 * @member {Boolean} DISABLE_USERS
 */
PropagationStoreConfigurationSCIM.prototype['DISABLE_USERS'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeSCIMGroupNameSource} GROUP_NAME_SOURCE
 */
PropagationStoreConfigurationSCIM.prototype['GROUP_NAME_SOURCE'] = undefined;

/**
 * API endpoint path to the group entity.
 * @member {String} GROUPS_RESOURCE
 */
PropagationStoreConfigurationSCIM.prototype['GROUPS_RESOURCE'] = undefined;

/**
 * OAuth access token for account authentication. Required when `AUTHENTICATION_METHOD` is `OAuth 2 Bearer Token`, otherwise optional.
 * @member {String} OAUTH_ACCESS_TOKEN
 */
PropagationStoreConfigurationSCIM.prototype['OAUTH_ACCESS_TOKEN'] = undefined;

/**
 * OAuth client ID. Required when `AUTHENTICATION_METHOD` is `OAuth 2 Client Credentials`, otherwise optional.
 * @member {String} OAUTH_CLIENT_ID
 */
PropagationStoreConfigurationSCIM.prototype['OAUTH_CLIENT_ID'] = undefined;

/**
 * OAuth client secret. Required when `AUTHENTICATION_METHOD` is `OAuth 2 Client Credentials`, otherwise optional.
 * @member {String} OAUTH_CLIENT_SECRET
 */
PropagationStoreConfigurationSCIM.prototype['OAUTH_CLIENT_SECRET'] = undefined;

/**
 * OAuth token request endpoint. Required when `AUTHENTICATION_METHOD` is `OAuth 2 Bearer Token`, otherwise optional.
 * @member {String} OAUTH_TOKEN_REQUEST
 */
PropagationStoreConfigurationSCIM.prototype['OAUTH_TOKEN_REQUEST'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeRemoveActionDisableDelete} REMOVE_ACTION
 */
PropagationStoreConfigurationSCIM.prototype['REMOVE_ACTION'] = undefined;

/**
 * The SCIM URL.
 * @member {String} SCIM_URL
 */
PropagationStoreConfigurationSCIM.prototype['SCIM_URL'] = undefined;

/**
 * The SCIM version.
 * @member {String} SCIM_VERSION
 */
PropagationStoreConfigurationSCIM.prototype['SCIM_VERSION'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeSCIMUniqueUserIdentifier} UNIQUE_USER_IDENTIFIER
 */
PropagationStoreConfigurationSCIM.prototype['UNIQUE_USER_IDENTIFIER'] = undefined;

/**
 * Whether or not users are allowed to be updated.
 * @member {Boolean} UPDATE_USERS
 */
PropagationStoreConfigurationSCIM.prototype['UPDATE_USERS'] = undefined;

/**
 * A string that specifies a SCIM filter expression.
 * @member {String} USER_FILTER
 */
PropagationStoreConfigurationSCIM.prototype['USER_FILTER'] = undefined;

/**
 * API endpoint path to the user entity.
 * @member {String} USERS_RESOURCE
 */
PropagationStoreConfigurationSCIM.prototype['USERS_RESOURCE'] = undefined;
export default PropagationStoreConfigurationSCIM;