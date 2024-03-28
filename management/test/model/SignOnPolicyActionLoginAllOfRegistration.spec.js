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
    instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration();
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

  describe('SignOnPolicyActionLoginAllOfRegistration', function() {
    it('should create an instance of SignOnPolicyActionLoginAllOfRegistration', function() {
      // uncomment below and update the code to test SignOnPolicyActionLoginAllOfRegistration
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration();
      //expect(instance).to.be();
    });

    it('should have the property external (base name: "external")', function() {
      // uncomment below and update the code to test the property external
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration();
      //expect(instance).to.be();
    });

    it('should have the property population (base name: "population")', function() {
      // uncomment below and update the code to test the property population
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration();
      //expect(instance).to.be();
    });

    it('should have the property confirmIdentityProviderAttributes (base name: "confirmIdentityProviderAttributes")', function() {
      // uncomment below and update the code to test the property confirmIdentityProviderAttributes
      //var instance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionLoginAllOfRegistration();
      //expect(instance).to.be();
    });

  });

}));