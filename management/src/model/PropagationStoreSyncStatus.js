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
import EnumPropagationStoreSyncState from './EnumPropagationStoreSyncState';

/**
 * The PropagationStoreSyncStatus model module.
 * @module model/PropagationStoreSyncStatus
 * @version 2023-06-29
 */
class PropagationStoreSyncStatus {
    /**
     * Constructs a new <code>PropagationStoreSyncStatus</code>.
     * @alias module:model/PropagationStoreSyncStatus
     */
    constructor() { 
        
        PropagationStoreSyncStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropagationStoreSyncStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropagationStoreSyncStatus} obj Optional instance to populate.
     * @return {module:model/PropagationStoreSyncStatus} The populated <code>PropagationStoreSyncStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropagationStoreSyncStatus();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('failedCount')) {
                obj['failedCount'] = ApiClient.convertToType(data['failedCount'], 'Number');
            }
            if (data.hasOwnProperty('failedDeprovisionCount')) {
                obj['failedDeprovisionCount'] = ApiClient.convertToType(data['failedDeprovisionCount'], 'Number');
            }
            if (data.hasOwnProperty('lastSyncAt')) {
                obj['lastSyncAt'] = ApiClient.convertToType(data['lastSyncAt'], 'Date');
            }
            if (data.hasOwnProperty('successCount')) {
                obj['successCount'] = ApiClient.convertToType(data['successCount'], 'Number');
            }
            if (data.hasOwnProperty('syncState')) {
                obj['syncState'] = EnumPropagationStoreSyncState.constructFromObject(data['syncState']);
            }
            if (data.hasOwnProperty('userTotal')) {
                obj['userTotal'] = ApiClient.convertToType(data['userTotal'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropagationStoreSyncStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreSyncStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['details'] && !(typeof data['details'] === 'string' || data['details'] instanceof String)) {
            throw new Error("Expected the field `details` to be a primitive type in the JSON string but got " + data['details']);
        }

        return true;
    }


}



/**
 * Details of any synchronization errors.
 * @member {String} details
 */
PropagationStoreSyncStatus.prototype['details'] = undefined;

/**
 * A count of failed synchronization events since the last revision.
 * @member {Number} failedCount
 */
PropagationStoreSyncStatus.prototype['failedCount'] = undefined;

/**
 * A count of failed deprovisioning synchronization events since the last revision.
 * @member {Number} failedDeprovisionCount
 */
PropagationStoreSyncStatus.prototype['failedDeprovisionCount'] = undefined;

/**
 * The last synchronization in yyyy-MM-dd'T'HH:mm:ss.SSS'Z' format.
 * @member {Date} lastSyncAt
 */
PropagationStoreSyncStatus.prototype['lastSyncAt'] = undefined;

/**
 * A count of successful synchronization events since the last revision.
 * @member {Number} successCount
 */
PropagationStoreSyncStatus.prototype['successCount'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreSyncState} syncState
 */
PropagationStoreSyncStatus.prototype['syncState'] = undefined;

/**
 * A count of users that will synchronize to the target store based on the Rule’s filter.
 * @member {Number} userTotal
 */
PropagationStoreSyncStatus.prototype['userTotal'] = undefined;






export default PropagationStoreSyncStatus;
