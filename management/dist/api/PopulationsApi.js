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
import Population from '../model/Population';
import PopulationDefaultIdp from '../model/PopulationDefaultIdp';

/**
* Populations service.
* @module api/PopulationsApi
* @version 2023-06-29
*/
export default class PopulationsApi {
  /**
  * Constructs a new PopulationsApi. 
  * @alias module:api/PopulationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Population
   * @param {String} environmentID 
   * @param {module:model/Population} population 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Population} and HTTP response
   */
  createPopulationWithHttpInfo(environmentID, population) {
    let postBody = population;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createPopulation");
    }
    // verify the required parameter 'population' is set
    if (population === undefined || population === null) {
      throw new Error("Missing the required parameter 'population' when calling createPopulation");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Population;
    return this.apiClient.callApi('/environments/{environmentID}/populations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Population
   * @param {String} environmentID 
   * @param {module:model/Population} population 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Population}
   */
  createPopulation(environmentID, population) {
    return this.createPopulationWithHttpInfo(environmentID, population).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Population
   * @param {String} environmentID 
   * @param {String} populationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deletePopulationWithHttpInfo(environmentID, populationID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deletePopulation");
    }
    // verify the required parameter 'populationID' is set
    if (populationID === undefined || populationID === null) {
      throw new Error("Missing the required parameter 'populationID' when calling deletePopulation");
    }
    let pathParams = {
      'environmentID': environmentID,
      'populationID': populationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/populations/{populationID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Population
   * @param {String} environmentID 
   * @param {String} populationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deletePopulation(environmentID, populationID) {
    return this.deletePopulationWithHttpInfo(environmentID, populationID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Populations
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {Number} [limit] Adding a paging value to limit the number of resources displayed per page
   * @param {String} [filter] Adding a SCIM filter for a population ID or population name to display only those resources associated with the specified population. Only the id and name parameters are supported
   * @param {String} [cursor] Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllPopulationsWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllPopulations");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {
      'limit': opts['limit'],
      'filter': opts['filter'],
      'cursor': opts['cursor']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/populations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Populations
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Adding a paging value to limit the number of resources displayed per page
   * @param {String} opts.filter Adding a SCIM filter for a population ID or population name to display only those resources associated with the specified population. Only the id and name parameters are supported
   * @param {String} opts.cursor Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllPopulations(environmentID, opts) {
    return this.readAllPopulationsWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Population
   * @param {String} environmentID 
   * @param {String} populationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Population} and HTTP response
   */
  readOnePopulationWithHttpInfo(environmentID, populationID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOnePopulation");
    }
    // verify the required parameter 'populationID' is set
    if (populationID === undefined || populationID === null) {
      throw new Error("Missing the required parameter 'populationID' when calling readOnePopulation");
    }
    let pathParams = {
      'environmentID': environmentID,
      'populationID': populationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Population;
    return this.apiClient.callApi('/environments/{environmentID}/populations/{populationID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Population
   * @param {String} environmentID 
   * @param {String} populationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Population}
   */
  readOnePopulation(environmentID, populationID) {
    return this.readOnePopulationWithHttpInfo(environmentID, populationID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Population Default Identity Provider
   * @param {String} environmentID 
   * @param {String} populationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PopulationDefaultIdp} and HTTP response
   */
  readOnePopulationDefaultIdpWithHttpInfo(environmentID, populationID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOnePopulationDefaultIdp");
    }
    // verify the required parameter 'populationID' is set
    if (populationID === undefined || populationID === null) {
      throw new Error("Missing the required parameter 'populationID' when calling readOnePopulationDefaultIdp");
    }
    let pathParams = {
      'environmentID': environmentID,
      'populationID': populationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = PopulationDefaultIdp;
    return this.apiClient.callApi('/environments/{environmentID}/populations/{populationID}/defaultIdentityProvider', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Population Default Identity Provider
   * @param {String} environmentID 
   * @param {String} populationID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PopulationDefaultIdp}
   */
  readOnePopulationDefaultIdp(environmentID, populationID) {
    return this.readOnePopulationDefaultIdpWithHttpInfo(environmentID, populationID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Population
   * @param {String} environmentID 
   * @param {String} populationID 
   * @param {Object} opts Optional parameters
   * @param {module:model/Population} [population] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Population} and HTTP response
   */
  updatePopulationWithHttpInfo(environmentID, populationID, opts) {
    opts = opts || {};
    let postBody = opts['population'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updatePopulation");
    }
    // verify the required parameter 'populationID' is set
    if (populationID === undefined || populationID === null) {
      throw new Error("Missing the required parameter 'populationID' when calling updatePopulation");
    }
    let pathParams = {
      'environmentID': environmentID,
      'populationID': populationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Population;
    return this.apiClient.callApi('/environments/{environmentID}/populations/{populationID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Population
   * @param {String} environmentID 
   * @param {String} populationID 
   * @param {Object} opts Optional parameters
   * @param {module:model/Population} opts.population 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Population}
   */
  updatePopulation(environmentID, populationID, opts) {
    return this.updatePopulationWithHttpInfo(environmentID, populationID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Population Default Identity Provider
   * @param {String} environmentID 
   * @param {String} populationID 
   * @param {Object} opts Optional parameters
   * @param {module:model/PopulationDefaultIdp} [populationDefaultIdp] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PopulationDefaultIdp} and HTTP response
   */
  updatePopulationDefaultIdpWithHttpInfo(environmentID, populationID, opts) {
    opts = opts || {};
    let postBody = opts['populationDefaultIdp'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updatePopulationDefaultIdp");
    }
    // verify the required parameter 'populationID' is set
    if (populationID === undefined || populationID === null) {
      throw new Error("Missing the required parameter 'populationID' when calling updatePopulationDefaultIdp");
    }
    let pathParams = {
      'environmentID': environmentID,
      'populationID': populationID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = PopulationDefaultIdp;
    return this.apiClient.callApi('/environments/{environmentID}/populations/{populationID}/defaultIdentityProvider', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Population Default Identity Provider
   * @param {String} environmentID 
   * @param {String} populationID 
   * @param {Object} opts Optional parameters
   * @param {module:model/PopulationDefaultIdp} opts.populationDefaultIdp 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PopulationDefaultIdp}
   */
  updatePopulationDefaultIdp(environmentID, populationID, opts) {
    return this.updatePopulationDefaultIdpWithHttpInfo(environmentID, populationID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}