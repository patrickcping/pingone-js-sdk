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
* Enum class EnumCredentialTypeMetaDataFieldsFileSupport.
* @enum {}
* @readonly
*/
export default class EnumCredentialTypeMetaDataFieldsFileSupport {
    
        /**
         * value: "BASE64_STRING"
         * @const
         */
        "BASE64_STRING" = "BASE64_STRING";

    
        /**
         * value: "INCLUDE_FILE"
         * @const
         */
        "INCLUDE_FILE" = "INCLUDE_FILE";

    
        /**
         * value: "REFERENCE_FILE"
         * @const
         */
        "REFERENCE_FILE" = "REFERENCE_FILE";

    

    /**
    * Returns a <code>EnumCredentialTypeMetaDataFieldsFileSupport</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumCredentialTypeMetaDataFieldsFileSupport} The enum <code>EnumCredentialTypeMetaDataFieldsFileSupport</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

