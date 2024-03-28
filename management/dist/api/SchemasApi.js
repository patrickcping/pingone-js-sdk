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

import ApiClient from "../ApiClient";
import EntityArray from '../model/EntityArray';
import P1Error from '../model/P1Error';
import Schema from '../model/Schema';
import SchemaAttribute from '../model/SchemaAttribute';
import SchemaAttributePatch from '../model/SchemaAttributePatch';

/**
* Schemas service.
* @module api/SchemasApi
* @version 2023-06-29
*/
export default class SchemasApi {
  /**
  * Constructs a new SchemasApi. 
  * @alias module:api/SchemasApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Attribute
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {Object} opts Optional parameters
   * @param {module:model/SchemaAttribute} [schemaAttribute] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SchemaAttribute} and HTTP response
   */
  createAttributeWithHttpInfo(environmentID, schemaID, opts) {
    opts = opts || {};
    let postBody = opts['schemaAttribute'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createAttribute");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling createAttribute");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = SchemaAttribute;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}/attributes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Attribute
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {Object} opts Optional parameters
   * @param {module:model/SchemaAttribute} opts.schemaAttribute 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SchemaAttribute}
   */
  createAttribute(environmentID, schemaID, opts) {
    return this.createAttributeWithHttpInfo(environmentID, schemaID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Attribute
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteAttributeWithHttpInfo(environmentID, schemaID, attributeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteAttribute");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling deleteAttribute");
    }
    // verify the required parameter 'attributeID' is set
    if (attributeID === undefined || attributeID === null) {
      throw new Error("Missing the required parameter 'attributeID' when calling deleteAttribute");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID,
      'attributeID': attributeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Attribute
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteAttribute(environmentID, schemaID, attributeID) {
    return this.deleteAttributeWithHttpInfo(environmentID, schemaID, attributeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All (Schema) Attributes
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllSchemaAttributesWithHttpInfo(environmentID, schemaID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllSchemaAttributes");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling readAllSchemaAttributes");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}/attributes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All (Schema) Attributes
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllSchemaAttributes(environmentID, schemaID) {
    return this.readAllSchemaAttributesWithHttpInfo(environmentID, schemaID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Schemas
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllSchemasWithHttpInfo(environmentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllSchemas");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/schemas', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Schemas
   * @param {String} environmentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllSchemas(environmentID) {
    return this.readAllSchemasWithHttpInfo(environmentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Attribute
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SchemaAttribute} and HTTP response
   */
  readOneAttributeWithHttpInfo(environmentID, schemaID, attributeID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneAttribute");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling readOneAttribute");
    }
    // verify the required parameter 'attributeID' is set
    if (attributeID === undefined || attributeID === null) {
      throw new Error("Missing the required parameter 'attributeID' when calling readOneAttribute");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID,
      'attributeID': attributeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = SchemaAttribute;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Attribute
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SchemaAttribute}
   */
  readOneAttribute(environmentID, schemaID, attributeID) {
    return this.readOneAttributeWithHttpInfo(environmentID, schemaID, attributeID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Schema
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Schema} and HTTP response
   */
  readOneSchemaWithHttpInfo(environmentID, schemaID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneSchema");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling readOneSchema");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Schema;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Schema
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Schema}
   */
  readOneSchema(environmentID, schemaID) {
    return this.readOneSchemaWithHttpInfo(environmentID, schemaID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Attribute (Patch)
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/SchemaAttributePatch} [schemaAttributePatch] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SchemaAttribute} and HTTP response
   */
  updateAttributePatchWithHttpInfo(environmentID, schemaID, attributeID, opts) {
    opts = opts || {};
    let postBody = opts['schemaAttributePatch'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateAttributePatch");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling updateAttributePatch");
    }
    // verify the required parameter 'attributeID' is set
    if (attributeID === undefined || attributeID === null) {
      throw new Error("Missing the required parameter 'attributeID' when calling updateAttributePatch");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID,
      'attributeID': attributeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = SchemaAttribute;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Attribute (Patch)
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/SchemaAttributePatch} opts.schemaAttributePatch 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SchemaAttribute}
   */
  updateAttributePatch(environmentID, schemaID, attributeID, opts) {
    return this.updateAttributePatchWithHttpInfo(environmentID, schemaID, attributeID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Attribute (Put)
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/SchemaAttribute} [schemaAttribute] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SchemaAttribute} and HTTP response
   */
  updateAttributePutWithHttpInfo(environmentID, schemaID, attributeID, opts) {
    opts = opts || {};
    let postBody = opts['schemaAttribute'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateAttributePut");
    }
    // verify the required parameter 'schemaID' is set
    if (schemaID === undefined || schemaID === null) {
      throw new Error("Missing the required parameter 'schemaID' when calling updateAttributePut");
    }
    // verify the required parameter 'attributeID' is set
    if (attributeID === undefined || attributeID === null) {
      throw new Error("Missing the required parameter 'attributeID' when calling updateAttributePut");
    }
    let pathParams = {
      'environmentID': environmentID,
      'schemaID': schemaID,
      'attributeID': attributeID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = SchemaAttribute;
    return this.apiClient.callApi('/environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Attribute (Put)
   * @param {String} environmentID 
   * @param {String} schemaID 
   * @param {String} attributeID 
   * @param {Object} opts Optional parameters
   * @param {module:model/SchemaAttribute} opts.schemaAttribute 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SchemaAttribute}
   */
  updateAttributePut(environmentID, schemaID, attributeID, opts) {
    return this.updateAttributePutWithHttpInfo(environmentID, schemaID, attributeID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}