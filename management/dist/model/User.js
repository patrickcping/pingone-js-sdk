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
import EnumUserVerifyStatus from './EnumUserVerifyStatus';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import UserAccount from './UserAccount';
import UserAddress from './UserAddress';
import UserIdentityProvider from './UserIdentityProvider';
import UserLastSignOn from './UserLastSignOn';
import UserLifecycle from './UserLifecycle';
import UserName from './UserName';
import UserPassword from './UserPassword';
import UserPhoto from './UserPhoto';
import UserPopulation from './UserPopulation';

/**
 * The User model module.
 * @module model/User
 * @version 2023-06-29
 */
class User {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @param email {String} A string that specifies the user’s email address, which must be provided and valid. For more information about email address formatting, see section 3.4 of RFC 2822, Internet Message Format.
   * @param username {String} A string that specifies the user name, which must be provided and must be unique within an environment. The username must either be a well-formed email address or a string. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 128 characters (min/max=1/128).
   */
  constructor(email, username) {
    User.initialize(this, email, username);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, email, username) {
    obj['email'] = email;
    obj['username'] = username;
  }

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new User();
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = UserAccount.constructFromObject(data['account']);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = UserAddress.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailVerified')) {
        obj['emailVerified'] = ApiClient.convertToType(data['emailVerified'], 'Boolean');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('identityProvider')) {
        obj['identityProvider'] = UserIdentityProvider.constructFromObject(data['identityProvider']);
      }
      if (data.hasOwnProperty('lastSignOn')) {
        obj['lastSignOn'] = UserLastSignOn.constructFromObject(data['lastSignOn']);
      }
      if (data.hasOwnProperty('lifecycle')) {
        obj['lifecycle'] = UserLifecycle.constructFromObject(data['lifecycle']);
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('memberOfGroupIDs')) {
        obj['memberOfGroupIDs'] = ApiClient.convertToType(data['memberOfGroupIDs'], ['String']);
      }
      if (data.hasOwnProperty('memberOfGroupNames')) {
        obj['memberOfGroupNames'] = ApiClient.convertToType(data['memberOfGroupNames'], ['String']);
      }
      if (data.hasOwnProperty('mfaEnabled')) {
        obj['mfaEnabled'] = ApiClient.convertToType(data['mfaEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('mobilePhone')) {
        obj['mobilePhone'] = ApiClient.convertToType(data['mobilePhone'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = UserName.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = UserPassword.constructFromObject(data['password']);
      }
      if (data.hasOwnProperty('photo')) {
        obj['photo'] = UserPhoto.constructFromObject(data['photo']);
      }
      if (data.hasOwnProperty('population')) {
        obj['population'] = UserPopulation.constructFromObject(data['population']);
      }
      if (data.hasOwnProperty('preferredLanguage')) {
        obj['preferredLanguage'] = ApiClient.convertToType(data['preferredLanguage'], 'String');
      }
      if (data.hasOwnProperty('primaryPhone')) {
        obj['primaryPhone'] = ApiClient.convertToType(data['primaryPhone'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('verifyStatus')) {
        obj['verifyStatus'] = EnumUserVerifyStatus.constructFromObject(data['verifyStatus']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>User</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of User.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `account`
    if (data['account']) {
      // data not null
      UserAccount.validateJSON(data['account']);
    }
    // validate the optional field `address`
    if (data['address']) {
      // data not null
      UserAddress.validateJSON(data['address']);
    }
    // ensure the json data is a string
    if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
      throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
    }
    // validate the optional field `environment`
    if (data['environment']) {
      // data not null
      ObjectEnvironment.validateJSON(data['environment']);
    }
    // ensure the json data is a string
    if (data['externalId'] && !(typeof data['externalId'] === 'string' || data['externalId'] instanceof String)) {
      throw new Error("Expected the field `externalId` to be a primitive type in the JSON string but got " + data['externalId']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // validate the optional field `identityProvider`
    if (data['identityProvider']) {
      // data not null
      UserIdentityProvider.validateJSON(data['identityProvider']);
    }
    // validate the optional field `lastSignOn`
    if (data['lastSignOn']) {
      // data not null
      UserLastSignOn.validateJSON(data['lastSignOn']);
    }
    // validate the optional field `lifecycle`
    if (data['lifecycle']) {
      // data not null
      UserLifecycle.validateJSON(data['lifecycle']);
    }
    // ensure the json data is a string
    if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
      throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
    }
    // ensure the json data is an array
    if (!Array.isArray(data['memberOfGroupIDs'])) {
      throw new Error("Expected the field `memberOfGroupIDs` to be an array in the JSON data but got " + data['memberOfGroupIDs']);
    }
    // ensure the json data is an array
    if (!Array.isArray(data['memberOfGroupNames'])) {
      throw new Error("Expected the field `memberOfGroupNames` to be an array in the JSON data but got " + data['memberOfGroupNames']);
    }
    // ensure the json data is a string
    if (data['mobilePhone'] && !(typeof data['mobilePhone'] === 'string' || data['mobilePhone'] instanceof String)) {
      throw new Error("Expected the field `mobilePhone` to be a primitive type in the JSON string but got " + data['mobilePhone']);
    }
    // validate the optional field `name`
    if (data['name']) {
      // data not null
      UserName.validateJSON(data['name']);
    }
    // ensure the json data is a string
    if (data['nickname'] && !(typeof data['nickname'] === 'string' || data['nickname'] instanceof String)) {
      throw new Error("Expected the field `nickname` to be a primitive type in the JSON string but got " + data['nickname']);
    }
    // validate the optional field `password`
    if (data['password']) {
      // data not null
      UserPassword.validateJSON(data['password']);
    }
    // validate the optional field `photo`
    if (data['photo']) {
      // data not null
      UserPhoto.validateJSON(data['photo']);
    }
    // validate the optional field `population`
    if (data['population']) {
      // data not null
      UserPopulation.validateJSON(data['population']);
    }
    // ensure the json data is a string
    if (data['preferredLanguage'] && !(typeof data['preferredLanguage'] === 'string' || data['preferredLanguage'] instanceof String)) {
      throw new Error("Expected the field `preferredLanguage` to be a primitive type in the JSON string but got " + data['preferredLanguage']);
    }
    // ensure the json data is a string
    if (data['primaryPhone'] && !(typeof data['primaryPhone'] === 'string' || data['primaryPhone'] instanceof String)) {
      throw new Error("Expected the field `primaryPhone` to be a primitive type in the JSON string but got " + data['primaryPhone']);
    }
    // ensure the json data is a string
    if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
      throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
    }
    // ensure the json data is a string
    if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
      throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
    }
    // ensure the json data is a string
    if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
      throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
    }
    // ensure the json data is a string
    if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
      throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
    }
    return true;
  }
}
User.RequiredProperties = ["email", "username"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
User.prototype['_links'] = undefined;

/**
 * @member {module:model/UserAccount} account
 */
User.prototype['account'] = undefined;

/**
 * @member {module:model/UserAddress} address
 */
User.prototype['address'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
User.prototype['createdAt'] = undefined;

/**
 * A string that specifies the user’s email address, which must be provided and valid. For more information about email address formatting, see section 3.4 of RFC 2822, Internet Message Format.
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * Whether the user’s email is verified. An email address can be verified during account verification. If the email address used to request the verification code is the same as the user’s email at verification time (and the verification code is valid), then the email is verified. The value of this property can be set on user import.
 * @member {Boolean} emailVerified
 */
User.prototype['emailVerified'] = undefined;

/**
 * A read-only boolean attribute that specifies whether the user is enabled. This attribute is set to ‘true’ by default when the user is created.
 * @member {Boolean} enabled
 */
User.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
User.prototype['environment'] = undefined;

/**
 * A string that specifies an identifier for the user resource as defined by the provisioning client. This is optional. This may be explicitly set to null when updating a user to unset it. The externalId attribute simplifies the correlation of the user in PingOne with the user’s account in another system of record. The platform does not use this attribute directly in any way, but it is used by Ping Identity’s Data Sync product. It can have a length of no more than 1024 characters (min/max=1/1024).
 * @member {String} externalId
 */
User.prototype['externalId'] = undefined;

/**
 * A string that specifies the user resource’s unique identifier.
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {module:model/UserIdentityProvider} identityProvider
 */
User.prototype['identityProvider'] = undefined;

/**
 * @member {module:model/UserLastSignOn} lastSignOn
 */
User.prototype['lastSignOn'] = undefined;

/**
 * @member {module:model/UserLifecycle} lifecycle
 */
User.prototype['lifecycle'] = undefined;

/**
 * A string that specifies the user’s default location, which is optional. This may be explicitly set to null when updating a user to unset it. This is used for purposes of localizing such items as currency, date time format, or numerical representations. If provided, it must be a valid language tag as defined in RFC 5646. The following are example tags fr, en-US, es-419, az-Arab, man-Nkoo-GN. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} locale
 */
User.prototype['locale'] = undefined;

/**
 * A read-only array of IDs for the groups the user is a member of. This property is returned for GET /environments/{environmentID}/users/{userID} when include=memberOfGroupIDs is appended to the request. This property is not returned with a list of users.
 * @member {Array.<String>} memberOfGroupIDs
 */
User.prototype['memberOfGroupIDs'] = undefined;

/**
 * A read-only array of names for the groups the user is a member of. This property is returned for GET /environments/{environmentID}/users/{userID} when include=memberOfGroupNames is appended to the request. This property is not returned with a list of users.
 * @member {Array.<String>} memberOfGroupNames
 */
User.prototype['memberOfGroupNames'] = undefined;

/**
 * A boolean attribute that specifies whether multi-factor authentication is enabled. This attribute is set to false by default when the user is created. You can set mfaEnabled to true with POST CREATE User, POST CREATE User (Import), or PUT UPDATE User MFA Enabled. You cannot update mfaEnabled with PUT UPDATE User or PATCH UPDATE User.
 * @member {Boolean} mfaEnabled
 */
User.prototype['mfaEnabled'] = undefined;

/**
 * A string that specifies the user’s native phone number, which is optional. This might also match the primaryPhone attribute. This may be explicitly set to null when updating a user to unset it. Valid phone numbers must have at least one number and a maximum character length of 32.
 * @member {String} mobilePhone
 */
User.prototype['mobilePhone'] = undefined;

/**
 * @member {module:model/UserName} name
 */
User.prototype['name'] = undefined;

/**
 * A string that specifies the user’s nickname, which is optional. This can be explicitly set to null when updating a user to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} nickname
 */
User.prototype['nickname'] = undefined;

/**
 * @member {module:model/UserPassword} password
 */
User.prototype['password'] = undefined;

/**
 * @member {module:model/UserPhoto} photo
 */
User.prototype['photo'] = undefined;

/**
 * @member {module:model/UserPopulation} population
 */
User.prototype['population'] = undefined;

/**
 * A string that specifies the user’s preferred written or spoken languages, which are optional. This may be explicitly set to null when updating a user to unset it. If provided, the format of the value must be a valid language range and the same as the HTTP Accept-Language header field (not including Accept-Language:) and is specified in Section 5.3.5 of RFC 7231. For example en-US, en-gb;q=0.8, en;q=0.7.
 * @member {String} preferredLanguage
 */
User.prototype['preferredLanguage'] = undefined;

/**
 * A string that specifies the user’s primary phone number, which is optional. This might also match the mobilePhone attribute. This may be explicitly set to null when updating a user to unset it. Valid phone numbers must have at least one number and a maximum character length of 32.
 * @member {String} primaryPhone
 */
User.prototype['primaryPhone'] = undefined;

/**
 * A string that specifies the user’s time zone, which is optional. This can be explicitly set to null when updating a user to unset it. If provided, it must conform with the IANA Time Zone database format [RFC6557], also known as the `Olson` time zone database format [Olson-TZ] for example, `America/Los_Angeles` (regex `^\\w+/\\w+$`).
 * @member {String} timezone
 */
User.prototype['timezone'] = undefined;

/**
 * A string that specifies the user’s title, which is optional, such as \"Vice President\". This can be explicitly set to null when updating a user to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} title
 */
User.prototype['title'] = undefined;

/**
 * A string that specifies the user’s type, which is optional. This can be explicitly set to null when updating a user to unset it. This attribute is organization-specific and has no special meaning within the PingOne platform. It could have values of \"Contractor\", \"Employee\", \"Intern\", \"Temp\", \"External\", and `Unknown`. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 256 characters (min/max=1/256).
 * @member {String} type
 */
User.prototype['type'] = undefined;

/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
User.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the user name, which must be provided and must be unique within an environment. The username must either be a well-formed email address or a string. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex `^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$`). It can have a length of no more than 128 characters (min/max=1/128).
 * @member {String} username
 */
User.prototype['username'] = undefined;

/**
 * @member {module:model/EnumUserVerifyStatus} verifyStatus
 */
User.prototype['verifyStatus'] = undefined;
export default User;