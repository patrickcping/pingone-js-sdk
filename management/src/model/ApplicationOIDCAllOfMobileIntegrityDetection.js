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
import ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration from './ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration';
import ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay from './ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay';
import EnumEnabledStatus from './EnumEnabledStatus';
import EnumMobileIntegrityDetectionPlatform from './EnumMobileIntegrityDetectionPlatform';

/**
 * The ApplicationOIDCAllOfMobileIntegrityDetection model module.
 * @module model/ApplicationOIDCAllOfMobileIntegrityDetection
 * @version 2023-06-29
 */
class ApplicationOIDCAllOfMobileIntegrityDetection {
    /**
     * Constructs a new <code>ApplicationOIDCAllOfMobileIntegrityDetection</code>.
     * @alias module:model/ApplicationOIDCAllOfMobileIntegrityDetection
     */
    constructor() { 
        
        ApplicationOIDCAllOfMobileIntegrityDetection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationOIDCAllOfMobileIntegrityDetection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationOIDCAllOfMobileIntegrityDetection} obj Optional instance to populate.
     * @return {module:model/ApplicationOIDCAllOfMobileIntegrityDetection} The populated <code>ApplicationOIDCAllOfMobileIntegrityDetection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationOIDCAllOfMobileIntegrityDetection();

            if (data.hasOwnProperty('excludedPlatforms')) {
                obj['excludedPlatforms'] = ApiClient.convertToType(data['excludedPlatforms'], [EnumMobileIntegrityDetectionPlatform]);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = EnumEnabledStatus.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('cacheDuration')) {
                obj['cacheDuration'] = ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.constructFromObject(data['cacheDuration']);
            }
            if (data.hasOwnProperty('googlePlay')) {
                obj['googlePlay'] = ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.constructFromObject(data['googlePlay']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationOIDCAllOfMobileIntegrityDetection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationOIDCAllOfMobileIntegrityDetection</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['excludedPlatforms'])) {
            throw new Error("Expected the field `excludedPlatforms` to be an array in the JSON data but got " + data['excludedPlatforms']);
        }
        // validate the optional field `cacheDuration`
        if (data['cacheDuration']) { // data not null
          ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.validateJSON(data['cacheDuration']);
        }
        // validate the optional field `googlePlay`
        if (data['googlePlay']) { // data not null
          ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.validateJSON(data['googlePlay']);
        }

        return true;
    }


}



/**
 * You can enable device integrity checking separately for Android and iOS by setting `mobile.integrityDetection.mode` to `ENABLED` and then using `mobile.integrityDetection.excludedPlatforms` to specify the OS where you do not want to use device integrity checking. The values to use are `GOOGLE` and `IOS` (all upper case). Note that this is implemented as an array even though currently you can only include a single value.  If `GOOGLE` is not included as a value, `googlePlay` is required to be set.
 * @member {Array.<module:model/EnumMobileIntegrityDetectionPlatform>} excludedPlatforms
 */
ApplicationOIDCAllOfMobileIntegrityDetection.prototype['excludedPlatforms'] = undefined;

/**
 * @member {module:model/EnumEnabledStatus} mode
 */
ApplicationOIDCAllOfMobileIntegrityDetection.prototype['mode'] = undefined;

/**
 * @member {module:model/ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration} cacheDuration
 */
ApplicationOIDCAllOfMobileIntegrityDetection.prototype['cacheDuration'] = undefined;

/**
 * @member {module:model/ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay} googlePlay
 */
ApplicationOIDCAllOfMobileIntegrityDetection.prototype['googlePlay'] = undefined;






export default ApplicationOIDCAllOfMobileIntegrityDetection;

