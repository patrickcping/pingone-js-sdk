/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
    factory(root.expect, root.PingOnePlatformApiPingOneMfa);
  }
}(this, function(expect, PingOnePlatformApiPingOneMfa) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiPingOneMfa.EnableUsersMFAApi();
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

  describe('EnableUsersMFAApi', function() {
    describe('readUserMFAEnabled', function() {
      it('should call readUserMFAEnabled successfully', function(done) {
        //uncomment below and update the code to test readUserMFAEnabled
        //instance.readUserMFAEnabled(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserMFAEnabled', function() {
      it('should call updateUserMFAEnabled successfully', function(done) {
        //uncomment below and update the code to test updateUserMFAEnabled
        //instance.updateUserMFAEnabled(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));