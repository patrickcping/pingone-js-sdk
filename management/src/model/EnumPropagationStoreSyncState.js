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
* Enum class EnumPropagationStoreSyncState.
* @enum {}
* @readonly
*/
export default class EnumPropagationStoreSyncState {
    
        /**
         * value: "SYNCING"
         * @const
         */
        "SYNCING" = "SYNCING";

    
        /**
         * value: "FAILED"
         * @const
         */
        "FAILED" = "FAILED";

    

    /**
    * Returns a <code>EnumPropagationStoreSyncState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumPropagationStoreSyncState} The enum <code>EnumPropagationStoreSyncState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

