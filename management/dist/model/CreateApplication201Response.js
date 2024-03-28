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
import ApplicationAccessControl from './ApplicationAccessControl';
import ApplicationCorsSettings from './ApplicationCorsSettings';
import ApplicationExternalLink from './ApplicationExternalLink';
import ApplicationIcon from './ApplicationIcon';
import ApplicationOIDC from './ApplicationOIDC';
import ApplicationOIDCAllOfMobile from './ApplicationOIDCAllOfMobile';
import ApplicationOIDCAllOfSigning from './ApplicationOIDCAllOfSigning';
import ApplicationSAML from './ApplicationSAML';
import ApplicationSAMLAllOfSpVerification from './ApplicationSAMLAllOfSpVerification';
import ApplicationWSFED from './ApplicationWSFED';
import ApplicationWSFEDAllOfIdpSigning from './ApplicationWSFEDAllOfIdpSigning';
import ApplicationWSFEDAllOfKerberos from './ApplicationWSFEDAllOfKerberos';
import EnumApplicationOIDCGrantType from './EnumApplicationOIDCGrantType';
import EnumApplicationOIDCPARRequirement from './EnumApplicationOIDCPARRequirement';
import EnumApplicationOIDCPKCEOption from './EnumApplicationOIDCPKCEOption';
import EnumApplicationOIDCResponseType from './EnumApplicationOIDCResponseType';
import EnumApplicationOIDCTokenAuthMethod from './EnumApplicationOIDCTokenAuthMethod';
import EnumApplicationProtocol from './EnumApplicationProtocol';
import EnumApplicationSAMLSloBinding from './EnumApplicationSAMLSloBinding';
import EnumApplicationTags from './EnumApplicationTags';
import EnumApplicationType from './EnumApplicationType';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The CreateApplication201Response model module.
 * @module model/CreateApplication201Response
 * @version 2023-06-29
 */
