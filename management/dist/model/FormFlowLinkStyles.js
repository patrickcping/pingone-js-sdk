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
import EnumFormItemAlignment from './EnumFormItemAlignment';
import FormStylesPadding from './FormStylesPadding';

/**
 * The FormFlowLinkStyles model module.
 * @module model/FormFlowLinkStyles
 * @version 2023-06-29
 */
class FormFlowLinkStyles {
  /**
   * Constructs a new <code>FormFlowLinkStyles</code>.
   * @alias module:model/FormFlowLinkStyles
   */
  constructor() {
    FormFlowLinkStyles.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>FormFlowLinkStyles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormFlowLinkStyles} obj Optional instance to populate.
   * @return {module:model/FormFlowLinkStyles} The populated <code>FormFlowLinkStyles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FormFlowLinkStyles();
      if (data.hasOwnProperty('alignment')) {
        obj['alignment'] = EnumFormItemAlignment.constructFromObject(data['alignment']);
      }
      if (data.hasOwnProperty('textColor')) {
        obj['textColor'] = ApiClient.convertToType(data['textColor'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('padding')) {
        obj['padding'] = FormStylesPadding.constructFromObject(data['padding']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>FormFlowLinkStyles</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormFlowLinkStyles</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['textColor'] && !(typeof data['textColor'] === 'string' || data['textColor'] instanceof String)) {
      throw new Error("Expected the field `textColor` to be a primitive type in the JSON string but got " + data['textColor']);
    }
    // validate the optional field `padding`
    if (data['padding']) {
      // data not null
      FormStylesPadding.validateJSON(data['padding']);
    }
    return true;
  }
}

/**
 * @member {module:model/EnumFormItemAlignment} alignment
 */
FormFlowLinkStyles.prototype['alignment'] = undefined;

/**
 * A string that specifies the link text color. The value must be a valid hexadecimal color.
 * @member {String} textColor
 */
FormFlowLinkStyles.prototype['textColor'] = undefined;

/**
 * A boolean that specifies whether the link is enabled.
 * @member {Boolean} enabled
 */
FormFlowLinkStyles.prototype['enabled'] = undefined;

/**
 * @member {module:model/FormStylesPadding} padding
 */
FormFlowLinkStyles.prototype['padding'] = undefined;
export default FormFlowLinkStyles;