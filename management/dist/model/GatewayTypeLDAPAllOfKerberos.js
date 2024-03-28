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
 * The GatewayTypeLDAPAllOfKerberos model module.
 * @module model/GatewayTypeLDAPAllOfKerberos
 * @version 2023-06-29
 */
class GatewayTypeLDAPAllOfKerberos {
  /**
   * Constructs a new <code>GatewayTypeLDAPAllOfKerberos</code>.
   * Contains the Kerberos authentication settings. Set this to null to disable Kerberos authentication.
   * @alias module:model/GatewayTypeLDAPAllOfKerberos
   * @param serviceAccountUserPrincipalName {String} The Kerberos service account user principal name (for example, `username@domain.com`).
   */
  constructor(serviceAccountUserPrincipalName) {
    GatewayTypeLDAPAllOfKerberos.initialize(this, serviceAccountUserPrincipalName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, serviceAccountUserPrincipalName) {
    obj['serviceAccountUserPrincipalName'] = serviceAccountUserPrincipalName;
  }

  /**
   * Constructs a <code>GatewayTypeLDAPAllOfKerberos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GatewayTypeLDAPAllOfKerberos} obj Optional instance to populate.
   * @return {module:model/GatewayTypeLDAPAllOfKerberos} The populated <code>GatewayTypeLDAPAllOfKerberos</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GatewayTypeLDAPAllOfKerberos();
      if (data.hasOwnProperty('serviceAccountPassword')) {
        obj['serviceAccountPassword'] = ApiClient.convertToType(data['serviceAccountPassword'], 'String');
      }
      if (data.hasOwnProperty('serviceAccountUserPrincipalName')) {
        obj['serviceAccountUserPrincipalName'] = ApiClient.convertToType(data['serviceAccountUserPrincipalName'], 'String');
      }
      if (data.hasOwnProperty('minutesToRetainPreviousCredentials')) {
        obj['minutesToRetainPreviousCredentials'] = ApiClient.convertToType(data['minutesToRetainPreviousCredentials'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GatewayTypeLDAPAllOfKerberos</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayTypeLDAPAllOfKerberos</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GatewayTypeLDAPAllOfKerberos.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['serviceAccountPassword'] && !(typeof data['serviceAccountPassword'] === 'string' || data['serviceAccountPassword'] instanceof String)) {
      throw new Error("Expected the field `serviceAccountPassword` to be a primitive type in the JSON string but got " + data['serviceAccountPassword']);
    }
    // ensure the json data is a string
    if (data['serviceAccountUserPrincipalName'] && !(typeof data['serviceAccountUserPrincipalName'] === 'string' || data['serviceAccountUserPrincipalName'] instanceof String)) {
      throw new Error("Expected the field `serviceAccountUserPrincipalName` to be a primitive type in the JSON string but got " + data['serviceAccountUserPrincipalName']);
    }
    return true;
  }
}
GatewayTypeLDAPAllOfKerberos.RequiredProperties = ["serviceAccountUserPrincipalName"];

/**
 * The password for the Kerberos service account.
 * @member {String} serviceAccountPassword
 */
GatewayTypeLDAPAllOfKerberos.prototype['serviceAccountPassword'] = undefined;

/**
 * The Kerberos service account user principal name (for example, `username@domain.com`).
 * @member {String} serviceAccountUserPrincipalName
 */
GatewayTypeLDAPAllOfKerberos.prototype['serviceAccountUserPrincipalName'] = undefined;

/**
 * The number of minutes for which the previous credentials are persisted.
 * @member {Number} minutesToRetainPreviousCredentials
 */
GatewayTypeLDAPAllOfKerberos.prototype['minutesToRetainPreviousCredentials'] = undefined;
export default GatewayTypeLDAPAllOfKerberos;