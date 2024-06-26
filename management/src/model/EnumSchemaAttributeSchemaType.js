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
* Enum class EnumSchemaAttributeSchemaType.
* @enum {}
* @readonly
*/
export default class EnumSchemaAttributeSchemaType {
    
        /**
         * value: "CORE"
         * @const
         */
        "CORE" = "CORE";

    
        /**
         * value: "STANDARD"
         * @const
         */
        "STANDARD" = "STANDARD";

    
        /**
         * value: "CUSTOM"
         * @const
         */
        "CUSTOM" = "CUSTOM";

    

    /**
    * Returns a <code>EnumSchemaAttributeSchemaType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumSchemaAttributeSchemaType} The enum <code>EnumSchemaAttributeSchemaType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

