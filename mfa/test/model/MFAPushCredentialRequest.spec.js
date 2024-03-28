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
    instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
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

  describe('MFAPushCredentialRequest', function() {
    it('should create an instance of MFAPushCredentialRequest', function() {
      // uncomment below and update the code to test MFAPushCredentialRequest
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

    it('should have the property teamId (base name: "teamId")', function() {
      // uncomment below and update the code to test the property teamId
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

    it('should have the property googleServiceAccountCredentials (base name: "googleServiceAccountCredentials")', function() {
      // uncomment below and update the code to test the property googleServiceAccountCredentials
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "clientSecret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest();
      //expect(instance).to.be();
    });

  });

}));
