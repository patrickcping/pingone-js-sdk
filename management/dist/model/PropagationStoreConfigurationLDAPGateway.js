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
import EnumPropagationStoreTypeLDAPGatewayLDAPType from './EnumPropagationStoreTypeLDAPGatewayLDAPType';

/**
 * The PropagationStoreConfigurationLDAPGateway model module.
 * @module model/PropagationStoreConfigurationLDAPGateway
 * @version 2023-06-29
 */
class PropagationStoreConfigurationLDAPGateway {
  /**
   * Constructs a new <code>PropagationStoreConfigurationLDAPGateway</code>.
   * @alias module:model/PropagationStoreConfigurationLDAPGateway
   * @param CLIENT_ID {String} Identifier of the client for authentication.
   * @param CLIENT_SECRET {String} Secret of the client for authentication.
   * @param ENVIRONMENT_ID {String} Identifier, a UUID, of the environment the connector services.
   * @param GATEWAY_BASE_URL {String} Base URL of the gateway.
   * @param GATEWAY_ID {String} Identifier of the gateway to which the connector connects.
   * @param LDAP_TYPE {module:model/EnumPropagationStoreTypeLDAPGatewayLDAPType} 
   * @param OAUTH_URL {String} OAuth token request endpoint.
   */
  constructor(CLIENT_ID, CLIENT_SECRET, ENVIRONMENT_ID, GATEWAY_BASE_URL, GATEWAY_ID, LDAP_TYPE, OAUTH_URL) {
    PropagationStoreConfigurationLDAPGateway.initialize(this, CLIENT_ID, CLIENT_SECRET, ENVIRONMENT_ID, GATEWAY_BASE_URL, GATEWAY_ID, LDAP_TYPE, OAUTH_URL);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, CLIENT_ID, CLIENT_SECRET, ENVIRONMENT_ID, GATEWAY_BASE_URL, GATEWAY_ID, LDAP_TYPE, OAUTH_URL) {
    obj['CLIENT_ID'] = CLIENT_ID;
    obj['CLIENT_SECRET'] = CLIENT_SECRET;
    obj['ENVIRONMENT_ID'] = ENVIRONMENT_ID;
    obj['GATEWAY_BASE_URL'] = GATEWAY_BASE_URL;
    obj['GATEWAY_ID'] = GATEWAY_ID;
    obj['LDAP_TYPE'] = LDAP_TYPE;
    obj['OAUTH_URL'] = OAUTH_URL;
  }

