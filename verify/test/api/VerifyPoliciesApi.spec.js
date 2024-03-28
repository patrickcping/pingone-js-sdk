/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
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
    factory(root.expect, root.PingOnePlatformApiPingOneVerify);
  }
}(this, function(expect, PingOnePlatformApiPingOneVerify) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiPingOneVerify.VerifyPoliciesApi();
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

  describe('VerifyPoliciesApi', function() {
    describe('createVerifyPolicy', function() {
      it('should call createVerifyPolicy successfully', function(done) {
        //uncomment below and update the code to test createVerifyPolicy
        //instance.createVerifyPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVerifyPolicy', function() {
      it('should call deleteVerifyPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteVerifyPolicy
        //instance.deleteVerifyPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllVerifyPolicies', function() {
      it('should call readAllVerifyPolicies successfully', function(done) {
        //uncomment below and update the code to test readAllVerifyPolicies
        //instance.readAllVerifyPolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneVerifyPolicy', function() {
      it('should call readOneVerifyPolicy successfully', function(done) {
        //uncomment below and update the code to test readOneVerifyPolicy
        //instance.readOneVerifyPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVerifyPolicy', function() {
      it('should call updateVerifyPolicy successfully', function(done) {
        //uncomment below and update the code to test updateVerifyPolicy
        //instance.updateVerifyPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));