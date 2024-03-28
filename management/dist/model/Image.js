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

import ApiClient from '../ApiClient';
import ImageTargets from './ImageTargets';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The Image model module.
 * @module model/Image
 * @version 2023-06-29
 */
class Image {
  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   */
  constructor() {
    Image.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Image();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('targets')) {
        obj['targets'] = ImageTargets.constructFromObject(data['targets']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Image</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Image</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // validate the optional field `environment`
    if (data['environment']) {
      // data not null
      ObjectEnvironment.validateJSON(data['environment']);
    }
    // validate the optional field `targets`
    if (data['targets']) {
      // data not null
      ImageTargets.validateJSON(data['targets']);
    }
    return true;
  }
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
Image.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
Image.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
Image.prototype['environment'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
Image.prototype['createdAt'] = undefined;

/**
 * @member {module:model/ImageTargets} targets
 */
Image.prototype['targets'] = undefined;
export default Image;