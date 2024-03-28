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
    instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
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

  describe('PropagationStoreConfigurationWorkday', function() {
    it('should create an instance of PropagationStoreConfigurationWorkday', function() {
      // uncomment below and update the code to test PropagationStoreConfigurationWorkday
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday);
    });

    it('should have the property excludeContingentWorkers (base name: "excludeContingentWorkers")', function() {
      // uncomment below and update the code to test the property excludeContingentWorkers
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

    it('should have the property excludeEmployees (base name: "excludeEmployees")', function() {
      // uncomment below and update the code to test the property excludeEmployees
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

    it('should have the property excludeInactiveWorkers (base name: "excludeInactiveWorkers")', function() {
      // uncomment below and update the code to test the property excludeInactiveWorkers
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationWorkday();
      //expect(instance).to.be();
    });

  });

}));