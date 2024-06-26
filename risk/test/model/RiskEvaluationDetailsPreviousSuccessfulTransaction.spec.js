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
    instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
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

  describe('RiskEvaluationDetailsPreviousSuccessfulTransaction', function() {
    it('should create an instance of RiskEvaluationDetailsPreviousSuccessfulTransaction', function() {
      // uncomment below and update the code to test RiskEvaluationDetailsPreviousSuccessfulTransaction
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction);
    });

    it('should have the property anonymousNetworkDetected (base name: "anonymousNetworkDetected")', function() {
      // uncomment below and update the code to test the property anonymousNetworkDetected
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsPreviousSuccessfulTransaction();
      //expect(instance).to.be();
    });

  });

}));
