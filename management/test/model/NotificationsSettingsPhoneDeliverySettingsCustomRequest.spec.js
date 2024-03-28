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
    instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
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

  describe('NotificationsSettingsPhoneDeliverySettingsCustomRequest', function() {
    it('should create an instance of NotificationsSettingsPhoneDeliverySettingsCustomRequest', function() {
      // uncomment below and update the code to test NotificationsSettingsPhoneDeliverySettingsCustomRequest
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest);
    });

    it('should have the property deliveryMethod (base name: "deliveryMethod")', function() {
      // uncomment below and update the code to test the property deliveryMethod
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumberFormat (base name: "phoneNumberFormat")', function() {
      // uncomment below and update the code to test the property phoneNumberFormat
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property beforeTag (base name: "beforeTag")', function() {
      // uncomment below and update the code to test the property beforeTag
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

    it('should have the property afterTag (base name: "afterTag")', function() {
      // uncomment below and update the code to test the property afterTag
      //var instance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest();
      //expect(instance).to.be();
    });

  });

}));