/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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

/**
 * The RiskEvaluationEventTargetResource model module.
 * @module model/RiskEvaluationEventTargetResource
 * @version 2023-06-29
 */
class RiskEvaluationEventTargetResource {
  /**
   * Constructs a new <code>RiskEvaluationEventTargetResource</code>.
   * @alias module:model/RiskEvaluationEventTargetResource
   */
  constructor() {
    RiskEvaluationEventTargetResource.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>RiskEvaluationEventTargetResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskEvaluationEventTargetResource} obj Optional instance to populate.
   * @return {module:model/RiskEvaluationEventTargetResource} The populated <code>RiskEvaluationEventTargetResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskEvaluationEventTargetResource();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>RiskEvaluationEventTargetResource</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationEventTargetResource</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    return true;
  }
}

/**
 * A string that specifies the ID of the target application.
 * @member {String} id
 */
RiskEvaluationEventTargetResource.prototype['id'] = undefined;

/**
 * A string that specifies the name of the target application.
 * @member {String} name
 */
RiskEvaluationEventTargetResource.prototype['name'] = undefined;
export default RiskEvaluationEventTargetResource;