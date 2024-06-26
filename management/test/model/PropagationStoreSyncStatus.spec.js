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
    instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
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

  describe('PropagationStoreSyncStatus', function() {
    it('should create an instance of PropagationStoreSyncStatus', function() {
      // uncomment below and update the code to test PropagationStoreSyncStatus
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be.a(PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus);
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property failedCount (base name: "failedCount")', function() {
      // uncomment below and update the code to test the property failedCount
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property failedDeprovisionCount (base name: "failedDeprovisionCount")', function() {
      // uncomment below and update the code to test the property failedDeprovisionCount
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastSyncAt (base name: "lastSyncAt")', function() {
      // uncomment below and update the code to test the property lastSyncAt
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property successCount (base name: "successCount")', function() {
      // uncomment below and update the code to test the property successCount
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property syncState (base name: "syncState")', function() {
      // uncomment below and update the code to test the property syncState
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property userTotal (base name: "userTotal")', function() {
      // uncomment below and update the code to test the property userTotal
      //var instance = new PingOnePlatformApiSsoAndBase.PropagationStoreSyncStatus();
      //expect(instance).to.be();
    });

  });

}));
