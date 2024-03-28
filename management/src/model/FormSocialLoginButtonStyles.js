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
import EnumFormItemAlignment from './EnumFormItemAlignment';

/**
 * The FormSocialLoginButtonStyles model module.
 * @module model/FormSocialLoginButtonStyles
 * @version 2023-06-29
 */
class FormSocialLoginButtonStyles {
    /**
     * Constructs a new <code>FormSocialLoginButtonStyles</code>.
     * @alias module:model/FormSocialLoginButtonStyles
     */
    constructor() { 
        
        FormSocialLoginButtonStyles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormSocialLoginButtonStyles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormSocialLoginButtonStyles} obj Optional instance to populate.
     * @return {module:model/FormSocialLoginButtonStyles} The populated <code>FormSocialLoginButtonStyles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormSocialLoginButtonStyles();

            if (data.hasOwnProperty('horizontalAlignment')) {
                obj['horizontalAlignment'] = EnumFormItemAlignment.constructFromObject(data['horizontalAlignment']);
            }
            if (data.hasOwnProperty('textColor')) {
                obj['textColor'] = ApiClient.convertToType(data['textColor'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormSocialLoginButtonStyles</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormSocialLoginButtonStyles</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['textColor'] && !(typeof data['textColor'] === 'string' || data['textColor'] instanceof String)) {
            throw new Error("Expected the field `textColor` to be a primitive type in the JSON string but got " + data['textColor']);
        }

        return true;
    }


}



/**
 * @member {module:model/EnumFormItemAlignment} horizontalAlignment
 */
FormSocialLoginButtonStyles.prototype['horizontalAlignment'] = undefined;

/**
 * A string that specifies the social login button text color.
 * @member {String} textColor
 */
FormSocialLoginButtonStyles.prototype['textColor'] = undefined;

/**
 * A boolean that specifies whether the social login button is enabled.
 * @member {Boolean} enabled
 */
FormSocialLoginButtonStyles.prototype['enabled'] = undefined;






export default FormSocialLoginButtonStyles;

