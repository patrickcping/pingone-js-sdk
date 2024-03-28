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
import Application from './Application';
import ApplicationAccessControl from './ApplicationAccessControl';
import ApplicationCorsSettings from './ApplicationCorsSettings';
import ApplicationIcon from './ApplicationIcon';
import ApplicationSAMLAllOfIdpSigning from './ApplicationSAMLAllOfIdpSigning';
import ApplicationSAMLAllOfSpVerification from './ApplicationSAMLAllOfSpVerification';
import EnumApplicationProtocol from './EnumApplicationProtocol';
import EnumApplicationSAMLSloBinding from './EnumApplicationSAMLSloBinding';
import EnumApplicationType from './EnumApplicationType';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The ApplicationSAML model module.
 * @module model/ApplicationSAML
 * @version 2023-06-29
 */
class ApplicationSAML {
    /**
     * Constructs a new <code>ApplicationSAML</code>.
     * @alias module:model/ApplicationSAML
     * @implements module:model/Application
     * @param enabled {Boolean} A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED.
     * @param name {String} A string that specifies the name of the application. This is a required property.
     * @param protocol {module:model/EnumApplicationProtocol} 
     * @param type {module:model/EnumApplicationType} 
     * @param acsUrls {Array.<String>} A string that specifies the Assertion Consumer Service URLs. The first URL in the list is used as default (there must be at least one URL). This is a required property.
     * @param assertionDuration {Number} An integer that specifies the assertion validity duration in seconds. This is a required property.
     * @param spEntityId {String} A string that specifies the service provider entity ID used to lookup the application. This is a required property and is unique within the environment.
     */
    constructor(enabled, name, protocol, type, acsUrls, assertionDuration, spEntityId) { 
        Application.initialize(this, enabled, name, protocol, type);
        ApplicationSAML.initialize(this, enabled, name, protocol, type, acsUrls, assertionDuration, spEntityId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, name, protocol, type, acsUrls, assertionDuration, spEntityId) { 
        obj['enabled'] = enabled;
        obj['name'] = name;
        obj['protocol'] = protocol;
        obj['type'] = type;
        obj['acsUrls'] = acsUrls;
        obj['assertionDuration'] = assertionDuration;
        obj['spEntityId'] = spEntityId;
    }

    /**
     * Constructs a <code>ApplicationSAML</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSAML} obj Optional instance to populate.
     * @return {module:model/ApplicationSAML} The populated <code>ApplicationSAML</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationSAML();
            Application.constructFromObject(data, obj);

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('accessControl')) {
                obj['accessControl'] = ApplicationAccessControl.constructFromObject(data['accessControl']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('hiddenFromAppPortal')) {
                obj['hiddenFromAppPortal'] = ApiClient.convertToType(data['hiddenFromAppPortal'], 'Boolean');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApplicationIcon.constructFromObject(data['icon']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('loginPageUrl')) {
                obj['loginPageUrl'] = ApiClient.convertToType(data['loginPageUrl'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = EnumApplicationProtocol.constructFromObject(data['protocol']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumApplicationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('homePageUrl')) {
                obj['homePageUrl'] = ApiClient.convertToType(data['homePageUrl'], 'String');
            }
            if (data.hasOwnProperty('acsUrls')) {
                obj['acsUrls'] = ApiClient.convertToType(data['acsUrls'], ['String']);
            }
            if (data.hasOwnProperty('assertionDuration')) {
                obj['assertionDuration'] = ApiClient.convertToType(data['assertionDuration'], 'Number');
            }
            if (data.hasOwnProperty('assertionSigned')) {
                obj['assertionSigned'] = ApiClient.convertToType(data['assertionSigned'], 'Boolean');
            }
            if (data.hasOwnProperty('corsSettings')) {
                obj['corsSettings'] = ApplicationCorsSettings.constructFromObject(data['corsSettings']);
            }
            if (data.hasOwnProperty('defaultTargetUrl')) {
                obj['defaultTargetUrl'] = ApiClient.convertToType(data['defaultTargetUrl'], 'String');
            }
            if (data.hasOwnProperty('enableRequestedAuthnContext')) {
                obj['enableRequestedAuthnContext'] = ApiClient.convertToType(data['enableRequestedAuthnContext'], 'Boolean');
            }
            if (data.hasOwnProperty('idpSigning')) {
                obj['idpSigning'] = ApplicationSAMLAllOfIdpSigning.constructFromObject(data['idpSigning']);
            }
            if (data.hasOwnProperty('nameIdFormat')) {
                obj['nameIdFormat'] = ApiClient.convertToType(data['nameIdFormat'], 'String');
            }
            if (data.hasOwnProperty('responseSigned')) {
                obj['responseSigned'] = ApiClient.convertToType(data['responseSigned'], 'Boolean');
            }
            if (data.hasOwnProperty('sloBinding')) {
                obj['sloBinding'] = EnumApplicationSAMLSloBinding.constructFromObject(data['sloBinding']);
            }
            if (data.hasOwnProperty('sloEndpoint')) {
                obj['sloEndpoint'] = ApiClient.convertToType(data['sloEndpoint'], 'String');
            }
            if (data.hasOwnProperty('sloResponseEndpoint')) {
                obj['sloResponseEndpoint'] = ApiClient.convertToType(data['sloResponseEndpoint'], 'String');
            }
            if (data.hasOwnProperty('sloWindow')) {
                obj['sloWindow'] = ApiClient.convertToType(data['sloWindow'], 'Number');
            }
            if (data.hasOwnProperty('spEntityId')) {
                obj['spEntityId'] = ApiClient.convertToType(data['spEntityId'], 'String');
            }
            if (data.hasOwnProperty('spVerification')) {
                obj['spVerification'] = ApplicationSAMLAllOfSpVerification.constructFromObject(data['spVerification']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationSAML</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationSAML</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationSAML.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `accessControl`
        if (data['accessControl']) { // data not null
          ApplicationAccessControl.validateJSON(data['accessControl']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // validate the optional field `icon`
        if (data['icon']) { // data not null
          ApplicationIcon.validateJSON(data['icon']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['loginPageUrl'] && !(typeof data['loginPageUrl'] === 'string' || data['loginPageUrl'] instanceof String)) {
            throw new Error("Expected the field `loginPageUrl` to be a primitive type in the JSON string but got " + data['loginPageUrl']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['homePageUrl'] && !(typeof data['homePageUrl'] === 'string' || data['homePageUrl'] instanceof String)) {
            throw new Error("Expected the field `homePageUrl` to be a primitive type in the JSON string but got " + data['homePageUrl']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['acsUrls'])) {
            throw new Error("Expected the field `acsUrls` to be an array in the JSON data but got " + data['acsUrls']);
        }
        // validate the optional field `corsSettings`
        if (data['corsSettings']) { // data not null
          ApplicationCorsSettings.validateJSON(data['corsSettings']);
        }
        // ensure the json data is a string
        if (data['defaultTargetUrl'] && !(typeof data['defaultTargetUrl'] === 'string' || data['defaultTargetUrl'] instanceof String)) {
            throw new Error("Expected the field `defaultTargetUrl` to be a primitive type in the JSON string but got " + data['defaultTargetUrl']);
        }
        // validate the optional field `idpSigning`
        if (data['idpSigning']) { // data not null
          ApplicationSAMLAllOfIdpSigning.validateJSON(data['idpSigning']);
        }
        // ensure the json data is a string
        if (data['nameIdFormat'] && !(typeof data['nameIdFormat'] === 'string' || data['nameIdFormat'] instanceof String)) {
            throw new Error("Expected the field `nameIdFormat` to be a primitive type in the JSON string but got " + data['nameIdFormat']);
        }
        // ensure the json data is a string
        if (data['sloEndpoint'] && !(typeof data['sloEndpoint'] === 'string' || data['sloEndpoint'] instanceof String)) {
            throw new Error("Expected the field `sloEndpoint` to be a primitive type in the JSON string but got " + data['sloEndpoint']);
        }
        // ensure the json data is a string
        if (data['sloResponseEndpoint'] && !(typeof data['sloResponseEndpoint'] === 'string' || data['sloResponseEndpoint'] instanceof String)) {
            throw new Error("Expected the field `sloResponseEndpoint` to be a primitive type in the JSON string but got " + data['sloResponseEndpoint']);
        }
        // ensure the json data is a string
        if (data['spEntityId'] && !(typeof data['spEntityId'] === 'string' || data['spEntityId'] instanceof String)) {
            throw new Error("Expected the field `spEntityId` to be a primitive type in the JSON string but got " + data['spEntityId']);
        }
        // validate the optional field `spVerification`
        if (data['spVerification']) { // data not null
          ApplicationSAMLAllOfSpVerification.validateJSON(data['spVerification']);
        }

        return true;
    }


}

ApplicationSAML.RequiredProperties = ["enabled", "name", "protocol", "type", "acsUrls", "assertionDuration", "spEntityId"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
ApplicationSAML.prototype['_links'] = undefined;

/**
 * @member {module:model/ApplicationAccessControl} accessControl
 */
ApplicationSAML.prototype['accessControl'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
ApplicationSAML.prototype['createdAt'] = undefined;

/**
 * A string that specifies the description of the application.
 * @member {String} description
 */
ApplicationSAML.prototype['description'] = undefined;

/**
 * A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED.
 * @member {Boolean} enabled
 */
ApplicationSAML.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
ApplicationSAML.prototype['environment'] = undefined;

/**
 * A boolean to specify whether the application is hidden in the application portal despite the configured group access policy.
 * @member {Boolean} hiddenFromAppPortal
 */
ApplicationSAML.prototype['hiddenFromAppPortal'] = undefined;

/**
 * @member {module:model/ApplicationIcon} icon
 */
ApplicationSAML.prototype['icon'] = undefined;

/**
 * A string that specifies the application ID.
 * @member {String} id
 */
ApplicationSAML.prototype['id'] = undefined;

/**
 * A string that specifies the custom login page URL for the application. If you set the loginPageUrl property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. Warning To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains.
 * @member {String} loginPageUrl
 */
ApplicationSAML.prototype['loginPageUrl'] = undefined;

/**
 * A string that specifies the name of the application. This is a required property.
 * @member {String} name
 */
ApplicationSAML.prototype['name'] = undefined;

/**
 * @member {module:model/EnumApplicationProtocol} protocol
 */
ApplicationSAML.prototype['protocol'] = undefined;

/**
 * @member {module:model/EnumApplicationType} type
 */
ApplicationSAML.prototype['type'] = undefined;

/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
ApplicationSAML.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the custom home page URL for the application.
 * @member {String} homePageUrl
 */
ApplicationSAML.prototype['homePageUrl'] = undefined;

/**
 * A string that specifies the Assertion Consumer Service URLs. The first URL in the list is used as default (there must be at least one URL). This is a required property.
 * @member {Array.<String>} acsUrls
 */
ApplicationSAML.prototype['acsUrls'] = undefined;

/**
 * An integer that specifies the assertion validity duration in seconds. This is a required property.
 * @member {Number} assertionDuration
 */
ApplicationSAML.prototype['assertionDuration'] = undefined;

/**
 * A boolean that specifies whether the SAML assertion itself should be signed. The default value is `true`.
 * @member {Boolean} assertionSigned
 * @default true
 */
ApplicationSAML.prototype['assertionSigned'] = true;

/**
 * @member {module:model/ApplicationCorsSettings} corsSettings
 */
ApplicationSAML.prototype['corsSettings'] = undefined;

/**
 * This is used as the RelayState parameter by the IdP to deep link into the application after authentication. This value can be overridden by the applicationUrl query parameter for GET Identity Provider Initiated SSO. Although both of these parameters are generally URLs, because they are used as deep links, this is not enforced. If neither defaultTargetUrl nor applicationUrl is specified during a SAML authentication flow, no RelayState value is supplied to the application. The defaultTargetUrl (or the applicationUrl) value is passed to the SAML application's ACS URL as a separate RelayState key value (not within the SAMLResponse key value).
 * @member {String} defaultTargetUrl
 */
ApplicationSAML.prototype['defaultTargetUrl'] = undefined;

/**
 * Indicates whether `requestedAuthnContext` is taken into account in policy decision-making during authentication.
 * @member {Boolean} enableRequestedAuthnContext
 */
ApplicationSAML.prototype['enableRequestedAuthnContext'] = undefined;

/**
 * @member {module:model/ApplicationSAMLAllOfIdpSigning} idpSigning
 */
ApplicationSAML.prototype['idpSigning'] = undefined;

/**
 * A string that specifies the format of the Subject NameID attibute in the SAML assertion
 * @member {String} nameIdFormat
 */
ApplicationSAML.prototype['nameIdFormat'] = undefined;

/**
 * A boolean that specifies whether the SAML assertion response itself should be signed. The default value is `false`.
 * @member {Boolean} responseSigned
 * @default false
 */
ApplicationSAML.prototype['responseSigned'] = false;

/**
 * @member {module:model/EnumApplicationSAMLSloBinding} sloBinding
 */
ApplicationSAML.prototype['sloBinding'] = undefined;

/**
 * A string that specifies the logout endpoint URL. This is an optional property. However, if a sloEndpoint logout endpoint URL is not defined, logout actions result in an error.
 * @member {String} sloEndpoint
 */
ApplicationSAML.prototype['sloEndpoint'] = undefined;

/**
 * A string that specifies the endpoint URL to submit the logout response. If a value is not provided, the sloEndpoint property value is used to submit SLO response.
 * @member {String} sloResponseEndpoint
 */
ApplicationSAML.prototype['sloResponseEndpoint'] = undefined;

/**
 * Defines how long PingOne can exchange logout messages with the application, specifically a `LogoutRequest` from the application, since the initial request. PingOne can also send a `LogoutRequest` to the application when a single logout is initiated by the user from other session participants, such as an application or identity provider. This setting is per application. The SLO logout is separate from the user session logout that revokes all tokens.
 * @member {Number} sloWindow
 */
ApplicationSAML.prototype['sloWindow'] = undefined;

/**
 * A string that specifies the service provider entity ID used to lookup the application. This is a required property and is unique within the environment.
 * @member {String} spEntityId
 */
ApplicationSAML.prototype['spEntityId'] = undefined;

/**
 * @member {module:model/ApplicationSAMLAllOfSpVerification} spVerification
 */
ApplicationSAML.prototype['spVerification'] = undefined;


// Implement Application interface:
/**
 * @member {module:model/LinksHATEOAS} _links
 */
Application.prototype['_links'] = undefined;
/**
 * @member {module:model/ApplicationAccessControl} accessControl
 */
Application.prototype['accessControl'] = undefined;
/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
Application.prototype['createdAt'] = undefined;
/**
 * A string that specifies the description of the application.
 * @member {String} description
 */
Application.prototype['description'] = undefined;
/**
 * A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED.
 * @member {Boolean} enabled
 */
Application.prototype['enabled'] = undefined;
/**
 * @member {module:model/ObjectEnvironment} environment
 */
Application.prototype['environment'] = undefined;
/**
 * A boolean to specify whether the application is hidden in the application portal despite the configured group access policy.
 * @member {Boolean} hiddenFromAppPortal
 */
Application.prototype['hiddenFromAppPortal'] = undefined;
/**
 * @member {module:model/ApplicationIcon} icon
 */
Application.prototype['icon'] = undefined;
/**
 * A string that specifies the application ID.
 * @member {String} id
 */
Application.prototype['id'] = undefined;
/**
 * A string that specifies the custom login page URL for the application. If you set the loginPageUrl property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. Warning To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains.
 * @member {String} loginPageUrl
 */
Application.prototype['loginPageUrl'] = undefined;
/**
 * A string that specifies the name of the application. This is a required property.
 * @member {String} name
 */
Application.prototype['name'] = undefined;
/**
 * @member {module:model/EnumApplicationProtocol} protocol
 */
Application.prototype['protocol'] = undefined;
/**
 * @member {module:model/EnumApplicationType} type
 */
Application.prototype['type'] = undefined;
/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
Application.prototype['updatedAt'] = undefined;




export default ApplicationSAML;

