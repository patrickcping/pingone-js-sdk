/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
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
    factory(root.expect, root.PingOnePlatformApiPingOneVerify);
  }
}(this, function(expect, PingOnePlatformApiPingOneVerify) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiPingOneVerify.OTPDeviceConfigurationOtpDeliveries();
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

  describe('OTPDeviceConfigurationOtpDeliveries', function() {
    it('should create an instance of OTPDeviceConfigurationOtpDeliveries', function() {
      // uncomment below and update the code to test OTPDeviceConfigurationOtpDeliveries
      //var instance = new PingOnePlatformApiPingOneVerify.OTPDeviceConfigurationOtpDeliveries();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneVerify.OTPDeviceConfigurationOtpDeliveries);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new PingOnePlatformApiPingOneVerify.OTPDeviceConfigurationOtpDeliveries();
      //expect(instance).to.be();
    });

    it('should have the property cooldown (base name: "cooldown")', function() {
      // uncomment below and update the code to test the property cooldown
      //var instance = new PingOnePlatformApiPingOneVerify.OTPDeviceConfigurationOtpDeliveries();
      //expect(instance).to.be();
    });

  });

}));