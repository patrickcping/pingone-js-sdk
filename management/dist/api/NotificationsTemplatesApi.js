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
import EnumTemplateName from '../model/EnumTemplateName';
import P1Error from '../model/P1Error';
import Template from '../model/Template';
import TemplateContent from '../model/TemplateContent';

/**
* NotificationsTemplates service.
* @module api/NotificationsTemplatesApi
* @version 2023-06-29
*/
export default class NotificationsTemplatesApi {
  /**
  * Constructs a new NotificationsTemplatesApi. 
  * @alias module:api/NotificationsTemplatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * CREATE Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {Object} opts Optional parameters
   * @param {module:model/TemplateContent} [templateContent] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateContent} and HTTP response
   */
  createContentWithHttpInfo(environmentID, templateName, opts) {
    opts = opts || {};
    let postBody = opts['templateContent'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling createContent");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling createContent");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = TemplateContent;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * CREATE Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {Object} opts Optional parameters
   * @param {module:model/TemplateContent} opts.templateContent 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateContent}
   */
  createContent(environmentID, templateName, opts) {
    return this.createContentWithHttpInfo(environmentID, templateName, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Bulk Variant Contents
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {Object} opts Optional parameters
   * @param {String} [filter] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteBulkVariantContentsWithHttpInfo(environmentID, templateName, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteBulkVariantContents");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling deleteBulkVariantContents");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName
    };
    let queryParams = {
      'filter': opts['filter']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Bulk Variant Contents
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteBulkVariantContents(environmentID, templateName, opts) {
    return this.deleteBulkVariantContentsWithHttpInfo(environmentID, templateName, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * DELETE Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {String} contentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteContentWithHttpInfo(environmentID, templateName, contentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling deleteContent");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling deleteContent");
    }
    // verify the required parameter 'contentID' is set
    if (contentID === undefined || contentID === null) {
      throw new Error("Missing the required parameter 'contentID' when calling deleteContent");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName,
      'contentID': contentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents/{contentID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * DELETE Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {String} contentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteContent(environmentID, templateName, contentID) {
    return this.deleteContentWithHttpInfo(environmentID, templateName, contentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * PATCH Bulk Variant Contents
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {Object} opts Optional parameters
   * @param {String} [filter] 
   * @param {Object.<String, Object>} [body] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  patchBulkVariantContentsWithHttpInfo(environmentID, templateName, opts) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling patchBulkVariantContents");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling patchBulkVariantContents");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName
    };
    let queryParams = {
      'filter': opts['filter']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * PATCH Bulk Variant Contents
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter 
   * @param {Object.<String, Object>} opts.body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  patchBulkVariantContents(environmentID, templateName, opts) {
    return this.patchBulkVariantContentsWithHttpInfo(environmentID, templateName, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Contents
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllTemplateContentsWithHttpInfo(environmentID, templateName) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllTemplateContents");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling readAllTemplateContents");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Contents
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllTemplateContents(environmentID, templateName) {
    return this.readAllTemplateContentsWithHttpInfo(environmentID, templateName).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ All Templates
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {String} [filter] 
   * @param {String} [order] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityArray} and HTTP response
   */
  readAllTemplatesWithHttpInfo(environmentID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readAllTemplates");
    }
    let pathParams = {
      'environmentID': environmentID
    };
    let queryParams = {
      'filter': opts['filter'],
      'order': opts['order']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = EntityArray;
    return this.apiClient.callApi('/environments/{environmentID}/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ All Templates
   * @param {String} environmentID 
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter 
   * @param {String} opts.order 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityArray}
   */
  readAllTemplates(environmentID, opts) {
    return this.readAllTemplatesWithHttpInfo(environmentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {String} contentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateContent} and HTTP response
   */
  readOneContentWithHttpInfo(environmentID, templateName, contentID) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneContent");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling readOneContent");
    }
    // verify the required parameter 'contentID' is set
    if (contentID === undefined || contentID === null) {
      throw new Error("Missing the required parameter 'contentID' when calling readOneContent");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName,
      'contentID': contentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = TemplateContent;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents/{contentID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {String} contentID 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateContent}
   */
  readOneContent(environmentID, templateName, contentID) {
    return this.readOneContentWithHttpInfo(environmentID, templateName, contentID).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * READ One Template
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Template} and HTTP response
   */
  readOneTemplateWithHttpInfo(environmentID, templateName) {
    let postBody = null;
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling readOneTemplate");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling readOneTemplate");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Template;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * READ One Template
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Template}
   */
  readOneTemplate(environmentID, templateName) {
    return this.readOneTemplateWithHttpInfo(environmentID, templateName).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * UPDATE Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {String} contentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/TemplateContent} [templateContent] 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateContent} and HTTP response
   */
  updateContentWithHttpInfo(environmentID, templateName, contentID, opts) {
    opts = opts || {};
    let postBody = opts['templateContent'];
    // verify the required parameter 'environmentID' is set
    if (environmentID === undefined || environmentID === null) {
      throw new Error("Missing the required parameter 'environmentID' when calling updateContent");
    }
    // verify the required parameter 'templateName' is set
    if (templateName === undefined || templateName === null) {
      throw new Error("Missing the required parameter 'templateName' when calling updateContent");
    }
    // verify the required parameter 'contentID' is set
    if (contentID === undefined || contentID === null) {
      throw new Error("Missing the required parameter 'contentID' when calling updateContent");
    }
    let pathParams = {
      'environmentID': environmentID,
      'templateName': templateName,
      'contentID': contentID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = TemplateContent;
    return this.apiClient.callApi('/environments/{environmentID}/templates/{templateName}/contents/{contentID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }

  /**
   * UPDATE Content
   * @param {String} environmentID 
   * @param {module:model/EnumTemplateName} templateName 
   * @param {String} contentID 
   * @param {Object} opts Optional parameters
   * @param {module:model/TemplateContent} opts.templateContent 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateContent}
   */
  updateContent(environmentID, templateName, contentID, opts) {
    return this.updateContentWithHttpInfo(environmentID, templateName, contentID, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}