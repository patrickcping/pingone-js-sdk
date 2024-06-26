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

/**
 * The VoiceConfigurationReferenceData model module.
 * @module model/VoiceConfigurationReferenceData
 * @version 2023-07-20
 */
class VoiceConfigurationReferenceData {
    /**
     * Constructs a new <code>VoiceConfigurationReferenceData</code>.
     * @alias module:model/VoiceConfigurationReferenceData
     */
    constructor() { 
        
        VoiceConfigurationReferenceData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoiceConfigurationReferenceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoiceConfigurationReferenceData} obj Optional instance to populate.
     * @return {module:model/VoiceConfigurationReferenceData} The populated <code>VoiceConfigurationReferenceData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoiceConfigurationReferenceData();

            if (data.hasOwnProperty('retainOriginalRecordings')) {
                obj['retainOriginalRecordings'] = ApiClient.convertToType(data['retainOriginalRecordings'], 'Boolean');
            }
            if (data.hasOwnProperty('updateOnReenrollment')) {
                obj['updateOnReenrollment'] = ApiClient.convertToType(data['updateOnReenrollment'], 'Boolean');
            }
            if (data.hasOwnProperty('updateOnVerification')) {
                obj['updateOnVerification'] = ApiClient.convertToType(data['updateOnVerification'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VoiceConfigurationReferenceData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VoiceConfigurationReferenceData</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} retainOriginalRecordings
 */
VoiceConfigurationReferenceData.prototype['retainOriginalRecordings'] = undefined;

/**
 * @member {Boolean} updateOnReenrollment
 */
VoiceConfigurationReferenceData.prototype['updateOnReenrollment'] = undefined;

/**
 * @member {Boolean} updateOnVerification
 */
VoiceConfigurationReferenceData.prototype['updateOnVerification'] = undefined;






export default VoiceConfigurationReferenceData;

