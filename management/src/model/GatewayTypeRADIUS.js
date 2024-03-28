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
import EnumGatewayType from './EnumGatewayType';
import Gateway from './Gateway';
import GatewayCredential from './GatewayCredential';
import GatewaySupportedVersionsInner from './GatewaySupportedVersionsInner';
import GatewayTypeRADIUSAllOfDavinci from './GatewayTypeRADIUSAllOfDavinci';
import GatewayTypeRADIUSAllOfRadiusClients from './GatewayTypeRADIUSAllOfRadiusClients';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The GatewayTypeRADIUS model module.
 * @module model/GatewayTypeRADIUS
 * @version 2023-06-29
 */
class GatewayTypeRADIUS {
    /**
     * Constructs a new <code>GatewayTypeRADIUS</code>.
     * @alias module:model/GatewayTypeRADIUS
     * @implements module:model/Gateway
     * @param name {String} A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
     * @param type {module:model/EnumGatewayType} 
     * @param enabled {Boolean} A boolean that specifies whether the gateway is enabled. This is a required property.
     * @param davinci {module:model/GatewayTypeRADIUSAllOfDavinci} 
     * @param radiusClients {Array.<module:model/GatewayTypeRADIUSAllOfRadiusClients>} Collection of RADIUS clients.
     */
    constructor(name, type, enabled, davinci, radiusClients) { 
        Gateway.initialize(this, name, type, enabled);
        GatewayTypeRADIUS.initialize(this, name, type, enabled, davinci, radiusClients);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, enabled, davinci, radiusClients) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['enabled'] = enabled;
        obj['davinci'] = davinci;
        obj['radiusClients'] = radiusClients;
    }

    /**
     * Constructs a <code>GatewayTypeRADIUS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayTypeRADIUS} obj Optional instance to populate.
     * @return {module:model/GatewayTypeRADIUS} The populated <code>GatewayTypeRADIUS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayTypeRADIUS();
            Gateway.constructFromObject(data, obj);

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [GatewayCredential]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumGatewayType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('supportedVersions')) {
                obj['supportedVersions'] = ApiClient.convertToType(data['supportedVersions'], [GatewaySupportedVersionsInner]);
            }
            if (data.hasOwnProperty('currentAlerts')) {
                obj['currentAlerts'] = ApiClient.convertToType(data['currentAlerts'], [Object]);
            }
            if (data.hasOwnProperty('davinci')) {
                obj['davinci'] = GatewayTypeRADIUSAllOfDavinci.constructFromObject(data['davinci']);
            }
            if (data.hasOwnProperty('defaultSharedSecret')) {
                obj['defaultSharedSecret'] = ApiClient.convertToType(data['defaultSharedSecret'], 'String');
            }
            if (data.hasOwnProperty('radiusClients')) {
                obj['radiusClients'] = ApiClient.convertToType(data['radiusClients'], [GatewayTypeRADIUSAllOfRadiusClients]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayTypeRADIUS</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayTypeRADIUS</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayTypeRADIUS.RequiredProperties) {
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
        if (data['credentials']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credentials'])) {
                throw new Error("Expected the field `credentials` to be an array in the JSON data but got " + data['credentials']);
            }
            // validate the optional field `credentials` (array)
            for (const item of data['credentials']) {
                GatewayCredential.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['supportedVersions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['supportedVersions'])) {
                throw new Error("Expected the field `supportedVersions` to be an array in the JSON data but got " + data['supportedVersions']);
            }
            // validate the optional field `supportedVersions` (array)
            for (const item of data['supportedVersions']) {
                GatewaySupportedVersionsInner.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['currentAlerts'])) {
            throw new Error("Expected the field `currentAlerts` to be an array in the JSON data but got " + data['currentAlerts']);
        }
        // validate the optional field `davinci`
        if (data['davinci']) { // data not null
          GatewayTypeRADIUSAllOfDavinci.validateJSON(data['davinci']);
        }
        // ensure the json data is a string
        if (data['defaultSharedSecret'] && !(typeof data['defaultSharedSecret'] === 'string' || data['defaultSharedSecret'] instanceof String)) {
            throw new Error("Expected the field `defaultSharedSecret` to be a primitive type in the JSON string but got " + data['defaultSharedSecret']);
        }
        if (data['radiusClients']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['radiusClients'])) {
                throw new Error("Expected the field `radiusClients` to be an array in the JSON data but got " + data['radiusClients']);
            }
            // validate the optional field `radiusClients` (array)
            for (const item of data['radiusClients']) {
                GatewayTypeRADIUSAllOfRadiusClients.validateJSON(item);
            };
        }

        return true;
    }


}

GatewayTypeRADIUS.RequiredProperties = ["name", "type", "enabled", "davinci", "radiusClients"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
GatewayTypeRADIUS.prototype['_links'] = undefined;

/**
 * A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up.
 * @member {String} id
 */
