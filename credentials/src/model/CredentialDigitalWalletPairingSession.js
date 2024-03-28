/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
import CredentialDigitalWalletNotificationResultsInnerNotification from './CredentialDigitalWalletNotificationResultsInnerNotification';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The CredentialDigitalWalletPairingSession model module.
 * @module model/CredentialDigitalWalletPairingSession
 * @version 2023-06-29
 */
class CredentialDigitalWalletPairingSession {
    /**
     * Constructs a new <code>CredentialDigitalWalletPairingSession</code>.
     * @alias module:model/CredentialDigitalWalletPairingSession
     */
    constructor() { 
        
        CredentialDigitalWalletPairingSession.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CredentialDigitalWalletPairingSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialDigitalWalletPairingSession} obj Optional instance to populate.
     * @return {module:model/CredentialDigitalWalletPairingSession} The populated <code>CredentialDigitalWalletPairingSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CredentialDigitalWalletPairingSession();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = CredentialDigitalWalletNotificationResultsInnerNotification.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('digitalWallet')) {
                obj['digitalWallet'] = CredentialDigitalWalletNotificationResultsInnerNotification.constructFromObject(data['digitalWallet']);
            }
            if (data.hasOwnProperty('challenge')) {
                obj['challenge'] = ApiClient.convertToType(data['challenge'], 'String');
            }
            if (data.hasOwnProperty('qrUrl')) {
                obj['qrUrl'] = ApiClient.convertToType(data['qrUrl'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CredentialDigitalWalletPairingSession</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialDigitalWalletPairingSession</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          CredentialDigitalWalletNotificationResultsInnerNotification.validateJSON(data['user']);
        }
        // validate the optional field `digitalWallet`
        if (data['digitalWallet']) { // data not null
          CredentialDigitalWalletNotificationResultsInnerNotification.validateJSON(data['digitalWallet']);
        }
        // ensure the json data is a string
        if (data['challenge'] && !(typeof data['challenge'] === 'string' || data['challenge'] instanceof String)) {
            throw new Error("Expected the field `challenge` to be a primitive type in the JSON string but got " + data['challenge']);
        }
        // ensure the json data is a string
        if (data['qrUrl'] && !(typeof data['qrUrl'] === 'string' || data['qrUrl'] instanceof String)) {
            throw new Error("Expected the field `qrUrl` to be a primitive type in the JSON string but got " + data['qrUrl']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
CredentialDigitalWalletPairingSession.prototype['id'] = undefined;

/**
 * @member {Date} createdAt
 */
CredentialDigitalWalletPairingSession.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
CredentialDigitalWalletPairingSession.prototype['updatedAt'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
CredentialDigitalWalletPairingSession.prototype['environment'] = undefined;

/**
 * @member {module:model/CredentialDigitalWalletNotificationResultsInnerNotification} user
 */
CredentialDigitalWalletPairingSession.prototype['user'] = undefined;

/**
 * @member {module:model/CredentialDigitalWalletNotificationResultsInnerNotification} digitalWallet
 */
CredentialDigitalWalletPairingSession.prototype['digitalWallet'] = undefined;

/**
 * @member {String} challenge
 */
CredentialDigitalWalletPairingSession.prototype['challenge'] = undefined;

/**
 * @member {String} qrUrl
 */
CredentialDigitalWalletPairingSession.prototype['qrUrl'] = undefined;

/**
 * @member {String} status
 */
CredentialDigitalWalletPairingSession.prototype['status'] = undefined;






export default CredentialDigitalWalletPairingSession;

