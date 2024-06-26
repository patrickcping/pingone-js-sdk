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
    instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
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

  describe('SignOnPolicyActionMFA', function() {
    it('should create an instance of SignOnPolicyActionMFA', function() {
      // uncomment below and update the code to test SignOnPolicyActionMFA
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property signOnPolicy (base name: "signOnPolicy")', function() {
      // uncomment below and update the code to test the property signOnPolicy
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property authenticator (base name: "authenticator")', function() {
      // uncomment below and update the code to test the property authenticator
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property boundBiometrics (base name: "boundBiometrics")', function() {
      // uncomment below and update the code to test the property boundBiometrics
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property securityKey (base name: "securityKey")', function() {
      // uncomment below and update the code to test the property securityKey
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property sms (base name: "sms")', function() {
      // uncomment below and update the code to test the property sms
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property voice (base name: "voice")', function() {
      // uncomment below and update the code to test the property voice
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property applications (base name: "applications")', function() {
      // uncomment below and update the code to test the property applications
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property deviceAuthenticationPolicy (base name: "deviceAuthenticationPolicy")', function() {
      // uncomment below and update the code to test the property deviceAuthenticationPolicy
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

    it('should have the property noDevicesMode (base name: "noDevicesMode")', function() {
      // uncomment below and update the code to test the property noDevicesMode
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionMFA();
      //expect(instance).to.be();
    });

  });

}));
