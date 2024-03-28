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
    instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
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

  describe('TemplateContent', function() {
    it('should create an instance of TemplateContent', function() {
      // uncomment below and update the code to test TemplateContent
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.TemplateContent);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property deliveryMethod (base name: "deliveryMethod")', function() {
      // uncomment below and update the code to test the property deliveryMethod
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property variant (base name: "variant")', function() {
      // uncomment below and update the code to test the property variant
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property replyTo (base name: "replyTo")', function() {
      // uncomment below and update the code to test the property replyTo
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property charset (base name: "charset")', function() {
      // uncomment below and update the code to test the property charset
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property emailContentType (base name: "emailContentType")', function() {
      // uncomment below and update the code to test the property emailContentType
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property pushCategory (base name: "pushCategory")', function() {
      // uncomment below and update the code to test the property pushCategory
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

    it('should have the property voice (base name: "voice")', function() {
      // uncomment below and update the code to test the property voice
      //var instance = new PingOnePlatformApiSsoAndBase.TemplateContent();
      //expect(instance).to.be();
    });

  });

}));
