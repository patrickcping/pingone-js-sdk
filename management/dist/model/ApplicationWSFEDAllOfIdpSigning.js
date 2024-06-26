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
import ApplicationWSFEDAllOfIdpSigningKey from './ApplicationWSFEDAllOfIdpSigningKey';
import EnumApplicationWSFEDIDPSigningAlgorithm from './EnumApplicationWSFEDIDPSigningAlgorithm';

/**
 * The ApplicationWSFEDAllOfIdpSigning model module.
 * @module model/ApplicationWSFEDAllOfIdpSigning
 * @version 2023-06-29
 */
class ApplicationWSFEDAllOfIdpSigning {
  /**
   * Constructs a new <code>ApplicationWSFEDAllOfIdpSigning</code>.
   * Contains the information about the signing of requests by the identity provider (IdP).
   * @alias module:model/ApplicationWSFEDAllOfIdpSigning
   * @param algorithm {module:model/EnumApplicationWSFEDIDPSigningAlgorithm} 
   * @param key {module:model/ApplicationWSFEDAllOfIdpSigningKey} 
   */
  constructor(algorithm, key) {
    ApplicationWSFEDAllOfIdpSigning.initialize(this, algorithm, key);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, algorithm, key) {
    obj['algorithm'] = algorithm;
    obj['key'] = key;
  }

  /**
   * Constructs a <code>ApplicationWSFEDAllOfIdpSigning</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationWSFEDAllOfIdpSigning} obj Optional instance to populate.
   * @return {module:model/ApplicationWSFEDAllOfIdpSigning} The populated <code>ApplicationWSFEDAllOfIdpSigning</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicationWSFEDAllOfIdpSigning();
      if (data.hasOwnProperty('algorithm')) {
        obj['algorithm'] = EnumApplicationWSFEDIDPSigningAlgorithm.constructFromObject(data['algorithm']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApplicationWSFEDAllOfIdpSigningKey.constructFromObject(data['key']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ApplicationWSFEDAllOfIdpSigning</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationWSFEDAllOfIdpSigning</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of ApplicationWSFEDAllOfIdpSigning.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `key`
    if (data['key']) {
      // data not null
      ApplicationWSFEDAllOfIdpSigningKey.validateJSON(data['key']);
    }
    return true;
  }
}
ApplicationWSFEDAllOfIdpSigning.RequiredProperties = ["algorithm", "key"];

/**
 * @member {module:model/EnumApplicationWSFEDIDPSigningAlgorithm} algorithm
 */
ApplicationWSFEDAllOfIdpSigning.prototype['algorithm'] = undefined;

/**
 * @member {module:model/ApplicationWSFEDAllOfIdpSigningKey} key
 */
ApplicationWSFEDAllOfIdpSigning.prototype['key'] = undefined;
export default ApplicationWSFEDAllOfIdpSigning;