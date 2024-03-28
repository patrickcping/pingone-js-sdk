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
* Enum class EnumCustomDomainPostHeader.
* @enum {}
* @readonly
*/
export default class EnumCustomDomainPostHeader {
    
        /**
         * value: "application/vnd.pingidentity.certificate.import+json"
         * @const
         */
        "certificate.import+json" = "application/vnd.pingidentity.certificate.import+json";

    
        /**
         * value: "application/vnd.pingidentity.domainName.verify+json"
         * @const
         */
        "domainName.verify+json" = "application/vnd.pingidentity.domainName.verify+json";

    

    /**
    * Returns a <code>EnumCustomDomainPostHeader</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumCustomDomainPostHeader} The enum <code>EnumCustomDomainPostHeader</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

