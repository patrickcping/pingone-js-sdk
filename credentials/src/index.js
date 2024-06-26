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


import ApiClient from './ApiClient';
import CredentialDigitalWallet from './model/CredentialDigitalWallet';
import CredentialDigitalWalletApplication from './model/CredentialDigitalWalletApplication';
import CredentialDigitalWalletDigitalWalletApplication from './model/CredentialDigitalWalletDigitalWalletApplication';
import CredentialDigitalWalletNotification from './model/CredentialDigitalWalletNotification';
import CredentialDigitalWalletNotificationResultsInner from './model/CredentialDigitalWalletNotificationResultsInner';
import CredentialDigitalWalletNotificationResultsInnerError from './model/CredentialDigitalWalletNotificationResultsInnerError';
import CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner from './model/CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner';
import CredentialDigitalWalletNotificationResultsInnerNotification from './model/CredentialDigitalWalletNotificationResultsInnerNotification';
import CredentialDigitalWalletNotificationTemplate from './model/CredentialDigitalWalletNotificationTemplate';
import CredentialDigitalWalletPairingSession from './model/CredentialDigitalWalletPairingSession';
import CredentialDigitalWalletUser from './model/CredentialDigitalWalletUser';
import CredentialIssuanceRule from './model/CredentialIssuanceRule';
import CredentialIssuanceRuleAutomation from './model/CredentialIssuanceRuleAutomation';
import CredentialIssuanceRuleCredentialType from './model/CredentialIssuanceRuleCredentialType';
import CredentialIssuanceRuleDigitalWalletApplication from './model/CredentialIssuanceRuleDigitalWalletApplication';
import CredentialIssuanceRuleFilter from './model/CredentialIssuanceRuleFilter';
import CredentialIssuanceRuleNotification from './model/CredentialIssuanceRuleNotification';
import CredentialIssuanceRuleNotificationTemplate from './model/CredentialIssuanceRuleNotificationTemplate';
import CredentialIssuanceRuleStagedChange from './model/CredentialIssuanceRuleStagedChange';
import CredentialIssuanceRuleStagedChangeStagedChanges from './model/CredentialIssuanceRuleStagedChangeStagedChanges';
import CredentialIssuanceRuleStagedChangeStagedChangesCredentialType from './model/CredentialIssuanceRuleStagedChangeStagedChangesCredentialType';
import CredentialIssuanceRuleStagedChangeStagedChangesIssuanceRule from './model/CredentialIssuanceRuleStagedChangeStagedChangesIssuanceRule';
import CredentialIssuanceRuleStagedChangeStagedChangesUser from './model/CredentialIssuanceRuleStagedChangeStagedChangesUser';
import CredentialIssuanceRuleUsageCounts from './model/CredentialIssuanceRuleUsageCounts';
import CredentialIssuanceRuleUsageDetails from './model/CredentialIssuanceRuleUsageDetails';
import CredentialIssuanceRuleUsageInner from './model/CredentialIssuanceRuleUsageInner';
import CredentialIssuanceRuleUsageInnerCredential from './model/CredentialIssuanceRuleUsageInnerCredential';
import CredentialIssuanceRuleUsageInnerUser from './model/CredentialIssuanceRuleUsageInnerUser';
import CredentialIssuerProfile from './model/CredentialIssuerProfile';
import CredentialIssuerProfileApplicationInstance from './model/CredentialIssuerProfileApplicationInstance';
import CredentialType from './model/CredentialType';
import CredentialTypeMetaData from './model/CredentialTypeMetaData';
import CredentialTypeMetaDataFieldsInner from './model/CredentialTypeMetaDataFieldsInner';
import CredentialTypeMultiple from './model/CredentialTypeMultiple';
import CredentialTypeOnDelete from './model/CredentialTypeOnDelete';
import DigitalWalletApplication from './model/DigitalWalletApplication';
import EntityArray from './model/EntityArray';
import EntityArrayEmbedded from './model/EntityArrayEmbedded';
import EntityArrayEmbeddedItemsInner from './model/EntityArrayEmbeddedItemsInner';
import EnumCDigitalWalletProvisionedCredentialWalletAction from './model/EnumCDigitalWalletProvisionedCredentialWalletAction';
import EnumCredentialIssuanceRuleAutomationMethod from './model/EnumCredentialIssuanceRuleAutomationMethod';
import EnumCredentialIssuanceRuleNotificationMethod from './model/EnumCredentialIssuanceRuleNotificationMethod';
import EnumCredentialIssuanceRuleStagedChangeAction from './model/EnumCredentialIssuanceRuleStagedChangeAction';
import EnumCredentialIssuanceRuleStatus from './model/EnumCredentialIssuanceRuleStatus';
import EnumCredentialTypeMetaDataFieldsFileSupport from './model/EnumCredentialTypeMetaDataFieldsFileSupport';
import EnumCredentialTypeMetaDataFieldsType from './model/EnumCredentialTypeMetaDataFieldsType';
import LinksHATEOAS from './model/LinksHATEOAS';
import LinksHATEOASNext from './model/LinksHATEOASNext';
import LinksHATEOASSelf from './model/LinksHATEOASSelf';
import ObjectApplication from './model/ObjectApplication';
import ObjectEnvironment from './model/ObjectEnvironment';
import ObjectIssuer from './model/ObjectIssuer';
import ObjectOrganization from './model/ObjectOrganization';
import ObjectPopulation from './model/ObjectPopulation';
import P1Error from './model/P1Error';
import P1ErrorDetailsInner from './model/P1ErrorDetailsInner';
import P1ErrorDetailsInnerInnerError from './model/P1ErrorDetailsInnerInnerError';
import ProvisionedCredential from './model/ProvisionedCredential';
import ProvisionedCredentialClaimReference from './model/ProvisionedCredentialClaimReference';
import ProvisionedCredentialCredential from './model/ProvisionedCredentialCredential';
import ProvisionedCredentialUser from './model/ProvisionedCredentialUser';
import ProvisionedCredentialWalletActionsInner from './model/ProvisionedCredentialWalletActionsInner';
import UserCredential from './model/UserCredential';
import UserCredentialUserdata from './model/UserCredentialUserdata';
import CredentialIssuanceRulesApi from './api/CredentialIssuanceRulesApi';
import CredentialIssuersApi from './api/CredentialIssuersApi';
import CredentialTypesApi from './api/CredentialTypesApi';
import DigitalWalletAppsApi from './api/DigitalWalletAppsApi';
import DigitalWalletsApi from './api/DigitalWalletsApi';
import UserCredentialsApi from './api/UserCredentialsApi';


