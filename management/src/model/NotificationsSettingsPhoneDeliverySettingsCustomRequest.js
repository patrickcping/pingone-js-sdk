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
import EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod from './EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod';
import EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat from './EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat';
import EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod from './EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod';

/**
 * The NotificationsSettingsPhoneDeliverySettingsCustomRequest model module.
 * @module model/NotificationsSettingsPhoneDeliverySettingsCustomRequest
 * @version 2023-06-29
 */
class NotificationsSettingsPhoneDeliverySettingsCustomRequest {
    /**
     * Constructs a new <code>NotificationsSettingsPhoneDeliverySettingsCustomRequest</code>.
     * @alias module:model/NotificationsSettingsPhoneDeliverySettingsCustomRequest
     * @param deliveryMethod {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod} 
     * @param url {String} The provider's remote gateway or customer gateway URL. For requests using the POST method, use the provider's remote gateway URL. For requests using the GET method, use the provider's remote gateway URL, including the `${to}` and `${message}` mandatory variables, and the optional `${from}` variable, for example: `https://api.transmitsms.com/send-sms.json?to=${to}&from=${from}&message=${message}` 
     * @param method {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod} 
     * @param phoneNumberFormat {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat} 
     */
    constructor(deliveryMethod, url, method, phoneNumberFormat) { 
        
        NotificationsSettingsPhoneDeliverySettingsCustomRequest.initialize(this, deliveryMethod, url, method, phoneNumberFormat);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deliveryMethod, url, method, phoneNumberFormat) { 
        obj['deliveryMethod'] = deliveryMethod;
        obj['url'] = url;
        obj['method'] = method;
        obj['phoneNumberFormat'] = phoneNumberFormat;
    }

    /**
     * Constructs a <code>NotificationsSettingsPhoneDeliverySettingsCustomRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsSettingsPhoneDeliverySettingsCustomRequest} obj Optional instance to populate.
     * @return {module:model/NotificationsSettingsPhoneDeliverySettingsCustomRequest} The populated <code>NotificationsSettingsPhoneDeliverySettingsCustomRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsSettingsPhoneDeliverySettingsCustomRequest();

            if (data.hasOwnProperty('deliveryMethod')) {
                obj['deliveryMethod'] = EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod.constructFromObject(data['deliveryMethod']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod.constructFromObject(data['method']);
            }
            if (data.hasOwnProperty('phoneNumberFormat')) {
                obj['phoneNumberFormat'] = EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat.constructFromObject(data['phoneNumberFormat']);
            }
            if (data.hasOwnProperty('beforeTag')) {
                obj['beforeTag'] = ApiClient.convertToType(data['beforeTag'], 'String');
            }
            if (data.hasOwnProperty('afterTag')) {
                obj['afterTag'] = ApiClient.convertToType(data['afterTag'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationsSettingsPhoneDeliverySettingsCustomRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationsSettingsPhoneDeliverySettingsCustomRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotificationsSettingsPhoneDeliverySettingsCustomRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['beforeTag'] && !(typeof data['beforeTag'] === 'string' || data['beforeTag'] instanceof String)) {
            throw new Error("Expected the field `beforeTag` to be a primitive type in the JSON string but got " + data['beforeTag']);
        }
        // ensure the json data is a string
        if (data['afterTag'] && !(typeof data['afterTag'] === 'string' || data['afterTag'] instanceof String)) {
            throw new Error("Expected the field `afterTag` to be a primitive type in the JSON string but got " + data['afterTag']);
        }

        return true;
    }


}

NotificationsSettingsPhoneDeliverySettingsCustomRequest.RequiredProperties = ["deliveryMethod", "url", "method", "phoneNumberFormat"];

/**
 * @member {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod} deliveryMethod
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['deliveryMethod'] = undefined;

/**
 * The provider's remote gateway or customer gateway URL. For requests using the POST method, use the provider's remote gateway URL. For requests using the GET method, use the provider's remote gateway URL, including the `${to}` and `${message}` mandatory variables, and the optional `${from}` variable, for example: `https://api.transmitsms.com/send-sms.json?to=${to}&from=${from}&message=${message}` 
 * @member {String} url
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['url'] = undefined;

/**
 * The notification's request body. The body should include the ${to} and ${message} mandatory variables. For some vendors, the optional ${from} variable may also be required. For example: `messageType=ARN&message=${message}&phoneNumber=${to}&sender=${from}` In addition, you can use the following optional variables: `${voice}` - the type of voice configured for notifications `${locale}` - locale `${otp}` - OTP `${user.user.name}` - user's username `${user.name.given}` - user's given name `${user.name.family}` - user's family name You can also use dynamic variables in the body. For more information, see [Dynamic variables](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-dynamic-variables). 
 * @member {String} body
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['body'] = undefined;

/**
 * A map of the notification's request headers 
 * @member {Object.<String, String>} headers
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['headers'] = undefined;

/**
 * @member {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod} method
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['method'] = undefined;

/**
 * @member {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat} phoneNumberFormat
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['phoneNumberFormat'] = undefined;

/**
 * For voice OTP notifications only. An opening tag which is commonly used by custom providers for defining a pause between each number in the OTP number string. Possible value: `<Say>` 
 * @member {String} beforeTag
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['beforeTag'] = undefined;

/**
 * For voice OTP notifications only. A closing tag which is commonly used by custom providers for defining a pause between each number in the OTP number string. Possible value: `</Say> <Pause length=\"1\"/>` 
 * @member {String} afterTag
 */
NotificationsSettingsPhoneDeliverySettingsCustomRequest.prototype['afterTag'] = undefined;






export default NotificationsSettingsPhoneDeliverySettingsCustomRequest;

