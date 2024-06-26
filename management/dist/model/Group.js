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
import EnumGroupSourceType from './EnumGroupSourceType';
import GroupDirectMemberCounts from './GroupDirectMemberCounts';
import GroupPopulation from './GroupPopulation';
import GroupTotalMemberCounts from './GroupTotalMemberCounts';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The Group model module.
 * @module model/Group
 * @version 2023-06-29
 */
class Group {
  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @param name {String} The group name. A group name can be reused across populations, but the same user cannot belong to multiple groups with the same group name. Population groups cannot share a group name with an environment group. Search all groups for a specific group name with a SCIM filter on GET /environments/{environmentID}/groups. Retrieve all the group names associated with a user with GET /environments/{environmentID}/users/{userID}?include=memberOfGroupNames. Use this operation to determine group membership in attribute mappings for claims and assertions.
   */
  constructor(name) {
    Group.initialize(this, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name) {
    obj['name'] = name;
  }

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Group();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('population')) {
        obj['population'] = GroupPopulation.constructFromObject(data['population']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('userFilter')) {
        obj['userFilter'] = ApiClient.convertToType(data['userFilter'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('customData')) {
        obj['customData'] = ApiClient.convertToType(data['customData'], Object);
      }
      if (data.hasOwnProperty('sourceId')) {
        obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
      }
      if (data.hasOwnProperty('sourceType')) {
        obj['sourceType'] = EnumGroupSourceType.constructFromObject(data['sourceType']);
      }
      if (data.hasOwnProperty('directMemberCounts')) {
        obj['directMemberCounts'] = GroupDirectMemberCounts.constructFromObject(data['directMemberCounts']);
      }
      if (data.hasOwnProperty('totalMemberCounts')) {
        obj['totalMemberCounts'] = GroupTotalMemberCounts.constructFromObject(data['totalMemberCounts']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Group</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Group</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Group.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
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
    if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
      throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
    }
    // validate the optional field `population`
    if (data['population']) {
      // data not null
      GroupPopulation.validateJSON(data['population']);
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    // ensure the json data is a string
    if (data['userFilter'] && !(typeof data['userFilter'] === 'string' || data['userFilter'] instanceof String)) {
      throw new Error("Expected the field `userFilter` to be a primitive type in the JSON string but got " + data['userFilter']);
    }
    // ensure the json data is a string
    if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
      throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
    }
    // ensure the json data is a string
    if (data['externalId'] && !(typeof data['externalId'] === 'string' || data['externalId'] instanceof String)) {
      throw new Error("Expected the field `externalId` to be a primitive type in the JSON string but got " + data['externalId']);
    }
    // ensure the json data is a string
    if (data['sourceId'] && !(typeof data['sourceId'] === 'string' || data['sourceId'] instanceof String)) {
      throw new Error("Expected the field `sourceId` to be a primitive type in the JSON string but got " + data['sourceId']);
    }
    // validate the optional field `directMemberCounts`
    if (data['directMemberCounts']) {
      // data not null
      GroupDirectMemberCounts.validateJSON(data['directMemberCounts']);
    }
    // validate the optional field `totalMemberCounts`
    if (data['totalMemberCounts']) {
      // data not null
      GroupTotalMemberCounts.validateJSON(data['totalMemberCounts']);
    }
    return true;
  }
}
Group.RequiredProperties = ["name"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
Group.prototype['_links'] = undefined;

/**
 * The unique identifier for the group. Search all groups for a specific group ID with a SCIM filter on GET /environments/{environmentID}/groups. Retrieve all the group IDs associated with a user with GET /environments/{environmentID}/users/{userID}?include=memberOfGroupIDs.
 * @member {String} id
 */
Group.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
Group.prototype['environment'] = undefined;

/**
 * For external groups, set during user creation/update. For groups created on PingOne, this parameter is identical to `name`.
 * @member {String} displayName
 */
Group.prototype['displayName'] = undefined;

/**
 * @member {module:model/GroupPopulation} population
 */
Group.prototype['population'] = undefined;

/**
 * The group name. A group name can be reused across populations, but the same user cannot belong to multiple groups with the same group name. Population groups cannot share a group name with an environment group. Search all groups for a specific group name with a SCIM filter on GET /environments/{environmentID}/groups. Retrieve all the group names associated with a user with GET /environments/{environmentID}/users/{userID}?include=memberOfGroupNames. Use this operation to determine group membership in attribute mappings for claims and assertions.
 * @member {String} name
 */
Group.prototype['name'] = undefined;

/**
 * A SCIM filter that determines which users are dynamically added to the group. For more information, see Adding users to a group and Removing users from a group.
 * @member {String} userFilter
 */
Group.prototype['userFilter'] = undefined;

/**
 * The group description.
 * @member {String} description
 */
Group.prototype['description'] = undefined;

/**
 * A user-defined identifier for the group. Use this propertry to syncronize a group in PingOne with the same group in an external system. PingOne does not directly use this property. Search all groups for a specific external ID with a SCIM filter on GET /environments/{environmentID}/groups
 * @member {String} externalId
 */
Group.prototype['externalId'] = undefined;

/**
 * Optional User-defined custom data.
 * @member {Object} customData
 */
Group.prototype['customData'] = undefined;

/**
 * External groups only. Set during user creation/update.
 * @member {String} sourceId
 */
Group.prototype['sourceId'] = undefined;

/**
 * @member {module:model/EnumGroupSourceType} sourceType
 */
Group.prototype['sourceType'] = undefined;

/**
 * @member {module:model/GroupDirectMemberCounts} directMemberCounts
 */
Group.prototype['directMemberCounts'] = undefined;

/**
 * @member {module:model/GroupTotalMemberCounts} totalMemberCounts
 */
Group.prototype['totalMemberCounts'] = undefined;
export default Group;