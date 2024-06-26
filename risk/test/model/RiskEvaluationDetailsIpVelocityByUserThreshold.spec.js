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
    instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
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

  describe('RiskEvaluationDetailsIpVelocityByUserThreshold', function() {
    it('should create an instance of RiskEvaluationDetailsIpVelocityByUserThreshold', function() {
      // uncomment below and update the code to test RiskEvaluationDetailsIpVelocityByUserThreshold
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold);
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
      //expect(instance).to.be();
    });

    it('should have the property medium (base name: "medium")', function() {
      // uncomment below and update the code to test the property medium
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
      //expect(instance).to.be();
    });

    it('should have the property calculatedAt (base name: "calculatedAt")', function() {
      // uncomment below and update the code to test the property calculatedAt
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationDetailsIpVelocityByUserThreshold();
      //expect(instance).to.be();
    });

  });

}));
