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

/**
 * The CredentialTypeMultiple model module.
 * @module model/CredentialTypeMultiple
 * @version 2023-06-29
 */
class CredentialTypeMultiple {
  /**
   * Constructs a new <code>CredentialTypeMultiple</code>.
   * An object containing directives that enable the issuance of multiple credentials to a user based on a directory attribute.
   * @alias module:model/CredentialTypeMultiple
   * @param expression {String} A PingOne Expression Language (PEL) expression evaluated by the P1 Credentials service on issuance.If an array, calculates the array length for the count. Populates the limit to a variable, __ITERATOR__, available to PEL expressions in metadata.fields.attribute.
   */
  constructor(expression) {
    CredentialTypeMultiple.initialize(this, expression);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, expression) {
    obj['expression'] = expression;
  }

  /**
   * Constructs a <code>CredentialTypeMultiple</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialTypeMultiple} obj Optional instance to populate.
   * @return {module:model/CredentialTypeMultiple} The populated <code>CredentialTypeMultiple</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CredentialTypeMultiple();
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = ApiClient.convertToType(data['expression'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CredentialTypeMultiple</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialTypeMultiple</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of CredentialTypeMultiple.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['expression'] && !(typeof data['expression'] === 'string' || data['expression'] instanceof String)) {
      throw new Error("Expected the field `expression` to be a primitive type in the JSON string but got " + data['expression']);
    }
    return true;
  }
}
CredentialTypeMultiple.RequiredProperties = ["expression"];

/**
 * A PingOne Expression Language (PEL) expression evaluated by the P1 Credentials service on issuance.If an array, calculates the array length for the count. Populates the limit to a variable, __ITERATOR__, available to PEL expressions in metadata.fields.attribute.
 * @member {String} expression
 */
CredentialTypeMultiple.prototype['expression'] = undefined;
export default CredentialTypeMultiple;