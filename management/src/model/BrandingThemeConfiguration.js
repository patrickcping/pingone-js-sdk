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
import BrandingThemeConfigurationBackgroundImage from './BrandingThemeConfigurationBackgroundImage';
import BrandingThemeConfigurationLogo from './BrandingThemeConfigurationLogo';
import EnumBrandingLogoType from './EnumBrandingLogoType';
import EnumBrandingThemeBackgroundType from './EnumBrandingThemeBackgroundType';

/**
 * The BrandingThemeConfiguration model module.
 * @module model/BrandingThemeConfiguration
 * @version 2023-06-29
 */
class BrandingThemeConfiguration {
    /**
     * Constructs a new <code>BrandingThemeConfiguration</code>.
     * @alias module:model/BrandingThemeConfiguration
     * @param backgroundType {module:model/EnumBrandingThemeBackgroundType} 
     * @param bodyTextColor {String} The body text color for the theme. It must be a valid hexadecimal color code.
     * @param buttonColor {String} The button color for the theme. It must be a valid hexadecimal color code.
     * @param buttonTextColor {String} The button text color for the branding theme. It must be a valid hexadecimal color code.
     * @param cardColor {String} The card color for the branding theme. It must be a valid hexadecimal color code.
     * @param headingTextColor {String} The heading text color for the branding theme. It must be a valid hexadecimal color code.
     * @param linkTextColor {String} The hyperlink text color for the branding theme. It must be a valid hexadecimal color code.
     * @param logoType {module:model/EnumBrandingLogoType} 
     */
    constructor(backgroundType, bodyTextColor, buttonColor, buttonTextColor, cardColor, headingTextColor, linkTextColor, logoType) { 
        
        BrandingThemeConfiguration.initialize(this, backgroundType, bodyTextColor, buttonColor, buttonTextColor, cardColor, headingTextColor, linkTextColor, logoType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, backgroundType, bodyTextColor, buttonColor, buttonTextColor, cardColor, headingTextColor, linkTextColor, logoType) { 
        obj['backgroundType'] = backgroundType;
        obj['bodyTextColor'] = bodyTextColor;
        obj['buttonColor'] = buttonColor;
        obj['buttonTextColor'] = buttonTextColor;
        obj['cardColor'] = cardColor;
        obj['headingTextColor'] = headingTextColor;
        obj['linkTextColor'] = linkTextColor;
        obj['logoType'] = logoType;
    }

    /**
     * Constructs a <code>BrandingThemeConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrandingThemeConfiguration} obj Optional instance to populate.
     * @return {module:model/BrandingThemeConfiguration} The populated <code>BrandingThemeConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingThemeConfiguration();

            if (data.hasOwnProperty('backgroundColor')) {
                obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
            }
            if (data.hasOwnProperty('backgroundType')) {
                obj['backgroundType'] = EnumBrandingThemeBackgroundType.constructFromObject(data['backgroundType']);
            }
            if (data.hasOwnProperty('backgroundImage')) {
                obj['backgroundImage'] = BrandingThemeConfigurationBackgroundImage.constructFromObject(data['backgroundImage']);
            }
            if (data.hasOwnProperty('bodyTextColor')) {
                obj['bodyTextColor'] = ApiClient.convertToType(data['bodyTextColor'], 'String');
            }
            if (data.hasOwnProperty('buttonColor')) {
                obj['buttonColor'] = ApiClient.convertToType(data['buttonColor'], 'String');
            }
            if (data.hasOwnProperty('buttonTextColor')) {
                obj['buttonTextColor'] = ApiClient.convertToType(data['buttonTextColor'], 'String');
            }
            if (data.hasOwnProperty('cardColor')) {
                obj['cardColor'] = ApiClient.convertToType(data['cardColor'], 'String');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
            }
            if (data.hasOwnProperty('headingTextColor')) {
                obj['headingTextColor'] = ApiClient.convertToType(data['headingTextColor'], 'String');
            }
            if (data.hasOwnProperty('linkTextColor')) {
                obj['linkTextColor'] = ApiClient.convertToType(data['linkTextColor'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = BrandingThemeConfigurationLogo.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('logoType')) {
                obj['logoType'] = EnumBrandingLogoType.constructFromObject(data['logoType']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingThemeConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingThemeConfiguration</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BrandingThemeConfiguration.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['backgroundColor'] && !(typeof data['backgroundColor'] === 'string' || data['backgroundColor'] instanceof String)) {
            throw new Error("Expected the field `backgroundColor` to be a primitive type in the JSON string but got " + data['backgroundColor']);
        }
        // validate the optional field `backgroundImage`
        if (data['backgroundImage']) { // data not null
          BrandingThemeConfigurationBackgroundImage.validateJSON(data['backgroundImage']);
        }
        // ensure the json data is a string
        if (data['bodyTextColor'] && !(typeof data['bodyTextColor'] === 'string' || data['bodyTextColor'] instanceof String)) {
            throw new Error("Expected the field `bodyTextColor` to be a primitive type in the JSON string but got " + data['bodyTextColor']);
        }
        // ensure the json data is a string
        if (data['buttonColor'] && !(typeof data['buttonColor'] === 'string' || data['buttonColor'] instanceof String)) {
            throw new Error("Expected the field `buttonColor` to be a primitive type in the JSON string but got " + data['buttonColor']);
        }
        // ensure the json data is a string
        if (data['buttonTextColor'] && !(typeof data['buttonTextColor'] === 'string' || data['buttonTextColor'] instanceof String)) {
            throw new Error("Expected the field `buttonTextColor` to be a primitive type in the JSON string but got " + data['buttonTextColor']);
        }
        // ensure the json data is a string
        if (data['cardColor'] && !(typeof data['cardColor'] === 'string' || data['cardColor'] instanceof String)) {
            throw new Error("Expected the field `cardColor` to be a primitive type in the JSON string but got " + data['cardColor']);
        }
        // ensure the json data is a string
        if (data['footer'] && !(typeof data['footer'] === 'string' || data['footer'] instanceof String)) {
            throw new Error("Expected the field `footer` to be a primitive type in the JSON string but got " + data['footer']);
        }
        // ensure the json data is a string
        if (data['headingTextColor'] && !(typeof data['headingTextColor'] === 'string' || data['headingTextColor'] instanceof String)) {
            throw new Error("Expected the field `headingTextColor` to be a primitive type in the JSON string but got " + data['headingTextColor']);
        }
        // ensure the json data is a string
        if (data['linkTextColor'] && !(typeof data['linkTextColor'] === 'string' || data['linkTextColor'] instanceof String)) {
            throw new Error("Expected the field `linkTextColor` to be a primitive type in the JSON string but got " + data['linkTextColor']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          BrandingThemeConfigurationLogo.validateJSON(data['logo']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

BrandingThemeConfiguration.RequiredProperties = ["backgroundType", "bodyTextColor", "buttonColor", "buttonTextColor", "cardColor", "headingTextColor", "linkTextColor", "logoType"];

/**
 * The background color for the theme. It must be a valid hexadecimal color code, and it is a required property when configuration.backgroundType is set to COLOR.
 * @member {String} backgroundColor
 */
BrandingThemeConfiguration.prototype['backgroundColor'] = undefined;

/**
 * @member {module:model/EnumBrandingThemeBackgroundType} backgroundType
 */
BrandingThemeConfiguration.prototype['backgroundType'] = undefined;

/**
 * @member {module:model/BrandingThemeConfigurationBackgroundImage} backgroundImage
 */
BrandingThemeConfiguration.prototype['backgroundImage'] = undefined;

/**
 * The body text color for the theme. It must be a valid hexadecimal color code.
 * @member {String} bodyTextColor
 */
BrandingThemeConfiguration.prototype['bodyTextColor'] = undefined;

/**
 * The button color for the theme. It must be a valid hexadecimal color code.
 * @member {String} buttonColor
 */
BrandingThemeConfiguration.prototype['buttonColor'] = undefined;

/**
 * The button text color for the branding theme. It must be a valid hexadecimal color code.
 * @member {String} buttonTextColor
 */
BrandingThemeConfiguration.prototype['buttonTextColor'] = undefined;

/**
 * The card color for the branding theme. It must be a valid hexadecimal color code.
 * @member {String} cardColor
 */
BrandingThemeConfiguration.prototype['cardColor'] = undefined;

/**
 * The footer of the branding theme.
 * @member {String} footer
 */
BrandingThemeConfiguration.prototype['footer'] = undefined;

/**
 * The heading text color for the branding theme. It must be a valid hexadecimal color code.
 * @member {String} headingTextColor
 */
BrandingThemeConfiguration.prototype['headingTextColor'] = undefined;

/**
 * The hyperlink text color for the branding theme. It must be a valid hexadecimal color code.
 * @member {String} linkTextColor
 */
BrandingThemeConfiguration.prototype['linkTextColor'] = undefined;

/**
 * @member {module:model/BrandingThemeConfigurationLogo} logo
 */
BrandingThemeConfiguration.prototype['logo'] = undefined;

/**
 * @member {module:model/EnumBrandingLogoType} logoType
 */
BrandingThemeConfiguration.prototype['logoType'] = undefined;

/**
 * The name of the branding theme.
 * @member {String} name
 */
BrandingThemeConfiguration.prototype['name'] = undefined;






export default BrandingThemeConfiguration;

