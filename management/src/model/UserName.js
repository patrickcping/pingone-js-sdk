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
 * The UserName model module.
 * @module model/UserName
 * @version 2023-06-29
 */
class UserName {
    /**
     * Constructs a new <code>UserName</code>.
     * @alias module:model/UserName
     */
    constructor() { 
        
        UserName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserName} obj Optional instance to populate.
     * @return {module:model/UserName} The populated <code>UserName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserName();

            if (data.hasOwnProperty('family')) {
                obj['family'] = ApiClient.convertToType(data['family'], 'String');
            }
            if (data.hasOwnProperty('formatted')) {
                obj['formatted'] = ApiClient.convertToType(data['formatted'], 'String');
            }
            if (data.hasOwnProperty('given')) {
                obj['given'] = ApiClient.convertToType(data['given'], 'String');
            }
            if (data.hasOwnProperty('honorificPrefix')) {
                obj['honorificPrefix'] = ApiClient.convertToType(data['honorificPrefix'], 'String');
            }
            if (data.hasOwnProperty('honorificSuffix')) {
                obj['honorificSuffix'] = ApiClient.convertToType(data['honorificSuffix'], 'String');
            }
            if (data.hasOwnProperty('middle')) {
                obj['middle'] = ApiClient.convertToType(data['middle'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserName</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserName</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['family'] && !(typeof data['family'] === 'string' || data['family'] instanceof String)) {
            throw new Error("Expected the field `family` to be a primitive type in the JSON string but got " + data['family']);
        }
        // ensure the json data is a string
        if (data['formatted'] && !(typeof data['formatted'] === 'string' || data['formatted'] instanceof String)) {
            throw new Error("Expected the field `formatted` to be a primitive type in the JSON string but got " + data['formatted']);
        }
        // ensure the json data is a string
        if (data['given'] && !(typeof data['given'] === 'string' || data['given'] instanceof String)) {
            throw new Error("Expected the field `given` to be a primitive type in the JSON string but got " + data['given']);
        }
        // ensure the json data is a string
        if (data['honorificPrefix'] && !(typeof data['honorificPrefix'] === 'string' || data['honorificPrefix'] instanceof String)) {
            throw new Error("Expected the field `honorificPrefix` to be a primitive type in the JSON string but got " + data['honorificPrefix']);
        }
        // ensure the json data is a string
        if (data['honorificSuffix'] && !(typeof data['honorificSuffix'] === 'string' || data['honorificSuffix'] instanceof String)) {
            throw new Error("Expected the field `honorificSuffix` to be a primitive type in the JSON string but got " + data['honorificSuffix']);
        }
        // ensure the json data is a string
        if (data['middle'] && !(typeof data['middle'] === 'string' || data['middle'] instanceof String)) {
            throw new Error("Expected the field `middle` to be a primitive type in the JSON string but got " + data['middle']);
        }

        return true;
    }


}



/**
 * A string that specifies the family name of the user, or Last in most Western languages (for example, ‘Jensen’ given the full name ‘Ms. Barbara J Jensen, III’). This may be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen (regex `^[\\p{L}\\p{M}\\p{N}' .-]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} family
 */
UserName.prototype['family'] = undefined;

/**
 * A string that specifies the fully formatted name of the user (for example ‘Ms. Barbara J Jensen, III’). This can be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen (regex `^[\\p{L}\\p{M}\\p{N}' .-]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} formatted
 */
UserName.prototype['formatted'] = undefined;

/**
 * A string that specifies the given name of the user, or First in most Western languages (for example, ‘Barbara’ given the full name ‘Ms. Barbara J Jensen, III’). This may be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} given
 */
UserName.prototype['given'] = undefined;

/**
 * A string that specifies the honorific prefix(es) of the user, or title in most Western languages (for example, ‘Ms.’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it.
 * @member {String} honorificPrefix
 */
UserName.prototype['honorificPrefix'] = undefined;

/**
 * A string that specifies the honorific suffix(es) of the user, or suffix in most Western languages (for example, ‘III’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it.
 * @member {String} honorificSuffix
 */
UserName.prototype['honorificSuffix'] = undefined;

/**
 * A string that specifies the the middle name(s) of the user (for exmple, ‘Jane’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} middle
 */
UserName.prototype['middle'] = undefined;






export default UserName;

