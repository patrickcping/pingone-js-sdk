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
    instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
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

  describe('RiskPredictorUserRiskBehavior', function() {
    it('should create an instance of RiskPredictorUserRiskBehavior', function() {
      // uncomment below and update the code to test RiskPredictorUserRiskBehavior
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property compactName (base name: "compactName")', function() {
      // uncomment below and update the code to test the property compactName
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property licensed (base name: "licensed")', function() {
      // uncomment below and update the code to test the property licensed
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property deletable (base name: "deletable")', function() {
      // uncomment below and update the code to test the property deletable
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

    it('should have the property predictionModel (base name: "predictionModel")', function() {
      // uncomment below and update the code to test the property predictionModel
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorUserRiskBehavior();
      //expect(instance).to.be();
    });

  });

}));
