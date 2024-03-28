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
import EnumPredictorUnit from './EnumPredictorUnit';

/**
 * The RiskPredictorVelocityAllOfEvery model module.
 * @module model/RiskPredictorVelocityAllOfEvery
 * @version 2023-06-29
 */
class RiskPredictorVelocityAllOfEvery {
    /**
     * Constructs a new <code>RiskPredictorVelocityAllOfEvery</code>.
     * @alias module:model/RiskPredictorVelocityAllOfEvery
     */
    constructor() { 
        
        RiskPredictorVelocityAllOfEvery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RiskPredictorVelocityAllOfEvery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskPredictorVelocityAllOfEvery} obj Optional instance to populate.
     * @return {module:model/RiskPredictorVelocityAllOfEvery} The populated <code>RiskPredictorVelocityAllOfEvery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskPredictorVelocityAllOfEvery();

            if (data.hasOwnProperty('unit')) {
                obj['unit'] = EnumPredictorUnit.constructFromObject(data['unit']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('minSample')) {
                obj['minSample'] = ApiClient.convertToType(data['minSample'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RiskPredictorVelocityAllOfEvery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RiskPredictorVelocityAllOfEvery</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/EnumPredictorUnit} unit
 */
RiskPredictorVelocityAllOfEvery.prototype['unit'] = undefined;

/**
 * @member {Number} quantity
 */
RiskPredictorVelocityAllOfEvery.prototype['quantity'] = undefined;

/**
 * @member {Number} minSample
 */
RiskPredictorVelocityAllOfEvery.prototype['minSample'] = undefined;






export default RiskPredictorVelocityAllOfEvery;

