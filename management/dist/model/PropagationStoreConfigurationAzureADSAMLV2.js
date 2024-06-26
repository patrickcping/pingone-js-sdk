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

/**
 * The PropagationStoreConfigurationAzureADSAMLV2 model module.
 * @module model/PropagationStoreConfigurationAzureADSAMLV2
 * @version 2023-06-29
 */
class PropagationStoreConfigurationAzureADSAMLV2 {
  /**
   * Constructs a new <code>PropagationStoreConfigurationAzureADSAMLV2</code>.
   * @alias module:model/PropagationStoreConfigurationAzureADSAMLV2
   * @param clientId {String} The Azure Active Directory client ID.
   * @param clientSecret {String} The Azure Active Directory client secret.
   * @param removeLicensesWhenSkuIdEmpty {Boolean} Whether or not remove licenses from user when `skuId` is empty.
   * @param tenantDomain {String} The account's Azure Active Directory domain.
   */
  constructor(clientId, clientSecret, removeLicensesWhenSkuIdEmpty, tenantDomain) {
    PropagationStoreConfigurationAzureADSAMLV2.initialize(this, clientId, clientSecret, removeLicensesWhenSkuIdEmpty, tenantDomain);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, clientId, clientSecret, removeLicensesWhenSkuIdEmpty, tenantDomain) {
    obj['ClientId'] = clientId;
    obj['ClientSecret'] = clientSecret;
    obj['RemoveLicensesWhenSkuIdEmpty'] = removeLicensesWhenSkuIdEmpty;
    obj['TenantDomain'] = tenantDomain;
  }

  /**
   * Constructs a <code>PropagationStoreConfigurationAzureADSAMLV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropagationStoreConfigurationAzureADSAMLV2} obj Optional instance to populate.
   * @return {module:model/PropagationStoreConfigurationAzureADSAMLV2} The populated <code>PropagationStoreConfigurationAzureADSAMLV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PropagationStoreConfigurationAzureADSAMLV2();
      if (data.hasOwnProperty('ClientId')) {
        obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'String');
      }
      if (data.hasOwnProperty('ClientSecret')) {
        obj['ClientSecret'] = ApiClient.convertToType(data['ClientSecret'], 'String');
      }
      if (data.hasOwnProperty('CREATE_USERS')) {
        obj['CREATE_USERS'] = ApiClient.convertToType(data['CREATE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('DEPROVISION_USERS')) {
        obj['DEPROVISION_USERS'] = ApiClient.convertToType(data['DEPROVISION_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('DISABLE_USERS')) {
        obj['DISABLE_USERS'] = ApiClient.convertToType(data['DISABLE_USERS'], 'Boolean');
      }
      if (data.hasOwnProperty('PROVISION_DISABLED_USERS_PROV_OPT')) {
        obj['PROVISION_DISABLED_USERS_PROV_OPT'] = ApiClient.convertToType(data['PROVISION_DISABLED_USERS_PROV_OPT'], 'Boolean');
      }
      if (data.hasOwnProperty('REMOVE_ACTION')) {
        obj['REMOVE_ACTION'] = EnumPropagationStoreTypeRemoveActionDisableDelete.constructFromObject(data['REMOVE_ACTION']);
      }
      if (data.hasOwnProperty('RemoveLicensesWhenSkuIdEmpty')) {
        obj['RemoveLicensesWhenSkuIdEmpty'] = ApiClient.convertToType(data['RemoveLicensesWhenSkuIdEmpty'], 'Boolean');
      }
      if (data.hasOwnProperty('TenantDomain')) {
        obj['TenantDomain'] = ApiClient.convertToType(data['TenantDomain'], 'String');
      }
      if (data.hasOwnProperty('UPDATE_USERS')) {
        obj['UPDATE_USERS'] = ApiClient.convertToType(data['UPDATE_USERS'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PropagationStoreConfigurationAzureADSAMLV2</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreConfigurationAzureADSAMLV2</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of PropagationStoreConfigurationAzureADSAMLV2.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['ClientId'] && !(typeof data['ClientId'] === 'string' || data['ClientId'] instanceof String)) {
      throw new Error("Expected the field `ClientId` to be a primitive type in the JSON string but got " + data['ClientId']);
    }
    // ensure the json data is a string
    if (data['ClientSecret'] && !(typeof data['ClientSecret'] === 'string' || data['ClientSecret'] instanceof String)) {
      throw new Error("Expected the field `ClientSecret` to be a primitive type in the JSON string but got " + data['ClientSecret']);
    }
    // ensure the json data is a string
    if (data['TenantDomain'] && !(typeof data['TenantDomain'] === 'string' || data['TenantDomain'] instanceof String)) {
      throw new Error("Expected the field `TenantDomain` to be a primitive type in the JSON string but got " + data['TenantDomain']);
    }
    return true;
  }
}
PropagationStoreConfigurationAzureADSAMLV2.RequiredProperties = ["ClientId", "ClientSecret", "RemoveLicensesWhenSkuIdEmpty", "TenantDomain"];

/**
 * The Azure Active Directory client ID.
 * @member {String} ClientId
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['ClientId'] = undefined;

/**
 * The Azure Active Directory client secret.
 * @member {String} ClientSecret
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['ClientSecret'] = undefined;

/**
 * Whether or not users are allowed to be created.
 * @member {Boolean} CREATE_USERS
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['CREATE_USERS'] = undefined;

/**
 * Whether or not users are allowed to be deprovisioned (removed) following action specified in `REMOVE_ACTION`.
 * @member {Boolean} DEPROVISION_USERS
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['DEPROVISION_USERS'] = undefined;

/**
 * Whether or not users are allowed to be disabled.
 * @member {Boolean} DISABLE_USERS
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['DISABLE_USERS'] = undefined;

/**
 * Whether or not disabled users can be provisioned. Defaults to `true` and, if used, must be set to `true`.
 * @member {Boolean} PROVISION_DISABLED_USERS_PROV_OPT
 * @default true
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['PROVISION_DISABLED_USERS_PROV_OPT'] = true;

/**
 * @member {module:model/EnumPropagationStoreTypeRemoveActionDisableDelete} REMOVE_ACTION
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['REMOVE_ACTION'] = undefined;

/**
 * Whether or not remove licenses from user when `skuId` is empty.
 * @member {Boolean} RemoveLicensesWhenSkuIdEmpty
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['RemoveLicensesWhenSkuIdEmpty'] = undefined;

/**
 * The account's Azure Active Directory domain.
 * @member {String} TenantDomain
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['TenantDomain'] = undefined;

/**
 * Whether or not users are allowed to be updated.
 * @member {Boolean} UPDATE_USERS
 */
PropagationStoreConfigurationAzureADSAMLV2.prototype['UPDATE_USERS'] = undefined;
export default PropagationStoreConfigurationAzureADSAMLV2;