  /**
   * Constructs a <code>PropagationStoreConfigurationLDAPGateway</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropagationStoreConfigurationLDAPGateway} obj Optional instance to populate.
   * @return {module:model/PropagationStoreConfigurationLDAPGateway} The populated <code>PropagationStoreConfigurationLDAPGateway</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PropagationStoreConfigurationLDAPGateway();
      if (data.hasOwnProperty('ATTRIBUTE_METADATA')) {
        obj['ATTRIBUTE_METADATA'] = ApiClient.convertToType(data['ATTRIBUTE_METADATA'], 'String');
      }
      if (data.hasOwnProperty('CLIENT_ID')) {
        obj['CLIENT_ID'] = ApiClient.convertToType(data['CLIENT_ID'], 'String');
      }
      if (data.hasOwnProperty('CLIENT_SECRET')) {
        obj['CLIENT_SECRET'] = ApiClient.convertToType(data['CLIENT_SECRET'], 'String');
      }
      if (data.hasOwnProperty('CREATE_USERS')) {
        obj['CREATE_USERS'] = ApiClient.convertToType(data['CREATE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('DELETE_USERS')) {
        obj['DELETE_USERS'] = ApiClient.convertToType(data['DELETE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('ENVIRONMENT_ID')) {
        obj['ENVIRONMENT_ID'] = ApiClient.convertToType(data['ENVIRONMENT_ID'], 'String');
      }
      if (data.hasOwnProperty('GATEWAY_BASE_URL')) {
        obj['GATEWAY_BASE_URL'] = ApiClient.convertToType(data['GATEWAY_BASE_URL'], 'String');
      }
      if (data.hasOwnProperty('GATEWAY_ID')) {
        obj['GATEWAY_ID'] = ApiClient.convertToType(data['GATEWAY_ID'], 'String');
      }
      if (data.hasOwnProperty('LDAP_TYPE')) {
        obj['LDAP_TYPE'] = EnumPropagationStoreTypeLDAPGatewayLDAPType.constructFromObject(data['LDAP_TYPE']);
      }
      if (data.hasOwnProperty('OAUTH_URL')) {
        obj['OAUTH_URL'] = ApiClient.convertToType(data['OAUTH_URL'], 'String');
      }
      if (data.hasOwnProperty('UPDATE_USERS')) {
        obj['UPDATE_USERS'] = ApiClient.convertToType(data['UPDATE_USERS'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PropagationStoreConfigurationLDAPGateway</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreConfigurationLDAPGateway</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of PropagationStoreConfigurationLDAPGateway.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['ATTRIBUTE_METADATA'] && !(typeof data['ATTRIBUTE_METADATA'] === 'string' || data['ATTRIBUTE_METADATA'] instanceof String)) {
      throw new Error("Expected the field `ATTRIBUTE_METADATA` to be a primitive type in the JSON string but got " + data['ATTRIBUTE_METADATA']);
    }
    // ensure the json data is a string
    if (data['CLIENT_ID'] && !(typeof data['CLIENT_ID'] === 'string' || data['CLIENT_ID'] instanceof String)) {
      throw new Error("Expected the field `CLIENT_ID` to be a primitive type in the JSON string but got " + data['CLIENT_ID']);
    }
    // ensure the json data is a string
    if (data['CLIENT_SECRET'] && !(typeof data['CLIENT_SECRET'] === 'string' || data['CLIENT_SECRET'] instanceof String)) {
      throw new Error("Expected the field `CLIENT_SECRET` to be a primitive type in the JSON string but got " + data['CLIENT_SECRET']);
    }
    // ensure the json data is a string
    if (data['ENVIRONMENT_ID'] && !(typeof data['ENVIRONMENT_ID'] === 'string' || data['ENVIRONMENT_ID'] instanceof String)) {
      throw new Error("Expected the field `ENVIRONMENT_ID` to be a primitive type in the JSON string but got " + data['ENVIRONMENT_ID']);
    }
    // ensure the json data is a string
    if (data['GATEWAY_BASE_URL'] && !(typeof data['GATEWAY_BASE_URL'] === 'string' || data['GATEWAY_BASE_URL'] instanceof String)) {
      throw new Error("Expected the field `GATEWAY_BASE_URL` to be a primitive type in the JSON string but got " + data['GATEWAY_BASE_URL']);
    }
    // ensure the json data is a string
    if (data['GATEWAY_ID'] && !(typeof data['GATEWAY_ID'] === 'string' || data['GATEWAY_ID'] instanceof String)) {
      throw new Error("Expected the field `GATEWAY_ID` to be a primitive type in the JSON string but got " + data['GATEWAY_ID']);
    }
    // ensure the json data is a string
    if (data['OAUTH_URL'] && !(typeof data['OAUTH_URL'] === 'string' || data['OAUTH_URL'] instanceof String)) {
      throw new Error("Expected the field `OAUTH_URL` to be a primitive type in the JSON string but got " + data['OAUTH_URL']);
    }
    return true;
  }
}
PropagationStoreConfigurationLDAPGateway.RequiredProperties = ["CLIENT_ID", "CLIENT_SECRET", "ENVIRONMENT_ID", "GATEWAY_BASE_URL", "GATEWAY_ID", "LDAP_TYPE", "OAUTH_URL"];

/**
 * User-defined attribute metadata.
 * @member {String} ATTRIBUTE_METADATA
 */
PropagationStoreConfigurationLDAPGateway.prototype['ATTRIBUTE_METADATA'] = undefined;

/**
 * Identifier of the client for authentication.
 * @member {String} CLIENT_ID
 */
PropagationStoreConfigurationLDAPGateway.prototype['CLIENT_ID'] = undefined;

/**
 * Secret of the client for authentication.
 * @member {String} CLIENT_SECRET
 */
PropagationStoreConfigurationLDAPGateway.prototype['CLIENT_SECRET'] = undefined;

/**
 * Whether or not users are allowed to be created.
 * @member {Boolean} CREATE_USERS
 */
PropagationStoreConfigurationLDAPGateway.prototype['CREATE_USERS'] = undefined;

/**
 * Whether or not users are allowed to be deleted.
 * @member {Boolean} DELETE_USERS
 */
PropagationStoreConfigurationLDAPGateway.prototype['DELETE_USERS'] = undefined;

/**
 * Identifier, a UUID, of the environment the connector services.
 * @member {String} ENVIRONMENT_ID
 */
PropagationStoreConfigurationLDAPGateway.prototype['ENVIRONMENT_ID'] = undefined;

/**
 * Base URL of the gateway.
 * @member {String} GATEWAY_BASE_URL
 */
PropagationStoreConfigurationLDAPGateway.prototype['GATEWAY_BASE_URL'] = undefined;

/**
 * Identifier of the gateway to which the connector connects.
 * @member {String} GATEWAY_ID
 */
PropagationStoreConfigurationLDAPGateway.prototype['GATEWAY_ID'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeLDAPGatewayLDAPType} LDAP_TYPE
 */
PropagationStoreConfigurationLDAPGateway.prototype['LDAP_TYPE'] = undefined;

/**
 * OAuth token request endpoint.
 * @member {String} OAUTH_URL
 */
PropagationStoreConfigurationLDAPGateway.prototype['OAUTH_URL'] = undefined;

/**
 * Whether or not users are allowed to be updated.
 * @member {Boolean} UPDATE_USERS
 */
PropagationStoreConfigurationLDAPGateway.prototype['UPDATE_USERS'] = undefined;
export default PropagationStoreConfigurationLDAPGateway;