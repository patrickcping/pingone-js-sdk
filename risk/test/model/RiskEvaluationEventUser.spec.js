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
    instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser();
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

  describe('RiskEvaluationEventUser', function() {
    it('should create an instance of RiskEvaluationEventUser', function() {
      // uncomment below and update the code to test RiskEvaluationEventUser
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventUser();
      //expect(instance).to.be();
    });

  });

}));
