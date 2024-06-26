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
    instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyFido2();
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

  describe('DeviceAuthenticationPolicyFido2', function() {
    it('should create an instance of DeviceAuthenticationPolicyFido2', function() {
      // uncomment below and update the code to test DeviceAuthenticationPolicyFido2
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyFido2();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyFido2);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyFido2();
      //expect(instance).to.be();
    });

    it('should have the property pairingDisabled (base name: "pairingDisabled")', function() {
      // uncomment below and update the code to test the property pairingDisabled
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyFido2();
      //expect(instance).to.be();
    });

    it('should have the property fido2PolicyId (base name: "fido2PolicyId")', function() {
      // uncomment below and update the code to test the property fido2PolicyId
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyFido2();
      //expect(instance).to.be();
    });

  });

}));
