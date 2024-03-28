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
    instance = new PingOnePlatformApiCredentials.UserCredentialsApi();
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

  describe('UserCredentialsApi', function() {
    describe('createAUserCredential', function() {
      it('should call createAUserCredential successfully', function(done) {
        //uncomment below and update the code to test createAUserCredential
        //instance.createAUserCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllUserCredentials', function() {
      it('should call readAllUserCredentials successfully', function(done) {
        //uncomment below and update the code to test readAllUserCredentials
        //instance.readAllUserCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneUserCredential', function() {
      it('should call readOneUserCredential successfully', function(done) {
        //uncomment below and update the code to test readOneUserCredential
        //instance.readOneUserCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneUserCredentialWallet', function() {
      it('should call readOneUserCredentialWallet successfully', function(done) {
        //uncomment below and update the code to test readOneUserCredentialWallet
        //instance.readOneUserCredentialWallet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserCredential', function() {
      it('should call updateUserCredential successfully', function(done) {
        //uncomment below and update the code to test updateUserCredential
        //instance.updateUserCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));