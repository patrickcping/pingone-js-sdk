/**
 * PingOne Platform API - Authorize
 * The PingOne Platform API covering the PingOne Authorize service
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
 * The DecisionEndpointRecentDecisions model module.
 * @module model/DecisionEndpointRecentDecisions
 * @version 2023-06-29
 */
class DecisionEndpointRecentDecisions {
    /**
     * Constructs a new <code>DecisionEndpointRecentDecisions</code>.
     * @alias module:model/DecisionEndpointRecentDecisions
     */
    constructor() { 
        
        DecisionEndpointRecentDecisions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecisionEndpointRecentDecisions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecisionEndpointRecentDecisions} obj Optional instance to populate.
     * @return {module:model/DecisionEndpointRecentDecisions} The populated <code>DecisionEndpointRecentDecisions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecisionEndpointRecentDecisions();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecisionEndpointRecentDecisions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecisionEndpointRecentDecisions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * A string that specifies the request URL for the recent decisions endpoint.
 * @member {String} href
 */
DecisionEndpointRecentDecisions.prototype['href'] = undefined;

/**
 * A string that specifies the title for the recent decisions response.
 * @member {String} title
 */
DecisionEndpointRecentDecisions.prototype['title'] = undefined;

/**
 * A string that specifies the content type for the recent decisions response.
 * @member {String} type
 */
DecisionEndpointRecentDecisions.prototype['type'] = undefined;






export default DecisionEndpointRecentDecisions;

