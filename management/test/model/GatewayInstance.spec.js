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
    instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
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

  describe('GatewayInstance', function() {
    it('should create an instance of GatewayInstance', function() {
      // uncomment below and update the code to test GatewayInstance
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.GatewayInstance);
    });

    it('should have the property connected (base name: "connected")', function() {
      // uncomment below and update the code to test the property connected
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property gateway (base name: "gateway")', function() {
      // uncomment below and update the code to test the property gateway
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property credential (base name: "credential")', function() {
      // uncomment below and update the code to test the property credential
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property currentErrors (base name: "currentErrors")', function() {
      // uncomment below and update the code to test the property currentErrors
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property healthStatus (base name: "healthStatus")', function() {
      // uncomment below and update the code to test the property healthStatus
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property initializedAt (base name: "initializedAt")', function() {
      // uncomment below and update the code to test the property initializedAt
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property lastReportedAt (base name: "lastReportedAt")', function() {
      // uncomment below and update the code to test the property lastReportedAt
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property busyPercentage (base name: "busyPercentage")', function() {
      // uncomment below and update the code to test the property busyPercentage
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property operationsPerSecond (base name: "operationsPerSecond")', function() {
      // uncomment below and update the code to test the property operationsPerSecond
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

    it('should have the property responseTimeMillis (base name: "responseTimeMillis")', function() {
      // uncomment below and update the code to test the property responseTimeMillis
      //var instance = new PingOnePlatformApiSsoAndBase.GatewayInstance();
      //expect(instance).to.be();
    });

  });

}));
