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
import EnumVerify from './EnumVerify';

/**
 * The LivenessConfiguration model module.
 * @module model/LivenessConfiguration
 * @version 2023-07-20
 */
class LivenessConfiguration {
    /**
     * Constructs a new <code>LivenessConfiguration</code>.
     * @alias module:model/LivenessConfiguration
     * @param verify {module:model/EnumVerify} 
     * @param threshold {module:model/EnumThreshold} 
     */
    constructor(verify, threshold) { 
        
        LivenessConfiguration.initialize(this, verify, threshold);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, verify, threshold) { 
        obj['verify'] = verify;
        obj['threshold'] = threshold;
    }

    /**
     * Constructs a <code>LivenessConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LivenessConfiguration} obj Optional instance to populate.
     * @return {module:model/LivenessConfiguration} The populated <code>LivenessConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LivenessConfiguration();

            if (data.hasOwnProperty('verify')) {
                obj['verify'] = EnumVerify.constructFromObject(data['verify']);
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = EnumThreshold.constructFromObject(data['threshold']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LivenessConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LivenessConfiguration</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LivenessConfiguration.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

LivenessConfiguration.RequiredProperties = ["verify", "threshold"];

/**
 * @member {module:model/EnumVerify} verify
 */
LivenessConfiguration.prototype['verify'] = undefined;

/**
 * @member {module:model/EnumThreshold} threshold
 */
LivenessConfiguration.prototype['threshold'] = undefined;






export default LivenessConfiguration;

