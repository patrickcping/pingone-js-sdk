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
 * The LicenseIntelligence model module.
 * @module model/LicenseIntelligence
 * @version 2023-06-29
 */
class LicenseIntelligence {
    /**
     * Constructs a new <code>LicenseIntelligence</code>.
     * @alias module:model/LicenseIntelligence
     */
    constructor() { 
        
        LicenseIntelligence.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseIntelligence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseIntelligence} obj Optional instance to populate.
     * @return {module:model/LicenseIntelligence} The populated <code>LicenseIntelligence</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseIntelligence();

            if (data.hasOwnProperty('allowGeoVelocity')) {
                obj['allowGeoVelocity'] = ApiClient.convertToType(data['allowGeoVelocity'], 'Boolean');
            }
            if (data.hasOwnProperty('allowAnonymousNetworkDetection')) {
                obj['allowAnonymousNetworkDetection'] = ApiClient.convertToType(data['allowAnonymousNetworkDetection'], 'Boolean');
            }
            if (data.hasOwnProperty('allowReputation')) {
                obj['allowReputation'] = ApiClient.convertToType(data['allowReputation'], 'Boolean');
            }
            if (data.hasOwnProperty('allowDataConsent')) {
                obj['allowDataConsent'] = ApiClient.convertToType(data['allowDataConsent'], 'Boolean');
            }
            if (data.hasOwnProperty('allowRisk')) {
                obj['allowRisk'] = ApiClient.convertToType(data['allowRisk'], 'Boolean');
            }
            if (data.hasOwnProperty('allowAdvancedPredictors')) {
                obj['allowAdvancedPredictors'] = ApiClient.convertToType(data['allowAdvancedPredictors'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseIntelligence</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseIntelligence</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * A read-only boolean that specifies whether to use the intelligence geo-velocity feature. For `TRIAL` (unpaid) licenses, the default value is true. For `ADMIN`, `GLOBAL`, `RISK`, and `MFARISK`, the default value is true.
 * @member {Boolean} allowGeoVelocity
 */
LicenseIntelligence.prototype['allowGeoVelocity'] = undefined;

/**
 * A read-only boolean that specifies whether to use the intelligence anonymous network detection feature. For `TRIAL` (unpaid) licenses, the default value is true. For `ADMIN`, `GLOBAL`, `RISK`, and `MFARISK`, the default value is true.
 * @member {Boolean} allowAnonymousNetworkDetection
 */
LicenseIntelligence.prototype['allowAnonymousNetworkDetection'] = undefined;

/**
 * A read-only boolean that specifies whether to use the intelligence IP reputation feature. For `TRIAL` (unpaid) licenses, the default value is true. For `ADMIN`, `GLOBAL`, `RISK`, and `MFARISK`, the default value is true.
 * @member {Boolean} allowReputation
 */
LicenseIntelligence.prototype['allowReputation'] = undefined;

/**
 * A read-only boolean that specifies whether the customer has opted in to allow user and event behavior analytics (UEBA) data collection.
 * @member {Boolean} allowDataConsent
 */
LicenseIntelligence.prototype['allowDataConsent'] = undefined;

/**
 * A read-only boolean that specifies whether your license permits you to configure risk features such as sign-on policies that include rules to detect anomalous changes to your locations (such as impossible travel). This capability is supported for TRIAL, RISK, and MFARISK license packages. Note, The sharing of user data to enable our machine-learning engine, which is integral to PingOne Risk, is captured in the license property license.intelligence.allowDataConsent, but it is not set to true by default in any license package. This license capability always requires active consent by the customer before it can be enabled, and if consent is given, then it allows the full scope of intelligence features included in PingOne Risk (and PingOne Risk plus MFA).
 * @member {Boolean} allowRisk
 */
LicenseIntelligence.prototype['allowRisk'] = undefined;

/**
 * @member {Boolean} allowAdvancedPredictors
 */
LicenseIntelligence.prototype['allowAdvancedPredictors'] = undefined;






export default LicenseIntelligence;

