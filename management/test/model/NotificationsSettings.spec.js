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
    instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
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

  describe('NotificationsSettings', function() {
    it('should create an instance of NotificationsSettings', function() {
      // uncomment below and update the code to test NotificationsSettings
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.NotificationsSettings);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property deliveryMode (base name: "deliveryMode")', function() {
      // uncomment below and update the code to test the property deliveryMode
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property restrictions (base name: "restrictions")', function() {
      // uncomment below and update the code to test the property restrictions
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property smsProvidersFallbackChain (base name: "smsProvidersFallbackChain")', function() {
      // uncomment below and update the code to test the property smsProvidersFallbackChain
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property replyTo (base name: "replyTo")', function() {
      // uncomment below and update the code to test the property replyTo
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property whitelist (base name: "whitelist")', function() {
      // uncomment below and update the code to test the property whitelist
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettings();
      //expect(instance).to.be();
    });

  });

}));
