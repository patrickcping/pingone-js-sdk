/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
import EntityArrayEmbedded from './EntityArrayEmbedded';
import LinksHATEOAS from './LinksHATEOAS';

/**
 * The EntityArray model module.
 * @module model/EntityArray
 * @version 2023-06-29
 */
class EntityArray {
  /**
   * Constructs a new <code>EntityArray</code>.
   * @alias module:model/EntityArray
   */
  constructor() {
    EntityArray.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EntityArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityArray} obj Optional instance to populate.
   * @return {module:model/EntityArray} The populated <code>EntityArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EntityArray();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = EntityArrayEmbedded.constructFromObject(data['_embedded']);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>EntityArray</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EntityArray</code>.
   */
  static validateJSON(data) {
    // validate the optional field `_embedded`
    if (data['_embedded']) {
      // data not null
      EntityArrayEmbedded.validateJSON(data['_embedded']);
    }
    return true;
  }
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
EntityArray.prototype['_links'] = undefined;

/**
 * @member {module:model/EntityArrayEmbedded} _embedded
 */
EntityArray.prototype['_embedded'] = undefined;

/**
 * @member {Number} size
 */
EntityArray.prototype['size'] = undefined;
export default EntityArray;