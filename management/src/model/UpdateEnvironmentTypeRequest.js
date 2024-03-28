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
import EnumEnvironmentType from './EnumEnvironmentType';

/**
 * The UpdateEnvironmentTypeRequest model module.
 * @module model/UpdateEnvironmentTypeRequest
 * @version 2023-06-29
 */
class UpdateEnvironmentTypeRequest {
    /**
     * Constructs a new <code>UpdateEnvironmentTypeRequest</code>.
     * @alias module:model/UpdateEnvironmentTypeRequest
     */
    constructor() { 
        
        UpdateEnvironmentTypeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateEnvironmentTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEnvironmentTypeRequest} obj Optional instance to populate.
     * @return {module:model/UpdateEnvironmentTypeRequest} The populated <code>UpdateEnvironmentTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEnvironmentTypeRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumEnvironmentType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateEnvironmentTypeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateEnvironmentTypeRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/EnumEnvironmentType} type
 */
UpdateEnvironmentTypeRequest.prototype['type'] = undefined;






export default UpdateEnvironmentTypeRequest;

