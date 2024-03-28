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
import EnumPredictorCompositeConditionType from './EnumPredictorCompositeConditionType';
import RiskPredictorCompositeOr from './RiskPredictorCompositeOr';

/**
 * The RiskPredictorCompositeNot model module.
 * @module model/RiskPredictorCompositeNot
 * @version 2023-06-29
 */
class RiskPredictorCompositeNot {
  /**
   * Constructs a new <code>RiskPredictorCompositeNot</code>.
   * @alias module:model/RiskPredictorCompositeNot
   * @param not {module:model/RiskPredictorCompositeOr} 
   */
  constructor(not) {
    RiskPredictorCompositeNot.initialize(this, not);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, not) {
    obj['not'] = not;
  }

  /**
   * Constructs a <code>RiskPredictorCompositeNot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskPredictorCompositeNot} obj Optional instance to populate.
   * @return {module:model/RiskPredictorCompositeNot} The populated <code>RiskPredictorCompositeNot</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskPredictorCompositeNot();
      if (data.hasOwnProperty('not')) {
        obj['not'] = RiskPredictorCompositeOr.constructFromObject(data['not']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumPredictorCompositeConditionType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>RiskPredictorCompositeNot</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorCompositeNot</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of RiskPredictorCompositeNot.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `not`
    if (data['not']) {
      // data not null
      RiskPredictorCompositeOr.validateJSON(data['not']);
    }
    return true;
  }
}
RiskPredictorCompositeNot.RequiredProperties = ["not"];

/**
 * @member {module:model/RiskPredictorCompositeOr} not
 */
RiskPredictorCompositeNot.prototype['not'] = undefined;

/**
 * @member {module:model/EnumPredictorCompositeConditionType} type
 */
RiskPredictorCompositeNot.prototype['type'] = undefined;
export default RiskPredictorCompositeNot;