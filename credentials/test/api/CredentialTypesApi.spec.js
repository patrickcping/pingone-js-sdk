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
    instance = new PingOnePlatformApiCredentials.CredentialTypesApi();
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

  describe('CredentialTypesApi', function() {
    describe('createCredentialType', function() {
      it('should call createCredentialType successfully', function(done) {
        //uncomment below and update the code to test createCredentialType
        //instance.createCredentialType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCredentialType', function() {
      it('should call deleteCredentialType successfully', function(done) {
        //uncomment below and update the code to test deleteCredentialType
        //instance.deleteCredentialType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllCredentialTypes', function() {
      it('should call readAllCredentialTypes successfully', function(done) {
        //uncomment below and update the code to test readAllCredentialTypes
        //instance.readAllCredentialTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneCredentialType', function() {
      it('should call readOneCredentialType successfully', function(done) {
        //uncomment below and update the code to test readOneCredentialType
        //instance.readOneCredentialType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCredentialType', function() {
      it('should call updateCredentialType successfully', function(done) {
        //uncomment below and update the code to test updateCredentialType
        //instance.updateCredentialType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));