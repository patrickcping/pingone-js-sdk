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
    instance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
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

  describe('BrandingThemesApi', function() {
    describe('createBrandingTheme', function() {
      it('should call createBrandingTheme successfully', function(done) {
        //uncomment below and update the code to test createBrandingTheme
        //instance.createBrandingTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBrandingTheme', function() {
      it('should call deleteBrandingTheme successfully', function(done) {
        //uncomment below and update the code to test deleteBrandingTheme
        //instance.deleteBrandingTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBrandingThemeDefault', function() {
      it('should call readBrandingThemeDefault successfully', function(done) {
        //uncomment below and update the code to test readBrandingThemeDefault
        //instance.readBrandingThemeDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readBrandingThemes', function() {
      it('should call readBrandingThemes successfully', function(done) {
        //uncomment below and update the code to test readBrandingThemes
        //instance.readBrandingThemes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneBrandingTheme', function() {
      it('should call readOneBrandingTheme successfully', function(done) {
        //uncomment below and update the code to test readOneBrandingTheme
        //instance.readOneBrandingTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBrandingTheme', function() {
      it('should call updateBrandingTheme successfully', function(done) {
        //uncomment below and update the code to test updateBrandingTheme
        //instance.updateBrandingTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBrandingThemeDefault', function() {
      it('should call updateBrandingThemeDefault successfully', function(done) {
        //uncomment below and update the code to test updateBrandingThemeDefault
        //instance.updateBrandingThemeDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));