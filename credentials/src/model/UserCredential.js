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
import CredentialDigitalWalletNotification from './CredentialDigitalWalletNotification';
import CredentialDigitalWalletNotificationResultsInnerNotification from './CredentialDigitalWalletNotificationResultsInnerNotification';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import UserCredentialUserdata from './UserCredentialUserdata';

/**
 * The UserCredential model module.
 * @module model/UserCredential
 * @version 2023-06-29
 */
class UserCredential {
    /**
     * Constructs a new <code>UserCredential</code>.
     * @alias module:model/UserCredential
     */
    constructor() { 
        
        UserCredential.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserCredential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCredential} obj Optional instance to populate.
     * @return {module:model/UserCredential} The populated <code>UserCredential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCredential();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('credentialType')) {
                obj['credentialType'] = CredentialDigitalWalletNotificationResultsInnerNotification.constructFromObject(data['credentialType']);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('notification')) {
                obj['notification'] = CredentialDigitalWalletNotification.constructFromObject(data['notification']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = CredentialDigitalWalletNotificationResultsInnerNotification.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('userdata')) {
                obj['userdata'] = UserCredentialUserdata.constructFromObject(data['userdata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserCredential</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserCredential</code>.
     */
    static validateJSON(data) {
        // validate the optional field `credentialType`
        if (data['credentialType']) { // data not null
          CredentialDigitalWalletNotificationResultsInnerNotification.validateJSON(data['credentialType']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `notification`
        if (data['notification']) { // data not null
          CredentialDigitalWalletNotification.validateJSON(data['notification']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          CredentialDigitalWalletNotificationResultsInnerNotification.validateJSON(data['user']);
        }
        // validate the optional field `userdata`
        if (data['userdata']) { // data not null
          UserCredentialUserdata.validateJSON(data['userdata']);
        }

        return true;
    }


}



/**
 * @member {module:model/LinksHATEOAS} _links
 */
UserCredential.prototype['_links'] = undefined;

/**
 * @member {Date} createdAt
 */
UserCredential.prototype['createdAt'] = undefined;

/**
 * @member {module:model/CredentialDigitalWalletNotificationResultsInnerNotification} credentialType
 */
UserCredential.prototype['credentialType'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
UserCredential.prototype['environment'] = undefined;

/**
 * @member {Date} expiresAt
 */
UserCredential.prototype['expiresAt'] = undefined;

/**
 * @member {String} id
 */
UserCredential.prototype['id'] = undefined;

/**
 * @member {module:model/CredentialDigitalWalletNotification} notification
 */
UserCredential.prototype['notification'] = undefined;

/**
 * @member {String} status
 */
UserCredential.prototype['status'] = undefined;

/**
 * @member {Date} updatedAt
 */
UserCredential.prototype['updatedAt'] = undefined;

/**
 * @member {module:model/CredentialDigitalWalletNotificationResultsInnerNotification} user
 */
UserCredential.prototype['user'] = undefined;

/**
 * @member {module:model/UserCredentialUserdata} userdata
 */
UserCredential.prototype['userdata'] = undefined;






export default UserCredential;

