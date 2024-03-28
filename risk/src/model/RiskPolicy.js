/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import RiskPolicyCondition from './RiskPolicyCondition';
import RiskPolicyResult from './RiskPolicyResult';

/**
 * The RiskPolicy model module.
 * @module model/RiskPolicy
 * @version 2023-06-29
 */
class RiskPolicy {
    /**
     * Constructs a new <code>RiskPolicy</code>.
     * @alias module:model/RiskPolicy
     * @param condition {module:model/RiskPolicyCondition} 
     * @param name {String} A string that specifies a name for this risk policy. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. Maximum size is 256 characters.
     * @param result {module:model/RiskPolicyResult} 
     */
    constructor(condition, name, result) { 
        
        RiskPolicy.initialize(this, condition, name, result);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, condition, name, result) { 
        obj['condition'] = condition;
        obj['name'] = name;
        obj['result'] = result;
    }

    /**
     * Constructs a <code>RiskPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPolicy} obj Optional instance to populate.
     * @return {module:model/RiskPolicy} The populated <code>RiskPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPolicy();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = RiskPolicyCondition.constructFromObject(data['condition']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = RiskPolicyResult.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RiskPolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          RiskPolicyCondition.validateJSON(data['condition']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          RiskPolicyResult.validateJSON(data['result']);
        }

        return true;
    }


}

RiskPolicy.RequiredProperties = ["condition", "name", "result"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
RiskPolicy.prototype['_links'] = undefined;

/**
 * @member {module:model/RiskPolicyCondition} condition
 */
RiskPolicy.prototype['condition'] = undefined;

/**
 * The time the resource was first created (format ISO-8061).
 * @member {Date} createdAt
 */
RiskPolicy.prototype['createdAt'] = undefined;

/**
 * A string that specifies a description for this risk policy. This is an optional property. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, punctuation character, or space. Maximum size is 1024 characters.
 * @member {String} description
 */
RiskPolicy.prototype['description'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
RiskPolicy.prototype['environment'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
RiskPolicy.prototype['id'] = undefined;

/**
 * A string that specifies a name for this risk policy. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen. Maximum size is 256 characters.
 * @member {String} name
 */
RiskPolicy.prototype['name'] = undefined;

/**
 * An integer that specifies priority of the policy inside a risk policy set, designating which policy should run first. This is a read-only value. The priority is determined by the order in which policies are listed in the policy set. The first policy in the list is assigned priority 1 and is evaluated first. The next policy in the list is assigned priority 2 and so on.
 * @member {Number} priority
 */
RiskPolicy.prototype['priority'] = undefined;

/**
 * @member {module:model/RiskPolicyResult} result
 */
RiskPolicy.prototype['result'] = undefined;

/**
 * The time the resource was last updated (format ISO-8061).
 * @member {Date} updatedAt
 */
RiskPolicy.prototype['updatedAt'] = undefined;






export default RiskPolicy;

