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
import EnumIdentityProviderExt from './EnumIdentityProviderExt';
import EnumIdentityProviderOIDCTokenAuthMethod from './EnumIdentityProviderOIDCTokenAuthMethod';
import EnumIdentityProviderPKCEMethod from './EnumIdentityProviderPKCEMethod';
import IdentityProviderCommon from './IdentityProviderCommon';
import IdentityProviderCommonIcon from './IdentityProviderCommonIcon';
import IdentityProviderCommonLoginButtonIcon from './IdentityProviderCommonLoginButtonIcon';
import IdentityProviderCommonRegistration from './IdentityProviderCommonRegistration';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The IdentityProviderOIDC model module.
 * @module model/IdentityProviderOIDC
 * @version 2023-06-29
 */
class IdentityProviderOIDC {
    /**
     * Constructs a new <code>IdentityProviderOIDC</code>.
     * @alias module:model/IdentityProviderOIDC
     * @implements module:model/IdentityProviderCommon
     * @param enabled {Boolean} The current enabled state of the IdP.
     * @param name {String} The name of the IdP.
     * @param type {module:model/EnumIdentityProviderExt} 
     * @param authorizationEndpoint {String} A string that specifies the the OIDC identity provider's authorization endpoint. This value must be a URL that uses https. This is a required property.
     * @param clientId {String} A string that specifies the application ID from the OIDC identity provider. This is a required property.
     * @param clientSecret {String} A string that specifies the application secret from the OIDC identity provider. This is a required property.
     * @param issuer {String} A string that specifies the issuer to which the authentication is sent for the OIDC identity provider. This value must be a URL that uses https. This is a required property.
     * @param jwksEndpoint {String} A string that specifies the OIDC identity provider's jwks endpoint. This value must be a URL that uses https. This is a required property.
     * @param scopes {Array.<String>} An array that specifies the scopes to include in the authentication request to the OIDC identity provider. This is a required property.
     * @param tokenEndpoint {String} A string that specifies the OIDC identity provider's token endpoint. This is a required property.
     * @param tokenEndpointAuthMethod {module:model/EnumIdentityProviderOIDCTokenAuthMethod} 
     */
    constructor(enabled, name, type, authorizationEndpoint, clientId, clientSecret, issuer, jwksEndpoint, scopes, tokenEndpoint, tokenEndpointAuthMethod) { 
        IdentityProviderCommon.initialize(this, enabled, name, type);
        IdentityProviderOIDC.initialize(this, enabled, name, type, authorizationEndpoint, clientId, clientSecret, issuer, jwksEndpoint, scopes, tokenEndpoint, tokenEndpointAuthMethod);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, name, type, authorizationEndpoint, clientId, clientSecret, issuer, jwksEndpoint, scopes, tokenEndpoint, tokenEndpointAuthMethod) { 
        obj['enabled'] = enabled;
        obj['name'] = name;
        obj['type'] = type;
        obj['authorizationEndpoint'] = authorizationEndpoint;
        obj['clientId'] = clientId;
        obj['clientSecret'] = clientSecret;
        obj['issuer'] = issuer;
        obj['jwksEndpoint'] = jwksEndpoint;
        obj['scopes'] = scopes;
        obj['tokenEndpoint'] = tokenEndpoint;
        obj['tokenEndpointAuthMethod'] = tokenEndpointAuthMethod;
    }

