/**
 * PingOne Platform API - Authorize
 * The PingOne Platform API covering the PingOne Authorize service
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
    factory(root.expect, root.PingOnePlatformApiAuthorize);
  }
}(this, function(expect, PingOnePlatformApiAuthorize) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PingOnePlatformApiAuthorize.APIServersApi();
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

  describe('APIServersApi', function() {
    describe('createAPIServer', function() {
      it('should call createAPIServer successfully', function(done) {
        //uncomment below and update the code to test createAPIServer
        //instance.createAPIServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAPIServer', function() {
      it('should call deleteAPIServer successfully', function(done) {
        //uncomment below and update the code to test deleteAPIServer
        //instance.deleteAPIServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAllAPIServers', function() {
      it('should call readAllAPIServers successfully', function(done) {
        //uncomment below and update the code to test readAllAPIServers
        //instance.readAllAPIServers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readOneAPIServer', function() {
      it('should call readOneAPIServer successfully', function(done) {
        //uncomment below and update the code to test readOneAPIServer
        //instance.readOneAPIServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAPIServer', function() {
      it('should call updateAPIServer successfully', function(done) {
        //uncomment below and update the code to test updateAPIServer
        //instance.updateAPIServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
