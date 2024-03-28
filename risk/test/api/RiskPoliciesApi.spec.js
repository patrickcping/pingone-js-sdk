/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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
    factory(root.expect, root.PingOnePlatformApiPingOneRisk);
  }
}(this, function(expect, PingOnePlatformApiPingOneRisk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiPingOneRisk.RiskPoliciesApi();
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

  describe('RiskPoliciesApi', function() {
    describe('createRiskPolicySet', function() {
      it('should call createRiskPolicySet successfully', function(done) {
        //uncomment below and update the code to test createRiskPolicySet
        //instance.createRiskPolicySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRiskPolicySet', function() {
      it('should call deleteRiskPolicySet successfully', function(done) {
        //uncomment below and update the code to test deleteRiskPolicySet
        //instance.deleteRiskPolicySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneRiskPolicySet', function() {
      it('should call readOneRiskPolicySet successfully', function(done) {
        //uncomment below and update the code to test readOneRiskPolicySet
        //instance.readOneRiskPolicySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readRiskPolicySets', function() {
      it('should call readRiskPolicySets successfully', function(done) {
        //uncomment below and update the code to test readRiskPolicySets
        //instance.readRiskPolicySets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRiskPolicySet', function() {
      it('should call updateRiskPolicySet successfully', function(done) {
        //uncomment below and update the code to test updateRiskPolicySet
        //instance.updateRiskPolicySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
