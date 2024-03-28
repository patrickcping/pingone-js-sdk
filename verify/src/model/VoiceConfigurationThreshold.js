/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnumThreshold from './EnumThreshold';

/**
 * The VoiceConfigurationThreshold model module.
 * @module model/VoiceConfigurationThreshold
 * @version 2023-07-20
 */
class VoiceConfigurationThreshold {
    /**
     * Constructs a new <code>VoiceConfigurationThreshold</code>.
     * @alias module:model/VoiceConfigurationThreshold
     * @param threshold {module:model/EnumThreshold} 
     */
    constructor(threshold) { 
        
        VoiceConfigurationThreshold.initialize(this, threshold);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, threshold) { 
        obj['threshold'] = threshold;
    }

    /**
     * Constructs a <code>VoiceConfigurationThreshold</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoiceConfigurationThreshold} obj Optional instance to populate.
     * @return {module:model/VoiceConfigurationThreshold} The populated <code>VoiceConfigurationThreshold</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoiceConfigurationThreshold();

            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = EnumThreshold.constructFromObject(data['threshold']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VoiceConfigurationThreshold</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VoiceConfigurationThreshold</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VoiceConfigurationThreshold.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

VoiceConfigurationThreshold.RequiredProperties = ["threshold"];

/**
 * @member {module:model/EnumThreshold} threshold
 */
VoiceConfigurationThreshold.prototype['threshold'] = undefined;






export default VoiceConfigurationThreshold;
