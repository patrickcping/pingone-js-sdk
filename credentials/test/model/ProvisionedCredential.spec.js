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
    instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
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

  describe('ProvisionedCredential', function() {
    it('should create an instance of ProvisionedCredential', function() {
      // uncomment below and update the code to test ProvisionedCredential
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be.a(PingOnePlatformApiCredentials.ProvisionedCredential);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property claimReference (base name: "claimReference")', function() {
      // uncomment below and update the code to test the property claimReference
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property credential (base name: "credential")', function() {
      // uncomment below and update the code to test the property credential
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property digitalWallet (base name: "digitalWallet")', function() {
      // uncomment below and update the code to test the property digitalWallet
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property expiredAt (base name: "expiredAt")', function() {
      // uncomment below and update the code to test the property expiredAt
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

    it('should have the property walletActions (base name: "walletActions")', function() {
      // uncomment below and update the code to test the property walletActions
      //var instance = new PingOnePlatformApiCredentials.ProvisionedCredential();
      //expect(instance).to.be();
    });

  });

}));
