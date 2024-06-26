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
import EnumFlowPolicyTriggerType from './EnumFlowPolicyTriggerType';

/**
 * The FlowPolicyTrigger model module.
 * @module model/FlowPolicyTrigger
 * @version 2023-06-29
 */
class FlowPolicyTrigger {
  /**
   * Constructs a new <code>FlowPolicyTrigger</code>.
   * An object that specifies trigger information associated with the flow policy resource.
   * @alias module:model/FlowPolicyTrigger
   */
  constructor() {
    FlowPolicyTrigger.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>FlowPolicyTrigger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowPolicyTrigger} obj Optional instance to populate.
   * @return {module:model/FlowPolicyTrigger} The populated <code>FlowPolicyTrigger</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FlowPolicyTrigger();
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumFlowPolicyTriggerType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>FlowPolicyTrigger</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FlowPolicyTrigger</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * @member {module:model/EnumFlowPolicyTriggerType} type
 */
FlowPolicyTrigger.prototype['type'] = undefined;
export default FlowPolicyTrigger;