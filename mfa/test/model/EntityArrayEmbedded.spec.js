/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
    factory(root.expect, root.PingOnePlatformApiPingOneMfa);
  }
}(this, function(expect, PingOnePlatformApiPingOneMfa) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
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

  describe('EntityArrayEmbedded', function() {
    it('should create an instance of EntityArrayEmbedded', function() {
      // uncomment below and update the code to test EntityArrayEmbedded
      //var instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneMfa.EntityArrayEmbedded);
    });

    it('should have the property pushCredentials (base name: "pushCredentials")', function() {
      // uncomment below and update the code to test the property pushCredentials
      //var instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
      //expect(instance).to.be();
    });

    it('should have the property deviceAuthenticationPolicies (base name: "deviceAuthenticationPolicies")', function() {
      // uncomment below and update the code to test the property deviceAuthenticationPolicies
      //var instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
      //expect(instance).to.be();
    });

    it('should have the property fidoDevicesMetadata (base name: "fidoDevicesMetadata")', function() {
      // uncomment below and update the code to test the property fidoDevicesMetadata
      //var instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
      //expect(instance).to.be();
    });

    it('should have the property fidoPolicies (base name: "fidoPolicies")', function() {
      // uncomment below and update the code to test the property fidoPolicies
      //var instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
      //expect(instance).to.be();
    });

    it('should have the property fido2Policies (base name: "fido2Policies")', function() {
      // uncomment below and update the code to test the property fido2Policies
      //var instance = new PingOnePlatformApiPingOneMfa.EntityArrayEmbedded();
      //expect(instance).to.be();
    });

  });

}));
