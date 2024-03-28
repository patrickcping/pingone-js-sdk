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
    instance = new PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner();
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

  describe('P1ErrorDetailsInner', function() {
    it('should create an instance of P1ErrorDetailsInner', function() {
      // uncomment below and update the code to test P1ErrorDetailsInner
      //var instance = new PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property innerError (base name: "innerError")', function() {
      // uncomment below and update the code to test the property innerError
      //var instance = new PingOnePlatformApiSsoAndBase.P1ErrorDetailsInner();
      //expect(instance).to.be();
    });

  });

}));
