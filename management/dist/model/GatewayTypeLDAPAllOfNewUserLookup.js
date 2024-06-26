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
import GatewayTypeLDAPAllOfNewUserLookupAttributeMappings from './GatewayTypeLDAPAllOfNewUserLookupAttributeMappings';
import GatewayTypeLDAPAllOfNewUserLookupPopulation from './GatewayTypeLDAPAllOfNewUserLookupPopulation';

/**
 * The GatewayTypeLDAPAllOfNewUserLookup model module.
 * @module model/GatewayTypeLDAPAllOfNewUserLookup
 * @version 2023-06-29
 */
class GatewayTypeLDAPAllOfNewUserLookup {
  /**
   * Constructs a new <code>GatewayTypeLDAPAllOfNewUserLookup</code>.
   * The configurations for initially authenticating new users who will be migrated to PingOne. Note If there are multiple users having the same user name, only the first user processed is provisioned.
   * @alias module:model/GatewayTypeLDAPAllOfNewUserLookup
   * @param attributeMappings {Array.<module:model/GatewayTypeLDAPAllOfNewUserLookupAttributeMappings>} A list of objects supplying a mapping of PingOne attributes to external LDAP attributes. One of the entries must be a mapping for \"username`. This is required for the PingOne user schema.
   * @param ldapFilterPattern {String} The LDAP user search filter to use to match users against the entered user identifier at login. For example, (((uid=${identifier})(mail=${identifier})). Alternatively, this can be a search against the user directory.
   * @param population {module:model/GatewayTypeLDAPAllOfNewUserLookupPopulation} 
   */
  constructor(attributeMappings, ldapFilterPattern, population) {
    GatewayTypeLDAPAllOfNewUserLookup.initialize(this, attributeMappings, ldapFilterPattern, population);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, attributeMappings, ldapFilterPattern, population) {
    obj['attributeMappings'] = attributeMappings;
    obj['ldapFilterPattern'] = ldapFilterPattern;
    obj['population'] = population;
  }

  /**
   * Constructs a <code>GatewayTypeLDAPAllOfNewUserLookup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GatewayTypeLDAPAllOfNewUserLookup} obj Optional instance to populate.
   * @return {module:model/GatewayTypeLDAPAllOfNewUserLookup} The populated <code>GatewayTypeLDAPAllOfNewUserLookup</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GatewayTypeLDAPAllOfNewUserLookup();
      if (data.hasOwnProperty('attributeMappings')) {
        obj['attributeMappings'] = ApiClient.convertToType(data['attributeMappings'], [GatewayTypeLDAPAllOfNewUserLookupAttributeMappings]);
      }
      if (data.hasOwnProperty('ldapFilterPattern')) {
        obj['ldapFilterPattern'] = ApiClient.convertToType(data['ldapFilterPattern'], 'String');
      }
      if (data.hasOwnProperty('population')) {
        obj['population'] = GatewayTypeLDAPAllOfNewUserLookupPopulation.constructFromObject(data['population']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GatewayTypeLDAPAllOfNewUserLookup</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayTypeLDAPAllOfNewUserLookup</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GatewayTypeLDAPAllOfNewUserLookup.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    if (data['attributeMappings']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['attributeMappings'])) {
        throw new Error("Expected the field `attributeMappings` to be an array in the JSON data but got " + data['attributeMappings']);
      }
      // validate the optional field `attributeMappings` (array)
      for (const item of data['attributeMappings']) {
        GatewayTypeLDAPAllOfNewUserLookupAttributeMappings.validateJSON(item);
      }
      ;
    }
    // ensure the json data is a string
    if (data['ldapFilterPattern'] && !(typeof data['ldapFilterPattern'] === 'string' || data['ldapFilterPattern'] instanceof String)) {
      throw new Error("Expected the field `ldapFilterPattern` to be a primitive type in the JSON string but got " + data['ldapFilterPattern']);
    }
    // validate the optional field `population`
    if (data['population']) {
      // data not null
      GatewayTypeLDAPAllOfNewUserLookupPopulation.validateJSON(data['population']);
    }
    return true;
  }
}
GatewayTypeLDAPAllOfNewUserLookup.RequiredProperties = ["attributeMappings", "ldapFilterPattern", "population"];

/**
 * A list of objects supplying a mapping of PingOne attributes to external LDAP attributes. One of the entries must be a mapping for \"username`. This is required for the PingOne user schema.
 * @member {Array.<module:model/GatewayTypeLDAPAllOfNewUserLookupAttributeMappings>} attributeMappings
 */
GatewayTypeLDAPAllOfNewUserLookup.prototype['attributeMappings'] = undefined;

/**
 * The LDAP user search filter to use to match users against the entered user identifier at login. For example, (((uid=${identifier})(mail=${identifier})). Alternatively, this can be a search against the user directory.
 * @member {String} ldapFilterPattern
 */
GatewayTypeLDAPAllOfNewUserLookup.prototype['ldapFilterPattern'] = undefined;

/**
 * @member {module:model/GatewayTypeLDAPAllOfNewUserLookupPopulation} population
 */
GatewayTypeLDAPAllOfNewUserLookup.prototype['population'] = undefined;
export default GatewayTypeLDAPAllOfNewUserLookup;