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
    instance = new PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi();
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

  describe('VoicePhraseContentsApi', function() {
    describe('createVoicePhraseContent', function() {
      it('should call createVoicePhraseContent successfully', function(done) {
        //uncomment below and update the code to test createVoicePhraseContent
        //instance.createVoicePhraseContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVoicePhraseContent', function() {
      it('should call deleteVoicePhraseContent successfully', function(done) {
        //uncomment below and update the code to test deleteVoicePhraseContent
        //instance.deleteVoicePhraseContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllVoicePhraseContents', function() {
      it('should call readAllVoicePhraseContents successfully', function(done) {
        //uncomment below and update the code to test readAllVoicePhraseContents
        //instance.readAllVoicePhraseContents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneVoicePhraseContent', function() {
      it('should call readOneVoicePhraseContent successfully', function(done) {
        //uncomment below and update the code to test readOneVoicePhraseContent
        //instance.readOneVoicePhraseContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVoicePhraseContent', function() {
      it('should call updateVoicePhraseContent successfully', function(done) {
        //uncomment below and update the code to test updateVoicePhraseContent
        //instance.updateVoicePhraseContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
