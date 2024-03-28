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
 * The SchemaAttributeRegexValidation model module.
 * @module model/SchemaAttributeRegexValidation
 * @version 2023-06-29
 */
class SchemaAttributeRegexValidation {
    /**
     * Constructs a new <code>SchemaAttributeRegexValidation</code>.
     * Object representation of the optional regular expression representation of this attribute.
     * @alias module:model/SchemaAttributeRegexValidation
     * @param pattern {String} A string that specifies the regular expression to which the attribute must conform.
     * @param requirements {String} A string that specifies a developer friendly description of the regular expression requirements.
     */
    constructor(pattern, requirements) { 
        
        SchemaAttributeRegexValidation.initialize(this, pattern, requirements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pattern, requirements) { 
        obj['pattern'] = pattern;
        obj['requirements'] = requirements;
    }

    /**
     * Constructs a <code>SchemaAttributeRegexValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemaAttributeRegexValidation} obj Optional instance to populate.
     * @return {module:model/SchemaAttributeRegexValidation} The populated <code>SchemaAttributeRegexValidation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemaAttributeRegexValidation();

            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('requirements')) {
                obj['requirements'] = ApiClient.convertToType(data['requirements'], 'String');
            }
            if (data.hasOwnProperty('valuesPatternShouldMatch')) {
                obj['valuesPatternShouldMatch'] = ApiClient.convertToType(data['valuesPatternShouldMatch'], ['String']);
            }
            if (data.hasOwnProperty('valuesPatternShouldNotMatch')) {
                obj['valuesPatternShouldNotMatch'] = ApiClient.convertToType(data['valuesPatternShouldNotMatch'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SchemaAttributeRegexValidation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemaAttributeRegexValidation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SchemaAttributeRegexValidation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['pattern'] && !(typeof data['pattern'] === 'string' || data['pattern'] instanceof String)) {
            throw new Error("Expected the field `pattern` to be a primitive type in the JSON string but got " + data['pattern']);
        }
        // ensure the json data is a string
        if (data['requirements'] && !(typeof data['requirements'] === 'string' || data['requirements'] instanceof String)) {
            throw new Error("Expected the field `requirements` to be a primitive type in the JSON string but got " + data['requirements']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['valuesPatternShouldMatch'])) {
            throw new Error("Expected the field `valuesPatternShouldMatch` to be an array in the JSON data but got " + data['valuesPatternShouldMatch']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['valuesPatternShouldNotMatch'])) {
            throw new Error("Expected the field `valuesPatternShouldNotMatch` to be an array in the JSON data but got " + data['valuesPatternShouldNotMatch']);
        }

        return true;
    }


}

SchemaAttributeRegexValidation.RequiredProperties = ["pattern", "requirements"];

/**
 * A string that specifies the regular expression to which the attribute must conform.
 * @member {String} pattern
 */
SchemaAttributeRegexValidation.prototype['pattern'] = undefined;

/**
 * A string that specifies a developer friendly description of the regular expression requirements.
 * @member {String} requirements
 */
SchemaAttributeRegexValidation.prototype['requirements'] = undefined;

/**
 * An array that specifies the list of strings matching the regular expression.
 * @member {Array.<String>} valuesPatternShouldMatch
 */
SchemaAttributeRegexValidation.prototype['valuesPatternShouldMatch'] = undefined;

/**
 * An array that specifies the list of strings not matching the regular expression.
 * @member {Array.<String>} valuesPatternShouldNotMatch
 */
SchemaAttributeRegexValidation.prototype['valuesPatternShouldNotMatch'] = undefined;






export default SchemaAttributeRegexValidation;

