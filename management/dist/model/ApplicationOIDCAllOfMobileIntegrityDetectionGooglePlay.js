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
import EnumApplicationNativeGooglePlayVerificationType from './EnumApplicationNativeGooglePlayVerificationType';

/**
 * The ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay model module.
 * @module model/ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay
 * @version 2023-06-29
 */
class ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay {
  /**
   * Constructs a new <code>ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay</code>.
   * Object that contains the credentials required for using Google&#39;s Play Integrity API for integrity detection.  Required if &#x60;excludedPlatforms&#x60; does not contain &#x60;GOOGLE&#x60;.
   * @alias module:model/ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay
   */
  constructor() {
    ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay} obj Optional instance to populate.
   * @return {module:model/ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay} The populated <code>ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay();
      if (data.hasOwnProperty('decryptionKey')) {
        obj['decryptionKey'] = ApiClient.convertToType(data['decryptionKey'], 'String');
      }
      if (data.hasOwnProperty('serviceAccountCredentials')) {
        obj['serviceAccountCredentials'] = ApiClient.convertToType(data['serviceAccountCredentials'], 'String');
      }
      if (data.hasOwnProperty('verificationKey')) {
        obj['verificationKey'] = ApiClient.convertToType(data['verificationKey'], 'String');
      }
      if (data.hasOwnProperty('verificationType')) {
        obj['verificationType'] = EnumApplicationNativeGooglePlayVerificationType.constructFromObject(data['verificationType']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['decryptionKey'] && !(typeof data['decryptionKey'] === 'string' || data['decryptionKey'] instanceof String)) {
      throw new Error("Expected the field `decryptionKey` to be a primitive type in the JSON string but got " + data['decryptionKey']);
    }
    // ensure the json data is a string
    if (data['serviceAccountCredentials'] && !(typeof data['serviceAccountCredentials'] === 'string' || data['serviceAccountCredentials'] instanceof String)) {
      throw new Error("Expected the field `serviceAccountCredentials` to be a primitive type in the JSON string but got " + data['serviceAccountCredentials']);
    }
    // ensure the json data is a string
    if (data['verificationKey'] && !(typeof data['verificationKey'] === 'string' || data['verificationKey'] instanceof String)) {
      throw new Error("Expected the field `verificationKey` to be a primitive type in the JSON string but got " + data['verificationKey']);
    }
    return true;
  }
}

/**
 * Play Integrity verdict decryption key from your Google Play Services account. This parameter must be provided if you have set `mobile.integrityDetection.googlePlay.verificationType` to `INTERNAL`.
 * @member {String} decryptionKey
 */
ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.prototype['decryptionKey'] = undefined;

/**
 * Contents of the JSON file that represents your Service Account Credentials. This parameter must be provided if you have set `mobile.integrityDetection.googlePlay.verificationType` to `GOOGLE`.
 * @member {String} serviceAccountCredentials
 */
ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.prototype['serviceAccountCredentials'] = undefined;

/**
 * Play Integrity verdict signature verification key from your Google Play Services account. This parameter must be provided if you have set `mobile.integrityDetection.googlePlay.verificationType` to `INTERNAL`.
 * @member {String} verificationKey
 */
ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.prototype['verificationKey'] = undefined;

/**
 * @member {module:model/EnumApplicationNativeGooglePlayVerificationType} verificationType
 */
ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay.prototype['verificationType'] = undefined;
export default ApplicationOIDCAllOfMobileIntegrityDetectionGooglePlay;