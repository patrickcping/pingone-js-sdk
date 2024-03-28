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
import EnumTemplateContentPushCategory from './EnumTemplateContentPushCategory';
import LinksHATEOAS from './LinksHATEOAS';
import TemplateContentEmail from './TemplateContentEmail';
import TemplateContentEmailAllOfFrom from './TemplateContentEmailAllOfFrom';
import TemplateContentEmailAllOfReplyTo from './TemplateContentEmailAllOfReplyTo';
import TemplateContentPush from './TemplateContentPush';
import TemplateContentSMS from './TemplateContentSMS';
import TemplateContentVoice from './TemplateContentVoice';

/**
 * The TemplateContent model module.
 * @module model/TemplateContent
 * @version 2023-06-29
 */
class TemplateContent {
    /**
     * Constructs a new <code>TemplateContent</code>.
     * @alias module:model/TemplateContent
     * @param {(module:model/TemplateContentEmail|module:model/TemplateContentPush|module:model/TemplateContentSMS|module:model/TemplateContentVoice)} instance The actual instance to initialize TemplateContent.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "TemplateContentEmail") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TemplateContentEmail.validateJSON(instance); // throw an exception if no match
                // create TemplateContentEmail from JS object
                this.actualInstance = TemplateContentEmail.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TemplateContentEmail
            errorMessages.push("Failed to construct TemplateContentEmail: " + err)
        }

        try {
            if (typeof instance === "TemplateContentSMS") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TemplateContentSMS.validateJSON(instance); // throw an exception if no match
                // create TemplateContentSMS from JS object
                this.actualInstance = TemplateContentSMS.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TemplateContentSMS
            errorMessages.push("Failed to construct TemplateContentSMS: " + err)
        }

        try {
            if (typeof instance === "TemplateContentPush") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TemplateContentPush.validateJSON(instance); // throw an exception if no match
                // create TemplateContentPush from JS object
                this.actualInstance = TemplateContentPush.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TemplateContentPush
            errorMessages.push("Failed to construct TemplateContentPush: " + err)
        }

        try {
            if (typeof instance === "TemplateContentVoice") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TemplateContentVoice.validateJSON(instance); // throw an exception if no match
                // create TemplateContentVoice from JS object
                this.actualInstance = TemplateContentVoice.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TemplateContentVoice
            errorMessages.push("Failed to construct TemplateContentVoice: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `TemplateContent` with oneOf schemas TemplateContentEmail, TemplateContentPush, TemplateContentSMS, TemplateContentVoice. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `TemplateContent` with oneOf schemas TemplateContentEmail, TemplateContentPush, TemplateContentSMS, TemplateContentVoice. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TemplateContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateContent} obj Optional instance to populate.
     * @return {module:model/TemplateContent} The populated <code>TemplateContent</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TemplateContent(data);
    }

    /**
     * Gets the actual instance, which can be <code>TemplateContentEmail</code>, <code>TemplateContentPush</code>, <code>TemplateContentSMS</code>, <code>TemplateContentVoice</code>.
     * @return {(module:model/TemplateContentEmail|module:model/TemplateContentPush|module:model/TemplateContentSMS|module:model/TemplateContentVoice)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>TemplateContentEmail</code>, <code>TemplateContentPush</code>, <code>TemplateContentSMS</code>, <code>TemplateContentVoice</code>.
     * @param {(module:model/TemplateContentEmail|module:model/TemplateContentPush|module:model/TemplateContentSMS|module:model/TemplateContentVoice)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TemplateContent.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TemplateContent from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TemplateContent} An instance of TemplateContent.
     */
    static fromJSON = function(json_string){
        return TemplateContent.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
TemplateContent.prototype['_links'] = undefined;

/**
 * The template id.
 * @member {String} id
 */
TemplateContent.prototype['id'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
TemplateContent.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
TemplateContent.prototype['updatedAt'] = undefined;

/**
 * Specifies whether the template is a predefined default template.
 * @member {Boolean} default
 */
TemplateContent.prototype['default'] = undefined;

/**
 * A valid case-insensitive locale, complying with the ISO-639 language code and ISO-3166 country code standards: Two-character language code, for example, \"en\". Two-character language code followed by a two-character country code, separated by an underscore or dash, for example: \"en_GB\", \"en-GB\". Cannot be changed after it is initially set in `POST /environments/{{envID}}/templates/{{templateName}}/contents`. 
 * @member {String} locale
 */
TemplateContent.prototype['locale'] = undefined;

/**
 * @member {module:model/EnumTemplateContentDeliveryMethod} deliveryMethod
 */
TemplateContent.prototype['deliveryMethod'] = undefined;

/**
 * Holds the unique user-defined name for each content variant that uses the same template + `deliveryMethod` + `locale` combination. This property is case insensitive and has a limit of 100 characters. For more information, see [Creating custom contents](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-creating-custom-contents).
 * @member {String} variant
 */
TemplateContent.prototype['variant'] = undefined;

/**
 * The push text (maximum 400 characters for push text). If supported, this can include variables.
 * @member {String} body
 */
TemplateContent.prototype['body'] = undefined;

/**
 * @member {module:model/TemplateContentEmailAllOfFrom} from
 */
TemplateContent.prototype['from'] = undefined;

/**
 * The email's subject line. Cannot exceed 256 characters. If supported, can include variables.
 * @member {String} subject
 */
TemplateContent.prototype['subject'] = undefined;

/**
 * @member {module:model/TemplateContentEmailAllOfReplyTo} replyTo
 */
TemplateContent.prototype['replyTo'] = undefined;

/**
 * If not specified, `UTF-8` is the default value.
 * @member {String} charset
 * @default 'UTF-8'
 */
TemplateContent.prototype['charset'] = 'UTF-8';

/**
 * If not specified, `text/html` is the default value.
 * @member {String} emailContentType
 * @default 'text/html'
 */
TemplateContent.prototype['emailContentType'] = 'text/html';

/**
 * The voice text.  Limited to 1Kb characters.   The following substitution place holders can be embedded in the message:   * `<pause1sec>`: Pauses the message narration for 1 second.     The pause interval <pause1sec> cannot be modified. To pause the message narration for more than one second, repeat multiple `<pause1sec>` occurrences in succession, according to the desired pause interval duration. For example, `<pause1sec><pause1sec><pause1sec>` pauses the message narration for three seconds.   * `<sayCharValue> .. </sayCharValue>`: Reads the character name of each character of the enclosed string separately.   * `<repeatMessage val=x> .. </repeatMessage>`: Narrates the enclosed text `<val>` number of times.      In the following message example, `${otp}` is assigned the value `\"123456\"`, and `${email}` is assigned the value `\"joe@bxz.com\"`:   ```   Hello <pause1sec> your authentication code is    <sayCharValue>${otp}</​sayCharValue>    <repeatMessage val=2> I repeat your code is    <sayCharValue>${otp}</​sayCharValue>   </​repeatMessage> <pause1sec>    Mail <sayCharValue>${email}</​sayCharValue> for help   ```   The narrated message on the voice call sounds like:   ```   HELLO <1 second silence> YOUR AUTHENTICATION CODE IS    ONE TWO THREE FOUR FIVE SIX    I REPEAT YOUR CODE IS ONE TWO THREE FOUR FIVE SIX    I REPEAT YOUR CODE IS ONE TWO THREE FOUR FIVE SIX <1 second silence>    MAIL JAY OH EE AT BEE EX ZEE DOT SEE OH EM FOR HELP   ``` 
 * @member {String} content
 */
TemplateContent.prototype['content'] = undefined;

/**
 * The SMS sender ID. This property can contain only alphanumeric characters and spaces, and its length cannot exceed 11 characters. In some countries, it is impossible to send an SMS with an alphanumeric sender ID. For those countries, the sender ID must be empty. For SMS recipients in specific countries, refer to Twilio's documentation on [International support for Alphanumeric Sender ID](https://support.twilio.com/hc/en-us/articles/223133767-International-support-for-Alphanumeric-Sender-ID).
 * @member {String} sender
 */
TemplateContent.prototype['sender'] = undefined;

/**
 * The push title (maximum 200 characters). If supported, this can include variables.
 * @member {String} title
 */
TemplateContent.prototype['title'] = undefined;

/**
 * @member {module:model/EnumTemplateContentPushCategory} pushCategory
 */
TemplateContent.prototype['pushCategory'] = undefined;

/**
 * Voice OTP supports vendor-specific voices.   * Supported Twilio voices:     * Man, Woman       Supported locales (default: en):       en, en_GB, es, fr, de     * Alice (Twilio only)       Supported locales (default: en US):       da_DK, de_DE, en_AU, en_CA, en_GB, en_US, ca_ES, es_ES, es_MX, fi_FI, fr_CA, fr_FR, it_IT, ja_JP, ko_KR, nb_NO, nl_NL, pl_PL, pt_BR, pt_PT, ru_RU, sv_SE, zh_CN, zh_HK, zh_TW     * Amazon Polly       cy_GB, ro_RO, is_IS, hi_IN tr_TR   * Supported Syniverse voices:     * Man, Woman       Supported locales:       en_US, en_GB, es_ES, es_US, fr_FR, de_DE, it_IT, en_AU, da_DK, is_IS, nl_NL, pl_PL, pt_BR, pt_PT, ru_RU, ja_JP     * Woman only       Supported locales:       cmn_CN, cy_GB, en_IN, fr_CA, hi_IN, nb_NO, ro_RO, sv_SE, tr_TR, ko_KR, ar 
 * @member {String} voice
 */
TemplateContent.prototype['voice'] = undefined;


TemplateContent.OneOf = ["TemplateContentEmail", "TemplateContentPush", "TemplateContentSMS", "TemplateContentVoice"];

export default TemplateContent;
