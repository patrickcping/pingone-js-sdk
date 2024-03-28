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
import EnumIdentityProviderSAMLSLOBinding from './EnumIdentityProviderSAMLSLOBinding';
import EnumIdentityProviderSAMLSSOBinding from './EnumIdentityProviderSAMLSSOBinding';
import IdentityProviderApple from './IdentityProviderApple';
import IdentityProviderClientIDClientSecret from './IdentityProviderClientIDClientSecret';
import IdentityProviderCommonIcon from './IdentityProviderCommonIcon';
import IdentityProviderCommonLoginButtonIcon from './IdentityProviderCommonLoginButtonIcon';
import IdentityProviderCommonRegistration from './IdentityProviderCommonRegistration';
import IdentityProviderFacebook from './IdentityProviderFacebook';
import IdentityProviderOIDC from './IdentityProviderOIDC';
import IdentityProviderPaypal from './IdentityProviderPaypal';
import IdentityProviderSAML from './IdentityProviderSAML';
import IdentityProviderSAMLAllOfIdpVerification from './IdentityProviderSAMLAllOfIdpVerification';
import IdentityProviderSAMLAllOfSpSigning from './IdentityProviderSAMLAllOfSpSigning';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The IdentityProvider model module.
 * @module model/IdentityProvider
 * @version 2023-06-29
 */
