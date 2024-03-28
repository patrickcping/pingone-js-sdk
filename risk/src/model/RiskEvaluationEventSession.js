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

/**
 * The RiskEvaluationEventSession model module.
 * @module model/RiskEvaluationEventSession
 * @version 2023-06-29
 */
class RiskEvaluationEventSession {
    /**
     * Constructs a new <code>RiskEvaluationEventSession</code>.
     * @alias module:model/RiskEvaluationEventSession
     * @param id {String} A string that specifies a unique session ID associated with the event.
     */
    constructor(id) { 
        
        RiskEvaluationEventSession.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>RiskEvaluationEventSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskEvaluationEventSession} obj Optional instance to populate.
     * @return {module:model/RiskEvaluationEventSession} The populated <code>RiskEvaluationEventSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskEvaluationEventSession();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskEvaluationEventSession</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskEvaluationEventSession</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RiskEvaluationEventSession.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}

RiskEvaluationEventSession.RequiredProperties = ["id"];

/**
 * A string that specifies a unique session ID associated with the event.
 * @member {String} id
 */
RiskEvaluationEventSession.prototype['id'] = undefined;






export default RiskEvaluationEventSession;
