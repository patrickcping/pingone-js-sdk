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
 * The DecisionEndpointAuthorizationVersion model module.
 * @module model/DecisionEndpointAuthorizationVersion
 * @version 2023-06-29
 */
class DecisionEndpointAuthorizationVersion {
    /**
     * Constructs a new <code>DecisionEndpointAuthorizationVersion</code>.
     * @alias module:model/DecisionEndpointAuthorizationVersion
     */
    constructor() { 
        
        DecisionEndpointAuthorizationVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecisionEndpointAuthorizationVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecisionEndpointAuthorizationVersion} obj Optional instance to populate.
     * @return {module:model/DecisionEndpointAuthorizationVersion} The populated <code>DecisionEndpointAuthorizationVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecisionEndpointAuthorizationVersion();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
     * Validates the JSON data with respect to <code>DecisionEndpointAuthorizationVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecisionEndpointAuthorizationVersion</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
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
 * A string that specifies the ID of the Authorization Version deployed to this endpoint. Versioning allows independent development and deployment of policies. If omitted, the endpoint always uses the latest policy version available from the policy editor service.
 * @member {String} id
 */
DecisionEndpointAuthorizationVersion.prototype['id'] = undefined;

/**
 * A string that specifies the request URL for the authorization version endpoint.
 * @member {String} href
 */
DecisionEndpointAuthorizationVersion.prototype['href'] = undefined;

/**
 * A string that specifies the title for the authorization version response.
 * @member {String} title
 */
DecisionEndpointAuthorizationVersion.prototype['title'] = undefined;

/**
 * A string that specifies the content type for the authorization version response.
 * @member {String} type
 */
DecisionEndpointAuthorizationVersion.prototype['type'] = undefined;






export default DecisionEndpointAuthorizationVersion;

