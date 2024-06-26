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
import ApplicationAccessControlGroupGroupsInner from './ApplicationAccessControlGroupGroupsInner';
import EnumApplicationAccessControlGroupType from './EnumApplicationAccessControlGroupType';

/**
 * The ApplicationAccessControlGroup model module.
 * @module model/ApplicationAccessControlGroup
 * @version 2023-06-29
 */
class ApplicationAccessControlGroup {
    /**
     * Constructs a new <code>ApplicationAccessControlGroup</code>.
     * @alias module:model/ApplicationAccessControlGroup
     * @param type {module:model/EnumApplicationAccessControlGroupType} 
     * @param groups {Array.<module:model/ApplicationAccessControlGroupGroupsInner>} A set that specifies the group IDs for the groups the actor must belong to for access to the application.
     */
    constructor(type, groups) { 
        
        ApplicationAccessControlGroup.initialize(this, type, groups);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, groups) { 
        obj['type'] = type;
        obj['groups'] = groups;
    }

    /**
     * Constructs a <code>ApplicationAccessControlGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationAccessControlGroup} obj Optional instance to populate.
     * @return {module:model/ApplicationAccessControlGroup} The populated <code>ApplicationAccessControlGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationAccessControlGroup();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumApplicationAccessControlGroupType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [ApplicationAccessControlGroupGroupsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationAccessControlGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationAccessControlGroup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationAccessControlGroup.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groups'])) {
                throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
            }
            // validate the optional field `groups` (array)
            for (const item of data['groups']) {
                ApplicationAccessControlGroupGroupsInner.validateJSON(item);
            };
        }

        return true;
    }


}

ApplicationAccessControlGroup.RequiredProperties = ["type", "groups"];

/**
 * @member {module:model/EnumApplicationAccessControlGroupType} type
 */
ApplicationAccessControlGroup.prototype['type'] = undefined;

/**
 * A set that specifies the group IDs for the groups the actor must belong to for access to the application.
 * @member {Array.<module:model/ApplicationAccessControlGroupGroupsInner>} groups
 */
ApplicationAccessControlGroup.prototype['groups'] = undefined;






export default ApplicationAccessControlGroup;

