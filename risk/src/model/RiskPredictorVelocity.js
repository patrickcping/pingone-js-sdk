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
import EnumPredictorVelocityMeasure from './EnumPredictorVelocityMeasure';
import LinksHATEOAS from './LinksHATEOAS';
import RiskPredictorCommon from './RiskPredictorCommon';
import RiskPredictorCommonCondition from './RiskPredictorCommonCondition';
import RiskPredictorCommonDefault from './RiskPredictorCommonDefault';
import RiskPredictorVelocityAllOfEvery from './RiskPredictorVelocityAllOfEvery';
import RiskPredictorVelocityAllOfFallback from './RiskPredictorVelocityAllOfFallback';
import RiskPredictorVelocityAllOfMaxDelay from './RiskPredictorVelocityAllOfMaxDelay';
import RiskPredictorVelocityAllOfSlidingWindow from './RiskPredictorVelocityAllOfSlidingWindow';
import RiskPredictorVelocityAllOfUse from './RiskPredictorVelocityAllOfUse';

/**
 * The RiskPredictorVelocity model module.
 * @module model/RiskPredictorVelocity
 * @version 2023-06-29
 */
class RiskPredictorVelocity {
    /**
     * Constructs a new <code>RiskPredictorVelocity</code>.
     * @alias module:model/RiskPredictorVelocity
     * @implements module:model/RiskPredictorCommon
     * @param name {String} A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights.
     * @param compactName {String} A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details).
     * @param type {module:model/EnumPredictorType} 
     */
    constructor(name, compactName, type) { 
        RiskPredictorCommon.initialize(this, name, compactName, type);
        RiskPredictorVelocity.initialize(this, name, compactName, type);
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
     * Constructs a <code>RiskPredictorVelocity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPredictorVelocity} obj Optional instance to populate.
     * @return {module:model/RiskPredictorVelocity} The populated <code>RiskPredictorVelocity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPredictorVelocity();
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
            if (data.hasOwnProperty('by')) {
                obj['by'] = ApiClient.convertToType(data['by'], ['String']);
            }
            if (data.hasOwnProperty('every')) {
                obj['every'] = RiskPredictorVelocityAllOfEvery.constructFromObject(data['every']);
            }
            if (data.hasOwnProperty('fallback')) {
                obj['fallback'] = RiskPredictorVelocityAllOfFallback.constructFromObject(data['fallback']);
            }
            if (data.hasOwnProperty('maxDelay')) {
                obj['maxDelay'] = RiskPredictorVelocityAllOfMaxDelay.constructFromObject(data['maxDelay']);
            }
            if (data.hasOwnProperty('measure')) {
                obj['measure'] = EnumPredictorVelocityMeasure.constructFromObject(data['measure']);
            }
            if (data.hasOwnProperty('of')) {
                obj['of'] = ApiClient.convertToType(data['of'], 'String');
            }
            if (data.hasOwnProperty('slidingWindow')) {
                obj['slidingWindow'] = RiskPredictorVelocityAllOfSlidingWindow.constructFromObject(data['slidingWindow']);
            }
            if (data.hasOwnProperty('use')) {
                obj['use'] = RiskPredictorVelocityAllOfUse.constructFromObject(data['use']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPredictorVelocity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorVelocity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RiskPredictorVelocity.RequiredProperties) {
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
        // ensure the json data is an array
        if (!Array.isArray(data['by'])) {
            throw new Error("Expected the field `by` to be an array in the JSON data but got " + data['by']);
        }
        // validate the optional field `every`
        if (data['every']) { // data not null
          RiskPredictorVelocityAllOfEvery.validateJSON(data['every']);
        }
        // validate the optional field `fallback`
        if (data['fallback']) { // data not null
          RiskPredictorVelocityAllOfFallback.validateJSON(data['fallback']);
        }
        // validate the optional field `maxDelay`
        if (data['maxDelay']) { // data not null
          RiskPredictorVelocityAllOfMaxDelay.validateJSON(data['maxDelay']);
        }
        // ensure the json data is a string
        if (data['of'] && !(typeof data['of'] === 'string' || data['of'] instanceof String)) {
            throw new Error("Expected the field `of` to be a primitive type in the JSON string but got " + data['of']);
        }
        // validate the optional field `slidingWindow`
        if (data['slidingWindow']) { // data not null
          RiskPredictorVelocityAllOfSlidingWindow.validateJSON(data['slidingWindow']);
        }
        // validate the optional field `use`
        if (data['use']) { // data not null
          RiskPredictorVelocityAllOfUse.validateJSON(data['use']);
        }

        return true;
    }


}

RiskPredictorVelocity.RequiredProperties = ["name", "compactName", "type"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
RiskPredictorVelocity.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
RiskPredictorVelocity.prototype['id'] = undefined;

/**
 * A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights.
 * @member {String} name
 */
RiskPredictorVelocity.prototype['name'] = undefined;

/**
 * A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details).
 * @member {String} compactName
 */
RiskPredictorVelocity.prototype['compactName'] = undefined;

/**
 * @member {module:model/EnumPredictorType} type
 */
RiskPredictorVelocity.prototype['type'] = undefined;

/**
 * A string type. This specifies the description of the risk predictor. Maximum length is 1024 characters.
 * @member {String} description
 */
RiskPredictorVelocity.prototype['description'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
RiskPredictorVelocity.prototype['createdAt'] = undefined;

/**
 * The time the resource was updated.
 * @member {Date} updatedAt
 */
RiskPredictorVelocity.prototype['updatedAt'] = undefined;

/**
 * Indicates whether PingOne Risk is licensed for the environment.
 * @member {Boolean} licensed
 */
RiskPredictorVelocity.prototype['licensed'] = undefined;

/**
 * A boolean to indicate whether the predictor is deletable in the environment.
 * @member {Boolean} deletable
 */
RiskPredictorVelocity.prototype['deletable'] = undefined;

/**
 * @member {module:model/RiskPredictorCommonDefault} default
 */
RiskPredictorVelocity.prototype['default'] = undefined;

/**
 * @member {module:model/RiskPredictorCommonCondition} condition
 */
RiskPredictorVelocity.prototype['condition'] = undefined;

/**
 * @member {Array.<String>} by
 */
RiskPredictorVelocity.prototype['by'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfEvery} every
 */
RiskPredictorVelocity.prototype['every'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfFallback} fallback
 */
RiskPredictorVelocity.prototype['fallback'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfMaxDelay} maxDelay
 */
RiskPredictorVelocity.prototype['maxDelay'] = undefined;

/**
 * @member {module:model/EnumPredictorVelocityMeasure} measure
 */
RiskPredictorVelocity.prototype['measure'] = undefined;

/**
 * @member {String} of
 */
RiskPredictorVelocity.prototype['of'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfSlidingWindow} slidingWindow
 */
RiskPredictorVelocity.prototype['slidingWindow'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfUse} use
 */
RiskPredictorVelocity.prototype['use'] = undefined;


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




export default RiskPredictorVelocity;

