/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
    factory(root.expect, root.PingOnePlatformApiCredentials);
  }
}(this, function(expect, PingOnePlatformApiCredentials) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
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

  describe('CredentialIssuanceRule', function() {
    it('should create an instance of CredentialIssuanceRule', function() {
      // uncomment below and update the code to test CredentialIssuanceRule
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be.a(PingOnePlatformApiCredentials.CredentialIssuanceRule);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property automation (base name: "automation")', function() {
      // uncomment below and update the code to test the property automation
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property credentialType (base name: "credentialType")', function() {
      // uncomment below and update the code to test the property credentialType
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property digitalWalletApplication (base name: "digitalWalletApplication")', function() {
      // uncomment below and update the code to test the property digitalWalletApplication
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiCredentials.CredentialIssuanceRule();
      //expect(instance).to.be();
    });

  });

}));
