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
 * The RoleAssignmentGroup model module.
 * @module model/RoleAssignmentGroup
 * @version 2023-06-29
 */
class RoleAssignmentGroup {
    /**
     * Constructs a new <code>RoleAssignmentGroup</code>.
     * @alias module:model/RoleAssignmentGroup
     */
    constructor() { 
        
        RoleAssignmentGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleAssignmentGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAssignmentGroup} obj Optional instance to populate.
     * @return {module:model/RoleAssignmentGroup} The populated <code>RoleAssignmentGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleAssignmentGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoleAssignmentGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoleAssignmentGroup</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * A string that specifies the group ID.
 * @member {String} id
 */
RoleAssignmentGroup.prototype['id'] = undefined;






export default RoleAssignmentGroup;