/**
* The PingOne Platform API covering the PingOne Credentials service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PingOnePlatformApiCredentials = require('index'); // See note below*.
* var xxxSvc = new PingOnePlatformApiCredentials.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PingOnePlatformApiCredentials.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PingOnePlatformApiCredentials.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PingOnePlatformApiCredentials.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2023-06-29
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CredentialDigitalWallet model constructor.
     * @property {module:model/CredentialDigitalWallet}
     */
    CredentialDigitalWallet,

    /**
     * The CredentialDigitalWalletApplication model constructor.
     * @property {module:model/CredentialDigitalWalletApplication}
     */
    CredentialDigitalWalletApplication,

    /**
     * The CredentialDigitalWalletDigitalWalletApplication model constructor.
     * @property {module:model/CredentialDigitalWalletDigitalWalletApplication}
     */
    CredentialDigitalWalletDigitalWalletApplication,

    /**
     * The CredentialDigitalWalletNotification model constructor.
     * @property {module:model/CredentialDigitalWalletNotification}
     */
    CredentialDigitalWalletNotification,

    /**
     * The CredentialDigitalWalletNotificationResultsInner model constructor.
     * @property {module:model/CredentialDigitalWalletNotificationResultsInner}
     */
    CredentialDigitalWalletNotificationResultsInner,

    /**
     * The CredentialDigitalWalletNotificationResultsInnerError model constructor.
     * @property {module:model/CredentialDigitalWalletNotificationResultsInnerError}
     */
    CredentialDigitalWalletNotificationResultsInnerError,

    /**
     * The CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner model constructor.
     * @property {module:model/CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner}
     */
    CredentialDigitalWalletNotificationResultsInnerErrorDetailsInner,

    /**
     * The CredentialDigitalWalletNotificationResultsInnerNotification model constructor.
     * @property {module:model/CredentialDigitalWalletNotificationResultsInnerNotification}
     */
    CredentialDigitalWalletNotificationResultsInnerNotification,

    /**
     * The CredentialDigitalWalletNotificationTemplate model constructor.
     * @property {module:model/CredentialDigitalWalletNotificationTemplate}
     */
    CredentialDigitalWalletNotificationTemplate,

    /**
     * The CredentialDigitalWalletPairingSession model constructor.
     * @property {module:model/CredentialDigitalWalletPairingSession}
     */
    CredentialDigitalWalletPairingSession,

    /**
     * The CredentialDigitalWalletUser model constructor.
     * @property {module:model/CredentialDigitalWalletUser}
     */
    CredentialDigitalWalletUser,

    /**
     * The CredentialIssuanceRule model constructor.
     * @property {module:model/CredentialIssuanceRule}
     */
    CredentialIssuanceRule,

    /**
     * The CredentialIssuanceRuleAutomation model constructor.
     * @property {module:model/CredentialIssuanceRuleAutomation}
     */
    CredentialIssuanceRuleAutomation,

    /**
     * The CredentialIssuanceRuleCredentialType model constructor.
     * @property {module:model/CredentialIssuanceRuleCredentialType}
     */
    CredentialIssuanceRuleCredentialType,

    /**
     * The CredentialIssuanceRuleDigitalWalletApplication model constructor.
     * @property {module:model/CredentialIssuanceRuleDigitalWalletApplication}
     */
    CredentialIssuanceRuleDigitalWalletApplication,

    /**
     * The CredentialIssuanceRuleFilter model constructor.
     * @property {module:model/CredentialIssuanceRuleFilter}
     */
    CredentialIssuanceRuleFilter,

    /**
     * The CredentialIssuanceRuleNotification model constructor.
     * @property {module:model/CredentialIssuanceRuleNotification}
     */
    CredentialIssuanceRuleNotification,

    /**
     * The CredentialIssuanceRuleNotificationTemplate model constructor.
     * @property {module:model/CredentialIssuanceRuleNotificationTemplate}
     */
    CredentialIssuanceRuleNotificationTemplate,

    /**
     * The CredentialIssuanceRuleStagedChange model constructor.
     * @property {module:model/CredentialIssuanceRuleStagedChange}
     */
    CredentialIssuanceRuleStagedChange,

    /**
     * The CredentialIssuanceRuleStagedChangeStagedChanges model constructor.
     * @property {module:model/CredentialIssuanceRuleStagedChangeStagedChanges}
     */
    CredentialIssuanceRuleStagedChangeStagedChanges,

    /**
     * The CredentialIssuanceRuleStagedChangeStagedChangesCredentialType model constructor.
     * @property {module:model/CredentialIssuanceRuleStagedChangeStagedChangesCredentialType}
     */
    CredentialIssuanceRuleStagedChangeStagedChangesCredentialType,

    /**
     * The CredentialIssuanceRuleStagedChangeStagedChangesIssuanceRule model constructor.
     * @property {module:model/CredentialIssuanceRuleStagedChangeStagedChangesIssuanceRule}
     */
    CredentialIssuanceRuleStagedChangeStagedChangesIssuanceRule,

    /**
     * The CredentialIssuanceRuleStagedChangeStagedChangesUser model constructor.
     * @property {module:model/CredentialIssuanceRuleStagedChangeStagedChangesUser}
     */
    CredentialIssuanceRuleStagedChangeStagedChangesUser,

    /**
     * The CredentialIssuanceRuleUsageCounts model constructor.
     * @property {module:model/CredentialIssuanceRuleUsageCounts}
     */
    CredentialIssuanceRuleUsageCounts,

    /**
     * The CredentialIssuanceRuleUsageDetails model constructor.
     * @property {module:model/CredentialIssuanceRuleUsageDetails}
     */
    CredentialIssuanceRuleUsageDetails,

    /**
     * The CredentialIssuanceRuleUsageInner model constructor.
     * @property {module:model/CredentialIssuanceRuleUsageInner}
     */
    CredentialIssuanceRuleUsageInner,

    /**
     * The CredentialIssuanceRuleUsageInnerCredential model constructor.
     * @property {module:model/CredentialIssuanceRuleUsageInnerCredential}
     */
    CredentialIssuanceRuleUsageInnerCredential,

    /**
     * The CredentialIssuanceRuleUsageInnerUser model constructor.
     * @property {module:model/CredentialIssuanceRuleUsageInnerUser}
     */
    CredentialIssuanceRuleUsageInnerUser,

    /**
     * The CredentialIssuerProfile model constructor.
     * @property {module:model/CredentialIssuerProfile}
     */
    CredentialIssuerProfile,

    /**
     * The CredentialIssuerProfileApplicationInstance model constructor.
     * @property {module:model/CredentialIssuerProfileApplicationInstance}
     */
    CredentialIssuerProfileApplicationInstance,

    /**
     * The CredentialType model constructor.
     * @property {module:model/CredentialType}
     */
    CredentialType,

    /**
     * The CredentialTypeMetaData model constructor.
     * @property {module:model/CredentialTypeMetaData}
     */
    CredentialTypeMetaData,

    /**
     * The CredentialTypeMetaDataFieldsInner model constructor.
     * @property {module:model/CredentialTypeMetaDataFieldsInner}
     */
    CredentialTypeMetaDataFieldsInner,

    /**
     * The CredentialTypeMultiple model constructor.
     * @property {module:model/CredentialTypeMultiple}
     */
    CredentialTypeMultiple,

    /**
     * The CredentialTypeOnDelete model constructor.
     * @property {module:model/CredentialTypeOnDelete}
     */
    CredentialTypeOnDelete,

    /**
     * The DigitalWalletApplication model constructor.
     * @property {module:model/DigitalWalletApplication}
     */
    DigitalWalletApplication,

    /**
     * The EntityArray model constructor.
     * @property {module:model/EntityArray}
     */
    EntityArray,

    /**
     * The EntityArrayEmbedded model constructor.
     * @property {module:model/EntityArrayEmbedded}
     */
    EntityArrayEmbedded,

    /**
     * The EntityArrayEmbeddedItemsInner model constructor.
     * @property {module:model/EntityArrayEmbeddedItemsInner}
     */
    EntityArrayEmbeddedItemsInner,

    /**
     * The EnumCDigitalWalletProvisionedCredentialWalletAction model constructor.
     * @property {module:model/EnumCDigitalWalletProvisionedCredentialWalletAction}
     */
    EnumCDigitalWalletProvisionedCredentialWalletAction,

    /**
     * The EnumCredentialIssuanceRuleAutomationMethod model constructor.
     * @property {module:model/EnumCredentialIssuanceRuleAutomationMethod}
     */
    EnumCredentialIssuanceRuleAutomationMethod,

    /**
     * The EnumCredentialIssuanceRuleNotificationMethod model constructor.
     * @property {module:model/EnumCredentialIssuanceRuleNotificationMethod}
     */
    EnumCredentialIssuanceRuleNotificationMethod,

    /**
     * The EnumCredentialIssuanceRuleStagedChangeAction model constructor.
     * @property {module:model/EnumCredentialIssuanceRuleStagedChangeAction}
     */
    EnumCredentialIssuanceRuleStagedChangeAction,

    /**
     * The EnumCredentialIssuanceRuleStatus model constructor.
     * @property {module:model/EnumCredentialIssuanceRuleStatus}
     */
    EnumCredentialIssuanceRuleStatus,

    /**
     * The EnumCredentialTypeMetaDataFieldsFileSupport model constructor.
     * @property {module:model/EnumCredentialTypeMetaDataFieldsFileSupport}
     */
    EnumCredentialTypeMetaDataFieldsFileSupport,

    /**
     * The EnumCredentialTypeMetaDataFieldsType model constructor.
     * @property {module:model/EnumCredentialTypeMetaDataFieldsType}
     */
    EnumCredentialTypeMetaDataFieldsType,

    /**
     * The LinksHATEOAS model constructor.
     * @property {module:model/LinksHATEOAS}
     */
    LinksHATEOAS,

    /**
     * The LinksHATEOASNext model constructor.
     * @property {module:model/LinksHATEOASNext}
     */
    LinksHATEOASNext,

    /**
     * The LinksHATEOASSelf model constructor.
     * @property {module:model/LinksHATEOASSelf}
     */
    LinksHATEOASSelf,

    /**
     * The ObjectApplication model constructor.
     * @property {module:model/ObjectApplication}
     */
    ObjectApplication,

    /**
     * The ObjectEnvironment model constructor.
     * @property {module:model/ObjectEnvironment}
     */
    ObjectEnvironment,

    /**
     * The ObjectIssuer model constructor.
     * @property {module:model/ObjectIssuer}
     */
    ObjectIssuer,

    /**
     * The ObjectOrganization model constructor.
     * @property {module:model/ObjectOrganization}
     */
    ObjectOrganization,

    /**
     * The ObjectPopulation model constructor.
     * @property {module:model/ObjectPopulation}
     */
    ObjectPopulation,

    /**
     * The P1Error model constructor.
     * @property {module:model/P1Error}
     */
    P1Error,

    /**
     * The P1ErrorDetailsInner model constructor.
     * @property {module:model/P1ErrorDetailsInner}
     */
    P1ErrorDetailsInner,

    /**
     * The P1ErrorDetailsInnerInnerError model constructor.
     * @property {module:model/P1ErrorDetailsInnerInnerError}
     */
    P1ErrorDetailsInnerInnerError,

    /**
     * The ProvisionedCredential model constructor.
     * @property {module:model/ProvisionedCredential}
     */
    ProvisionedCredential,

    /**
     * The ProvisionedCredentialClaimReference model constructor.
     * @property {module:model/ProvisionedCredentialClaimReference}
     */
    ProvisionedCredentialClaimReference,

    /**
     * The ProvisionedCredentialCredential model constructor.
     * @property {module:model/ProvisionedCredentialCredential}
     */
    ProvisionedCredentialCredential,

    /**
     * The ProvisionedCredentialUser model constructor.
     * @property {module:model/ProvisionedCredentialUser}
     */
    ProvisionedCredentialUser,

    /**
     * The ProvisionedCredentialWalletActionsInner model constructor.
     * @property {module:model/ProvisionedCredentialWalletActionsInner}
     */
    ProvisionedCredentialWalletActionsInner,

    /**
     * The UserCredential model constructor.
     * @property {module:model/UserCredential}
     */
    UserCredential,

    /**
     * The UserCredentialUserdata model constructor.
     * @property {module:model/UserCredentialUserdata}
     */
    UserCredentialUserdata,

    /**
    * The CredentialIssuanceRulesApi service constructor.
    * @property {module:api/CredentialIssuanceRulesApi}
    */
    CredentialIssuanceRulesApi,

    /**
    * The CredentialIssuersApi service constructor.
    * @property {module:api/CredentialIssuersApi}
    */
    CredentialIssuersApi,

    /**
    * The CredentialTypesApi service constructor.
    * @property {module:api/CredentialTypesApi}
    */
    CredentialTypesApi,

    /**
    * The DigitalWalletAppsApi service constructor.
    * @property {module:api/DigitalWalletAppsApi}
    */
    DigitalWalletAppsApi,

    /**
    * The DigitalWalletsApi service constructor.
    * @property {module:api/DigitalWalletsApi}
    */
    DigitalWalletsApi,

    /**
    * The UserCredentialsApi service constructor.
    * @property {module:api/UserCredentialsApi}
    */
    UserCredentialsApi
};
