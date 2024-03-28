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
import ApplicationSecretPrevious from './ApplicationSecretPrevious';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The ApplicationSecret model module.
 * @module model/ApplicationSecret
 * @version 2023-06-29
 */
class ApplicationSecret {
    /**
     * Constructs a new <code>ApplicationSecret</code>.
     * @alias module:model/ApplicationSecret
     */
    constructor() { 
        
        ApplicationSecret.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSecret} obj Optional instance to populate.
     * @return {module:model/ApplicationSecret} The populated <code>ApplicationSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationSecret();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApplicationSecretPrevious.constructFromObject(data['previous']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationSecret</code>.
     */
    static validateJSON(data) {
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // validate the optional field `previous`
        if (data['previous']) { // data not null
          ApplicationSecretPrevious.validateJSON(data['previous']);
        }

        return true;
    }


}



/**
 * @member {module:model/LinksHATEOAS} _links
 */
ApplicationSecret.prototype['_links'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
ApplicationSecret.prototype['environment'] = undefined;

/**
 * A string that specifies the application secret ID used to authenticate to the authorization server.
 * @member {String} secret
 */
ApplicationSecret.prototype['secret'] = undefined;

/**
 * @member {module:model/ApplicationSecretPrevious} previous
 */
ApplicationSecret.prototype['previous'] = undefined;






export default ApplicationSecret;
