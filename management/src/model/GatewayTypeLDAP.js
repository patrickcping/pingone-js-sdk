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
import EnumGatewayTypeLDAPSecurity from './EnumGatewayTypeLDAPSecurity';
import EnumGatewayVendor from './EnumGatewayVendor';
import Gateway from './Gateway';
import GatewayCredential from './GatewayCredential';
import GatewaySupportedVersionsInner from './GatewaySupportedVersionsInner';
import GatewayTypeLDAPAllOfKerberos from './GatewayTypeLDAPAllOfKerberos';
import GatewayTypeLDAPAllOfUserTypes from './GatewayTypeLDAPAllOfUserTypes';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The GatewayTypeLDAP model module.
 * @module model/GatewayTypeLDAP
 * @version 2023-06-29
 */
class GatewayTypeLDAP {
    /**
     * Constructs a new <code>GatewayTypeLDAP</code>.
     * @alias module:model/GatewayTypeLDAP
     * @implements module:model/Gateway
     * @param name {String} A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
     * @param type {module:model/EnumGatewayType} 
     * @param enabled {Boolean} A boolean that specifies whether the gateway is enabled. This is a required property.
     * @param bindDN {String} A string that specifies the distinguished name information to bind to the LDAP database (for example, uid=pingone,dc=example,dc=com).
     * @param bindPassword {String} A string that specifies the bind password for the LDAP database. This is a required property.
     * @param serversHostAndPort {Array.<String>} An array of strings that specifies the LDAP server host name and port number (for example, [`ds1.example.com:389`, `ds2.example.com:389`]).
     * @param vendor {module:model/EnumGatewayVendor} 
     */
    constructor(name, type, enabled, bindDN, bindPassword, serversHostAndPort, vendor) { 
        Gateway.initialize(this, name, type, enabled);
        GatewayTypeLDAP.initialize(this, name, type, enabled, bindDN, bindPassword, serversHostAndPort, vendor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, enabled, bindDN, bindPassword, serversHostAndPort, vendor) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['enabled'] = enabled;
        obj['bindDN'] = bindDN;
        obj['bindPassword'] = bindPassword;
        obj['serversHostAndPort'] = serversHostAndPort;
        obj['vendor'] = vendor;
    }

