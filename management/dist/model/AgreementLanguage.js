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
import AgreementLanguageAgreement from './AgreementLanguageAgreement';
import AgreementLanguageCurrentRevision from './AgreementLanguageCurrentRevision';
import AgreementLanguageUserExperience from './AgreementLanguageUserExperience';
import LinksHATEOAS from './LinksHATEOAS';

/**
 * The AgreementLanguage model module.
 * @module model/AgreementLanguage
 * @version 2023-06-29
 */
class AgreementLanguage {
  /**
   * Constructs a new <code>AgreementLanguage</code>.
   * @alias module:model/AgreementLanguage
   * @param displayName {String} A string that is used as the title of the agreement for the language presented to the user. This is a required property.
   * @param enabled {Boolean} A boolean that maps directly with a language being enabled or displayed for the environment within the platform. This is a required property.
   * @param locale {String} A string that specifies the tag for identifying the language resource associated with this agreement consent (for example, en-US). This is a required property. For more information about language tags, see Tags for Identifying Languages.
   */
  constructor(displayName, enabled, locale) {
    AgreementLanguage.initialize(this, displayName, enabled, locale);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, displayName, enabled, locale) {
    obj['displayName'] = displayName;
    obj['enabled'] = enabled;
    obj['locale'] = locale;
  }

  /**
   * Constructs a <code>AgreementLanguage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgreementLanguage} obj Optional instance to populate.
   * @return {module:model/AgreementLanguage} The populated <code>AgreementLanguage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AgreementLanguage();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('agreement')) {
        obj['agreement'] = AgreementLanguageAgreement.constructFromObject(data['agreement']);
      }
      if (data.hasOwnProperty('currentRevision')) {
        obj['currentRevision'] = AgreementLanguageCurrentRevision.constructFromObject(data['currentRevision']);
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('userExperience')) {
        obj['userExperience'] = AgreementLanguageUserExperience.constructFromObject(data['userExperience']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>AgreementLanguage</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgreementLanguage</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of AgreementLanguage.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `agreement`
    if (data['agreement']) {
      // data not null
      AgreementLanguageAgreement.validateJSON(data['agreement']);
    }
    // validate the optional field `currentRevision`
    if (data['currentRevision']) {
      // data not null
      AgreementLanguageCurrentRevision.validateJSON(data['currentRevision']);
    }
    // ensure the json data is a string
    if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
      throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
      throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
    }
    // validate the optional field `userExperience`
    if (data['userExperience']) {
      // data not null
      AgreementLanguageUserExperience.validateJSON(data['userExperience']);
    }
    return true;
  }
}
AgreementLanguage.RequiredProperties = ["displayName", "enabled", "locale"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
AgreementLanguage.prototype['_links'] = undefined;

/**
 * @member {module:model/AgreementLanguageAgreement} agreement
 */
AgreementLanguage.prototype['agreement'] = undefined;

/**
 * @member {module:model/AgreementLanguageCurrentRevision} currentRevision
 */
AgreementLanguage.prototype['currentRevision'] = undefined;

/**
 * A string that is used as the title of the agreement for the language presented to the user. This is a required property.
 * @member {String} displayName
 */
AgreementLanguage.prototype['displayName'] = undefined;

/**
 * A boolean that maps directly with a language being enabled or displayed for the environment within the platform. This is a required property.
 * @member {Boolean} enabled
 */
AgreementLanguage.prototype['enabled'] = undefined;

/**
 * A string that specifies the language ID.
 * @member {String} id
 */
AgreementLanguage.prototype['id'] = undefined;

/**
 * A string that specifies the tag for identifying the language resource associated with this agreement consent (for example, en-US). This is a required property. For more information about language tags, see Tags for Identifying Languages.
 * @member {String} locale
 */
AgreementLanguage.prototype['locale'] = undefined;

/**
 * @member {module:model/AgreementLanguageUserExperience} userExperience
 */
AgreementLanguage.prototype['userExperience'] = undefined;
export default AgreementLanguage;