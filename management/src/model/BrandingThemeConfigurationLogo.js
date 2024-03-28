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
 * The BrandingThemeConfigurationLogo model module.
 * @module model/BrandingThemeConfigurationLogo
 * @version 2023-06-29
 */
class BrandingThemeConfigurationLogo {
    /**
     * Constructs a new <code>BrandingThemeConfigurationLogo</code>.
     * @alias module:model/BrandingThemeConfigurationLogo
     * @param href {String} The URL or fully qualified path to the logo file used for branding. This is a required property when configuration.logoType is set to IMAGE.
     * @param id {String} The ID of the logo image.
     */
    constructor(href, id) { 
        
        BrandingThemeConfigurationLogo.initialize(this, href, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href, id) { 
        obj['href'] = href;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>BrandingThemeConfigurationLogo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrandingThemeConfigurationLogo} obj Optional instance to populate.
     * @return {module:model/BrandingThemeConfigurationLogo} The populated <code>BrandingThemeConfigurationLogo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingThemeConfigurationLogo();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingThemeConfigurationLogo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingThemeConfigurationLogo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BrandingThemeConfigurationLogo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}

BrandingThemeConfigurationLogo.RequiredProperties = ["href", "id"];

/**
 * The URL or fully qualified path to the logo file used for branding. This is a required property when configuration.logoType is set to IMAGE.
 * @member {String} href
 */
BrandingThemeConfigurationLogo.prototype['href'] = undefined;

/**
 * The ID of the logo image.
 * @member {String} id
 */
BrandingThemeConfigurationLogo.prototype['id'] = undefined;






export default BrandingThemeConfigurationLogo;

