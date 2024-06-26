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
 * The VoicePhraseContentsVoicePhrase model module.
 * @module model/VoicePhraseContentsVoicePhrase
 * @version 2023-07-20
 */
class VoicePhraseContentsVoicePhrase {
  /**
   * Constructs a new <code>VoicePhraseContentsVoicePhrase</code>.
   * @alias module:model/VoicePhraseContentsVoicePhrase
   * @param id {String} 
   */
  constructor(id) {
    VoicePhraseContentsVoicePhrase.initialize(this, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id) {
    obj['id'] = id;
  }

  /**
   * Constructs a <code>VoicePhraseContentsVoicePhrase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicePhraseContentsVoicePhrase} obj Optional instance to populate.
   * @return {module:model/VoicePhraseContentsVoicePhrase} The populated <code>VoicePhraseContentsVoicePhrase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VoicePhraseContentsVoicePhrase();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>VoicePhraseContentsVoicePhrase</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VoicePhraseContentsVoicePhrase</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of VoicePhraseContentsVoicePhrase.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    return true;
  }
}
VoicePhraseContentsVoicePhrase.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
VoicePhraseContentsVoicePhrase.prototype['id'] = undefined;
export default VoicePhraseContentsVoicePhrase;