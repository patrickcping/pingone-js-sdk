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
    instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
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

  describe('RiskEvaluationEventBrowser', function() {
    it('should create an instance of RiskEvaluationEventBrowser', function() {
      // uncomment below and update the code to test RiskEvaluationEventBrowser
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be.a(PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser);
    });

    it('should have the property userAgent (base name: "userAgent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property cookie (base name: "cookie")', function() {
      // uncomment below and update the code to test the property cookie
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property colorDepth (base name: "colorDepth")', function() {
      // uncomment below and update the code to test the property colorDepth
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property deviceMemory (base name: "deviceMemory")', function() {
      // uncomment below and update the code to test the property deviceMemory
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property hardwareConcurrency (base name: "hardwareConcurrency")', function() {
      // uncomment below and update the code to test the property hardwareConcurrency
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property screenResolution (base name: "screenResolution")', function() {
      // uncomment below and update the code to test the property screenResolution
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property availableScreenResolution (base name: "availableScreenResolution")', function() {
      // uncomment below and update the code to test the property availableScreenResolution
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property timezoneOffset (base name: "timezoneOffset")', function() {
      // uncomment below and update the code to test the property timezoneOffset
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property sessionStorage (base name: "sessionStorage")', function() {
      // uncomment below and update the code to test the property sessionStorage
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property localStorage (base name: "localStorage")', function() {
      // uncomment below and update the code to test the property localStorage
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property indexedDb (base name: "indexedDb")', function() {
      // uncomment below and update the code to test the property indexedDb
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property addBehaviour (base name: "addBehaviour")', function() {
      // uncomment below and update the code to test the property addBehaviour
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property openDatabase (base name: "openDatabase")', function() {
      // uncomment below and update the code to test the property openDatabase
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property cpuClass (base name: "cpuClass")', function() {
      // uncomment below and update the code to test the property cpuClass
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property webglVendorAndRenderer (base name: "webglVendorAndRenderer")', function() {
      // uncomment below and update the code to test the property webglVendorAndRenderer
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property webgl (base name: "webgl")', function() {
      // uncomment below and update the code to test the property webgl
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property adBlock (base name: "adBlock")', function() {
      // uncomment below and update the code to test the property adBlock
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property hasLiedLanguages (base name: "hasLiedLanguages")', function() {
      // uncomment below and update the code to test the property hasLiedLanguages
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property hasLiedResolution (base name: "hasLiedResolution")', function() {
      // uncomment below and update the code to test the property hasLiedResolution
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property hasLiedOs (base name: "hasLiedOs")', function() {
      // uncomment below and update the code to test the property hasLiedOs
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property hasLiedBrowser (base name: "hasLiedBrowser")', function() {
      // uncomment below and update the code to test the property hasLiedBrowser
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property touchSupport (base name: "touchSupport")', function() {
      // uncomment below and update the code to test the property touchSupport
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property fonts (base name: "fonts")', function() {
      // uncomment below and update the code to test the property fonts
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

    it('should have the property audio (base name: "audio")', function() {
      // uncomment below and update the code to test the property audio
      //var instance = new PingOnePlatformApiPingOneRisk.RiskEvaluationEventBrowser();
      //expect(instance).to.be();
    });

  });

}));
