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
    instance = new PingOnePlatformApiSsoAndBase.UserIDVerificationApi();
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

  describe('UserIDVerificationApi', function() {
    describe('environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet', function() {
      it('should call environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet successfully', function(done) {
        //uncomment below and update the code to test environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet
        //instance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost', function() {
      it('should call environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost successfully', function(done) {
        //uncomment below and update the code to test environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost
        //instance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete', function() {
      it('should call environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete successfully', function(done) {
        //uncomment below and update the code to test environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete
        //instance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet', function() {
      it('should call environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet successfully', function(done) {
        //uncomment below and update the code to test environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet
        //instance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut', function() {
      it('should call environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut successfully', function(done) {
        //uncomment below and update the code to test environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut
        //instance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
