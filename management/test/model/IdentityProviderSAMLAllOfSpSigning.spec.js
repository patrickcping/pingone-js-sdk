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
    instance = new PingOnePlatformApiSsoAndBase.IdentityProviderSAMLAllOfSpSigning();
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

  describe('IdentityProviderSAMLAllOfSpSigning', function() {
    it('should create an instance of IdentityProviderSAMLAllOfSpSigning', function() {
      // uncomment below and update the code to test IdentityProviderSAMLAllOfSpSigning
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderSAMLAllOfSpSigning();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.IdentityProviderSAMLAllOfSpSigning);
    });

    it('should have the property algorithm (base name: "algorithm")', function() {
      // uncomment below and update the code to test the property algorithm
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderSAMLAllOfSpSigning();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new PingOnePlatformApiSsoAndBase.IdentityProviderSAMLAllOfSpSigning();
      //expect(instance).to.be();
    });

  });

}));
