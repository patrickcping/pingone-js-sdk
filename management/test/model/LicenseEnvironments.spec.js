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
    instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
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

  describe('LicenseEnvironments', function() {
    it('should create an instance of LicenseEnvironments', function() {
      // uncomment below and update the code to test LicenseEnvironments
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.LicenseEnvironments);
    });

    it('should have the property allowAddResources (base name: "allowAddResources")', function() {
      // uncomment below and update the code to test the property allowAddResources
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

    it('should have the property allowConnections (base name: "allowConnections")', function() {
      // uncomment below and update the code to test the property allowConnections
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

    it('should have the property allowCustomDomain (base name: "allowCustomDomain")', function() {
      // uncomment below and update the code to test the property allowCustomDomain
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

    it('should have the property allowCustomSchema (base name: "allowCustomSchema")', function() {
      // uncomment below and update the code to test the property allowCustomSchema
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

    it('should have the property allowProduction (base name: "allowProduction")', function() {
      // uncomment below and update the code to test the property allowProduction
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

    it('should have the property max (base name: "max")', function() {
      // uncomment below and update the code to test the property max
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

    it('should have the property regions (base name: "regions")', function() {
      // uncomment below and update the code to test the property regions
      //var instance = new PingOnePlatformApiSsoAndBase.LicenseEnvironments();
      //expect(instance).to.be();
    });

  });

}));
