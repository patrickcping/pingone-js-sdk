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
    instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationReferenceData();
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

  describe('VoiceConfigurationReferenceData', function() {
    it('should create an instance of VoiceConfigurationReferenceData', function() {
      // uncomment below and update the code to test VoiceConfigurationReferenceData
      //var instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationReferenceData();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneVerify.VoiceConfigurationReferenceData);
    });

    it('should have the property retainOriginalRecordings (base name: "retainOriginalRecordings")', function() {
      // uncomment below and update the code to test the property retainOriginalRecordings
      //var instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationReferenceData();
      //expect(instance).to.be();
    });

    it('should have the property updateOnReenrollment (base name: "updateOnReenrollment")', function() {
      // uncomment below and update the code to test the property updateOnReenrollment
      //var instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationReferenceData();
      //expect(instance).to.be();
    });

    it('should have the property updateOnVerification (base name: "updateOnVerification")', function() {
      // uncomment below and update the code to test the property updateOnVerification
      //var instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationReferenceData();
      //expect(instance).to.be();
    });

  });

}));
