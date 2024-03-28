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
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import PopulationPasswordPolicy from './PopulationPasswordPolicy';

/**
 * The Population model module.
 * @module model/Population
 * @version 2023-06-29
 */
class Population {
    /**
     * Constructs a new <code>Population</code>.
     * @alias module:model/Population
     * @param name {String} A string that specifies the population name, which must be provided and must be unique within an environment.
     */
    constructor(name) { 
        
        Population.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Population</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Population} obj Optional instance to populate.
     * @return {module:model/Population} The populated <code>Population</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Population();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('passwordPolicy')) {
                obj['passwordPolicy'] = PopulationPasswordPolicy.constructFromObject(data['passwordPolicy']);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('userCount')) {
                obj['userCount'] = ApiClient.convertToType(data['userCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Population</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Population</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Population.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `passwordPolicy`
        if (data['passwordPolicy']) { // data not null
          PopulationPasswordPolicy.validateJSON(data['passwordPolicy']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }

        return true;
    }


}

Population.RequiredProperties = ["name"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
Population.prototype['_links'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
Population.prototype['createdAt'] = undefined;

/**
 * The population to use as the default population for the environment. Only one population per environment can be the default. New users are assigned to the default population if it exists, and the Population ID is not provided in the [Create User](https://apidocs.pingidentity.com/pingone/platform/v1/api/#post-create-user) request.
 * @member {Boolean} default
 */
Population.prototype['default'] = undefined;

/**
 * A string that specifies the description of the population.
 * @member {String} description
 */
Population.prototype['description'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
Population.prototype['environment'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
Population.prototype['id'] = undefined;

/**
 * A string that specifies the population name, which must be provided and must be unique within an environment.
 * @member {String} name
 */
Population.prototype['name'] = undefined;

/**
 * @member {module:model/PopulationPasswordPolicy} passwordPolicy
 */
Population.prototype['passwordPolicy'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
Population.prototype['updatedAt'] = undefined;

/**
 * The number of users that belong to the population
 * @member {Number} userCount
 */
Population.prototype['userCount'] = undefined;






export default Population;