    /**
     * Constructs a <code>IdentityProviderOIDC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityProviderOIDC} obj Optional instance to populate.
     * @return {module:model/IdentityProviderOIDC} The populated <code>IdentityProviderOIDC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityProviderOIDC();
            IdentityProviderCommon.constructFromObject(data, obj);

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
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
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = IdentityProviderCommonIcon.constructFromObject(data['icon']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('loginButtonIcon')) {
                obj['loginButtonIcon'] = IdentityProviderCommonLoginButtonIcon.constructFromObject(data['loginButtonIcon']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('registration')) {
                obj['registration'] = IdentityProviderCommonRegistration.constructFromObject(data['registration']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumIdentityProviderExt.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('authorizationEndpoint')) {
                obj['authorizationEndpoint'] = ApiClient.convertToType(data['authorizationEndpoint'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientSecret')) {
                obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
            }
            if (data.hasOwnProperty('discoveryEndpoint')) {
                obj['discoveryEndpoint'] = ApiClient.convertToType(data['discoveryEndpoint'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('jwksEndpoint')) {
                obj['jwksEndpoint'] = ApiClient.convertToType(data['jwksEndpoint'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('tokenEndpoint')) {
                obj['tokenEndpoint'] = ApiClient.convertToType(data['tokenEndpoint'], 'String');
            }
            if (data.hasOwnProperty('tokenEndpointAuthMethod')) {
                obj['tokenEndpointAuthMethod'] = EnumIdentityProviderOIDCTokenAuthMethod.constructFromObject(data['tokenEndpointAuthMethod']);
            }
            if (data.hasOwnProperty('userInfoEndpoint')) {
                obj['userInfoEndpoint'] = ApiClient.convertToType(data['userInfoEndpoint'], 'String');
            }
            if (data.hasOwnProperty('pkceMethod')) {
                obj['pkceMethod'] = EnumIdentityProviderPKCEMethod.constructFromObject(data['pkceMethod']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdentityProviderOIDC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentityProviderOIDC</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IdentityProviderOIDC.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
          IdentityProviderCommonIcon.validateJSON(data['icon']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `loginButtonIcon`
        if (data['loginButtonIcon']) { // data not null
          IdentityProviderCommonLoginButtonIcon.validateJSON(data['loginButtonIcon']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `registration`
        if (data['registration']) { // data not null
          IdentityProviderCommonRegistration.validateJSON(data['registration']);
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
        if (data['authorizationEndpoint'] && !(typeof data['authorizationEndpoint'] === 'string' || data['authorizationEndpoint'] instanceof String)) {
            throw new Error("Expected the field `authorizationEndpoint` to be a primitive type in the JSON string but got " + data['authorizationEndpoint']);
        }
        // ensure the json data is a string
        if (data['clientId'] && !(typeof data['clientId'] === 'string' || data['clientId'] instanceof String)) {
            throw new Error("Expected the field `clientId` to be a primitive type in the JSON string but got " + data['clientId']);
        }
        // ensure the json data is a string
        if (data['clientSecret'] && !(typeof data['clientSecret'] === 'string' || data['clientSecret'] instanceof String)) {
            throw new Error("Expected the field `clientSecret` to be a primitive type in the JSON string but got " + data['clientSecret']);
        }
        // ensure the json data is a string
        if (data['discoveryEndpoint'] && !(typeof data['discoveryEndpoint'] === 'string' || data['discoveryEndpoint'] instanceof String)) {
            throw new Error("Expected the field `discoveryEndpoint` to be a primitive type in the JSON string but got " + data['discoveryEndpoint']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['jwksEndpoint'] && !(typeof data['jwksEndpoint'] === 'string' || data['jwksEndpoint'] instanceof String)) {
            throw new Error("Expected the field `jwksEndpoint` to be a primitive type in the JSON string but got " + data['jwksEndpoint']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['scopes'])) {
            throw new Error("Expected the field `scopes` to be an array in the JSON data but got " + data['scopes']);
        }
        // ensure the json data is a string
        if (data['tokenEndpoint'] && !(typeof data['tokenEndpoint'] === 'string' || data['tokenEndpoint'] instanceof String)) {
            throw new Error("Expected the field `tokenEndpoint` to be a primitive type in the JSON string but got " + data['tokenEndpoint']);
        }
        // ensure the json data is a string
        if (data['userInfoEndpoint'] && !(typeof data['userInfoEndpoint'] === 'string' || data['userInfoEndpoint'] instanceof String)) {
            throw new Error("Expected the field `userInfoEndpoint` to be a primitive type in the JSON string but got " + data['userInfoEndpoint']);
        }

        return true;
    }


}

IdentityProviderOIDC.RequiredProperties = ["enabled", "name", "type", "authorizationEndpoint", "clientId", "clientSecret", "issuer", "jwksEndpoint", "scopes", "tokenEndpoint", "tokenEndpointAuthMethod"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
IdentityProviderOIDC.prototype['_links'] = undefined;

/**
 * The description of the IdP.
 * @member {String} description
 */
IdentityProviderOIDC.prototype['description'] = undefined;

/**
 * The current enabled state of the IdP.
 * @member {Boolean} enabled
 */
IdentityProviderOIDC.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
IdentityProviderOIDC.prototype['environment'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonIcon} icon
 */
IdentityProviderOIDC.prototype['icon'] = undefined;

/**
 * The resource ID.
 * @member {String} id
 */
IdentityProviderOIDC.prototype['id'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonLoginButtonIcon} loginButtonIcon
 */
IdentityProviderOIDC.prototype['loginButtonIcon'] = undefined;

/**
 * The name of the IdP.
 * @member {String} name
 */
IdentityProviderOIDC.prototype['name'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonRegistration} registration
 */
IdentityProviderOIDC.prototype['registration'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderExt} type
 */
IdentityProviderOIDC.prototype['type'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
IdentityProviderOIDC.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
IdentityProviderOIDC.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the the OIDC identity provider's authorization endpoint. This value must be a URL that uses https. This is a required property.
 * @member {String} authorizationEndpoint
 */
IdentityProviderOIDC.prototype['authorizationEndpoint'] = undefined;

/**
 * A string that specifies the application ID from the OIDC identity provider. This is a required property.
 * @member {String} clientId
 */
IdentityProviderOIDC.prototype['clientId'] = undefined;

/**
 * A string that specifies the application secret from the OIDC identity provider. This is a required property.
 * @member {String} clientSecret
 */
IdentityProviderOIDC.prototype['clientSecret'] = undefined;

/**
 * A string that specifies the OIDC identity provider's discovery endpoint. This value must be a URL that uses https.
 * @member {String} discoveryEndpoint
 */
IdentityProviderOIDC.prototype['discoveryEndpoint'] = undefined;

/**
 * A string that specifies the issuer to which the authentication is sent for the OIDC identity provider. This value must be a URL that uses https. This is a required property.
 * @member {String} issuer
 */
IdentityProviderOIDC.prototype['issuer'] = undefined;

/**
 * A string that specifies the OIDC identity provider's jwks endpoint. This value must be a URL that uses https. This is a required property.
 * @member {String} jwksEndpoint
 */
IdentityProviderOIDC.prototype['jwksEndpoint'] = undefined;

/**
 * An array that specifies the scopes to include in the authentication request to the OIDC identity provider. This is a required property.
 * @member {Array.<String>} scopes
 */
IdentityProviderOIDC.prototype['scopes'] = undefined;

/**
 * A string that specifies the OIDC identity provider's token endpoint. This is a required property.
 * @member {String} tokenEndpoint
 */
IdentityProviderOIDC.prototype['tokenEndpoint'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderOIDCTokenAuthMethod} tokenEndpointAuthMethod
 */
IdentityProviderOIDC.prototype['tokenEndpointAuthMethod'] = undefined;

/**
 * A string that specifies the OIDC identity provider's userInfo endpoint.
 * @member {String} userInfoEndpoint
 */
IdentityProviderOIDC.prototype['userInfoEndpoint'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderPKCEMethod} pkceMethod
 */
IdentityProviderOIDC.prototype['pkceMethod'] = undefined;


// Implement IdentityProviderCommon interface:
/**
 * @member {module:model/LinksHATEOAS} _links
 */
IdentityProviderCommon.prototype['_links'] = undefined;
/**
 * The description of the IdP.
 * @member {String} description
 */
IdentityProviderCommon.prototype['description'] = undefined;
/**
 * The current enabled state of the IdP.
 * @member {Boolean} enabled
 */
IdentityProviderCommon.prototype['enabled'] = undefined;
/**
 * @member {module:model/ObjectEnvironment} environment
 */
IdentityProviderCommon.prototype['environment'] = undefined;
/**
 * @member {module:model/IdentityProviderCommonIcon} icon
 */
IdentityProviderCommon.prototype['icon'] = undefined;
/**
 * The resource ID.
 * @member {String} id
 */
IdentityProviderCommon.prototype['id'] = undefined;
/**
 * @member {module:model/IdentityProviderCommonLoginButtonIcon} loginButtonIcon
 */
IdentityProviderCommon.prototype['loginButtonIcon'] = undefined;
/**
 * The name of the IdP.
 * @member {String} name
 */
IdentityProviderCommon.prototype['name'] = undefined;
/**
 * @member {module:model/IdentityProviderCommonRegistration} registration
 */
IdentityProviderCommon.prototype['registration'] = undefined;
/**
 * @member {module:model/EnumIdentityProviderExt} type
 */
IdentityProviderCommon.prototype['type'] = undefined;
/**
 * The time the resource was created.
 * @member {String} createdAt
 */
IdentityProviderCommon.prototype['createdAt'] = undefined;
/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
IdentityProviderCommon.prototype['updatedAt'] = undefined;




export default IdentityProviderOIDC;