GatewayTypeRADIUS.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
GatewayTypeRADIUS.prototype['environment'] = undefined;

/**
 * @member {Array.<module:model/GatewayCredential>} credentials
 */
GatewayTypeRADIUS.prototype['credentials'] = undefined;

/**
 * A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
 * @member {String} name
 */
GatewayTypeRADIUS.prototype['name'] = undefined;

/**
 * A string that specifies the description of the resource.
 * @member {String} description
 */
GatewayTypeRADIUS.prototype['description'] = undefined;

/**
 * @member {module:model/EnumGatewayType} type
 */
GatewayTypeRADIUS.prototype['type'] = undefined;

/**
 * A boolean that specifies whether the gateway is enabled. This is a required property.
 * @member {Boolean} enabled
 */
GatewayTypeRADIUS.prototype['enabled'] = undefined;

/**
 * An array that lists the LDAP gateway versions associated with this gateway resource. This information is returned on a GET {{apiPath}}/environments/{{environmentID}}/gateways request, and it is used to trigger alerts if the gateway tries to connect with an unsupported version (or a version that is not the latest or recommended version).
 * @member {Array.<module:model/GatewaySupportedVersionsInner>} supportedVersions
 */
GatewayTypeRADIUS.prototype['supportedVersions'] = undefined;

/**
 * @member {Array.<Object>} currentAlerts
 */
GatewayTypeRADIUS.prototype['currentAlerts'] = undefined;

/**
 * @member {module:model/GatewayTypeRADIUSAllOfDavinci} davinci
 */
GatewayTypeRADIUS.prototype['davinci'] = undefined;

/**
 * Value to use for the shared secret if the shared secret is not provided for one or more of the RADIUS clients specified.
 * @member {String} defaultSharedSecret
 */
GatewayTypeRADIUS.prototype['defaultSharedSecret'] = undefined;

/**
 * Collection of RADIUS clients.
 * @member {Array.<module:model/GatewayTypeRADIUSAllOfRadiusClients>} radiusClients
 */
GatewayTypeRADIUS.prototype['radiusClients'] = undefined;


// Implement Gateway interface:
/**
 * @member {module:model/LinksHATEOAS} _links
 */
Gateway.prototype['_links'] = undefined;
/**
 * A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up.
 * @member {String} id
 */
Gateway.prototype['id'] = undefined;
/**
 * @member {module:model/ObjectEnvironment} environment
 */
Gateway.prototype['environment'] = undefined;
/**
 * @member {Array.<module:model/GatewayCredential>} credentials
 */
Gateway.prototype['credentials'] = undefined;
/**
 * A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
 * @member {String} name
 */
Gateway.prototype['name'] = undefined;
/**
 * A string that specifies the description of the resource.
 * @member {String} description
 */
Gateway.prototype['description'] = undefined;
/**
 * @member {module:model/EnumGatewayType} type
 */
Gateway.prototype['type'] = undefined;
/**
 * A boolean that specifies whether the gateway is enabled. This is a required property.
 * @member {Boolean} enabled
 */
Gateway.prototype['enabled'] = undefined;
/**
 * An array that lists the LDAP gateway versions associated with this gateway resource. This information is returned on a GET {{apiPath}}/environments/{{environmentID}}/gateways request, and it is used to trigger alerts if the gateway tries to connect with an unsupported version (or a version that is not the latest or recommended version).
 * @member {Array.<module:model/GatewaySupportedVersionsInner>} supportedVersions
 */
Gateway.prototype['supportedVersions'] = undefined;
/**
 * @member {Array.<Object>} currentAlerts
 */
Gateway.prototype['currentAlerts'] = undefined;




export default GatewayTypeRADIUS;

