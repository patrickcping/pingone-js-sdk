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
import RiskPredictorCompositeAnd from './RiskPredictorCompositeAnd';
import RiskPredictorCompositeCondition from './RiskPredictorCompositeCondition';
import RiskPredictorCompositeNot from './RiskPredictorCompositeNot';
import RiskPredictorCompositeOr from './RiskPredictorCompositeOr';

/**
 * The RiskPredictorCompositeConditionBase model module.
 * @module model/RiskPredictorCompositeConditionBase
 * @version 2023-06-29
 */
class RiskPredictorCompositeConditionBase {
  /**
   * Constructs a new <code>RiskPredictorCompositeConditionBase</code>.
   * @alias module:model/RiskPredictorCompositeConditionBase
   * @param {(module:model/RiskPredictorCompositeAnd|module:model/RiskPredictorCompositeNot|module:model/RiskPredictorCompositeOr)} instance The actual instance to initialize RiskPredictorCompositeConditionBase.
   */
  constructor(instance = null) {
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "RiskPredictorCompositeNot") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        RiskPredictorCompositeNot.validateJSON(instance); // throw an exception if no match
        // create RiskPredictorCompositeNot from JS object
        this.actualInstance = RiskPredictorCompositeNot.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into RiskPredictorCompositeNot
      errorMessages.push("Failed to construct RiskPredictorCompositeNot: " + err);
    }
    try {
      if (typeof instance === "RiskPredictorCompositeAnd") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        RiskPredictorCompositeAnd.validateJSON(instance); // throw an exception if no match
        // create RiskPredictorCompositeAnd from JS object
        this.actualInstance = RiskPredictorCompositeAnd.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into RiskPredictorCompositeAnd
      errorMessages.push("Failed to construct RiskPredictorCompositeAnd: " + err);
    }
    try {
      if (typeof instance === "RiskPredictorCompositeOr") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        RiskPredictorCompositeOr.validateJSON(instance); // throw an exception if no match
        // create RiskPredictorCompositeOr from JS object
        this.actualInstance = RiskPredictorCompositeOr.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into RiskPredictorCompositeOr
      errorMessages.push("Failed to construct RiskPredictorCompositeOr: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `RiskPredictorCompositeConditionBase` with oneOf schemas RiskPredictorCompositeAnd, RiskPredictorCompositeNot, RiskPredictorCompositeOr. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `RiskPredictorCompositeConditionBase` with oneOf schemas RiskPredictorCompositeAnd, RiskPredictorCompositeNot, RiskPredictorCompositeOr. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>RiskPredictorCompositeConditionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskPredictorCompositeConditionBase} obj Optional instance to populate.
   * @return {module:model/RiskPredictorCompositeConditionBase} The populated <code>RiskPredictorCompositeConditionBase</code> instance.
   */
  static constructFromObject(data, obj) {
    return new RiskPredictorCompositeConditionBase(data);
  }

  /**
   * Gets the actual instance, which can be <code>RiskPredictorCompositeAnd</code>, <code>RiskPredictorCompositeNot</code>, <code>RiskPredictorCompositeOr</code>.
   * @return {(module:model/RiskPredictorCompositeAnd|module:model/RiskPredictorCompositeNot|module:model/RiskPredictorCompositeOr)} The actual instance.
   */
  getActualInstance() {
    return this.actualInstance;
  }

  /**
   * Sets the actual instance, which can be <code>RiskPredictorCompositeAnd</code>, <code>RiskPredictorCompositeNot</code>, <code>RiskPredictorCompositeOr</code>.
   * @param {(module:model/RiskPredictorCompositeAnd|module:model/RiskPredictorCompositeNot|module:model/RiskPredictorCompositeOr)} obj The actual instance.
   */
  setActualInstance(obj) {
    this.actualInstance = RiskPredictorCompositeConditionBase.constructFromObject(obj).getActualInstance();
  }

  /**
   * Returns the JSON representation of the actual instance.
   * @return {string}
   */
  toJSON = function () {
    return this.getActualInstance();
  };

  /**
   * Create an instance of RiskPredictorCompositeConditionBase from a JSON string.
   * @param {string} json_string JSON string.
   * @return {module:model/RiskPredictorCompositeConditionBase} An instance of RiskPredictorCompositeConditionBase.
   */
  static fromJSON = function (json_string) {
    return RiskPredictorCompositeConditionBase.constructFromObject(JSON.parse(json_string));
  };
}

/**
 * @member {module:model/RiskPredictorCompositeOr} not
 */
RiskPredictorCompositeConditionBase.prototype['not'] = undefined;

/**
 * @member {module:model/EnumPredictorCompositeConditionType} type
 */
RiskPredictorCompositeConditionBase.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/RiskPredictorCompositeCondition>} and
 */
RiskPredictorCompositeConditionBase.prototype['and'] = undefined;

/**
 * @member {Array.<module:model/RiskPredictorCompositeCondition>} or
 */
RiskPredictorCompositeConditionBase.prototype['or'] = undefined;
RiskPredictorCompositeConditionBase.OneOf = ["RiskPredictorCompositeAnd", "RiskPredictorCompositeNot", "RiskPredictorCompositeOr"];
export default RiskPredictorCompositeConditionBase;