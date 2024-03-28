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
    instance = new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi();
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

  describe('LanguageLocalizationStatusApi', function() {
    describe('createLanguageLocalizationStatus', function() {
      it('should call createLanguageLocalizationStatus successfully', function(done) {
        //uncomment below and update the code to test createLanguageLocalizationStatus
        //instance.createLanguageLocalizationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLanguageLocalizationStatus', function() {
      it('should call deleteLanguageLocalizationStatus successfully', function(done) {
        //uncomment below and update the code to test deleteLanguageLocalizationStatus
        //instance.deleteLanguageLocalizationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readLanguageLocalizationStatus', function() {
      it('should call readLanguageLocalizationStatus successfully', function(done) {
        //uncomment below and update the code to test readLanguageLocalizationStatus
        //instance.readLanguageLocalizationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneLanguageLocalizationStatus', function() {
      it('should call readOneLanguageLocalizationStatus successfully', function(done) {
        //uncomment below and update the code to test readOneLanguageLocalizationStatus
        //instance.readOneLanguageLocalizationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLanguageLocalizationStatus', function() {
      it('should call updateLanguageLocalizationStatus successfully', function(done) {
        //uncomment below and update the code to test updateLanguageLocalizationStatus
        //instance.updateLanguageLocalizationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));