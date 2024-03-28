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
    instance = new PingOnePlatformApiSsoAndBase.FormElement();
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

  describe('FormElement', function() {
    it('should create an instance of FormElement', function() {
      // uncomment below and update the code to test FormElement
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.FormElement);
    });

    it('should have the property attributeDisabled (base name: "attributeDisabled")', function() {
      // uncomment below and update the code to test the property attributeDisabled
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property labelMode (base name: "labelMode")', function() {
      // uncomment below and update the code to test the property labelMode
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property otherOptionEnabled (base name: "otherOptionEnabled")', function() {
      // uncomment below and update the code to test the property otherOptionEnabled
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property otherOptionKey (base name: "otherOptionKey")', function() {
      // uncomment below and update the code to test the property otherOptionKey
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property otherOptionLabel (base name: "otherOptionLabel")', function() {
      // uncomment below and update the code to test the property otherOptionLabel
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property otherOptionInputLabel (base name: "otherOptionInputLabel")', function() {
      // uncomment below and update the code to test the property otherOptionInputLabel
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

    it('should have the property otherOptionAttributeDisabled (base name: "otherOptionAttributeDisabled")', function() {
      // uncomment below and update the code to test the property otherOptionAttributeDisabled
      //var instance = new PingOnePlatformApiSsoAndBase.FormElement();
      //expect(instance).to.be();
    });

  });

}));
