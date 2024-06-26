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
 * The ApplicationResourceGrantResource model module.
 * @module model/ApplicationResourceGrantResource
 * @version 2023-06-29
 */
class ApplicationResourceGrantResource {
    /**
     * Constructs a new <code>ApplicationResourceGrantResource</code>.
     * @alias module:model/ApplicationResourceGrantResource
     * @param id {String} A string that specifies the ID of the protected resource associated with this grant. This is a required property.
     */
    constructor(id) { 
        
        ApplicationResourceGrantResource.initialize(this, id);
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
     * Constructs a <code>ApplicationResourceGrantResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationResourceGrantResource} obj Optional instance to populate.
     * @return {module:model/ApplicationResourceGrantResource} The populated <code>ApplicationResourceGrantResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationResourceGrantResource();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationResourceGrantResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationResourceGrantResource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationResourceGrantResource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}

ApplicationResourceGrantResource.RequiredProperties = ["id"];

/**
 * A string that specifies the ID of the protected resource associated with this grant. This is a required property.
 * @member {String} id
 */
ApplicationResourceGrantResource.prototype['id'] = undefined;






export default ApplicationResourceGrantResource;

