/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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
import EnumPredictorType from './EnumPredictorType';
import LinksHATEOAS from './LinksHATEOAS';
import RiskPredictorCommon from './RiskPredictorCommon';
import RiskPredictorCommonCondition from './RiskPredictorCommonCondition';
import RiskPredictorCommonDefault from './RiskPredictorCommonDefault';

/**
 * The RiskPredictorEmailReputation model module.
 * @module model/RiskPredictorEmailReputation
 * @version 2023-06-29
 */
class RiskPredictorEmailReputation {
    /**
     * Constructs a new <code>RiskPredictorEmailReputation</code>.
     * @alias module:model/RiskPredictorEmailReputation
     * @implements module:model/RiskPredictorCommon
     * @param name {String} A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights.
     * @param compactName {String} A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details).
     * @param type {module:model/EnumPredictorType} 
     */
    constructor(name, compactName, type) { 
        RiskPredictorCommon.initialize(this, name, compactName, type);
        RiskPredictorEmailReputation.initialize(this, name, compactName, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, compactName, type) { 
        obj['name'] = name;
        obj['compactName'] = compactName;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RiskPredictorEmailReputation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPredictorEmailReputation} obj Optional instance to populate.
     * @return {module:model/RiskPredictorEmailReputation} The populated <code>RiskPredictorEmailReputation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPredictorEmailReputation();
            RiskPredictorCommon.constructFromObject(data, obj);

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('compactName')) {
                obj['compactName'] = ApiClient.convertToType(data['compactName'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumPredictorType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('licensed')) {
                obj['licensed'] = ApiClient.convertToType(data['licensed'], 'Boolean');
            }
            if (data.hasOwnProperty('deletable')) {
                obj['deletable'] = ApiClient.convertToType(data['deletable'], 'Boolean');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = RiskPredictorCommonDefault.constructFromObject(data['default']);
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = RiskPredictorCommonCondition.constructFromObject(data['condition']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPredictorEmailReputation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorEmailReputation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RiskPredictorEmailReputation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['compactName'] && !(typeof data['compactName'] === 'string' || data['compactName'] instanceof String)) {
            throw new Error("Expected the field `compactName` to be a primitive type in the JSON string but got " + data['compactName']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `default`
        if (data['default']) { // data not null
          RiskPredictorCommonDefault.validateJSON(data['default']);
        }
        // validate the optional field `condition`
        if (data['condition']) { // data not null
          RiskPredictorCommonCondition.validateJSON(data['condition']);
        }

        return true;
    }


}

RiskPredictorEmailReputation.RequiredProperties = ["name", "compactName", "type"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
RiskPredictorEmailReputation.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
RiskPredictorEmailReputation.prototype['id'] = undefined;

/**
 * A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights.
 * @member {String} name
 */
RiskPredictorEmailReputation.prototype['name'] = undefined;

/**
 * A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details).
 * @member {String} compactName
 */
RiskPredictorEmailReputation.prototype['compactName'] = undefined;

/**
 * @member {module:model/EnumPredictorType} type
 */
RiskPredictorEmailReputation.prototype['type'] = undefined;

/**
 * A string type. This specifies the description of the risk predictor. Maximum length is 1024 characters.
 * @member {String} description
 */
RiskPredictorEmailReputation.prototype['description'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
RiskPredictorEmailReputation.prototype['createdAt'] = undefined;

/**
 * The time the resource was updated.
 * @member {Date} updatedAt
 */
RiskPredictorEmailReputation.prototype['updatedAt'] = undefined;

/**
 * Indicates whether PingOne Risk is licensed for the environment.
 * @member {Boolean} licensed
 */
RiskPredictorEmailReputation.prototype['licensed'] = undefined;

/**
 * A boolean to indicate whether the predictor is deletable in the environment.
 * @member {Boolean} deletable
 */
RiskPredictorEmailReputation.prototype['deletable'] = undefined;

/**
 * @member {module:model/RiskPredictorCommonDefault} default
 */
RiskPredictorEmailReputation.prototype['default'] = undefined;

/**
 * @member {module:model/RiskPredictorCommonCondition} condition
 */
RiskPredictorEmailReputation.prototype['condition'] = undefined;


// Implement RiskPredictorCommon interface:
/**
 * @member {module:model/LinksHATEOAS} _links
 */
RiskPredictorCommon.prototype['_links'] = undefined;
/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
RiskPredictorCommon.prototype['id'] = undefined;
/**
 * A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights.
 * @member {String} name
 */
RiskPredictorCommon.prototype['name'] = undefined;
/**
 * A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details).
 * @member {String} compactName
 */
RiskPredictorCommon.prototype['compactName'] = undefined;
/**
 * @member {module:model/EnumPredictorType} type
 */
RiskPredictorCommon.prototype['type'] = undefined;
/**
 * A string type. This specifies the description of the risk predictor. Maximum length is 1024 characters.
 * @member {String} description
 */
RiskPredictorCommon.prototype['description'] = undefined;
/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
RiskPredictorCommon.prototype['createdAt'] = undefined;
/**
 * The time the resource was updated.
 * @member {Date} updatedAt
 */
RiskPredictorCommon.prototype['updatedAt'] = undefined;
/**
 * Indicates whether PingOne Risk is licensed for the environment.
 * @member {Boolean} licensed
 */
RiskPredictorCommon.prototype['licensed'] = undefined;
/**
 * A boolean to indicate whether the predictor is deletable in the environment.
 * @member {Boolean} deletable
 */
RiskPredictorCommon.prototype['deletable'] = undefined;
/**
 * @member {module:model/RiskPredictorCommonDefault} default
 */
RiskPredictorCommon.prototype['default'] = undefined;
/**
 * @member {module:model/RiskPredictorCommonCondition} condition
 */
RiskPredictorCommon.prototype['condition'] = undefined;




export default RiskPredictorEmailReputation;

