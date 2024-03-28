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
import ApplicationOIDCAllOfMobileIntegrityDetection from './ApplicationOIDCAllOfMobileIntegrityDetection';
import ApplicationOIDCAllOfMobilePasscodeRefreshDuration from './ApplicationOIDCAllOfMobilePasscodeRefreshDuration';

/**
 * The ApplicationOIDCAllOfMobile model module.
 * @module model/ApplicationOIDCAllOfMobile
 * @version 2023-06-29
 */
class ApplicationOIDCAllOfMobile {
    /**
     * Constructs a new <code>ApplicationOIDCAllOfMobile</code>.
     * @alias module:model/ApplicationOIDCAllOfMobile
     */
    constructor() { 
        
        ApplicationOIDCAllOfMobile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationOIDCAllOfMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationOIDCAllOfMobile} obj Optional instance to populate.
     * @return {module:model/ApplicationOIDCAllOfMobile} The populated <code>ApplicationOIDCAllOfMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationOIDCAllOfMobile();

            if (data.hasOwnProperty('bundleId')) {
                obj['bundleId'] = ApiClient.convertToType(data['bundleId'], 'String');
            }
            if (data.hasOwnProperty('packageName')) {
                obj['packageName'] = ApiClient.convertToType(data['packageName'], 'String');
            }
            if (data.hasOwnProperty('huaweiAppId')) {
                obj['huaweiAppId'] = ApiClient.convertToType(data['huaweiAppId'], 'String');
            }
            if (data.hasOwnProperty('huaweiPackageName')) {
                obj['huaweiPackageName'] = ApiClient.convertToType(data['huaweiPackageName'], 'String');
            }
            if (data.hasOwnProperty('passcodeRefreshDuration')) {
                obj['passcodeRefreshDuration'] = ApplicationOIDCAllOfMobilePasscodeRefreshDuration.constructFromObject(data['passcodeRefreshDuration']);
            }
            if (data.hasOwnProperty('integrityDetection')) {
                obj['integrityDetection'] = ApplicationOIDCAllOfMobileIntegrityDetection.constructFromObject(data['integrityDetection']);
            }
            if (data.hasOwnProperty('uriPrefix')) {
                obj['uriPrefix'] = ApiClient.convertToType(data['uriPrefix'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationOIDCAllOfMobile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationOIDCAllOfMobile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['bundleId'] && !(typeof data['bundleId'] === 'string' || data['bundleId'] instanceof String)) {
            throw new Error("Expected the field `bundleId` to be a primitive type in the JSON string but got " + data['bundleId']);
        }
        // ensure the json data is a string
        if (data['packageName'] && !(typeof data['packageName'] === 'string' || data['packageName'] instanceof String)) {
            throw new Error("Expected the field `packageName` to be a primitive type in the JSON string but got " + data['packageName']);
        }
        // ensure the json data is a string
        if (data['huaweiAppId'] && !(typeof data['huaweiAppId'] === 'string' || data['huaweiAppId'] instanceof String)) {
            throw new Error("Expected the field `huaweiAppId` to be a primitive type in the JSON string but got " + data['huaweiAppId']);
        }
        // ensure the json data is a string
        if (data['huaweiPackageName'] && !(typeof data['huaweiPackageName'] === 'string' || data['huaweiPackageName'] instanceof String)) {
            throw new Error("Expected the field `huaweiPackageName` to be a primitive type in the JSON string but got " + data['huaweiPackageName']);
        }
        // validate the optional field `passcodeRefreshDuration`
        if (data['passcodeRefreshDuration']) { // data not null
          ApplicationOIDCAllOfMobilePasscodeRefreshDuration.validateJSON(data['passcodeRefreshDuration']);
        }
        // validate the optional field `integrityDetection`
        if (data['integrityDetection']) { // data not null
          ApplicationOIDCAllOfMobileIntegrityDetection.validateJSON(data['integrityDetection']);
        }
        // ensure the json data is a string
        if (data['uriPrefix'] && !(typeof data['uriPrefix'] === 'string' || data['uriPrefix'] instanceof String)) {
            throw new Error("Expected the field `uriPrefix` to be a primitive type in the JSON string but got " + data['uriPrefix']);
        }

        return true;
    }


}



/**
 * A string that specifies the bundle associated with the application, for push notifications in native apps. The value of the bundleId property is unique per environment, and once defined, is immutable.  this setting overrides the top-level bundleId field
 * @member {String} bundleId
 */
ApplicationOIDCAllOfMobile.prototype['bundleId'] = undefined;

/**
 * A string that specifies the package name associated with the application, for push notifications in native apps. The value of the mobile.packageName property is unique per environment, and once defined, is immutable.  this setting overrides the top-level packageName field.
 * @member {String} packageName
 */
ApplicationOIDCAllOfMobile.prototype['packageName'] = undefined;

/**
 * The unique identifier for the app on the device and in the Huawei Mobile Service AppGallery. The value of the `huaweiAppId` property is unique per environment, and once defined, is immutable. Used only for applications for the Huawei ecosystem.
 * @member {String} huaweiAppId
 */
ApplicationOIDCAllOfMobile.prototype['huaweiAppId'] = undefined;

/**
 * The package name associated with the application, for push notifications in native apps. The value of the `huaweiPackageName` property is unique per environment, and once defined, is immutable. Used only for applications for the Huawei ecosystem.
 * @member {String} huaweiPackageName
 */
ApplicationOIDCAllOfMobile.prototype['huaweiPackageName'] = undefined;

/**
 * @member {module:model/ApplicationOIDCAllOfMobilePasscodeRefreshDuration} passcodeRefreshDuration
 */
ApplicationOIDCAllOfMobile.prototype['passcodeRefreshDuration'] = undefined;

/**
 * @member {module:model/ApplicationOIDCAllOfMobileIntegrityDetection} integrityDetection
 */
ApplicationOIDCAllOfMobile.prototype['integrityDetection'] = undefined;

/**
 * A string that specifies a URI prefix that enables direct triggering of the mobile application when scanning a QR code. The URI prefix can be set to a universal link with a valid value (which can be a URL address that starts with `HTTP://` or `HTTPS://`, such as `https://www.acme.com`), or an app schema, which is just a string and requires no special validation.
 * @member {String} uriPrefix
 */
ApplicationOIDCAllOfMobile.prototype['uriPrefix'] = undefined;






export default ApplicationOIDCAllOfMobile;

