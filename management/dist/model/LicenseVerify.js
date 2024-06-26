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
 * The LicenseVerify model module.
 * @module model/LicenseVerify
 * @version 2023-06-29
 */
class LicenseVerify {
  /**
   * Constructs a new <code>LicenseVerify</code>.
   * @alias module:model/LicenseVerify
   */
  constructor() {
    LicenseVerify.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LicenseVerify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseVerify} obj Optional instance to populate.
   * @return {module:model/LicenseVerify} The populated <code>LicenseVerify</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LicenseVerify();
      if (data.hasOwnProperty('allowPushNotifications')) {
        obj['allowPushNotifications'] = ApiClient.convertToType(data['allowPushNotifications'], 'Boolean');
      }
      if (data.hasOwnProperty('allowDocumentMatch')) {
        obj['allowDocumentMatch'] = ApiClient.convertToType(data['allowDocumentMatch'], 'Boolean');
      }
      if (data.hasOwnProperty('allowFaceMatch')) {
        obj['allowFaceMatch'] = ApiClient.convertToType(data['allowFaceMatch'], 'Boolean');
      }
      if (data.hasOwnProperty('allowManualIdInspection')) {
        obj['allowManualIdInspection'] = ApiClient.convertToType(data['allowManualIdInspection'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>LicenseVerify</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseVerify</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * A read-only boolean that specifies whether to enable the PingOne Verify push notifications feature.
 * @member {Boolean} allowPushNotifications
 */
LicenseVerify.prototype['allowPushNotifications'] = undefined;

/**
 * A read-only boolean that specifies whether to enable the PingOne Verify document matching feature.
 * @member {Boolean} allowDocumentMatch
 */
LicenseVerify.prototype['allowDocumentMatch'] = undefined;

/**
 * A read-only boolean that specifies whether to enable the PingOne Verify face matching feature.
 * @member {Boolean} allowFaceMatch
 */
LicenseVerify.prototype['allowFaceMatch'] = undefined;

/**
 * A read-only boolean that specifies whether to enable the PingOne Verify manual ID inspection feature.
 * @member {Boolean} allowManualIdInspection
 */
LicenseVerify.prototype['allowManualIdInspection'] = undefined;
export default LicenseVerify;