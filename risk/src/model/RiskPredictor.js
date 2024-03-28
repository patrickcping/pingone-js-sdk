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
import EnumPredictorNewDeviceDetectType from './EnumPredictorNewDeviceDetectType';
import EnumPredictorType from './EnumPredictorType';
import EnumPredictorVelocityMeasure from './EnumPredictorVelocityMeasure';
import LinksHATEOAS from './LinksHATEOAS';
import RiskPredictorAdversaryInTheMiddle from './RiskPredictorAdversaryInTheMiddle';
import RiskPredictorAnonymousNetwork from './RiskPredictorAnonymousNetwork';
import RiskPredictorBotDetection from './RiskPredictorBotDetection';
import RiskPredictorCommon from './RiskPredictorCommon';
import RiskPredictorCommonCondition from './RiskPredictorCommonCondition';
import RiskPredictorCommonDefault from './RiskPredictorCommonDefault';
import RiskPredictorComposite from './RiskPredictorComposite';
import RiskPredictorCompositeAllOfComposition from './RiskPredictorCompositeAllOfComposition';
import RiskPredictorCompositeAllOfCompositionsInner from './RiskPredictorCompositeAllOfCompositionsInner';
import RiskPredictorCustom from './RiskPredictorCustom';
import RiskPredictorCustomAllOfMap from './RiskPredictorCustomAllOfMap';
import RiskPredictorDevice from './RiskPredictorDevice';
import RiskPredictorEmailReputation from './RiskPredictorEmailReputation';
import RiskPredictorGeovelocity from './RiskPredictorGeovelocity';
import RiskPredictorIPReputation from './RiskPredictorIPReputation';
import RiskPredictorUserLocationAnomaly from './RiskPredictorUserLocationAnomaly';
import RiskPredictorUserLocationAnomalyAllOfRadius from './RiskPredictorUserLocationAnomalyAllOfRadius';
import RiskPredictorUserRiskBehavior from './RiskPredictorUserRiskBehavior';
import RiskPredictorUserRiskBehaviorAllOfPredictionModel from './RiskPredictorUserRiskBehaviorAllOfPredictionModel';
import RiskPredictorVelocity from './RiskPredictorVelocity';
import RiskPredictorVelocityAllOfEvery from './RiskPredictorVelocityAllOfEvery';
import RiskPredictorVelocityAllOfFallback from './RiskPredictorVelocityAllOfFallback';
import RiskPredictorVelocityAllOfMaxDelay from './RiskPredictorVelocityAllOfMaxDelay';
import RiskPredictorVelocityAllOfSlidingWindow from './RiskPredictorVelocityAllOfSlidingWindow';
import RiskPredictorVelocityAllOfUse from './RiskPredictorVelocityAllOfUse';

/**
 * The RiskPredictor model module.
 * @module model/RiskPredictor
 * @version 2023-06-29
 */
