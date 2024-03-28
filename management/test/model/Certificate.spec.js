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
    instance = new PingOnePlatformApiSsoAndBase.Certificate();
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

  describe('Certificate', function() {
    it('should create an instance of Certificate', function() {
      // uncomment below and update the code to test Certificate
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.Certificate);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property algorithm (base name: "algorithm")', function() {
      // uncomment below and update the code to test the property algorithm
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property issuerDN (base name: "issuerDN")', function() {
      // uncomment below and update the code to test the property issuerDN
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property keyLength (base name: "keyLength")', function() {
      // uncomment below and update the code to test the property keyLength
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property signatureAlgorithm (base name: "signatureAlgorithm")', function() {
      // uncomment below and update the code to test the property signatureAlgorithm
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property startsAt (base name: "startsAt")', function() {
      // uncomment below and update the code to test the property startsAt
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property subjectDN (base name: "subjectDN")', function() {
      // uncomment below and update the code to test the property subjectDN
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property usageType (base name: "usageType")', function() {
      // uncomment below and update the code to test the property usageType
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property validityPeriod (base name: "validityPeriod")', function() {
      // uncomment below and update the code to test the property validityPeriod
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

    it('should have the property customCRL (base name: "customCRL")', function() {
      // uncomment below and update the code to test the property customCRL
      //var instance = new PingOnePlatformApiSsoAndBase.Certificate();
      //expect(instance).to.be();
    });

  });

}));