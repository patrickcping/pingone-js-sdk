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
    instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
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

  describe('CredentialTypeMetaDataFieldsInner', function() {
    it('should create an instance of CredentialTypeMetaDataFieldsInner', function() {
      // uncomment below and update the code to test CredentialTypeMetaDataFieldsInner
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be.a(PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner);
    });

    it('should have the property attribute (base name: "attribute")', function() {
      // uncomment below and update the code to test the property attribute
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property fileSupport (base name: "fileSupport")', function() {
      // uncomment below and update the code to test the property fileSupport
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property isVisible (base name: "isVisible")', function() {
      // uncomment below and update the code to test the property isVisible
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new PingOnePlatformApiCredentials.CredentialTypeMetaDataFieldsInner();
      //expect(instance).to.be();
    });

  });

}));