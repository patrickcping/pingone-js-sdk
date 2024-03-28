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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PingOnePlatformApiSsoAndBase);
  }
}(this, function(expect, PingOnePlatformApiSsoAndBase) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateApplicationRequest', function() {
    it('should create an instance of CreateApplicationRequest', function() {
      // uncomment below and update the code to test CreateApplicationRequest
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.CreateApplicationRequest);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property accessControl (base name: "accessControl")', function() {
      // uncomment below and update the code to test the property accessControl
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property hiddenFromAppPortal (base name: "hiddenFromAppPortal")', function() {
      // uncomment below and update the code to test the property hiddenFromAppPortal
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property loginPageUrl (base name: "loginPageUrl")', function() {
      // uncomment below and update the code to test the property loginPageUrl
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property homePageUrl (base name: "homePageUrl")', function() {
      // uncomment below and update the code to test the property homePageUrl
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property acsUrls (base name: "acsUrls")', function() {
      // uncomment below and update the code to test the property acsUrls
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property assertionDuration (base name: "assertionDuration")', function() {
      // uncomment below and update the code to test the property assertionDuration
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property assertionSigned (base name: "assertionSigned")', function() {
      // uncomment below and update the code to test the property assertionSigned
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property corsSettings (base name: "corsSettings")', function() {
      // uncomment below and update the code to test the property corsSettings
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property defaultTargetUrl (base name: "defaultTargetUrl")', function() {
      // uncomment below and update the code to test the property defaultTargetUrl
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property enableRequestedAuthnContext (base name: "enableRequestedAuthnContext")', function() {
      // uncomment below and update the code to test the property enableRequestedAuthnContext
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property idpSigning (base name: "idpSigning")', function() {
      // uncomment below and update the code to test the property idpSigning
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property nameIdFormat (base name: "nameIdFormat")', function() {
      // uncomment below and update the code to test the property nameIdFormat
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property responseSigned (base name: "responseSigned")', function() {
      // uncomment below and update the code to test the property responseSigned
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property sloBinding (base name: "sloBinding")', function() {
      // uncomment below and update the code to test the property sloBinding
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property sloEndpoint (base name: "sloEndpoint")', function() {
      // uncomment below and update the code to test the property sloEndpoint
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property sloResponseEndpoint (base name: "sloResponseEndpoint")', function() {
      // uncomment below and update the code to test the property sloResponseEndpoint
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property sloWindow (base name: "sloWindow")', function() {
      // uncomment below and update the code to test the property sloWindow
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property spEntityId (base name: "spEntityId")', function() {
      // uncomment below and update the code to test the property spEntityId
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property spVerification (base name: "spVerification")', function() {
      // uncomment below and update the code to test the property spVerification
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property additionalRefreshTokenReplayProtectionEnabled (base name: "additionalRefreshTokenReplayProtectionEnabled")', function() {
      // uncomment below and update the code to test the property additionalRefreshTokenReplayProtectionEnabled
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property allowWildcardInRedirectUris (base name: "allowWildcardInRedirectUris")', function() {
      // uncomment below and update the code to test the property allowWildcardInRedirectUris
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property assignActorRoles (base name: "assignActorRoles")', function() {
      // uncomment below and update the code to test the property assignActorRoles
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property devicePathId (base name: "devicePathId")', function() {
      // uncomment below and update the code to test the property devicePathId
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceCustomVerificationUri (base name: "deviceCustomVerificationUri")', function() {
      // uncomment below and update the code to test the property deviceCustomVerificationUri
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceTimeout (base name: "deviceTimeout")', function() {
      // uncomment below and update the code to test the property deviceTimeout
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property devicePollingInterval (base name: "devicePollingInterval")', function() {
      // uncomment below and update the code to test the property devicePollingInterval
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property jwks (base name: "jwks")', function() {
      // uncomment below and update the code to test the property jwks
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property jwksUrl (base name: "jwksUrl")', function() {
      // uncomment below and update the code to test the property jwksUrl
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property mobile (base name: "mobile")', function() {
      // uncomment below and update the code to test the property mobile
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property bundleId (base name: "bundleId")', function() {
      // uncomment below and update the code to test the property bundleId
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property packageName (base name: "packageName")', function() {
      // uncomment below and update the code to test the property packageName
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property kerberos (base name: "kerberos")', function() {
      // uncomment below and update the code to test the property kerberos
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property grantTypes (base name: "grantTypes")', function() {
      // uncomment below and update the code to test the property grantTypes
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property initiateLoginUri (base name: "initiateLoginUri")', function() {
      // uncomment below and update the code to test the property initiateLoginUri
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property pkceEnforcement (base name: "pkceEnforcement")', function() {
      // uncomment below and update the code to test the property pkceEnforcement
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property postLogoutRedirectUris (base name: "postLogoutRedirectUris")', function() {
      // uncomment below and update the code to test the property postLogoutRedirectUris
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property redirectUris (base name: "redirectUris")', function() {
      // uncomment below and update the code to test the property redirectUris
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenDuration (base name: "refreshTokenDuration")', function() {
      // uncomment below and update the code to test the property refreshTokenDuration
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenRollingDuration (base name: "refreshTokenRollingDuration")', function() {
      // uncomment below and update the code to test the property refreshTokenRollingDuration
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenRollingGracePeriodDuration (base name: "refreshTokenRollingGracePeriodDuration")', function() {
      // uncomment below and update the code to test the property refreshTokenRollingGracePeriodDuration
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property responseTypes (base name: "responseTypes")', function() {
      // uncomment below and update the code to test the property responseTypes
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property requireSignedRequestObject (base name: "requireSignedRequestObject")', function() {
      // uncomment below and update the code to test the property requireSignedRequestObject
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property supportUnsignedRequestObject (base name: "supportUnsignedRequestObject")', function() {
      // uncomment below and update the code to test the property supportUnsignedRequestObject
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property targetLinkUri (base name: "targetLinkUri")', function() {
      // uncomment below and update the code to test the property targetLinkUri
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property tokenEndpointAuthMethod (base name: "tokenEndpointAuthMethod")', function() {
      // uncomment below and update the code to test the property tokenEndpointAuthMethod
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property parRequirement (base name: "parRequirement")', function() {
      // uncomment below and update the code to test the property parRequirement
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property parTimeout (base name: "parTimeout")', function() {
      // uncomment below and update the code to test the property parTimeout
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property signing (base name: "signing")', function() {
      // uncomment below and update the code to test the property signing
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property audienceRestriction (base name: "audienceRestriction")', function() {
      // uncomment below and update the code to test the property audienceRestriction
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property domainName (base name: "domainName")', function() {
      // uncomment below and update the code to test the property domainName
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property replyUrl (base name: "replyUrl")', function() {
      // uncomment below and update the code to test the property replyUrl
      //var instance = new PingOnePlatformApiSsoAndBase.CreateApplicationRequest();
      //expect(instance).to.be();
    });

  });

}));
