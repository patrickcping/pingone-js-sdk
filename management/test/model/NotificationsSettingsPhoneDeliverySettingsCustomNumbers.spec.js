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
    instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
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

  describe('NotificationsSettingsPhoneDeliverySettingsCustomNumbers', function() {
    it('should create an instance of NotificationsSettingsPhoneDeliverySettingsCustomNumbers', function() {
      // uncomment below and update the code to test NotificationsSettingsPhoneDeliverySettingsCustomNumbers
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers);
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be();
    });

    it('should have the property selected (base name: "selected")', function() {
      // uncomment below and update the code to test the property selected
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be();
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be();
    });

    it('should have the property capabilities (base name: "capabilities")', function() {
      // uncomment below and update the code to test the property capabilities
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be();
    });

    it('should have the property supportedCountries (base name: "supportedCountries")', function() {
      // uncomment below and update the code to test the property supportedCountries
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomNumbers();
      //expect(instance).to.be();
    });

  });

}));