class RiskPredictor {
    /**
     * Constructs a new <code>RiskPredictor</code>.
     * @alias module:model/RiskPredictor
     * @param {(module:model/RiskPredictorAdversaryInTheMiddle|module:model/RiskPredictorAnonymousNetwork|module:model/RiskPredictorBotDetection|module:model/RiskPredictorCommon|module:model/RiskPredictorComposite|module:model/RiskPredictorCustom|module:model/RiskPredictorDevice|module:model/RiskPredictorEmailReputation|module:model/RiskPredictorGeovelocity|module:model/RiskPredictorIPReputation|module:model/RiskPredictorUserLocationAnomaly|module:model/RiskPredictorUserRiskBehavior|module:model/RiskPredictorVelocity)} instance The actual instance to initialize RiskPredictor.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "RiskPredictorCommon") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorCommon.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorCommon from JS object
                this.actualInstance = RiskPredictorCommon.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorCommon
            errorMessages.push("Failed to construct RiskPredictorCommon: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorAdversaryInTheMiddle") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorAdversaryInTheMiddle.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorAdversaryInTheMiddle from JS object
                this.actualInstance = RiskPredictorAdversaryInTheMiddle.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorAdversaryInTheMiddle
            errorMessages.push("Failed to construct RiskPredictorAdversaryInTheMiddle: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorAnonymousNetwork") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorAnonymousNetwork.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorAnonymousNetwork from JS object
                this.actualInstance = RiskPredictorAnonymousNetwork.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorAnonymousNetwork
            errorMessages.push("Failed to construct RiskPredictorAnonymousNetwork: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorBotDetection") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorBotDetection.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorBotDetection from JS object
                this.actualInstance = RiskPredictorBotDetection.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorBotDetection
            errorMessages.push("Failed to construct RiskPredictorBotDetection: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorComposite") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorComposite.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorComposite from JS object
                this.actualInstance = RiskPredictorComposite.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorComposite
            errorMessages.push("Failed to construct RiskPredictorComposite: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorCustom") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorCustom.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorCustom from JS object
                this.actualInstance = RiskPredictorCustom.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorCustom
            errorMessages.push("Failed to construct RiskPredictorCustom: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorEmailReputation") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorEmailReputation.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorEmailReputation from JS object
                this.actualInstance = RiskPredictorEmailReputation.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorEmailReputation
            errorMessages.push("Failed to construct RiskPredictorEmailReputation: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorGeovelocity") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorGeovelocity.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorGeovelocity from JS object
                this.actualInstance = RiskPredictorGeovelocity.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorGeovelocity
            errorMessages.push("Failed to construct RiskPredictorGeovelocity: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorIPReputation") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorIPReputation.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorIPReputation from JS object
                this.actualInstance = RiskPredictorIPReputation.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorIPReputation
            errorMessages.push("Failed to construct RiskPredictorIPReputation: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorDevice") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorDevice.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorDevice from JS object
                this.actualInstance = RiskPredictorDevice.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorDevice
            errorMessages.push("Failed to construct RiskPredictorDevice: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorUserLocationAnomaly") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorUserLocationAnomaly.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorUserLocationAnomaly from JS object
                this.actualInstance = RiskPredictorUserLocationAnomaly.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorUserLocationAnomaly
            errorMessages.push("Failed to construct RiskPredictorUserLocationAnomaly: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorUserRiskBehavior") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorUserRiskBehavior.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorUserRiskBehavior from JS object
                this.actualInstance = RiskPredictorUserRiskBehavior.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorUserRiskBehavior
            errorMessages.push("Failed to construct RiskPredictorUserRiskBehavior: " + err)
        }

        try {
            if (typeof instance === "RiskPredictorVelocity") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RiskPredictorVelocity.validateJSON(instance); // throw an exception if no match
                // create RiskPredictorVelocity from JS object
                this.actualInstance = RiskPredictorVelocity.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RiskPredictorVelocity
            errorMessages.push("Failed to construct RiskPredictorVelocity: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `RiskPredictor` with oneOf schemas RiskPredictorAdversaryInTheMiddle, RiskPredictorAnonymousNetwork, RiskPredictorBotDetection, RiskPredictorCommon, RiskPredictorComposite, RiskPredictorCustom, RiskPredictorDevice, RiskPredictorEmailReputation, RiskPredictorGeovelocity, RiskPredictorIPReputation, RiskPredictorUserLocationAnomaly, RiskPredictorUserRiskBehavior, RiskPredictorVelocity. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `RiskPredictor` with oneOf schemas RiskPredictorAdversaryInTheMiddle, RiskPredictorAnonymousNetwork, RiskPredictorBotDetection, RiskPredictorCommon, RiskPredictorComposite, RiskPredictorCustom, RiskPredictorDevice, RiskPredictorEmailReputation, RiskPredictorGeovelocity, RiskPredictorIPReputation, RiskPredictorUserLocationAnomaly, RiskPredictorUserRiskBehavior, RiskPredictorVelocity. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>RiskPredictor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPredictor} obj Optional instance to populate.
     * @return {module:model/RiskPredictor} The populated <code>RiskPredictor</code> instance.
     */
    static constructFromObject(data, obj) {
        return new RiskPredictor(data);
    }