    /**
     * Constructs a <code>GatewayTypeLDAP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayTypeLDAP} obj Optional instance to populate.
     * @return {module:model/GatewayTypeLDAP} The populated <code>GatewayTypeLDAP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayTypeLDAP();
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
            if (data.hasOwnProperty('bindDN')) {
                obj['bindDN'] = ApiClient.convertToType(data['bindDN'], 'String');
            }
            if (data.hasOwnProperty('bindPassword')) {
                obj['bindPassword'] = ApiClient.convertToType(data['bindPassword'], 'String');
            }
            if (data.hasOwnProperty('connectionSecurity')) {
                obj['connectionSecurity'] = EnumGatewayTypeLDAPSecurity.constructFromObject(data['connectionSecurity']);
            }
            if (data.hasOwnProperty('kerberos')) {
                obj['kerberos'] = GatewayTypeLDAPAllOfKerberos.constructFromObject(data['kerberos']);
            }
            if (data.hasOwnProperty('serversHostAndPort')) {
                obj['serversHostAndPort'] = ApiClient.convertToType(data['serversHostAndPort'], ['String']);
            }
            if (data.hasOwnProperty('userTypes')) {
                obj['userTypes'] = ApiClient.convertToType(data['userTypes'], [GatewayTypeLDAPAllOfUserTypes]);
            }
            if (data.hasOwnProperty('validateTlsCertificates')) {
                obj['validateTlsCertificates'] = ApiClient.convertToType(data['validateTlsCertificates'], 'Boolean');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = EnumGatewayVendor.constructFromObject(data['vendor']);
            }
            if (data.hasOwnProperty('followReferrals')) {
                obj['followReferrals'] = ApiClient.convertToType(data['followReferrals'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayTypeLDAP</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayTypeLDAP</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayTypeLDAP.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['bindDN'] && !(typeof data['bindDN'] === 'string' || data['bindDN'] instanceof String)) {
            throw new Error("Expected the field `bindDN` to be a primitive type in the JSON string but got " + data['bindDN']);
        }
        // ensure the json data is a string
        if (data['bindPassword'] && !(typeof data['bindPassword'] === 'string' || data['bindPassword'] instanceof String)) {
            throw new Error("Expected the field `bindPassword` to be a primitive type in the JSON string but got " + data['bindPassword']);
        }
        // validate the optional field `kerberos`
        if (data['kerberos']) { // data not null
          GatewayTypeLDAPAllOfKerberos.validateJSON(data['kerberos']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['serversHostAndPort'])) {
            throw new Error("Expected the field `serversHostAndPort` to be an array in the JSON data but got " + data['serversHostAndPort']);
        }
        if (data['userTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['userTypes'])) {
                throw new Error("Expected the field `userTypes` to be an array in the JSON data but got " + data['userTypes']);
            }
            // validate the optional field `userTypes` (array)
            for (const item of data['userTypes']) {
                GatewayTypeLDAPAllOfUserTypes.validateJSON(item);
            };
        }

        return true;
    }


}

GatewayTypeLDAP.RequiredProperties = ["name", "type", "enabled", "bindDN", "bindPassword", "serversHostAndPort", "vendor"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
GatewayTypeLDAP.prototype['_links'] = undefined;

/**
 * A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up.
 * @member {String} id
 */
GatewayTypeLDAP.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
GatewayTypeLDAP.prototype['environment'] = undefined;

/**
 * @member {Array.<module:model/GatewayCredential>} credentials
 */
GatewayTypeLDAP.prototype['credentials'] = undefined;

/**
 * A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
 * @member {String} name
 */
GatewayTypeLDAP.prototype['name'] = undefined;

/**
 * A string that specifies the description of the resource.
 * @member {String} description
 */
GatewayTypeLDAP.prototype['description'] = undefined;

/**
 * @member {module:model/EnumGatewayType} type
 */
GatewayTypeLDAP.prototype['type'] = undefined;

/**
 * A boolean that specifies whether the gateway is enabled. This is a required property.
 * @member {Boolean} enabled
 */
GatewayTypeLDAP.prototype['enabled'] = undefined;

/**
 * An array that lists the LDAP gateway versions associated with this gateway resource. This information is returned on a GET {{apiPath}}/environments/{{environmentID}}/gateways request, and it is used to trigger alerts if the gateway tries to connect with an unsupported version (or a version that is not the latest or recommended version).
 * @member {Array.<module:model/GatewaySupportedVersionsInner>} supportedVersions
 */
GatewayTypeLDAP.prototype['supportedVersions'] = undefined;

/**
 * @member {Array.<Object>} currentAlerts
 */
GatewayTypeLDAP.prototype['currentAlerts'] = undefined;

/**
 * A string that specifies the distinguished name information to bind to the LDAP database (for example, uid=pingone,dc=example,dc=com).
 * @member {String} bindDN
 */
GatewayTypeLDAP.prototype['bindDN'] = undefined;

/**
 * A string that specifies the bind password for the LDAP database. This is a required property.
 * @member {String} bindPassword
 */
GatewayTypeLDAP.prototype['bindPassword'] = undefined;

/**
 * @member {module:model/EnumGatewayTypeLDAPSecurity} connectionSecurity
 */
GatewayTypeLDAP.prototype['connectionSecurity'] = undefined;

/**
 * @member {module:model/GatewayTypeLDAPAllOfKerberos} kerberos
 */
GatewayTypeLDAP.prototype['kerberos'] = undefined;

/**
 * An array of strings that specifies the LDAP server host name and port number (for example, [`ds1.example.com:389`, `ds2.example.com:389`]).
 * @member {Array.<String>} serversHostAndPort
 */
GatewayTypeLDAP.prototype['serversHostAndPort'] = undefined;

/**
 * An array of the userTypes properties for the users to be provisioned in PingOne. userTypes specifies which user properties in PingOne correspond to the user properties in an external LDAP directory. You can use an LDAP browser to view the user properties in the external LDAP directory.
 * @member {Array.<module:model/GatewayTypeLDAPAllOfUserTypes>} userTypes
 */
GatewayTypeLDAP.prototype['userTypes'] = undefined;

/**
 * A boolean that specifies whether or not to trust all SSL certificates (defaults to true). If this value is false, TLS certificates are not validated. When the value is set to true, only certificates that are signed by the default JVM CAs, or the CA certs that the customer has uploaded to the certificate service are trusted.
 * @member {Boolean} validateTlsCertificates
 */
GatewayTypeLDAP.prototype['validateTlsCertificates'] = undefined;

/**
 * @member {module:model/EnumGatewayVendor} vendor
 */
GatewayTypeLDAP.prototype['vendor'] = undefined;

/**
 * @member {Boolean} followReferrals
 */
GatewayTypeLDAP.prototype['followReferrals'] = undefined;


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




export default GatewayTypeLDAP;

