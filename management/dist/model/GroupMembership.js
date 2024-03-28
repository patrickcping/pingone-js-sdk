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
import EnumGroupMembershipType from './EnumGroupMembershipType';
import GroupMembershipEmbedded from './GroupMembershipEmbedded';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The GroupMembership model module.
 * @module model/GroupMembership
 * @version 2023-06-29
 */
class GroupMembership {
  /**
   * Constructs a new <code>GroupMembership</code>.
   * @alias module:model/GroupMembership
   * @param id {String} ID of the group to assign
   */
  constructor(id) {
    GroupMembership.initialize(this, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id) {
    obj['id'] = id;
  }

  /**
   * Constructs a <code>GroupMembership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupMembership} obj Optional instance to populate.
   * @return {module:model/GroupMembership} The populated <code>GroupMembership</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GroupMembership();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = GroupMembershipEmbedded.constructFromObject(data['_embedded']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumGroupMembershipType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GroupMembership</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupMembership</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GroupMembership.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `_embedded`
    if (data['_embedded']) {
      // data not null
      GroupMembershipEmbedded.validateJSON(data['_embedded']);
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
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    return true;
  }
}
GroupMembership.RequiredProperties = ["id"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
GroupMembership.prototype['_links'] = undefined;

/**
 * @member {module:model/GroupMembershipEmbedded} _embedded
 */
GroupMembership.prototype['_embedded'] = undefined;

/**
 * ID of the group to assign
 * @member {String} id
 */
GroupMembership.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
GroupMembership.prototype['environment'] = undefined;

/**
 * A string that specifies the group name assigned to the user.
 * @member {String} name
 */
GroupMembership.prototype['name'] = undefined;

/**
 * @member {module:model/EnumGroupMembershipType} type
 */
GroupMembership.prototype['type'] = undefined;
export default GroupMembership;