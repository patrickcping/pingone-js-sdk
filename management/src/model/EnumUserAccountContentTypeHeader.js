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
* Enum class EnumUserAccountContentTypeHeader.
* @enum {}
* @readonly
*/
export default class EnumUserAccountContentTypeHeader {
    
        /**
         * value: "application/vnd.pingidentity.account.unlock+json"
         * @const
         */
        "unlock+json" = "application/vnd.pingidentity.account.unlock+json";

    
        /**
         * value: "application/vnd.pingidentity.account.lock+json"
         * @const
         */
        "lock+json" = "application/vnd.pingidentity.account.lock+json";

    

    /**
    * Returns a <code>EnumUserAccountContentTypeHeader</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumUserAccountContentTypeHeader} The enum <code>EnumUserAccountContentTypeHeader</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

