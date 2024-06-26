/**
 * PingOne Platform API - PingOne Verify
 * The PingOne Platform API covering the PingOne Verify service
 *
 * The version of the OpenAPI document: 2023-07-20
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
    factory(root.expect, root.PingOnePlatformApiPingOneVerify);
  }
}(this, function(expect, PingOnePlatformApiPingOneVerify) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiPingOneVerify.VoicePhrasesApi();
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

  describe('VoicePhrasesApi', function() {
    describe('createVoicePhrase', function() {
      it('should call createVoicePhrase successfully', function(done) {
        //uncomment below and update the code to test createVoicePhrase
        //instance.createVoicePhrase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVoicePhrase', function() {
      it('should call deleteVoicePhrase successfully', function(done) {
        //uncomment below and update the code to test deleteVoicePhrase
        //instance.deleteVoicePhrase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllVoicePhrases', function() {
      it('should call readAllVoicePhrases successfully', function(done) {
        //uncomment below and update the code to test readAllVoicePhrases
        //instance.readAllVoicePhrases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneVoicePhrase', function() {
      it('should call readOneVoicePhrase successfully', function(done) {
        //uncomment below and update the code to test readOneVoicePhrase
        //instance.readOneVoicePhrase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVoicePhrase', function() {
      it('should call updateVoicePhrase successfully', function(done) {
        //uncomment below and update the code to test updateVoicePhrase
        //instance.updateVoicePhrase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
