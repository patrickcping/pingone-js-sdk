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
import EmailDomainDKIMStatusRegionsInner from './EmailDomainDKIMStatusRegionsInner';

/**
 * The EmailDomainDKIMStatus model module.
 * @module model/EmailDomainDKIMStatus
 * @version 2023-06-29
 */
class EmailDomainDKIMStatus {
    /**
     * Constructs a new <code>EmailDomainDKIMStatus</code>.
     * @alias module:model/EmailDomainDKIMStatus
     */
    constructor() { 
        
        EmailDomainDKIMStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailDomainDKIMStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailDomainDKIMStatus} obj Optional instance to populate.
     * @return {module:model/EmailDomainDKIMStatus} The populated <code>EmailDomainDKIMStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailDomainDKIMStatus();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], [EmailDomainDKIMStatusRegionsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailDomainDKIMStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailDomainDKIMStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['regions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['regions'])) {
                throw new Error("Expected the field `regions` to be an array in the JSON data but got " + data['regions']);
            }
            // validate the optional field `regions` (array)
            for (const item of data['regions']) {
                EmailDomainDKIMStatusRegionsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A string that specifies the type of DNS record, with the value \"CNAME\".
 * @member {String} type
 */
EmailDomainDKIMStatus.prototype['type'] = undefined;

/**
 * The regions collection specifies the properties for the 4 AWS SES regions that are used for sending email for the environment. The regions are determined by the geography where this environment was provisioned (North America, Canada, Europe & Asia-Pacific).
 * @member {Array.<module:model/EmailDomainDKIMStatusRegionsInner>} regions
 */
EmailDomainDKIMStatus.prototype['regions'] = undefined;






export default EmailDomainDKIMStatus;

