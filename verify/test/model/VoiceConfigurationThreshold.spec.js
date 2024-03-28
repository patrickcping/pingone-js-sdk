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
    instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationThreshold();
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

  describe('VoiceConfigurationThreshold', function() {
    it('should create an instance of VoiceConfigurationThreshold', function() {
      // uncomment below and update the code to test VoiceConfigurationThreshold
      //var instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationThreshold();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneVerify.VoiceConfigurationThreshold);
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instance = new PingOnePlatformApiPingOneVerify.VoiceConfigurationThreshold();
      //expect(instance).to.be();
    });

  });

}));
