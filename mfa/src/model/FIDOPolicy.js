/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
import EnumFIDOAttestationRequirements from './EnumFIDOAttestationRequirements';
import EnumFIDOResidentKeyRequirement from './EnumFIDOResidentKeyRequirement';
import FIDOPolicyAllowedAuthenticatorsInner from './FIDOPolicyAllowedAuthenticatorsInner';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The FIDOPolicy model module.
 * @module model/FIDOPolicy
 * @version 2023-06-29
 */
class FIDOPolicy {
    /**
     * Constructs a new <code>FIDOPolicy</code>.
     * @alias module:model/FIDOPolicy
     * @param name {String} The name to use for the FIDO policy.
     * @param attestationRequirements {module:model/EnumFIDOAttestationRequirements} 
     * @param residentKeyRequirement {module:model/EnumFIDOResidentKeyRequirement} 
     */
    constructor(name, attestationRequirements, residentKeyRequirement) { 
        
        FIDOPolicy.initialize(this, name, attestationRequirements, residentKeyRequirement);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, attestationRequirements, residentKeyRequirement) { 
        obj['name'] = name;
        obj['attestationRequirements'] = attestationRequirements;
        obj['residentKeyRequirement'] = residentKeyRequirement;
    }

    /**
     * Constructs a <code>FIDOPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FIDOPolicy} obj Optional instance to populate.
     * @return {module:model/FIDOPolicy} The populated <code>FIDOPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FIDOPolicy();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = ApiClient.convertToType(data['_embedded'], Object);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attestationRequirements')) {
                obj['attestationRequirements'] = EnumFIDOAttestationRequirements.constructFromObject(data['attestationRequirements']);
            }
            if (data.hasOwnProperty('allowedAuthenticators')) {
                obj['allowedAuthenticators'] = ApiClient.convertToType(data['allowedAuthenticators'], [FIDOPolicyAllowedAuthenticatorsInner]);
            }
            if (data.hasOwnProperty('enforceDuringAuthentication')) {
                obj['enforceDuringAuthentication'] = ApiClient.convertToType(data['enforceDuringAuthentication'], 'Boolean');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('residentKeyRequirement')) {
                obj['residentKeyRequirement'] = EnumFIDOResidentKeyRequirement.constructFromObject(data['residentKeyRequirement']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FIDOPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FIDOPolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FIDOPolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['allowedAuthenticators']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['allowedAuthenticators'])) {
                throw new Error("Expected the field `allowedAuthenticators` to be an array in the JSON data but got " + data['allowedAuthenticators']);
            }
            // validate the optional field `allowedAuthenticators` (array)
            for (const item of data['allowedAuthenticators']) {
                FIDOPolicyAllowedAuthenticatorsInner.validateJSON(item);
            };
        }

        return true;
    }


}

FIDOPolicy.RequiredProperties = ["name", "attestationRequirements", "residentKeyRequirement"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
FIDOPolicy.prototype['_links'] = undefined;

/**
 * FIDO policy's UUID.
 * @member {String} id
 */
FIDOPolicy.prototype['id'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
FIDOPolicy.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
FIDOPolicy.prototype['updatedAt'] = undefined;

/**
 * @member {Object} _embedded
 */
FIDOPolicy.prototype['_embedded'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
FIDOPolicy.prototype['environment'] = undefined;

/**
 * The name to use for the FIDO policy.
 * @member {String} name
 */
FIDOPolicy.prototype['name'] = undefined;

/**
 * Description of the FIDO policy.
 * @member {String} description
 */
FIDOPolicy.prototype['description'] = undefined;

/**
 * @member {module:model/EnumFIDOAttestationRequirements} attestationRequirements
 */
FIDOPolicy.prototype['attestationRequirements'] = undefined;

/**
 * If `attestationRequirements` is set to `SPECIFIC`, this array is used to specify the authenticators that you want to allow.
 * @member {Array.<module:model/FIDOPolicyAllowedAuthenticatorsInner>} allowedAuthenticators
 */
FIDOPolicy.prototype['allowedAuthenticators'] = undefined;

/**
 * This parameter is relevant only if you have set `attestationRequirements` to `SPECIFIC` in order to restrict usage to only certain authenticators. If set to `true`, the policy will be applied both during registration and during each authentication attempt. If set to `false`, the policy is applied only during registration. Default is `false`.
 * @member {Boolean} enforceDuringAuthentication
 * @default false
 */
FIDOPolicy.prototype['enforceDuringAuthentication'] = false;

/**
 * Whether this policy should serve as the default FIDO policy.
 * @member {Boolean} default
 */
FIDOPolicy.prototype['default'] = undefined;

/**
 * @member {module:model/EnumFIDOResidentKeyRequirement} residentKeyRequirement
 */
FIDOPolicy.prototype['residentKeyRequirement'] = undefined;






export default FIDOPolicy;

