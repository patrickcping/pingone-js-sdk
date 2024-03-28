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
import VoiceConfigurationTextDependentPhrase from './VoiceConfigurationTextDependentPhrase';

/**
 * The VoiceConfigurationTextDependent model module.
 * @module model/VoiceConfigurationTextDependent
 * @version 2023-07-20
 */
class VoiceConfigurationTextDependent {
  /**
   * Constructs a new <code>VoiceConfigurationTextDependent</code>.
   * @alias module:model/VoiceConfigurationTextDependent
   * @param samples {Number} 
   * @param phrase {module:model/VoiceConfigurationTextDependentPhrase} 
   */
  constructor(samples, phrase) {
    VoiceConfigurationTextDependent.initialize(this, samples, phrase);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, samples, phrase) {
    obj['samples'] = samples;
    obj['phrase'] = phrase;
  }

  /**
   * Constructs a <code>VoiceConfigurationTextDependent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoiceConfigurationTextDependent} obj Optional instance to populate.
   * @return {module:model/VoiceConfigurationTextDependent} The populated <code>VoiceConfigurationTextDependent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VoiceConfigurationTextDependent();
      if (data.hasOwnProperty('samples')) {
        obj['samples'] = ApiClient.convertToType(data['samples'], 'Number');
      }
      if (data.hasOwnProperty('phrase')) {
        obj['phrase'] = VoiceConfigurationTextDependentPhrase.constructFromObject(data['phrase']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>VoiceConfigurationTextDependent</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VoiceConfigurationTextDependent</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of VoiceConfigurationTextDependent.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `phrase`
    if (data['phrase']) {
      // data not null
      VoiceConfigurationTextDependentPhrase.validateJSON(data['phrase']);
    }
    return true;
  }
}
VoiceConfigurationTextDependent.RequiredProperties = ["samples", "phrase"];

/**
 * @member {Number} samples
 */
VoiceConfigurationTextDependent.prototype['samples'] = undefined;

/**
 * @member {module:model/VoiceConfigurationTextDependentPhrase} phrase
 */
VoiceConfigurationTextDependent.prototype['phrase'] = undefined;
export default VoiceConfigurationTextDependent;