class CreateApplication201Response {
  /**
   * Constructs a new <code>CreateApplication201Response</code>.
   * @alias module:model/CreateApplication201Response
   * @param {(module:model/ApplicationExternalLink|module:model/ApplicationOIDC|module:model/ApplicationSAML|module:model/ApplicationWSFED)} instance The actual instance to initialize CreateApplication201Response.
   */
  constructor(instance = null) {
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "ApplicationSAML") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        ApplicationSAML.validateJSON(instance); // throw an exception if no match
        // create ApplicationSAML from JS object
        this.actualInstance = ApplicationSAML.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ApplicationSAML
      errorMessages.push("Failed to construct ApplicationSAML: " + err);
    }
    try {
      if (typeof instance === "ApplicationOIDC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        ApplicationOIDC.validateJSON(instance); // throw an exception if no match
        // create ApplicationOIDC from JS object
        this.actualInstance = ApplicationOIDC.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ApplicationOIDC
      errorMessages.push("Failed to construct ApplicationOIDC: " + err);
    }
    try {
      if (typeof instance === "ApplicationWSFED") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        ApplicationWSFED.validateJSON(instance); // throw an exception if no match
        // create ApplicationWSFED from JS object
        this.actualInstance = ApplicationWSFED.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ApplicationWSFED
      errorMessages.push("Failed to construct ApplicationWSFED: " + err);
    }
    try {
      if (typeof instance === "ApplicationExternalLink") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        ApplicationExternalLink.validateJSON(instance); // throw an exception if no match
        // create ApplicationExternalLink from JS object
        this.actualInstance = ApplicationExternalLink.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ApplicationExternalLink
      errorMessages.push("Failed to construct ApplicationExternalLink: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `CreateApplication201Response` with oneOf schemas ApplicationExternalLink, ApplicationOIDC, ApplicationSAML, ApplicationWSFED. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `CreateApplication201Response` with oneOf schemas ApplicationExternalLink, ApplicationOIDC, ApplicationSAML, ApplicationWSFED. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>CreateApplication201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateApplication201Response} obj Optional instance to populate.
   * @return {module:model/CreateApplication201Response} The populated <code>CreateApplication201Response</code> instance.
   */
  static constructFromObject(data, obj) {
    return new CreateApplication201Response(data);
  }

  /**
   * Gets the actual instance, which can be <code>ApplicationExternalLink</code>, <code>ApplicationOIDC</code>, <code>ApplicationSAML</code>, <code>ApplicationWSFED</code>.
   * @return {(module:model/ApplicationExternalLink|module:model/ApplicationOIDC|module:model/ApplicationSAML|module:model/ApplicationWSFED)} The actual instance.
   */
  getActualInstance() {
    return this.actualInstance;
  }

  /**
   * Sets the actual instance, which can be <code>ApplicationExternalLink</code>, <code>ApplicationOIDC</code>, <code>ApplicationSAML</code>, <code>ApplicationWSFED</code>.
   * @param {(module:model/ApplicationExternalLink|module:model/ApplicationOIDC|module:model/ApplicationSAML|module:model/ApplicationWSFED)} obj The actual instance.
   */
  setActualInstance(obj) {
    this.actualInstance = CreateApplication201Response.constructFromObject(obj).getActualInstance();
  }

  /**
   * Returns the JSON representation of the actual instance.
   * @return {string}
   */
  toJSON = function () {
    return this.getActualInstance();
  };

  /**
   * Create an instance of CreateApplication201Response from a JSON string.
   * @param {string} json_string JSON string.
   * @return {module:model/CreateApplication201Response} An instance of CreateApplication201Response.
   */
  static fromJSON = function (json_string) {
    return CreateApplication201Response.constructFromObject(JSON.parse(json_string));
  };
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
CreateApplication201Response.prototype['_links'] = undefined;

/**
 * @member {module:model/ApplicationAccessControl} accessControl
 */
CreateApplication201Response.prototype['accessControl'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
CreateApplication201Response.prototype['createdAt'] = undefined;

/**
 * A string that specifies the description of the application.
 * @member {String} description
 */
CreateApplication201Response.prototype['description'] = undefined;

/**
 * A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED.
 * @member {Boolean} enabled
 */
CreateApplication201Response.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
CreateApplication201Response.prototype['environment'] = undefined;

/**
 * A boolean to specify whether the application is hidden in the application portal despite the configured group access policy.
 * @member {Boolean} hiddenFromAppPortal
 */
CreateApplication201Response.prototype['hiddenFromAppPortal'] = undefined;

/**
 * @member {module:model/ApplicationIcon} icon
 */
CreateApplication201Response.prototype['icon'] = undefined;

/**
 * A string that specifies the application ID.
 * @member {String} id
 */
CreateApplication201Response.prototype['id'] = undefined;

/**
 * A string that specifies the custom login page URL for the application. If you set the loginPageUrl property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. Warning To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains.
 * @member {String} loginPageUrl
 */
CreateApplication201Response.prototype['loginPageUrl'] = undefined;

/**
 * A string that specifies the name of the application. This is a required property.
 * @member {String} name
 */
CreateApplication201Response.prototype['name'] = undefined;

/**
 * @member {module:model/EnumApplicationProtocol} protocol
 */
CreateApplication201Response.prototype['protocol'] = undefined;

/**
 * @member {module:model/EnumApplicationType} type
 */
CreateApplication201Response.prototype['type'] = undefined;

/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
CreateApplication201Response.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the custom home page URL for the application.
 * @member {String} homePageUrl
 */
CreateApplication201Response.prototype['homePageUrl'] = undefined;

/**
 * A string that specifies the Assertion Consumer Service URLs. The first URL in the list is used as default (there must be at least one URL). This is a required property.
 * @member {Array.<String>} acsUrls
 */
CreateApplication201Response.prototype['acsUrls'] = undefined;

/**
 * An integer that specifies the assertion validity duration in seconds. This is a required property.
 * @member {Number} assertionDuration
 */
CreateApplication201Response.prototype['assertionDuration'] = undefined;

/**
 * A boolean that specifies whether the SAML assertion itself should be signed. The default value is `true`.
 * @member {Boolean} assertionSigned
 * @default true
 */
CreateApplication201Response.prototype['assertionSigned'] = true;

/**
 * @member {module:model/ApplicationCorsSettings} corsSettings
 */
CreateApplication201Response.prototype['corsSettings'] = undefined;

/**
 * This is used as the RelayState parameter by the IdP to deep link into the application after authentication. This value can be overridden by the applicationUrl query parameter for GET Identity Provider Initiated SSO. Although both of these parameters are generally URLs, because they are used as deep links, this is not enforced. If neither defaultTargetUrl nor applicationUrl is specified during a SAML authentication flow, no RelayState value is supplied to the application. The defaultTargetUrl (or the applicationUrl) value is passed to the SAML application's ACS URL as a separate RelayState key value (not within the SAMLResponse key value).
 * @member {String} defaultTargetUrl
 */
CreateApplication201Response.prototype['defaultTargetUrl'] = undefined;

/**
 * Indicates whether `requestedAuthnContext` is taken into account in policy decision-making during authentication.
 * @member {Boolean} enableRequestedAuthnContext
 */
CreateApplication201Response.prototype['enableRequestedAuthnContext'] = undefined;

/**
 * @member {module:model/ApplicationWSFEDAllOfIdpSigning} idpSigning
 */
CreateApplication201Response.prototype['idpSigning'] = undefined;

/**
 * A string that specifies the format of the Subject NameID attibute in the SAML assertion
 * @member {String} nameIdFormat
 */
CreateApplication201Response.prototype['nameIdFormat'] = undefined;

/**
 * A boolean that specifies whether the SAML assertion response itself should be signed. The default value is `false`.
 * @member {Boolean} responseSigned
 * @default false
 */
CreateApplication201Response.prototype['responseSigned'] = false;

/**
 * @member {module:model/EnumApplicationSAMLSloBinding} sloBinding
 */
CreateApplication201Response.prototype['sloBinding'] = undefined;

/**
 * The single logout endpoint URL.
 * @member {String} sloEndpoint
 */
CreateApplication201Response.prototype['sloEndpoint'] = undefined;

/**
 * A string that specifies the endpoint URL to submit the logout response. If a value is not provided, the sloEndpoint property value is used to submit SLO response.
 * @member {String} sloResponseEndpoint
 */
CreateApplication201Response.prototype['sloResponseEndpoint'] = undefined;

/**
 * Defines how long PingOne can exchange logout messages with the application, specifically a `LogoutRequest` from the application, since the initial request. PingOne can also send a `LogoutRequest` to the application when a single logout is initiated by the user from other session participants, such as an application or identity provider. This setting is per application. The SLO logout is separate from the user session logout that revokes all tokens.
 * @member {Number} sloWindow
 */
CreateApplication201Response.prototype['sloWindow'] = undefined;

/**
 * A string that specifies the service provider entity ID used to lookup the application. This is a required property and is unique within the environment.
 * @member {String} spEntityId
 */
CreateApplication201Response.prototype['spEntityId'] = undefined;

/**
 * @member {module:model/ApplicationSAMLAllOfSpVerification} spVerification
 */
CreateApplication201Response.prototype['spVerification'] = undefined;

/**
 * When set to `true` (the default), if you attempt to reuse the refresh token, the authorization server immediately revokes the reused refresh token, as well as all descendant tokens. Setting this to null equates to a `false` setting.
 * @member {Boolean} additionalRefreshTokenReplayProtectionEnabled
 * @default true
 */
CreateApplication201Response.prototype['additionalRefreshTokenReplayProtectionEnabled'] = true;

/**
 * A boolean to specify whether wildcards are allowed in redirect URIs. For more information, see [Wildcards in Redirect URIs](https://docs.pingidentity.com/csh?context=p1_c_wildcard_redirect_uri).
 * @member {Boolean} allowWildcardInRedirectUris
 */
CreateApplication201Response.prototype['allowWildcardInRedirectUris'] = undefined;

/**
 * A boolean that specifies whether the permissions service should assign default roles to the application. This property is set only on the POST request. The property is ignored when included in a PUT request.
 * @member {Boolean} assignActorRoles
 */
CreateApplication201Response.prototype['assignActorRoles'] = undefined;

/**
 * A string that specifies a unique identifier within an environment for a device authorization grant flow to provide a short identifier to the application. This property is ignored when the `deviceCustomVerificationUri` property is configured. The string can contain any letters, numbers, and some special characters (regex `a-zA-Z0-9_-`). It can have a length of no more than 50 characters (`min`/`max`=`1`/`50`).
 * @member {String} devicePathId
 */
CreateApplication201Response.prototype['devicePathId'] = undefined;

/**
 * A string that specifies an optional custom verification URI that is returned for the `/device_authorization` endpoint.
 * @member {String} deviceCustomVerificationUri
 */
CreateApplication201Response.prototype['deviceCustomVerificationUri'] = undefined;

/**
 * An integer that specifies the length of time (in seconds) that the `userCode` and `deviceCode` returned by the `/device_authorization` endpoint are valid. This property is required only for applications in which the `grantTypes` property is set to `device_code`. The default value is `600` seconds. It can have a value of no more than `3600` seconds (`min`/`max`=`1`/`3600`).
 * @member {Number} deviceTimeout
 * @default 600
 */
CreateApplication201Response.prototype['deviceTimeout'] = 600;

/**
 * An integer that specifies the frequency (in seconds) for the client to poll the `/as/token` endpoint. This property is required only for applications in which the `grantTypes` property is set to `device_code`. The default value is `5` seconds. It can have a value of no more than `60` seconds (`min`/`max`=`1`/`60`).
 * @member {Number} devicePollingInterval
 * @default 5
 */
CreateApplication201Response.prototype['devicePollingInterval'] = 5;

/**
 * A JWKS string that validates the signature of signed JWTs for applications that use the `PRIVATE_KEY_JWT` option for the `tokenEndpointAuthMethod`. This property is required when `tokenEndpointAuthMethod` is `PRIVATE_KEY_JWT` and the `jwksUrl` property is empty. For more information, see [Create a private_key_jwt JWKS string](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-private_key_jwt-jwks-string). This property is also required if the optional `request` property JWT on the authorize endpoint is signed using the RS256 (or RS384, RS512) signing algorithm and the `jwksUrl` property is empty. For more infornmation about signing the request property JWT, see [Create a request property JWT](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-request-property-jwt).
 * @member {String} jwks
 */
CreateApplication201Response.prototype['jwks'] = undefined;

/**
 * A URL (supports `https://` only) that provides access to a JWKS string that validates the signature of signed JWTs for applications that use the `PRIVATE_KEY_JWT` option for the `tokenEndpointAuthMethod`. This property is required when `tokenEndpointAuthMethod` is `PRIVATE_KEY_JWT` and the `jwks` property is empty. For more information, see [Create a private_key_jwt JWKS string](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-private_key_jwt-jwks-string). This property is also required if the optional `request` property JWT on the authorize endpoint is signed using the RS256 (or RS384, RS512) signing algorithm and the `jwks` property is empty. For more infornmation about signing the request property JWT, see [Create a request property JWT](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-request-property-jwt).
 * @member {String} jwksUrl
 */
CreateApplication201Response.prototype['jwksUrl'] = undefined;

/**
 * @member {module:model/ApplicationOIDCAllOfMobile} mobile
 */
CreateApplication201Response.prototype['mobile'] = undefined;

/**
 * **Deprecation Notice** This field is deprecated and will be removed in a future release. Use `mobile.bundleId` instead.  A string that specifies the bundle associated with the application, for push notifications in native apps. The value of the bundleId property is unique per environment, and once defined, is immutable. 
 * @member {String} bundleId
 */
CreateApplication201Response.prototype['bundleId'] = undefined;

/**
 * **Deprecation Notice** This field is deprecated and will be removed in a future release. Use `mobile.packageName` instead.  A string that specifies the package name associated with the application, for push notifications in native apps. The value of the mobile.packageName property is unique per environment, and once defined, is immutable. 
 * @member {String} packageName
 */
CreateApplication201Response.prototype['packageName'] = undefined;

/**
 * @member {module:model/ApplicationWSFEDAllOfKerberos} kerberos
 */
CreateApplication201Response.prototype['kerberos'] = undefined;

/**
 * A string that specifies the grant type for the authorization request. This is a required property. Options are AUTHORIZATION_CODE, IMPLICIT, REFRESH_TOKEN, CLIENT_CREDENTIALS.
 * @member {Array.<module:model/EnumApplicationOIDCGrantType>} grantTypes
 */
CreateApplication201Response.prototype['grantTypes'] = undefined;

/**
 * A string that specifies the URI to use for third-parties to begin the sign-on process for the application. If specified, PingOne redirects users to this URI to initiate SSO to PingOne. The application is responsible for implementing the relevant OIDC flow when the initiate login URI is requested. This property is required if you want the application to appear in the PingOne Application Portal. See the OIDC specification section of [Initiating Login from a Third Party](https://openid.net/specs/openid-connect-core-1_0.html#ThirdPartyInitiatedLogin) for more information.
 * @member {String} initiateLoginUri
 */
CreateApplication201Response.prototype['initiateLoginUri'] = undefined;

/**
 * @member {module:model/EnumApplicationOIDCPKCEOption} pkceEnforcement
 */
CreateApplication201Response.prototype['pkceEnforcement'] = undefined;

/**
 * A string that specifies the URLs that the browser can be redirected to after logout.
 * @member {Array.<String>} postLogoutRedirectUris
 */
CreateApplication201Response.prototype['postLogoutRedirectUris'] = undefined;

/**
 * A string that specifies the callback URI for the authentication response.
 * @member {Array.<String>} redirectUris
 */
CreateApplication201Response.prototype['redirectUris'] = undefined;

/**
 * An integer that specifies the lifetime in seconds of the refresh token. If a value is not provided, the default value is 2592000, or 30 days. Valid values are between 60 and 2147483647. If the `refreshTokenRollingDuration` property is specified for the application, then this property must be less than or equal to the value of `refreshTokenRollingDuration`. After this property is set, the value cannot be nullified. This value is used to generate the value for the exp claim when minting a new refresh token.
 * @member {Number} refreshTokenDuration
 * @default 2592000
 */
CreateApplication201Response.prototype['refreshTokenDuration'] = 2592000;

/**
 * An integer that specifies the number of seconds a refresh token can be exchanged before re-authentication is required. If a value is not provided, the refresh token is valid forever. Valid values are between 60 and 2147483647. After this property is set, the value cannot be nullified. This value is used to generate the value for the exp claim when minting a new refresh token.
 * @member {Number} refreshTokenRollingDuration
 */
CreateApplication201Response.prototype['refreshTokenRollingDuration'] = undefined;

/**
 * The number of seconds that a refresh token may be reused after having been exchanged for a new set of tokens. This is useful in the case of network errors on the client. Valid values are between 0 and 86400 seconds. Null is treated the same as 0.
 * @member {Number} refreshTokenRollingGracePeriodDuration
 */
CreateApplication201Response.prototype['refreshTokenRollingGracePeriodDuration'] = undefined;

/**
 * The code or token type returned by an authorization request. Options are `TOKEN`, `ID_TOKEN`, and `CODE`. For hybrid flows that specify `CODE` with `TOKEN` or `ID_TOKEN`, see [Hybrid grant type](https://apidocs.pingidentity.com/pingone/main/v1/api/#hybrid-grant-type).
 * @member {Array.<module:model/EnumApplicationOIDCResponseType>} responseTypes
 */
CreateApplication201Response.prototype['responseTypes'] = undefined;

/**
 * Indicates that the Java Web Token (JWT) for the [request query](https://openid.net/specs/openid-connect-core-1_0.html#RequestObject) parameter is required to be signed. If `false` or null (default), a signed request object is not required. Both `supportUnsignedRequestObject` and this property cannot be set to `true`.
 * @member {Boolean} requireSignedRequestObject
 */
CreateApplication201Response.prototype['requireSignedRequestObject'] = undefined;

/**
 * A boolean that specifies whether the [request query](https://openid.net/specs/openid-connect-core-1_0.html#RequestObject) parameter JWT is allowed to be unsigned. If false or null (default), an unsigned request object is not allowed.
 * @member {Boolean} supportUnsignedRequestObject
 */
CreateApplication201Response.prototype['supportUnsignedRequestObject'] = undefined;

/**
 * An array that specifies the list of labels associated with the application. Options are `PING_FED_CONNECTION_INTEGRATION`.  Only applicable for creating worker applications.
 * @member {Array.<module:model/EnumApplicationTags>} tags
 */
CreateApplication201Response.prototype['tags'] = undefined;

/**
 * The URI for the application. If specified, PingOne will redirect application users to this URI after a user is authenticated. In the PingOne admin console, this becomes the value of the `target_link_uri` parameter used for the Initiate Single Sign-On URL field.
 * @member {String} targetLinkUri
 */
CreateApplication201Response.prototype['targetLinkUri'] = undefined;

/**
 * @member {module:model/EnumApplicationOIDCTokenAuthMethod} tokenEndpointAuthMethod
 */
CreateApplication201Response.prototype['tokenEndpointAuthMethod'] = undefined;

/**
 * @member {module:model/EnumApplicationOIDCPARRequirement} parRequirement
 */
CreateApplication201Response.prototype['parRequirement'] = undefined;

/**
 * PAR timeout in seconds. Must be between `1` and `600`. The default value is `60`.
 * @member {Number} parTimeout
 * @default 60
 */
CreateApplication201Response.prototype['parTimeout'] = 60;

/**
 * @member {module:model/ApplicationOIDCAllOfSigning} signing
 */
CreateApplication201Response.prototype['signing'] = undefined;

/**
 * The service provider ID. Defaults to `urn:federation:MicrosoftOnline`.
 * @member {String} audienceRestriction
 * @default 'urn:federation:MicrosoftOnline'
 */
CreateApplication201Response.prototype['audienceRestriction'] = 'urn:federation:MicrosoftOnline';

/**
 * The federated domain name (for example, the Azure custom domain).
 * @member {String} domainName
 */
CreateApplication201Response.prototype['domainName'] = undefined;

/**
 * The URL that the replying party (such as, Office365) uses to accept submissions of RequestSecurityTokenResponse messages that are a result of SSO requests.
 * @member {String} replyUrl
 */
CreateApplication201Response.prototype['replyUrl'] = undefined;
CreateApplication201Response.OneOf = ["ApplicationExternalLink", "ApplicationOIDC", "ApplicationSAML", "ApplicationWSFED"];
export default CreateApplication201Response;