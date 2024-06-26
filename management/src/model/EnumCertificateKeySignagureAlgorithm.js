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
* Enum class EnumCertificateKeySignagureAlgorithm.
* @enum {}
* @readonly
*/
export default class EnumCertificateKeySignagureAlgorithm {
    
        /**
         * value: "SHA256withRSA"
         * @const
         */
        "SHA256withRSA" = "SHA256withRSA";

    
        /**
         * value: "SHA384withRSA"
         * @const
         */
        "SHA384withRSA" = "SHA384withRSA";

    
        /**
         * value: "SHA512withRSA"
         * @const
         */
        "SHA512withRSA" = "SHA512withRSA";

    
        /**
         * value: "SHA256withECDSA"
         * @const
         */
        "SHA256withECDSA" = "SHA256withECDSA";

    
        /**
         * value: "SHA384withECDSA"
         * @const
         */
        "SHA384withECDSA" = "SHA384withECDSA";

    
        /**
         * value: "SHA512withECDSA"
         * @const
         */
        "SHA512withECDSA" = "SHA512withECDSA";

    

    /**
    * Returns a <code>EnumCertificateKeySignagureAlgorithm</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumCertificateKeySignagureAlgorithm} The enum <code>EnumCertificateKeySignagureAlgorithm</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

