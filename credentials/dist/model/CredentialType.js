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
import CredentialTypeMetaData from './CredentialTypeMetaData';
import CredentialTypeMultiple from './CredentialTypeMultiple';
import CredentialTypeOnDelete from './CredentialTypeOnDelete';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import ObjectIssuer from './ObjectIssuer';

/**
 * The CredentialType model module.
 * @module model/CredentialType
 * @version 2023-06-29
 */
class CredentialType {
  /**
   * Constructs a new <code>CredentialType</code>.
   * @alias module:model/CredentialType
   * @param cardDesignTemplate {String} A string that specifies an SVG formatted image containing placeholders for the credential fields that need to be displayed in the image.
   * @param metadata {module:model/CredentialTypeMetaData} 
   * @param title {String} A string that specifies the title of the credential. Verification sites are expected to be able to request the issued credential from the compatible wallet app using the title.
   */
  constructor(cardDesignTemplate, metadata, title) {
    CredentialType.initialize(this, cardDesignTemplate, metadata, title);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, cardDesignTemplate, metadata, title) {
    obj['cardDesignTemplate'] = cardDesignTemplate;
    obj['metadata'] = metadata;
    obj['title'] = title;
  }

  /**
   * Constructs a <code>CredentialType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialType} obj Optional instance to populate.
   * @return {module:model/CredentialType} The populated <code>CredentialType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CredentialType();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('cardDesignTemplate')) {
        obj['cardDesignTemplate'] = ApiClient.convertToType(data['cardDesignTemplate'], 'String');
      }
      if (data.hasOwnProperty('cardType')) {
        obj['cardType'] = ApiClient.convertToType(data['cardType'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('deletedAt')) {
        obj['deletedAt'] = ApiClient.convertToType(data['deletedAt'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ObjectIssuer.constructFromObject(data['issuer']);
      }
      if (data.hasOwnProperty('issuerName')) {
        obj['issuerName'] = ApiClient.convertToType(data['issuerName'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = CredentialTypeMetaData.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('multiple')) {
        obj['multiple'] = CredentialTypeMultiple.constructFromObject(data['multiple']);
      }
      if (data.hasOwnProperty('onDelete')) {
        obj['onDelete'] = CredentialTypeOnDelete.constructFromObject(data['onDelete']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CredentialType</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialType</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of CredentialType.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['cardDesignTemplate'] && !(typeof data['cardDesignTemplate'] === 'string' || data['cardDesignTemplate'] instanceof String)) {
      throw new Error("Expected the field `cardDesignTemplate` to be a primitive type in the JSON string but got " + data['cardDesignTemplate']);
    }
    // ensure the json data is a string
    if (data['cardType'] && !(typeof data['cardType'] === 'string' || data['cardType'] instanceof String)) {
      throw new Error("Expected the field `cardType` to be a primitive type in the JSON string but got " + data['cardType']);
    }
    // ensure the json data is a string
    if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
      throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
    }
    // ensure the json data is a string
    if (data['deletedAt'] && !(typeof data['deletedAt'] === 'string' || data['deletedAt'] instanceof String)) {
      throw new Error("Expected the field `deletedAt` to be a primitive type in the JSON string but got " + data['deletedAt']);
    }
    // validate the optional field `environment`
    if (data['environment']) {
      // data not null
      ObjectEnvironment.validateJSON(data['environment']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // validate the optional field `issuer`
    if (data['issuer']) {
      // data not null
      ObjectIssuer.validateJSON(data['issuer']);
    }
    // ensure the json data is a string
    if (data['issuerName'] && !(typeof data['issuerName'] === 'string' || data['issuerName'] instanceof String)) {
      throw new Error("Expected the field `issuerName` to be a primitive type in the JSON string but got " + data['issuerName']);
    }
    // validate the optional field `metadata`
    if (data['metadata']) {
      // data not null
      CredentialTypeMetaData.validateJSON(data['metadata']);
    }
    // validate the optional field `multiple`
    if (data['multiple']) {
      // data not null
      CredentialTypeMultiple.validateJSON(data['multiple']);
    }
    // validate the optional field `onDelete`
    if (data['onDelete']) {
      // data not null
      CredentialTypeOnDelete.validateJSON(data['onDelete']);
    }
    // ensure the json data is a string
    if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
      throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
    }
    return true;
  }
}
CredentialType.RequiredProperties = ["cardDesignTemplate", "metadata", "title"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
CredentialType.prototype['_links'] = undefined;

/**
 * A string that specifies an SVG formatted image containing placeholders for the credential fields that need to be displayed in the image.
 * @member {String} cardDesignTemplate
 */
CredentialType.prototype['cardDesignTemplate'] = undefined;

/**
 * A string that specifies the descriptor of the credential type. Can be non-identity types such as proof of employment or proof of insurance.
 * @member {String} cardType
 */
CredentialType.prototype['cardType'] = undefined;

/**
 * A string that specifies the date and time the credential type was created.
 * @member {Date} createdAt
 */
CredentialType.prototype['createdAt'] = undefined;

/**
 * A string that specifies the description of the credential type.
 * @member {String} description
 */
CredentialType.prototype['description'] = undefined;

/**
 * A string that specifies the date and time the credential type was deleted. Note - a deletion of a credential type is a \"soft delete\".
 * @member {String} deletedAt
 */
CredentialType.prototype['deletedAt'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
CredentialType.prototype['environment'] = undefined;

/**
 * A string that specifies the identifier (UUID) associated with the credential type.
 * @member {String} id
 */
CredentialType.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectIssuer} issuer
 */
CredentialType.prototype['issuer'] = undefined;

/**
 * v issuer name associated with the card, can differ from title.
 * @member {String} issuerName
 */
CredentialType.prototype['issuerName'] = undefined;

/**
 * @member {module:model/CredentialTypeMetaData} metadata
 */
CredentialType.prototype['metadata'] = undefined;

/**
 * @member {module:model/CredentialTypeMultiple} multiple
 */
CredentialType.prototype['multiple'] = undefined;

/**
 * @member {module:model/CredentialTypeOnDelete} onDelete
 */
CredentialType.prototype['onDelete'] = undefined;

/**
 * A string that specifies the title of the credential. Verification sites are expected to be able to request the issued credential from the compatible wallet app using the title.
 * @member {String} title
 */
CredentialType.prototype['title'] = undefined;

/**
 * A string that specifies the date and time the credential type was last updated; can be null.
 * @member {Date} updatedAt
 */
CredentialType.prototype['updatedAt'] = undefined;
export default CredentialType;