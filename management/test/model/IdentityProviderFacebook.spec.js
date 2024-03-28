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
    instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
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

  describe('IdentityProviderFacebook', function() {
    it('should create an instance of IdentityProviderFacebook', function() {
      // uncomment below and update the code to test IdentityProviderFacebook
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.IdentityProviderFacebook);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property loginButtonIcon (base name: "loginButtonIcon")', function() {
      // uncomment below and update the code to test the property loginButtonIcon
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property registration (base name: "registration")', function() {
      // uncomment below and update the code to test the property registration
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

    it('should have the property appSecret (base name: "appSecret")', function() {
      // uncomment below and update the code to test the property appSecret
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderFacebook();
      //expect(instance).to.be();
    });

  });

}));
