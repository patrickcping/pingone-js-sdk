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
    instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
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

  describe('PasswordPolicy', function() {
    it('should create an instance of PasswordPolicy', function() {
      // uncomment below and update the code to test PasswordPolicy
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.PasswordPolicy);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property bypassPolicy (base name: "bypassPolicy")', function() {
      // uncomment below and update the code to test the property bypassPolicy
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property currentPassword (base name: "currentPassword")', function() {
      // uncomment below and update the code to test the property currentPassword
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property excludesCommonlyUsed (base name: "excludesCommonlyUsed")', function() {
      // uncomment below and update the code to test the property excludesCommonlyUsed
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property excludesProfileData (base name: "excludesProfileData")', function() {
      // uncomment below and update the code to test the property excludesProfileData
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property history (base name: "history")', function() {
      // uncomment below and update the code to test the property history
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property lockout (base name: "lockout")', function() {
      // uncomment below and update the code to test the property lockout
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property maxAgeDays (base name: "maxAgeDays")', function() {
      // uncomment below and update the code to test the property maxAgeDays
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property maxRepeatedCharacters (base name: "maxRepeatedCharacters")', function() {
      // uncomment below and update the code to test the property maxRepeatedCharacters
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property minAgeDays (base name: "minAgeDays")', function() {
      // uncomment below and update the code to test the property minAgeDays
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property minCharacters (base name: "minCharacters")', function() {
      // uncomment below and update the code to test the property minCharacters
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property minComplexity (base name: "minComplexity")', function() {
      // uncomment below and update the code to test the property minComplexity
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property minUniqueCharacters (base name: "minUniqueCharacters")', function() {
      // uncomment below and update the code to test the property minUniqueCharacters
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property newPassword (base name: "newPassword")', function() {
      // uncomment below and update the code to test the property newPassword
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property notSimilarToCurrent (base name: "notSimilarToCurrent")', function() {
      // uncomment below and update the code to test the property notSimilarToCurrent
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property populationCount (base name: "populationCount")', function() {
      // uncomment below and update the code to test the property populationCount
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiSsoAndBase.PasswordPolicy();
      //expect(instance).to.be();
    });

  });

}));