    /**
     * Gets the actual instance, which can be <code>RiskPredictorAdversaryInTheMiddle</code>, <code>RiskPredictorAnonymousNetwork</code>, <code>RiskPredictorBotDetection</code>, <code>RiskPredictorCommon</code>, <code>RiskPredictorComposite</code>, <code>RiskPredictorCustom</code>, <code>RiskPredictorDevice</code>, <code>RiskPredictorEmailReputation</code>, <code>RiskPredictorGeovelocity</code>, <code>RiskPredictorIPReputation</code>, <code>RiskPredictorUserLocationAnomaly</code>, <code>RiskPredictorUserRiskBehavior</code>, <code>RiskPredictorVelocity</code>.
     * @return {(module:model/RiskPredictorAdversaryInTheMiddle|module:model/RiskPredictorAnonymousNetwork|module:model/RiskPredictorBotDetection|module:model/RiskPredictorCommon|module:model/RiskPredictorComposite|module:model/RiskPredictorCustom|module:model/RiskPredictorDevice|module:model/RiskPredictorEmailReputation|module:model/RiskPredictorGeovelocity|module:model/RiskPredictorIPReputation|module:model/RiskPredictorUserLocationAnomaly|module:model/RiskPredictorUserRiskBehavior|module:model/RiskPredictorVelocity)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>RiskPredictorAdversaryInTheMiddle</code>, <code>RiskPredictorAnonymousNetwork</code>, <code>RiskPredictorBotDetection</code>, <code>RiskPredictorCommon</code>, <code>RiskPredictorComposite</code>, <code>RiskPredictorCustom</code>, <code>RiskPredictorDevice</code>, <code>RiskPredictorEmailReputation</code>, <code>RiskPredictorGeovelocity</code>, <code>RiskPredictorIPReputation</code>, <code>RiskPredictorUserLocationAnomaly</code>, <code>RiskPredictorUserRiskBehavior</code>, <code>RiskPredictorVelocity</code>.
     * @param {(module:model/RiskPredictorAdversaryInTheMiddle|module:model/RiskPredictorAnonymousNetwork|module:model/RiskPredictorBotDetection|module:model/RiskPredictorCommon|module:model/RiskPredictorComposite|module:model/RiskPredictorCustom|module:model/RiskPredictorDevice|module:model/RiskPredictorEmailReputation|module:model/RiskPredictorGeovelocity|module:model/RiskPredictorIPReputation|module:model/RiskPredictorUserLocationAnomaly|module:model/RiskPredictorUserRiskBehavior|module:model/RiskPredictorVelocity)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = RiskPredictor.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of RiskPredictor from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/RiskPredictor} An instance of RiskPredictor.
     */
    static fromJSON = function(json_string){
        return RiskPredictor.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
RiskPredictor.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
RiskPredictor.prototype['id'] = undefined;

/**
 * A string type. A unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights.
 * @member {String} name
 */
RiskPredictor.prototype['name'] = undefined;

/**
 * A string type. A unique name for the predictor. This property is immutable; it cannot be modified after initial creation. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under details).
 * @member {String} compactName
 */
RiskPredictor.prototype['compactName'] = undefined;

/**
 * @member {module:model/EnumPredictorType} type
 */
RiskPredictor.prototype['type'] = undefined;

/**
 * A string type. This specifies the description of the risk predictor. Maximum length is 1024 characters.
 * @member {String} description
 */
RiskPredictor.prototype['description'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
RiskPredictor.prototype['createdAt'] = undefined;

/**
 * The time the resource was updated.
 * @member {Date} updatedAt
 */
RiskPredictor.prototype['updatedAt'] = undefined;

/**
 * Indicates whether PingOne Risk is licensed for the environment.
 * @member {Boolean} licensed
 */
RiskPredictor.prototype['licensed'] = undefined;

/**
 * A boolean to indicate whether the predictor is deletable in the environment.
 * @member {Boolean} deletable
 */
RiskPredictor.prototype['deletable'] = undefined;

/**
 * @member {module:model/RiskPredictorCommonDefault} default
 */
RiskPredictor.prototype['default'] = undefined;

/**
 * @member {module:model/RiskPredictorCommonCondition} condition
 */
RiskPredictor.prototype['condition'] = undefined;

/**
 * A list of IP addresses (CDIRs) that are ignored for the predictor results.
 * @member {Array.<String>} whiteList
 */
RiskPredictor.prototype['whiteList'] = undefined;

/**
 * @member {module:model/RiskPredictorCompositeAllOfComposition} composition
 */
RiskPredictor.prototype['composition'] = undefined;

/**
 * Contains the objects that specify the conditions to test and the risk level that should be assigned if the conditions are met. The array can contain a maximum of three elements.
 * @member {Array.<module:model/RiskPredictorCompositeAllOfCompositionsInner>} compositions
 */
RiskPredictor.prototype['compositions'] = undefined;

/**
 * @member {module:model/RiskPredictorCustomAllOfMap} map
 */
RiskPredictor.prototype['map'] = undefined;

/**
 * @member {module:model/EnumPredictorNewDeviceDetectType} detect
 */
RiskPredictor.prototype['detect'] = undefined;

/**
 * You can use the `activationAt` parameter to specify a date on which the learning process for the predictor should be restarted. This can be used in conjunction with the fallback setting (`default.result.level`) to force strong authentication when moving the predictor to production. The date should be in an RFC3339 format. Note that activation date uses UTC time.
 * @member {Date} activationAt
 */
RiskPredictor.prototype['activationAt'] = undefined;

/**
 * @member {Number} days
 */
RiskPredictor.prototype['days'] = undefined;

/**
 * @member {module:model/RiskPredictorUserLocationAnomalyAllOfRadius} radius
 */
RiskPredictor.prototype['radius'] = undefined;

/**
 * @member {module:model/RiskPredictorUserRiskBehaviorAllOfPredictionModel} predictionModel
 */
RiskPredictor.prototype['predictionModel'] = undefined;

/**
 * @member {Array.<String>} by
 */
RiskPredictor.prototype['by'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfEvery} every
 */
RiskPredictor.prototype['every'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfFallback} fallback
 */
RiskPredictor.prototype['fallback'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfMaxDelay} maxDelay
 */
RiskPredictor.prototype['maxDelay'] = undefined;

/**
 * @member {module:model/EnumPredictorVelocityMeasure} measure
 */
RiskPredictor.prototype['measure'] = undefined;

/**
 * @member {String} of
 */
RiskPredictor.prototype['of'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfSlidingWindow} slidingWindow
 */
RiskPredictor.prototype['slidingWindow'] = undefined;

/**
 * @member {module:model/RiskPredictorVelocityAllOfUse} use
 */
RiskPredictor.prototype['use'] = undefined;


RiskPredictor.OneOf = ["RiskPredictorAdversaryInTheMiddle", "RiskPredictorAnonymousNetwork", "RiskPredictorBotDetection", "RiskPredictorCommon", "RiskPredictorComposite", "RiskPredictorCustom", "RiskPredictorDevice", "RiskPredictorEmailReputation", "RiskPredictorGeovelocity", "RiskPredictorIPReputation", "RiskPredictorUserLocationAnomaly", "RiskPredictorUserRiskBehavior", "RiskPredictorVelocity"];

export default RiskPredictor;

