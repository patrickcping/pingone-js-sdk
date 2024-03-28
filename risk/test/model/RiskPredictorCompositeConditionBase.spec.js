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
    instance = new PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase();
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

  describe('RiskPredictorCompositeConditionBase', function() {
    it('should create an instance of RiskPredictorCompositeConditionBase', function() {
      // uncomment below and update the code to test RiskPredictorCompositeConditionBase
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase);
    });

    it('should have the property not (base name: "not")', function() {
      // uncomment below and update the code to test the property not
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase();
      //expect(instance).to.be();
    });

    it('should have the property and (base name: "and")', function() {
      // uncomment below and update the code to test the property and
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase();
      //expect(instance).to.be();
    });

    it('should have the property or (base name: "or")', function() {
      // uncomment below and update the code to test the property or
      //var instance = new PingOnePlatformApiPingOneRisk.RiskPredictorCompositeConditionBase();
      //expect(instance).to.be();
    });

  });

}));
