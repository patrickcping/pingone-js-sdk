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
import EnumKeyRotationPolicyAlgorithm from './EnumKeyRotationPolicyAlgorithm';
import EnumKeyRotationPolicySigAlgorithm from './EnumKeyRotationPolicySigAlgorithm';
import EnumKeyRotationPolicyUsageType from './EnumKeyRotationPolicyUsageType';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The KeyRotationPolicy model module.
 * @module model/KeyRotationPolicy
 * @version 2023-06-29
 */
class KeyRotationPolicy {
    /**
     * Constructs a new <code>KeyRotationPolicy</code>.
     * @alias module:model/KeyRotationPolicy
     * @param algorithm {module:model/EnumKeyRotationPolicyAlgorithm} 
     * @param dn {String} The DN this KRP will apply to generated `KrpKeys`. Is applied as both `issuerDN` and `subjectDN` because generated `KrpKeys` are self-signed.
     * @param keyLength {Number} The number of bytes of a cryptographic key this KRP will apply to generated `KrpKeys`.
     * @param name {String} Human-readable name displayed in the admin console.
     * @param signatureAlgorithm {module:model/EnumKeyRotationPolicySigAlgorithm} 
     * @param usageType {module:model/EnumKeyRotationPolicyUsageType} 
     */
    constructor(algorithm, dn, keyLength, name, signatureAlgorithm, usageType) { 
        
        KeyRotationPolicy.initialize(this, algorithm, dn, keyLength, name, signatureAlgorithm, usageType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, algorithm, dn, keyLength, name, signatureAlgorithm, usageType) { 
        obj['algorithm'] = algorithm;
        obj['dn'] = dn;
        obj['keyLength'] = keyLength;
        obj['name'] = name;
        obj['signatureAlgorithm'] = signatureAlgorithm;
        obj['usageType'] = usageType;
    }

    /**
     * Constructs a <code>KeyRotationPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyRotationPolicy} obj Optional instance to populate.
     * @return {module:model/KeyRotationPolicy} The populated <code>KeyRotationPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyRotationPolicy();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('algorithm')) {
                obj['algorithm'] = EnumKeyRotationPolicyAlgorithm.constructFromObject(data['algorithm']);
            }
            if (data.hasOwnProperty('currentKeyId')) {
                obj['currentKeyId'] = ApiClient.convertToType(data['currentKeyId'], 'String');
            }
            if (data.hasOwnProperty('dn')) {
                obj['dn'] = ApiClient.convertToType(data['dn'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('keyLength')) {
                obj['keyLength'] = ApiClient.convertToType(data['keyLength'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nextKeyId')) {
                obj['nextKeyId'] = ApiClient.convertToType(data['nextKeyId'], 'String');
            }
            if (data.hasOwnProperty('rotatedAt')) {
                obj['rotatedAt'] = ApiClient.convertToType(data['rotatedAt'], 'Date');
            }
            if (data.hasOwnProperty('rotationPeriod')) {
                obj['rotationPeriod'] = ApiClient.convertToType(data['rotationPeriod'], 'Number');
            }
            if (data.hasOwnProperty('signatureAlgorithm')) {
                obj['signatureAlgorithm'] = EnumKeyRotationPolicySigAlgorithm.constructFromObject(data['signatureAlgorithm']);
            }
            if (data.hasOwnProperty('usageType')) {
                obj['usageType'] = EnumKeyRotationPolicyUsageType.constructFromObject(data['usageType']);
            }
            if (data.hasOwnProperty('validityPeriod')) {
                obj['validityPeriod'] = ApiClient.convertToType(data['validityPeriod'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeyRotationPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeyRotationPolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of KeyRotationPolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['currentKeyId'] && !(typeof data['currentKeyId'] === 'string' || data['currentKeyId'] instanceof String)) {
            throw new Error("Expected the field `currentKeyId` to be a primitive type in the JSON string but got " + data['currentKeyId']);
        }
        // ensure the json data is a string
        if (data['dn'] && !(typeof data['dn'] === 'string' || data['dn'] instanceof String)) {
            throw new Error("Expected the field `dn` to be a primitive type in the JSON string but got " + data['dn']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['nextKeyId'] && !(typeof data['nextKeyId'] === 'string' || data['nextKeyId'] instanceof String)) {
            throw new Error("Expected the field `nextKeyId` to be a primitive type in the JSON string but got " + data['nextKeyId']);
        }

        return true;
    }


}

KeyRotationPolicy.RequiredProperties = ["algorithm", "dn", "keyLength", "name", "signatureAlgorithm", "usageType"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
KeyRotationPolicy.prototype['_links'] = undefined;

/**
 * @member {module:model/EnumKeyRotationPolicyAlgorithm} algorithm
 */
KeyRotationPolicy.prototype['algorithm'] = undefined;

/**
 * The `kid` (key identifier) of the `KrpKey` designated as `CURRENT`.
 * @member {String} currentKeyId
 */
KeyRotationPolicy.prototype['currentKeyId'] = undefined;

/**
 * The DN this KRP will apply to generated `KrpKeys`. Is applied as both `issuerDN` and `subjectDN` because generated `KrpKeys` are self-signed.
 * @member {String} dn
 */
KeyRotationPolicy.prototype['dn'] = undefined;

/**
 * The resource’s unique identifier.
 * @member {String} id
 */
KeyRotationPolicy.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
KeyRotationPolicy.prototype['environment'] = undefined;

/**
 * The number of bytes of a cryptographic key this KRP will apply to generated `KrpKeys`.
 * @member {Number} keyLength
 */
KeyRotationPolicy.prototype['keyLength'] = undefined;

/**
 * Human-readable name displayed in the admin console.
 * @member {String} name
 */
KeyRotationPolicy.prototype['name'] = undefined;

/**
 * The `kid` (key identifier) of the `KrpKey` designated as `NEXT`.
 * @member {String} nextKeyId
 */
KeyRotationPolicy.prototype['nextKeyId'] = undefined;

/**
 * The last time this KRP was rotated.
 * @member {Date} rotatedAt
 */
KeyRotationPolicy.prototype['rotatedAt'] = undefined;

/**
 * The number of days to elapse before this KRP rotates `KrpKeys`. The default value is `90` days. The minimum value is `30` days. The maximum value is 1 day less than the `validityPeriod` value.
 * @member {Number} rotationPeriod
 * @default 90
 */
KeyRotationPolicy.prototype['rotationPeriod'] = 90;

/**
 * @member {module:model/EnumKeyRotationPolicySigAlgorithm} signatureAlgorithm
 */
KeyRotationPolicy.prototype['signatureAlgorithm'] = undefined;

/**
 * @member {module:model/EnumKeyRotationPolicyUsageType} usageType
 */
KeyRotationPolicy.prototype['usageType'] = undefined;

/**
 * Controls the `startsAt` and `expiresAt` fields this KRP will apply to generated `KrpKeys`. The default value is `365` days.
 * @member {Number} validityPeriod
 * @default 365
 */
KeyRotationPolicy.prototype['validityPeriod'] = 365;






export default KeyRotationPolicy;

