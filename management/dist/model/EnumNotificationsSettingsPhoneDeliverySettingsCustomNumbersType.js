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
* Enum class EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType.
* @enum {}
* @readonly
*/
export default class EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType {
  /**
   * value: "SHORT_CODE"
   * @const
   */
  "SHORT_CODE" = "SHORT_CODE";

  /**
   * value: "TOLL_FREE"
   * @const
   */
  "TOLL_FREE" = "TOLL_FREE";

  /**
   * value: "PHONE_NUMBER"
   * @const
   */
  "PHONE_NUMBER" = "PHONE_NUMBER";

  /**
  * Returns a <code>EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType} The enum <code>EnumNotificationsSettingsPhoneDeliverySettingsCustomNumbersType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}