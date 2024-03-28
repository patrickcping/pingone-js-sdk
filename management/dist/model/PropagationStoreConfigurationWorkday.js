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
 * The PropagationStoreConfigurationWorkday model module.
 * @module model/PropagationStoreConfigurationWorkday
 * @version 2023-06-29
 */
class PropagationStoreConfigurationWorkday {
  /**
   * Constructs a new <code>PropagationStoreConfigurationWorkday</code>.
   * @alias module:model/PropagationStoreConfigurationWorkday
   * @param password {String} The password for account authentication.
   * @param tenantId {String} The Workday tenant ID.
   * @param username {String} The user name for account authentication.
   */
  constructor(password, tenantId, username) {
    PropagationStoreConfigurationWorkday.initialize(this, password, tenantId, username);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, password, tenantId, username) {
    obj['password'] = password;
    obj['tenantId'] = tenantId;
    obj['username'] = username;
  }

  /**
   * Constructs a <code>PropagationStoreConfigurationWorkday</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropagationStoreConfigurationWorkday} obj Optional instance to populate.
   * @return {module:model/PropagationStoreConfigurationWorkday} The populated <code>PropagationStoreConfigurationWorkday</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PropagationStoreConfigurationWorkday();
      if (data.hasOwnProperty('excludeContingentWorkers')) {
        obj['excludeContingentWorkers'] = ApiClient.convertToType(data['excludeContingentWorkers'], 'Boolean');
      }
      if (data.hasOwnProperty('excludeEmployees')) {
        obj['excludeEmployees'] = ApiClient.convertToType(data['excludeEmployees'], 'Boolean');
      }
      if (data.hasOwnProperty('excludeInactiveWorkers')) {
        obj['excludeInactiveWorkers'] = ApiClient.convertToType(data['excludeInactiveWorkers'], 'Boolean');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PropagationStoreConfigurationWorkday</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreConfigurationWorkday</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of PropagationStoreConfigurationWorkday.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
      throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
    }
    // ensure the json data is a string
    if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
      throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
    }
    // ensure the json data is a string
    if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
      throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
    }
    // ensure the json data is a string
    if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
      throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
    }
    return true;
  }
}
PropagationStoreConfigurationWorkday.RequiredProperties = ["password", "tenantId", "username"];

/**
 * Whether or not contingent workers are excluded.
 * @member {Boolean} excludeContingentWorkers
 */
PropagationStoreConfigurationWorkday.prototype['excludeContingentWorkers'] = undefined;

/**
 * Whether or not employees are excluded.
 * @member {Boolean} excludeEmployees
 */
PropagationStoreConfigurationWorkday.prototype['excludeEmployees'] = undefined;

/**
 * Whether or not inactive workers are excluded.
 * @member {Boolean} excludeInactiveWorkers
 */
PropagationStoreConfigurationWorkday.prototype['excludeInactiveWorkers'] = undefined;

/**
 * The Workday API host.
 * @member {String} host
 */
PropagationStoreConfigurationWorkday.prototype['host'] = undefined;

/**
 * The password for account authentication.
 * @member {String} password
 */
PropagationStoreConfigurationWorkday.prototype['password'] = undefined;

/**
 * The Workday tenant ID.
 * @member {String} tenantId
 */
PropagationStoreConfigurationWorkday.prototype['tenantId'] = undefined;

/**
 * The user name for account authentication.
 * @member {String} username
 */
PropagationStoreConfigurationWorkday.prototype['username'] = undefined;
export default PropagationStoreConfigurationWorkday;