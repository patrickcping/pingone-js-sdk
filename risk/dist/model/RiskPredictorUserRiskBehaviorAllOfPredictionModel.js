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
import EnumUserRiskBehaviorRiskModel from './EnumUserRiskBehaviorRiskModel';

/**
 * The RiskPredictorUserRiskBehaviorAllOfPredictionModel model module.
 * @module model/RiskPredictorUserRiskBehaviorAllOfPredictionModel
 * @version 2023-06-29
 */
class RiskPredictorUserRiskBehaviorAllOfPredictionModel {
  /**
   * Constructs a new <code>RiskPredictorUserRiskBehaviorAllOfPredictionModel</code>.
   * @alias module:model/RiskPredictorUserRiskBehaviorAllOfPredictionModel
   * @param name {module:model/EnumUserRiskBehaviorRiskModel} 
   */
  constructor(name) {
    RiskPredictorUserRiskBehaviorAllOfPredictionModel.initialize(this, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name) {
    obj['name'] = name;
  }

  /**
   * Constructs a <code>RiskPredictorUserRiskBehaviorAllOfPredictionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskPredictorUserRiskBehaviorAllOfPredictionModel} obj Optional instance to populate.
   * @return {module:model/RiskPredictorUserRiskBehaviorAllOfPredictionModel} The populated <code>RiskPredictorUserRiskBehaviorAllOfPredictionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskPredictorUserRiskBehaviorAllOfPredictionModel();
      if (data.hasOwnProperty('name')) {
        obj['name'] = EnumUserRiskBehaviorRiskModel.constructFromObject(data['name']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>RiskPredictorUserRiskBehaviorAllOfPredictionModel</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorUserRiskBehaviorAllOfPredictionModel</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of RiskPredictorUserRiskBehaviorAllOfPredictionModel.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    return true;
  }
}
RiskPredictorUserRiskBehaviorAllOfPredictionModel.RequiredProperties = ["name"];

/**
 * @member {module:model/EnumUserRiskBehaviorRiskModel} name
 */
RiskPredictorUserRiskBehaviorAllOfPredictionModel.prototype['name'] = undefined;
export default RiskPredictorUserRiskBehaviorAllOfPredictionModel;