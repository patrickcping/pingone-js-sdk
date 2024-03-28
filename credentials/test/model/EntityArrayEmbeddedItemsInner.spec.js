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
    instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
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

  describe('EntityArrayEmbeddedItemsInner', function() {
    it('should create an instance of EntityArrayEmbeddedItemsInner', function() {
      // uncomment below and update the code to test EntityArrayEmbeddedItemsInner
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be.a(PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property cardDesignTemplate (base name: "cardDesignTemplate")', function() {
      // uncomment below and update the code to test the property cardDesignTemplate
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property cardType (base name: "cardType")', function() {
      // uncomment below and update the code to test the property cardType
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deletedAt")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property issuer (base name: "issuer")', function() {
      // uncomment below and update the code to test the property issuer
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property issuerName (base name: "issuerName")', function() {
      // uncomment below and update the code to test the property issuerName
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property multiple (base name: "multiple")', function() {
      // uncomment below and update the code to test the property multiple
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property onDelete (base name: "onDelete")', function() {
      // uncomment below and update the code to test the property onDelete
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property credentialType (base name: "credentialType")', function() {
      // uncomment below and update the code to test the property credentialType
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

    it('should have the property userdata (base name: "userdata")', function() {
      // uncomment below and update the code to test the property userdata
      //var instance = new PingOnePlatformApiCredentials.EntityArrayEmbeddedItemsInner();
      //expect(instance).to.be();
    });

  });

}));