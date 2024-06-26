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
import EnumTemplateContentDeliveryMethod from './EnumTemplateContentDeliveryMethod';
import LinksHATEOAS from './LinksHATEOAS';
import TemplateContentCommon from './TemplateContentCommon';

/**
 * The TemplateContentVoice model module.
 * @module model/TemplateContentVoice
 * @version 2023-06-29
 */
class TemplateContentVoice {
  /**
   * Constructs a new <code>TemplateContentVoice</code>.
   * @alias module:model/TemplateContentVoice
   * @implements module:model/TemplateContentCommon
   * @param locale {String} A valid case-insensitive locale, complying with the ISO-639 language code and ISO-3166 country code standards: Two-character language code, for example, \"en\". Two-character language code followed by a two-character country code, separated by an underscore or dash, for example: \"en_GB\", \"en-GB\". Cannot be changed after it is initially set in `POST /environments/{{envID}}/templates/{{templateName}}/contents`. 
   * @param deliveryMethod {module:model/EnumTemplateContentDeliveryMethod} 
   * @param content {String} The voice text.  Limited to 1Kb characters.   The following substitution place holders can be embedded in the message:   * `<pause1sec>`: Pauses the message narration for 1 second.     The pause interval <pause1sec> cannot be modified. To pause the message narration for more than one second, repeat multiple `<pause1sec>` occurrences in succession, according to the desired pause interval duration. For example, `<pause1sec><pause1sec><pause1sec>` pauses the message narration for three seconds.   * `<sayCharValue> .. </sayCharValue>`: Reads the character name of each character of the enclosed string separately.   * `<repeatMessage val=x> .. </repeatMessage>`: Narrates the enclosed text `<val>` number of times.      In the following message example, `${otp}` is assigned the value `\"123456\"`, and `${email}` is assigned the value `\"joe@bxz.com\"`:   ```   Hello <pause1sec> your authentication code is    <sayCharValue>${otp}</​sayCharValue>    <repeatMessage val=2> I repeat your code is    <sayCharValue>${otp}</​sayCharValue>   </​repeatMessage> <pause1sec>    Mail <sayCharValue>${email}</​sayCharValue> for help   ```   The narrated message on the voice call sounds like:   ```   HELLO <1 second silence> YOUR AUTHENTICATION CODE IS    ONE TWO THREE FOUR FIVE SIX    I REPEAT YOUR CODE IS ONE TWO THREE FOUR FIVE SIX    I REPEAT YOUR CODE IS ONE TWO THREE FOUR FIVE SIX <1 second silence>    MAIL JAY OH EE AT BEE EX ZEE DOT SEE OH EM FOR HELP   ``` 
   */
  constructor(locale, deliveryMethod, content) {
    TemplateContentCommon.initialize(this, locale, deliveryMethod);
    TemplateContentVoice.initialize(this, locale, deliveryMethod, content);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, locale, deliveryMethod, content) {
    obj['locale'] = locale;
    obj['deliveryMethod'] = deliveryMethod;
    obj['content'] = content;
  }

