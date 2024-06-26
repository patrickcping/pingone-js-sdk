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
import P1ErrorDetailsInnerInnerError from './P1ErrorDetailsInnerInnerError';

/**
 * The P1ErrorDetailsInner model module.
 * @module model/P1ErrorDetailsInner
 * @version 2023-06-29
 */
class P1ErrorDetailsInner {
    /**
     * Constructs a new <code>P1ErrorDetailsInner</code>.
     * @alias module:model/P1ErrorDetailsInner
     */
    constructor() { 
        
        P1ErrorDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>P1ErrorDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/P1ErrorDetailsInner} obj Optional instance to populate.
     * @return {module:model/P1ErrorDetailsInner} The populated <code>P1ErrorDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new P1ErrorDetailsInner();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('innerError')) {
                obj['innerError'] = P1ErrorDetailsInnerInnerError.constructFromObject(data['innerError']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>P1ErrorDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>P1ErrorDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `innerError`
        if (data['innerError']) { // data not null
          P1ErrorDetailsInnerInnerError.validateJSON(data['innerError']);
        }

        return true;
    }


}



/**
 * A general fault code which the client must handle to provide all exception handling routines and to localize messages for users. This code is common across all PingOne services and is human readable (such as a defined constant rather than a number).
 * @member {String} code
 */
P1ErrorDetailsInner.prototype['code'] = undefined;

/**
 * The item that caused the error (such as a form field ID or an attribute inside a JSON object).
 * @member {String} target
 */
P1ErrorDetailsInner.prototype['target'] = undefined;

/**
 * A short description of the error. This message is intended to assist with debugging and is returned in English only.
 * @member {String} message
 */
P1ErrorDetailsInner.prototype['message'] = undefined;

/**
 * @member {module:model/P1ErrorDetailsInnerInnerError} innerError
 */
P1ErrorDetailsInner.prototype['innerError'] = undefined;






export default P1ErrorDetailsInner;

