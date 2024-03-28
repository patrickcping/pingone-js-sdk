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
 * The SubscriptionFilterOptionsIncludedApplicationsInner model module.
 * @module model/SubscriptionFilterOptionsIncludedApplicationsInner
 * @version 2023-06-29
 */
class SubscriptionFilterOptionsIncludedApplicationsInner {
    /**
     * Constructs a new <code>SubscriptionFilterOptionsIncludedApplicationsInner</code>.
     * @alias module:model/SubscriptionFilterOptionsIncludedApplicationsInner
     * @param id {String} 
     */
    constructor(id) { 
        
        SubscriptionFilterOptionsIncludedApplicationsInner.initialize(this, id);
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
     * Constructs a <code>SubscriptionFilterOptionsIncludedApplicationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionFilterOptionsIncludedApplicationsInner} obj Optional instance to populate.
     * @return {module:model/SubscriptionFilterOptionsIncludedApplicationsInner} The populated <code>SubscriptionFilterOptionsIncludedApplicationsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionFilterOptionsIncludedApplicationsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptionFilterOptionsIncludedApplicationsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptionFilterOptionsIncludedApplicationsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubscriptionFilterOptionsIncludedApplicationsInner.RequiredProperties) {
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

SubscriptionFilterOptionsIncludedApplicationsInner.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
SubscriptionFilterOptionsIncludedApplicationsInner.prototype['id'] = undefined;






export default SubscriptionFilterOptionsIncludedApplicationsInner;