  /**
   * Constructs a <code>TemplateContentVoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateContentVoice} obj Optional instance to populate.
   * @return {module:model/TemplateContentVoice} The populated <code>TemplateContentVoice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateContentVoice();
      TemplateContentCommon.constructFromObject(data, obj);
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('deliveryMethod')) {
        obj['deliveryMethod'] = EnumTemplateContentDeliveryMethod.constructFromObject(data['deliveryMethod']);
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('voice')) {
        obj['voice'] = ApiClient.convertToType(data['voice'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>TemplateContentVoice</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateContentVoice</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of TemplateContentVoice.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
      throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
    }
    // ensure the json data is a string
    if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
      throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
    }
    // ensure the json data is a string
    if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
      throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
    }
    // ensure the json data is a string
    if (data['variant'] && !(typeof data['variant'] === 'string' || data['variant'] instanceof String)) {
      throw new Error("Expected the field `variant` to be a primitive type in the JSON string but got " + data['variant']);
    }
    // ensure the json data is a string
    if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
      throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
    }
    // ensure the json data is a string
    if (data['voice'] && !(typeof data['voice'] === 'string' || data['voice'] instanceof String)) {
      throw new Error("Expected the field `voice` to be a primitive type in the JSON string but got " + data['voice']);
    }
    return true;
  }
}
TemplateContentVoice.RequiredProperties = ["locale", "deliveryMethod", "content"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
TemplateContentVoice.prototype['_links'] = undefined;

/**
 * The template id.
 * @member {String} id
 */
TemplateContentVoice.prototype['id'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
TemplateContentVoice.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
TemplateContentVoice.prototype['updatedAt'] = undefined;

/**
 * Specifies whether the template is a predefined default template.
 * @member {Boolean} default
 */
TemplateContentVoice.prototype['default'] = undefined;

/**
 * A valid case-insensitive locale, complying with the ISO-639 language code and ISO-3166 country code standards: Two-character language code, for example, \"en\". Two-character language code followed by a two-character country code, separated by an underscore or dash, for example: \"en_GB\", \"en-GB\". Cannot be changed after it is initially set in `POST /environments/{{envID}}/templates/{{templateName}}/contents`. 
 * @member {String} locale
 */
TemplateContentVoice.prototype['locale'] = undefined;

/**
 * @member {module:model/EnumTemplateContentDeliveryMethod} deliveryMethod
 */
TemplateContentVoice.prototype['deliveryMethod'] = undefined;

/**
 * Holds the unique user-defined name for each content variant that uses the same template + `deliveryMethod` + `locale` combination. This property is case insensitive and has a limit of 100 characters. For more information, see [Creating custom contents](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-creating-custom-contents).
 * @member {String} variant
 */
TemplateContentVoice.prototype['variant'] = undefined;

/**
 * The voice text.  Limited to 1Kb characters.   The following substitution place holders can be embedded in the message:   * `<pause1sec>`: Pauses the message narration for 1 second.     The pause interval <pause1sec> cannot be modified. To pause the message narration for more than one second, repeat multiple `<pause1sec>` occurrences in succession, according to the desired pause interval duration. For example, `<pause1sec><pause1sec><pause1sec>` pauses the message narration for three seconds.   * `<sayCharValue> .. </sayCharValue>`: Reads the character name of each character of the enclosed string separately.   * `<repeatMessage val=x> .. </repeatMessage>`: Narrates the enclosed text `<val>` number of times.      In the following message example, `${otp}` is assigned the value `\"123456\"`, and `${email}` is assigned the value `\"joe@bxz.com\"`:   ```   Hello <pause1sec> your authentication code is    <sayCharValue>${otp}</​sayCharValue>    <repeatMessage val=2> I repeat your code is    <sayCharValue>${otp}</​sayCharValue>   </​repeatMessage> <pause1sec>    Mail <sayCharValue>${email}</​sayCharValue> for help   ```   The narrated message on the voice call sounds like:   ```   HELLO <1 second silence> YOUR AUTHENTICATION CODE IS    ONE TWO THREE FOUR FIVE SIX    I REPEAT YOUR CODE IS ONE TWO THREE FOUR FIVE SIX    I REPEAT YOUR CODE IS ONE TWO THREE FOUR FIVE SIX <1 second silence>    MAIL JAY OH EE AT BEE EX ZEE DOT SEE OH EM FOR HELP   ``` 
 * @member {String} content
 */
TemplateContentVoice.prototype['content'] = undefined;

/**
 * Voice OTP supports vendor-specific voices.   * Supported Twilio voices:     * Man, Woman       Supported locales (default: en):       en, en_GB, es, fr, de     * Alice (Twilio only)       Supported locales (default: en US):       da_DK, de_DE, en_AU, en_CA, en_GB, en_US, ca_ES, es_ES, es_MX, fi_FI, fr_CA, fr_FR, it_IT, ja_JP, ko_KR, nb_NO, nl_NL, pl_PL, pt_BR, pt_PT, ru_RU, sv_SE, zh_CN, zh_HK, zh_TW     * Amazon Polly       cy_GB, ro_RO, is_IS, hi_IN tr_TR   * Supported Syniverse voices:     * Man, Woman       Supported locales:       en_US, en_GB, es_ES, es_US, fr_FR, de_DE, it_IT, en_AU, da_DK, is_IS, nl_NL, pl_PL, pt_BR, pt_PT, ru_RU, ja_JP     * Woman only       Supported locales:       cmn_CN, cy_GB, en_IN, fr_CA, hi_IN, nb_NO, ro_RO, sv_SE, tr_TR, ko_KR, ar 
 * @member {String} voice
 */
TemplateContentVoice.prototype['voice'] = undefined;

// Implement TemplateContentCommon interface:
/**
 * @member {module:model/LinksHATEOAS} _links
 */
TemplateContentCommon.prototype['_links'] = undefined;
/**
 * The template id.
 * @member {String} id
 */
TemplateContentCommon.prototype['id'] = undefined;
/**
 * The time the resource was created.
 * @member {String} createdAt
 */
TemplateContentCommon.prototype['createdAt'] = undefined;
/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
TemplateContentCommon.prototype['updatedAt'] = undefined;
/**
 * Specifies whether the template is a predefined default template.
 * @member {Boolean} default
 */
TemplateContentCommon.prototype['default'] = undefined;
/**
 * A valid case-insensitive locale, complying with the ISO-639 language code and ISO-3166 country code standards: Two-character language code, for example, \"en\". Two-character language code followed by a two-character country code, separated by an underscore or dash, for example: \"en_GB\", \"en-GB\". Cannot be changed after it is initially set in `POST /environments/{{envID}}/templates/{{templateName}}/contents`. 
 * @member {String} locale
 */
TemplateContentCommon.prototype['locale'] = undefined;
/**
 * @member {module:model/EnumTemplateContentDeliveryMethod} deliveryMethod
 */
TemplateContentCommon.prototype['deliveryMethod'] = undefined;
/**
 * Holds the unique user-defined name for each content variant that uses the same template + `deliveryMethod` + `locale` combination. This property is case insensitive and has a limit of 100 characters. For more information, see [Creating custom contents](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-creating-custom-contents).
 * @member {String} variant
 */
TemplateContentCommon.prototype['variant'] = undefined;
export default TemplateContentVoice;