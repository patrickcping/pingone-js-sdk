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
/**
* Enum class EnumPropagationStoreType.
* @enum {}
* @readonly
*/
export default class EnumPropagationStoreType {
  /**
   * value: "Aquera"
   * @const
   */
  "Aquera" = "Aquera";

  /**
   * value: "AzureActiveDirectorySAML2"
   * @const
   */
  "AzureActiveDirectorySAML2" = "AzureActiveDirectorySAML2";

  /**
   * value: "directory"
   * @const
   */
  "directory" = "directory";

  /**
   * value: "LdapGateway"
   * @const
   */
  "LdapGateway" = "LdapGateway";

  /**
   * value: "PingOne"
   * @const
   */
  "PingOne" = "PingOne";

  /**
   * value: "Salesforce"
   * @const
   */
  "Salesforce" = "Salesforce";

  /**
   * value: "SalesforceContacts"
   * @const
   */
  "SalesforceContacts" = "SalesforceContacts";

  /**
   * value: "scim"
   * @const
   */
  "scim" = "scim";

  /**
   * value: "Slack"
   * @const
   */
  "Slack" = "Slack";

  /**
   * value: "Workday"
   * @const
   */
  "Workday" = "Workday";

  /**
   * value: "Zoom"
   * @const
   */
  "Zoom" = "Zoom";

  /**
  * Returns a <code>EnumPropagationStoreType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumPropagationStoreType} The enum <code>EnumPropagationStoreType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}