class IdentityProvider {
  /**
   * Constructs a new <code>IdentityProvider</code>.
   * @alias module:model/IdentityProvider
   * @param {(module:model/IdentityProviderApple|module:model/IdentityProviderClientIDClientSecret|module:model/IdentityProviderFacebook|module:model/IdentityProviderOIDC|module:model/IdentityProviderPaypal|module:model/IdentityProviderSAML)} instance The actual instance to initialize IdentityProvider.
   */
  constructor(instance = null) {
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "IdentityProviderFacebook") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderFacebook.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderFacebook from JS object
        this.actualInstance = IdentityProviderFacebook.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderFacebook
      errorMessages.push("Failed to construct IdentityProviderFacebook: " + err);
    }
    try {
      if (typeof instance === "IdentityProviderClientIDClientSecret") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderClientIDClientSecret.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderClientIDClientSecret from JS object
        this.actualInstance = IdentityProviderClientIDClientSecret.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderClientIDClientSecret
      errorMessages.push("Failed to construct IdentityProviderClientIDClientSecret: " + err);
    }
    try {
      if (typeof instance === "IdentityProviderOIDC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderOIDC.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderOIDC from JS object
        this.actualInstance = IdentityProviderOIDC.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderOIDC
      errorMessages.push("Failed to construct IdentityProviderOIDC: " + err);
    }
    try {
      if (typeof instance === "IdentityProviderApple") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderApple.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderApple from JS object
        this.actualInstance = IdentityProviderApple.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderApple
      errorMessages.push("Failed to construct IdentityProviderApple: " + err);
    }
    try {
      if (typeof instance === "IdentityProviderPaypal") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderPaypal.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderPaypal from JS object
        this.actualInstance = IdentityProviderPaypal.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderPaypal
      errorMessages.push("Failed to construct IdentityProviderPaypal: " + err);
    }
    try {
      if (typeof instance === "IdentityProviderSAML") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderSAML.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderSAML from JS object
        this.actualInstance = IdentityProviderSAML.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderSAML
      errorMessages.push("Failed to construct IdentityProviderSAML: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `IdentityProvider` with oneOf schemas IdentityProviderApple, IdentityProviderClientIDClientSecret, IdentityProviderFacebook, IdentityProviderOIDC, IdentityProviderPaypal, IdentityProviderSAML. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `IdentityProvider` with oneOf schemas IdentityProviderApple, IdentityProviderClientIDClientSecret, IdentityProviderFacebook, IdentityProviderOIDC, IdentityProviderPaypal, IdentityProviderSAML. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>IdentityProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentityProvider} obj Optional instance to populate.
   * @return {module:model/IdentityProvider} The populated <code>IdentityProvider</code> instance.
   */
  static constructFromObject(data, obj) {
    return new IdentityProvider(data);
  }

  /**
   * Gets the actual instance, which can be <code>IdentityProviderApple</code>, <code>IdentityProviderClientIDClientSecret</code>, <code>IdentityProviderFacebook</code>, <code>IdentityProviderOIDC</code>, <code>IdentityProviderPaypal</code>, <code>IdentityProviderSAML</code>.
   * @return {(module:model/IdentityProviderApple|module:model/IdentityProviderClientIDClientSecret|module:model/IdentityProviderFacebook|module:model/IdentityProviderOIDC|module:model/IdentityProviderPaypal|module:model/IdentityProviderSAML)} The actual instance.
   */
  getActualInstance() {
    return this.actualInstance;
  }

  /**
   * Sets the actual instance, which can be <code>IdentityProviderApple</code>, <code>IdentityProviderClientIDClientSecret</code>, <code>IdentityProviderFacebook</code>, <code>IdentityProviderOIDC</code>, <code>IdentityProviderPaypal</code>, <code>IdentityProviderSAML</code>.
   * @param {(module:model/IdentityProviderApple|module:model/IdentityProviderClientIDClientSecret|module:model/IdentityProviderFacebook|module:model/IdentityProviderOIDC|module:model/IdentityProviderPaypal|module:model/IdentityProviderSAML)} obj The actual instance.
   */
  setActualInstance(obj) {
    this.actualInstance = IdentityProvider.constructFromObject(obj).getActualInstance();
  }

  /**
   * Returns the JSON representation of the actual instance.
   * @return {string}
   */
  toJSON = function () {
    return this.getActualInstance();
  };

  /**
   * Create an instance of IdentityProvider from a JSON string.
   * @param {string} json_string JSON string.
   * @return {module:model/IdentityProvider} An instance of IdentityProvider.
   */
  static fromJSON = function (json_string) {
    return IdentityProvider.constructFromObject(JSON.parse(json_string));
  };
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
IdentityProvider.prototype['_links'] = undefined;

/**
 * The description of the IdP.
 * @member {String} description
 */
IdentityProvider.prototype['description'] = undefined;

/**
 * The current enabled state of the IdP.
 * @member {Boolean} enabled
 */
IdentityProvider.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
IdentityProvider.prototype['environment'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonIcon} icon
 */
IdentityProvider.prototype['icon'] = undefined;

/**
 * The resource ID.
 * @member {String} id
 */
IdentityProvider.prototype['id'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonLoginButtonIcon} loginButtonIcon
 */
IdentityProvider.prototype['loginButtonIcon'] = undefined;

/**
 * The name of the IdP.
 * @member {String} name
 */
IdentityProvider.prototype['name'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonRegistration} registration
 */
IdentityProvider.prototype['registration'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderExt} type
 */
IdentityProvider.prototype['type'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
IdentityProvider.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
IdentityProvider.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the application ID from Facebook. This is a required property.
 * @member {String} appId
 */
IdentityProvider.prototype['appId'] = undefined;

/**
 * A string that specifies the application secret from Facebook. This is a required property.
 * @member {String} appSecret
 */
IdentityProvider.prototype['appSecret'] = undefined;

/**
 * A string that specifies the application ID from PayPal. This is a required property.
 * @member {String} clientId
 */
IdentityProvider.prototype['clientId'] = undefined;

/**
 * A string that specifies the application secret from PayPal. This is a required property.
 * @member {String} clientSecret
 */
IdentityProvider.prototype['clientSecret'] = undefined;

/**
 * A string that specifies the the OIDC identity provider's authorization endpoint. This value must be a URL that uses https. This is a required property.
 * @member {String} authorizationEndpoint
 */
IdentityProvider.prototype['authorizationEndpoint'] = undefined;

/**
 * A string that specifies the OIDC identity provider's discovery endpoint. This value must be a URL that uses https.
 * @member {String} discoveryEndpoint
 */
IdentityProvider.prototype['discoveryEndpoint'] = undefined;

/**
 * A string that specifies the issuer to which the authentication is sent for the OIDC identity provider. This value must be a URL that uses https. This is a required property.
 * @member {String} issuer
 */
IdentityProvider.prototype['issuer'] = undefined;

/**
 * A string that specifies the OIDC identity provider's jwks endpoint. This value must be a URL that uses https. This is a required property.
 * @member {String} jwksEndpoint
 */
IdentityProvider.prototype['jwksEndpoint'] = undefined;

/**
 * An array that specifies the scopes to include in the authentication request to the OIDC identity provider. This is a required property.
 * @member {Array.<String>} scopes
 */
IdentityProvider.prototype['scopes'] = undefined;

/**
 * A string that specifies the OIDC identity provider's token endpoint. This is a required property.
 * @member {String} tokenEndpoint
 */
IdentityProvider.prototype['tokenEndpoint'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderOIDCTokenAuthMethod} tokenEndpointAuthMethod
 */
IdentityProvider.prototype['tokenEndpointAuthMethod'] = undefined;

/**
 * A string that specifies the OIDC identity provider's userInfo endpoint.
 * @member {String} userInfoEndpoint
 */
IdentityProvider.prototype['userInfoEndpoint'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderPKCEMethod} pkceMethod
 */
IdentityProvider.prototype['pkceMethod'] = undefined;

/**
 * A string that specifies the private key that is used to generate a client secret. This is a required property.
 * @member {String} clientSecretSigningKey
 */
IdentityProvider.prototype['clientSecretSigningKey'] = undefined;

/**
 * A 10-character string that Apple uses to identify an authentication key. This is a required property.
 * @member {String} keyId
 */
IdentityProvider.prototype['keyId'] = undefined;

/**
 * A 10-character string that Apple uses to identify teams. This is a required property.
 * @member {String} teamId
 */
IdentityProvider.prototype['teamId'] = undefined;

/**
 * A string that specifies the PayPal environment. Options are sandbox, and live. This is a required property.
 * @member {String} clientEnvironment
 */
IdentityProvider.prototype['clientEnvironment'] = undefined;

/**
 * A boolean that specifies whether the SAML authentication request will be signed when sending to the identity provider. Set this to true if the external IDP is included in an authentication policy to be used by applications that are accessed using a mix of default URLS and custom Domains URLs.
 * @member {Boolean} authnRequestSigned
 */
IdentityProvider.prototype['authnRequestSigned'] = undefined;

/**
 * A string that specifies the entity ID URI that is checked against the issuerId tag in the incoming response.
 * @member {String} idpEntityId
 */
IdentityProvider.prototype['idpEntityId'] = undefined;

/**
 * @member {module:model/IdentityProviderSAMLAllOfIdpVerification} idpVerification
 */
IdentityProvider.prototype['idpVerification'] = undefined;

/**
 * A string that specifies the service provider's entity ID, used to look up the application.
 * @member {String} spEntityId
 */
IdentityProvider.prototype['spEntityId'] = undefined;

/**
 * @member {module:model/IdentityProviderSAMLAllOfSpSigning} spSigning
 */
IdentityProvider.prototype['spSigning'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderSAMLSSOBinding} ssoBinding
 */
IdentityProvider.prototype['ssoBinding'] = undefined;

/**
 * A string that specifies the SSO endpoint for the authentication request.
 * @member {String} ssoEndpoint
 */
IdentityProvider.prototype['ssoEndpoint'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderSAMLSLOBinding} sloBinding
 */
IdentityProvider.prototype['sloBinding'] = undefined;

/**
 * The logout endpoint URL. This is an optional property. However, if a `sloEndpoint` logout endpoint URL is not defined, logout actions result in an error.
 * @member {String} sloEndpoint
 */
IdentityProvider.prototype['sloEndpoint'] = undefined;

/**
 * The endpoint URL to submit the logout response. If a value is not provided, the `sloEndpoint` property value is used to submit SLO response.
 * @member {String} sloResponseEndpoint
 */
IdentityProvider.prototype['sloResponseEndpoint'] = undefined;

/**
 * Defines how long PingOne can exchange logout messages with the application, specifically a `LogoutRequest` from the application, since the initial request. PingOne can also send a `LogoutRequest` to the application when a single logout is initiated by the user from other session participants, such as an application or identity provider. This setting is per application. The SLO logout is separate from the user session logout that revokes all tokens.
 * @member {Number} sloWindow
 */
IdentityProvider.prototype['sloWindow'] = undefined;
IdentityProvider.OneOf = ["IdentityProviderApple", "IdentityProviderClientIDClientSecret", "IdentityProviderFacebook", "IdentityProviderOIDC", "IdentityProviderPaypal", "IdentityProviderSAML"];
export default IdentityProvider;