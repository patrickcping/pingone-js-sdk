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
    instance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
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

  describe('NotificationsTemplatesApi', function() {
    describe('createContent', function() {
      it('should call createContent successfully', function(done) {
        //uncomment below and update the code to test createContent
        //instance.createContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBulkVariantContents', function() {
      it('should call deleteBulkVariantContents successfully', function(done) {
        //uncomment below and update the code to test deleteBulkVariantContents
        //instance.deleteBulkVariantContents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContent', function() {
      it('should call deleteContent successfully', function(done) {
        //uncomment below and update the code to test deleteContent
        //instance.deleteContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchBulkVariantContents', function() {
      it('should call patchBulkVariantContents successfully', function(done) {
        //uncomment below and update the code to test patchBulkVariantContents
        //instance.patchBulkVariantContents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllTemplateContents', function() {
      it('should call readAllTemplateContents successfully', function(done) {
        //uncomment below and update the code to test readAllTemplateContents
        //instance.readAllTemplateContents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllTemplates', function() {
      it('should call readAllTemplates successfully', function(done) {
        //uncomment below and update the code to test readAllTemplates
        //instance.readAllTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneContent', function() {
      it('should call readOneContent successfully', function(done) {
        //uncomment below and update the code to test readOneContent
        //instance.readOneContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneTemplate', function() {
      it('should call readOneTemplate successfully', function(done) {
        //uncomment below and update the code to test readOneTemplate
        //instance.readOneTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateContent', function() {
      it('should call updateContent successfully', function(done) {
        //uncomment below and update the code to test updateContent
        //instance.updateContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
