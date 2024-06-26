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
import ApplicationAttributeMapping from './ApplicationAttributeMapping';
import ApplicationAttributeMappingApplication from './ApplicationAttributeMappingApplication';
import EnumIdentityProviderAttributeMappingType from './EnumIdentityProviderAttributeMappingType';
import EnumIdentityProviderAttributeMappingUpdate from './EnumIdentityProviderAttributeMappingUpdate';
import EnumResourceAttributeType from './EnumResourceAttributeType';
import EnumSchemaAttributeSchemaType from './EnumSchemaAttributeSchemaType';
import IdentityProviderAttribute from './IdentityProviderAttribute';
import IdentityProviderAttributeIdentityProvider from './IdentityProviderAttributeIdentityProvider';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import ResourceAttribute from './ResourceAttribute';
import SchemaAttribute from './SchemaAttribute';
import SchemaAttributeEnumeratedValuesInner from './SchemaAttributeEnumeratedValuesInner';
import SchemaAttributeRegexValidation from './SchemaAttributeRegexValidation';
import SchemaAttributeSchema from './SchemaAttributeSchema';

/**
 * The EntityArrayEmbeddedAttributesInner model module.
 * @module model/EntityArrayEmbeddedAttributesInner
 * @version 2023-06-29
 */
class EntityArrayEmbeddedAttributesInner {
  /**
   * Constructs a new <code>EntityArrayEmbeddedAttributesInner</code>.
   * @alias module:model/EntityArrayEmbeddedAttributesInner
   * @param {(module:model/ApplicationAttributeMapping|module:model/IdentityProviderAttribute|module:model/ResourceAttribute|module:model/SchemaAttribute)} instance The actual instance to initialize EntityArrayEmbeddedAttributesInner.
   */
  constructor(instance = null) {
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "ApplicationAttributeMapping") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        ApplicationAttributeMapping.validateJSON(instance); // throw an exception if no match
        // create ApplicationAttributeMapping from JS object
        this.actualInstance = ApplicationAttributeMapping.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ApplicationAttributeMapping
      errorMessages.push("Failed to construct ApplicationAttributeMapping: " + err);
    }
    try {
      if (typeof instance === "IdentityProviderAttribute") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        IdentityProviderAttribute.validateJSON(instance); // throw an exception if no match
        // create IdentityProviderAttribute from JS object
        this.actualInstance = IdentityProviderAttribute.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into IdentityProviderAttribute
      errorMessages.push("Failed to construct IdentityProviderAttribute: " + err);
    }
    try {
      if (typeof instance === "SchemaAttribute") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        SchemaAttribute.validateJSON(instance); // throw an exception if no match
        // create SchemaAttribute from JS object
        this.actualInstance = SchemaAttribute.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into SchemaAttribute
      errorMessages.push("Failed to construct SchemaAttribute: " + err);
    }
    try {
      if (typeof instance === "ResourceAttribute") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        ResourceAttribute.validateJSON(instance); // throw an exception if no match
        // create ResourceAttribute from JS object
        this.actualInstance = ResourceAttribute.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ResourceAttribute
      errorMessages.push("Failed to construct ResourceAttribute: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `EntityArrayEmbeddedAttributesInner` with oneOf schemas ApplicationAttributeMapping, IdentityProviderAttribute, ResourceAttribute, SchemaAttribute. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `EntityArrayEmbeddedAttributesInner` with oneOf schemas ApplicationAttributeMapping, IdentityProviderAttribute, ResourceAttribute, SchemaAttribute. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>EntityArrayEmbeddedAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityArrayEmbeddedAttributesInner} obj Optional instance to populate.
   * @return {module:model/EntityArrayEmbeddedAttributesInner} The populated <code>EntityArrayEmbeddedAttributesInner</code> instance.
   */
  static constructFromObject(data, obj) {
    return new EntityArrayEmbeddedAttributesInner(data);
  }

  /**
   * Gets the actual instance, which can be <code>ApplicationAttributeMapping</code>, <code>IdentityProviderAttribute</code>, <code>ResourceAttribute</code>, <code>SchemaAttribute</code>.
   * @return {(module:model/ApplicationAttributeMapping|module:model/IdentityProviderAttribute|module:model/ResourceAttribute|module:model/SchemaAttribute)} The actual instance.
   */
  getActualInstance() {
    return this.actualInstance;
  }

  /**
   * Sets the actual instance, which can be <code>ApplicationAttributeMapping</code>, <code>IdentityProviderAttribute</code>, <code>ResourceAttribute</code>, <code>SchemaAttribute</code>.
   * @param {(module:model/ApplicationAttributeMapping|module:model/IdentityProviderAttribute|module:model/ResourceAttribute|module:model/SchemaAttribute)} obj The actual instance.
   */
  setActualInstance(obj) {
    this.actualInstance = EntityArrayEmbeddedAttributesInner.constructFromObject(obj).getActualInstance();
  }

  /**
   * Returns the JSON representation of the actual instance.
   * @return {string}
   */
  toJSON = function () {
    return this.getActualInstance();
  };

  /**
   * Create an instance of EntityArrayEmbeddedAttributesInner from a JSON string.
   * @param {string} json_string JSON string.
   * @return {module:model/EntityArrayEmbeddedAttributesInner} An instance of EntityArrayEmbeddedAttributesInner.
   */
  static fromJSON = function (json_string) {
    return EntityArrayEmbeddedAttributesInner.constructFromObject(JSON.parse(json_string));
  };
}

/**
 * @member {module:model/LinksHATEOAS} _links
 */
EntityArrayEmbeddedAttributesInner.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
EntityArrayEmbeddedAttributesInner.prototype['id'] = undefined;

/**
 * @member {module:model/ApplicationAttributeMappingApplication} application
 */
EntityArrayEmbeddedAttributesInner.prototype['application'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
EntityArrayEmbeddedAttributesInner.prototype['createdAt'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderAttributeMappingType} mappingType
 */
EntityArrayEmbeddedAttributesInner.prototype['mappingType'] = undefined;

/**
 * A string that specifies the name of the custom resource attribute to be included in the access token. The following are reserved names and cannot be used. Thesese reserved names are applicable only when the resource's type property is `OPENID_CONNECT`: - `acr` - `amr` - `aud` - `auth_time` - `client_id` - `env` - `exp` - `iat` - `iss` - `jti` - `org` - `p1.*` (any name starting with the p1. prefix) - `scope` - `sid` - `sub` 
 * @member {String} name
 */
EntityArrayEmbeddedAttributesInner.prototype['name'] = undefined;

/**
 * A boolean that specifies whether or not the attribute is required. Required attributes must be provided a value during create/update. Defaults to false if not provided.
 * @member {Boolean} required
 */
EntityArrayEmbeddedAttributesInner.prototype['required'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
EntityArrayEmbeddedAttributesInner.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the value of the custom resource attribute. This value can be a placeholder that references an attribute in the user schema, expressed as `${user.path.to.value}`, or it can be a static string. Placeholders must be valid, enabled attributes in the environment’s user schema. Examples fo valid values are `${user.email}`, `${user.name.family}`, and `myClaimValueString`
 * @member {String} value
 */
EntityArrayEmbeddedAttributesInner.prototype['value'] = undefined;

/**
 * A URI reference representing the classification of the attribute. Helps the service provider interpret the attribute format.
 * @member {String} nameFormat
 */
EntityArrayEmbeddedAttributesInner.prototype['nameFormat'] = undefined;

/**
 * A boolean that specifies whether the attribute mapping should be available in the ID Token. This property is applicable only when the application's protocol property is `OPENID_CONNECT`. If omitted, the default is `true`. Note that the `idToken` and `userInfo` properties cannot both be set to `false`. At least one of these properties must have a value of `true`.
 * @member {Boolean} idToken
 */
EntityArrayEmbeddedAttributesInner.prototype['idToken'] = undefined;

/**
 * A boolean that specifies whether the attribute mapping should be available through the `/as/userinfo` endpoint. This property is applicable only when the application's protocol property is `OPENID_CONNECT`. If omitted, the default is `true`. Note that the `idToken` and `userInfo` properties cannot both be set to `false`. At least one of these properties must have a value of `true`.
 * @member {Boolean} userInfo
 */
EntityArrayEmbeddedAttributesInner.prototype['userInfo'] = undefined;

/**
 * OIDC resource scope IDs that this attribute mapping is available for exclusively. This setting overrides any global OIDC resource scopes that contain an attribute mapping with the same name. The list can contain only scope IDs that have been granted for the application through the `/grants` endpoint. A null value is accepted for backwards compatibility. However, an empty set is invalid, and one scope ID is expected. If null, the response includes this mapping in the `openid` scope.
 * @member {Array.<String>} oidcScopes
 */
EntityArrayEmbeddedAttributesInner.prototype['oidcScopes'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderAttributeMappingUpdate} update
 */
EntityArrayEmbeddedAttributesInner.prototype['update'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
EntityArrayEmbeddedAttributesInner.prototype['environment'] = undefined;

/**
 * @member {module:model/IdentityProviderAttributeIdentityProvider} identityProvider
 */
EntityArrayEmbeddedAttributesInner.prototype['identityProvider'] = undefined;

/**
 * A string that specifies an optional property that specifies the description of the attribute. If provided, it must not be an empty string. Valid characters consists of any Unicode letter, mark (for example, accent or umlaut), numeric character, punctuation character, or space.
 * @member {String} description
 */
EntityArrayEmbeddedAttributesInner.prototype['description'] = undefined;

/**
 * A string that specifies an optional property that specifies the display name of the attribute such as 'T-shirt size’. If provided, it must not be an empty string. Valid characters consist of any Unicode letter, mark (for example, accent or umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
 * @member {String} displayName
 */
EntityArrayEmbeddedAttributesInner.prototype['displayName'] = undefined;

/**
 * A boolean that specifies whether or not the attribute is enabled. This is a required property for POST and PUT operations; it cannot be omitted or explicitly set to null. Disabled attributes are ignored on create/update and not returned on read.
 * @member {Boolean} enabled
 */
EntityArrayEmbeddedAttributesInner.prototype['enabled'] = undefined;

/**
 * A string that specifies the LDAP attribute.
 * @member {String} ldapAttribute
 */
EntityArrayEmbeddedAttributesInner.prototype['ldapAttribute'] = undefined;

/**
 * @member {module:model/SchemaAttributeSchema} schema
 */
EntityArrayEmbeddedAttributesInner.prototype['schema'] = undefined;

/**
 * @member {module:model/EnumSchemaAttributeSchemaType} schemaType
 */
EntityArrayEmbeddedAttributesInner.prototype['schemaType'] = undefined;

/**
 * The list of sub-attributes of this attribute. Only `COMPLEX` attribute types can have sub-attributes, and only one-level of nesting is allowed. The leaf attribute definition must have a type of `STRING` or `JSON`. A `COMPLEX` attribute definition must have at least one child attribute definition.
 * @member {Array.<module:model/SchemaAttribute>} subAttributes
 */
EntityArrayEmbeddedAttributesInner.prototype['subAttributes'] = undefined;

/**
 * @member {module:model/EnumResourceAttributeType} type
 */
EntityArrayEmbeddedAttributesInner.prototype['type'] = undefined;

/**
 * A boolean that specifies whether or not the attribute must have a unique value within the environment. This is a required property for POST and PUT operations; it cannot be omitted or explicitly set to null.
 * @member {Boolean} unique
 */
EntityArrayEmbeddedAttributesInner.prototype['unique'] = undefined;

/**
 * A boolean that specifies whether the attribute has multiple values or a single one. This value can only change from false to true, as changing from true to false is not allowed. Maximum number of values stored is 1,000.
 * @member {Boolean} multiValued
 */
EntityArrayEmbeddedAttributesInner.prototype['multiValued'] = undefined;

/**
 * @member {Array.<module:model/SchemaAttributeEnumeratedValuesInner>} enumeratedValues
 */
EntityArrayEmbeddedAttributesInner.prototype['enumeratedValues'] = undefined;

/**
 * @member {module:model/SchemaAttributeRegexValidation} regexValidation
 */
EntityArrayEmbeddedAttributesInner.prototype['regexValidation'] = undefined;

/**
 * @member {module:model/IdentityProviderAttributeIdentityProvider} resource
 */
EntityArrayEmbeddedAttributesInner.prototype['resource'] = undefined;
EntityArrayEmbeddedAttributesInner.OneOf = ["ApplicationAttributeMapping", "IdentityProviderAttribute", "ResourceAttribute", "SchemaAttribute"];
export default EntityArrayEmbeddedAttributesInner;