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
import EnumApplicationCorsSettingsBehavior from './EnumApplicationCorsSettingsBehavior';

/**
 * The ApplicationCorsSettings model module.
 * @module model/ApplicationCorsSettings
 * @version 2023-06-29
 */
class ApplicationCorsSettings {
    /**
     * Constructs a new <code>ApplicationCorsSettings</code>.
     * Allows customization of how the Authorization and Authentication APIs interact with CORS requests that reference the application.  If omitted, the application allows CORS requests from any origin except for operations that expose sensitive information (e.g. &#x60;/as/authorize&#x60; and &#x60;/as/token&#x60;).  This is legacy behavior, and it is recommended that applications migrate to include specific &#x60;corsSettings&#x60;.
     * @alias module:model/ApplicationCorsSettings
     * @param behavior {module:model/EnumApplicationCorsSettingsBehavior} 
     */
    constructor(behavior) { 
        
        ApplicationCorsSettings.initialize(this, behavior);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, behavior) { 
        obj['behavior'] = behavior;
    }

    /**
     * Constructs a <code>ApplicationCorsSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCorsSettings} obj Optional instance to populate.
     * @return {module:model/ApplicationCorsSettings} The populated <code>ApplicationCorsSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCorsSettings();

            if (data.hasOwnProperty('behavior')) {
                obj['behavior'] = EnumApplicationCorsSettingsBehavior.constructFromObject(data['behavior']);
            }
            if (data.hasOwnProperty('origins')) {
                obj['origins'] = ApiClient.convertToType(data['origins'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationCorsSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationCorsSettings</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationCorsSettings.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['origins'])) {
            throw new Error("Expected the field `origins` to be an array in the JSON data but got " + data['origins']);
        }

        return true;
    }


}

ApplicationCorsSettings.RequiredProperties = ["behavior"];

/**
 * @member {module:model/EnumApplicationCorsSettingsBehavior} behavior
 */
ApplicationCorsSettings.prototype['behavior'] = undefined;

/**
 * Must be non-empty when `corsSettings.behavior` is `ALLOW_SPECIFIC_ORIGINS` and must be omitted or empty when `corsSettings.behavior` is `ALLOW_NO_ORIGINS`.  Limited to 20 values.  Values are the origins from which CORS requests to the Authorization and Authentication APIs are allowed.  Each value is an `http` or `https` URL without a path.  The host may be a domain name (including `localhost`), or an IPv4 address.  Subdomains may use the wildcard (*) to match any string.
 * @member {Array.<String>} origins
 */
ApplicationCorsSettings.prototype['origins'] = undefined;






export default ApplicationCorsSettings;

