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
* Enum class EnumApplicationType.
* @enum {}
* @readonly
*/
export default class EnumApplicationType {
    
        /**
         * value: "WEB_APP"
         * @const
         */
        "WEB_APP" = "WEB_APP";

    
        /**
         * value: "NATIVE_APP"
         * @const
         */
        "NATIVE_APP" = "NATIVE_APP";

    
        /**
         * value: "SINGLE_PAGE_APP"
         * @const
         */
        "SINGLE_PAGE_APP" = "SINGLE_PAGE_APP";

    
        /**
         * value: "WORKER"
         * @const
         */
        "WORKER" = "WORKER";

    
        /**
         * value: "SERVICE"
         * @const
         */
        "SERVICE" = "SERVICE";

    
        /**
         * value: "CUSTOM_APP"
         * @const
         */
        "CUSTOM_APP" = "CUSTOM_APP";

    
        /**
         * value: "PING_ONE_SELF_SERVICE"
         * @const
         */
        "PING_ONE_SELF_SERVICE" = "PING_ONE_SELF_SERVICE";

    
        /**
         * value: "PING_ONE_ADMIN_CONSOLE"
         * @const
         */
        "PING_ONE_ADMIN_CONSOLE" = "PING_ONE_ADMIN_CONSOLE";

    
        /**
         * value: "PING_ONE_PORTAL"
         * @const
         */
        "PING_ONE_PORTAL" = "PING_ONE_PORTAL";

    
        /**
         * value: "TEMPLATE_APP"
         * @const
         */
        "TEMPLATE_APP" = "TEMPLATE_APP";

    
        /**
         * value: "PORTAL_LINK_APP"
         * @const
         */
        "PORTAL_LINK_APP" = "PORTAL_LINK_APP";

    

    /**
    * Returns a <code>EnumApplicationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumApplicationType} The enum <code>EnumApplicationType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

