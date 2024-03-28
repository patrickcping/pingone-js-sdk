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
import ImageTargetsOriginal from './ImageTargetsOriginal';

/**
 * The ImageTargets model module.
 * @module model/ImageTargets
 * @version 2023-06-29
 */
class ImageTargets {
    /**
     * Constructs a new <code>ImageTargets</code>.
     * @alias module:model/ImageTargets
     */
    constructor() { 
        
        ImageTargets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageTargets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageTargets} obj Optional instance to populate.
     * @return {module:model/ImageTargets} The populated <code>ImageTargets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageTargets();

            if (data.hasOwnProperty('original')) {
                obj['original'] = ImageTargetsOriginal.constructFromObject(data['original']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImageTargets</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImageTargets</code>.
     */
    static validateJSON(data) {
        // validate the optional field `original`
        if (data['original']) { // data not null
          ImageTargetsOriginal.validateJSON(data['original']);
        }

        return true;
    }


}



/**
 * @member {module:model/ImageTargetsOriginal} original
 */
ImageTargets.prototype['original'] = undefined;






export default ImageTargets;

