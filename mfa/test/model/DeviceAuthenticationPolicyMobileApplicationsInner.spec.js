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
    instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
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

  describe('DeviceAuthenticationPolicyMobileApplicationsInner', function() {
    it('should create an instance of DeviceAuthenticationPolicyMobileApplicationsInner', function() {
      // uncomment below and update the code to test DeviceAuthenticationPolicyMobileApplicationsInner
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property push (base name: "push")', function() {
      // uncomment below and update the code to test the property push
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property pushTimeout (base name: "pushTimeout")', function() {
      // uncomment below and update the code to test the property pushTimeout
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property pairingKeyLifetime (base name: "pairingKeyLifetime")', function() {
      // uncomment below and update the code to test the property pairingKeyLifetime
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property pushLimit (base name: "pushLimit")', function() {
      // uncomment below and update the code to test the property pushLimit
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property otp (base name: "otp")', function() {
      // uncomment below and update the code to test the property otp
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property deviceAuthorization (base name: "deviceAuthorization")', function() {
      // uncomment below and update the code to test the property deviceAuthorization
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property autoEnrollment (base name: "autoEnrollment")', function() {
      // uncomment below and update the code to test the property autoEnrollment
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property pairingDisabled (base name: "pairingDisabled")', function() {
      // uncomment below and update the code to test the property pairingDisabled
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

    it('should have the property integrityDetection (base name: "integrityDetection")', function() {
      // uncomment below and update the code to test the property integrityDetection
      //var instance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyMobileApplicationsInner();
      //expect(instance).to.be();
    });

  });

}));
