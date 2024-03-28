/**
 * PingOne Platform API - PingOne Risk
 * The PingOne Platform API covering the PingOne Risk service
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
import EntityArray from './model/EntityArray';
import EntityArrayEmbedded from './model/EntityArrayEmbedded';
import EnumCompletionStatus from './model/EnumCompletionStatus';
import EnumDistanceUnit from './model/EnumDistanceUnit';
import EnumEventSharingType from './model/EnumEventSharingType';
import EnumFlowType from './model/EnumFlowType';
import EnumPredictorCompositeConditionType from './model/EnumPredictorCompositeConditionType';
import EnumPredictorNewDeviceDetectType from './model/EnumPredictorNewDeviceDetectType';
import EnumPredictorType from './model/EnumPredictorType';
import EnumPredictorUnit from './model/EnumPredictorUnit';
import EnumPredictorVelocityFallbackStrategy from './model/EnumPredictorVelocityFallbackStrategy';
import EnumPredictorVelocityMeasure from './model/EnumPredictorVelocityMeasure';
import EnumPredictorVelocityUseType from './model/EnumPredictorVelocityUseType';
import EnumResultType from './model/EnumResultType';
import EnumRiskLevel from './model/EnumRiskLevel';
import EnumRiskPolicyConditionType from './model/EnumRiskPolicyConditionType';
import EnumRiskPolicyResultLevel from './model/EnumRiskPolicyResultLevel';
import EnumRiskPolicySetTriggerType from './model/EnumRiskPolicySetTriggerType';
import EnumThresholdSource from './model/EnumThresholdSource';
import EnumUserRiskBehaviorRiskModel from './model/EnumUserRiskBehaviorRiskModel';
import EnumUserType from './model/EnumUserType';
import LinksHATEOAS from './model/LinksHATEOAS';
import LinksHATEOASNext from './model/LinksHATEOASNext';
import LinksHATEOASSelf from './model/LinksHATEOASSelf';
import ObjectEnvironment from './model/ObjectEnvironment';
import P1Error from './model/P1Error';
import P1ErrorDetailsInner from './model/P1ErrorDetailsInner';
import P1ErrorDetailsInnerInnerError from './model/P1ErrorDetailsInnerInnerError';
import RiskEvaluation from './model/RiskEvaluation';
import RiskEvaluationDetails from './model/RiskEvaluationDetails';
import RiskEvaluationDetailsIpAddressReputation from './model/RiskEvaluationDetailsIpAddressReputation';
import RiskEvaluationDetailsIpVelocityByUser from './model/RiskEvaluationDetailsIpVelocityByUser';
import RiskEvaluationDetailsIpVelocityByUserThreshold from './model/RiskEvaluationDetailsIpVelocityByUserThreshold';
import RiskEvaluationDetailsIpVelocityByUserVelocity from './model/RiskEvaluationDetailsIpVelocityByUserVelocity';
import RiskEvaluationDetailsPreviousSuccessfulTransaction from './model/RiskEvaluationDetailsPreviousSuccessfulTransaction';
import RiskEvaluationDetailsUserBasedRiskBehavior from './model/RiskEvaluationDetailsUserBasedRiskBehavior';
import RiskEvaluationDetailsUserRiskBehavior from './model/RiskEvaluationDetailsUserRiskBehavior';
import RiskEvaluationDetailsUserVelocityByIp from './model/RiskEvaluationDetailsUserVelocityByIp';
import RiskEvaluationDetailsUserVelocityByIpThreshold from './model/RiskEvaluationDetailsUserVelocityByIpThreshold';
import RiskEvaluationDetailsUserVelocityByIpVelocity from './model/RiskEvaluationDetailsUserVelocityByIpVelocity';
import RiskEvaluationEvent from './model/RiskEvaluationEvent';
import RiskEvaluationEventBrowser from './model/RiskEvaluationEventBrowser';
import RiskEvaluationEventEvaluatedFactors from './model/RiskEvaluationEventEvaluatedFactors';
import RiskEvaluationEventFlow from './model/RiskEvaluationEventFlow';
import RiskEvaluationEventSession from './model/RiskEvaluationEventSession';
import RiskEvaluationEventTargetResource from './model/RiskEvaluationEventTargetResource';
import RiskEvaluationEventUser from './model/RiskEvaluationEventUser';
import RiskEvaluationEventUserGroupsInner from './model/RiskEvaluationEventUserGroupsInner';
import RiskEvaluationResult from './model/RiskEvaluationResult';
import RiskEvaluationRiskPolicySet from './model/RiskEvaluationRiskPolicySet';
import RiskPolicy from './model/RiskPolicy';
import RiskPolicyCondition from './model/RiskPolicyCondition';
import RiskPolicyConditionAggregatedScoresInner from './model/RiskPolicyConditionAggregatedScoresInner';
import RiskPolicyConditionAggregatedWeightsInner from './model/RiskPolicyConditionAggregatedWeightsInner';
import RiskPolicyConditionBetween from './model/RiskPolicyConditionBetween';
import RiskPolicyConditionEquals from './model/RiskPolicyConditionEquals';
import RiskPolicyResult from './model/RiskPolicyResult';
import RiskPolicySet from './model/RiskPolicySet';
import RiskPolicySetDefaultResult from './model/RiskPolicySetDefaultResult';
import RiskPolicySetEvaluatedPredictorsInner from './model/RiskPolicySetEvaluatedPredictorsInner';
import RiskPolicySetTriggersInner from './model/RiskPolicySetTriggersInner';
import RiskPredictor from './model/RiskPredictor';
import RiskPredictorAdversaryInTheMiddle from './model/RiskPredictorAdversaryInTheMiddle';
import RiskPredictorAnonymousNetwork from './model/RiskPredictorAnonymousNetwork';
import RiskPredictorBotDetection from './model/RiskPredictorBotDetection';
import RiskPredictorCommon from './model/RiskPredictorCommon';
import RiskPredictorCommonCondition from './model/RiskPredictorCommonCondition';
import RiskPredictorCommonConditionScoresInner from './model/RiskPredictorCommonConditionScoresInner';
import RiskPredictorCommonDefault from './model/RiskPredictorCommonDefault';
import RiskPredictorCommonDefaultResult from './model/RiskPredictorCommonDefaultResult';
import RiskPredictorComposite from './model/RiskPredictorComposite';
import RiskPredictorCompositeAllOfComposition from './model/RiskPredictorCompositeAllOfComposition';
import RiskPredictorCompositeAllOfCompositionsInner from './model/RiskPredictorCompositeAllOfCompositionsInner';
import RiskPredictorCompositeAnd from './model/RiskPredictorCompositeAnd';
import RiskPredictorCompositeCondition from './model/RiskPredictorCompositeCondition';
import RiskPredictorCompositeConditionBase from './model/RiskPredictorCompositeConditionBase';
import RiskPredictorCompositeConditionOneOf from './model/RiskPredictorCompositeConditionOneOf';
import RiskPredictorCompositeConditionOneOf1 from './model/RiskPredictorCompositeConditionOneOf1';
import RiskPredictorCompositeConditionOneOf1Equals from './model/RiskPredictorCompositeConditionOneOf1Equals';
import RiskPredictorCompositeNot from './model/RiskPredictorCompositeNot';
import RiskPredictorCompositeOr from './model/RiskPredictorCompositeOr';
import RiskPredictorCustom from './model/RiskPredictorCustom';
import RiskPredictorCustomAllOfMap from './model/RiskPredictorCustomAllOfMap';
import RiskPredictorCustomItem from './model/RiskPredictorCustomItem';
import RiskPredictorCustomItemBetween from './model/RiskPredictorCustomItemBetween';
import RiskPredictorCustomItemBetweenBetween from './model/RiskPredictorCustomItemBetweenBetween';
import RiskPredictorCustomItemIPRange from './model/RiskPredictorCustomItemIPRange';
import RiskPredictorCustomItemList from './model/RiskPredictorCustomItemList';
import RiskPredictorDevice from './model/RiskPredictorDevice';
import RiskPredictorEmailReputation from './model/RiskPredictorEmailReputation';
import RiskPredictorGeovelocity from './model/RiskPredictorGeovelocity';
import RiskPredictorIPReputation from './model/RiskPredictorIPReputation';
import RiskPredictorUserLocationAnomaly from './model/RiskPredictorUserLocationAnomaly';
import RiskPredictorUserLocationAnomalyAllOfRadius from './model/RiskPredictorUserLocationAnomalyAllOfRadius';
import RiskPredictorUserRiskBehavior from './model/RiskPredictorUserRiskBehavior';
import RiskPredictorUserRiskBehaviorAllOfPredictionModel from './model/RiskPredictorUserRiskBehaviorAllOfPredictionModel';
import RiskPredictorVelocity from './model/RiskPredictorVelocity';
import RiskPredictorVelocityAllOfEvery from './model/RiskPredictorVelocityAllOfEvery';
import RiskPredictorVelocityAllOfFallback from './model/RiskPredictorVelocityAllOfFallback';
import RiskPredictorVelocityAllOfMaxDelay from './model/RiskPredictorVelocityAllOfMaxDelay';
import RiskPredictorVelocityAllOfSlidingWindow from './model/RiskPredictorVelocityAllOfSlidingWindow';
import RiskPredictorVelocityAllOfUse from './model/RiskPredictorVelocityAllOfUse';
import RiskAdvancedPredictorsApi from './api/RiskAdvancedPredictorsApi';
import RiskEvaluationsApi from './api/RiskEvaluationsApi';
import RiskPoliciesApi from './api/RiskPoliciesApi';


/**
* The PingOne Platform API covering the PingOne Risk service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PingOnePlatformApiPingOneRisk = require('index'); // See note below*.
* var xxxSvc = new PingOnePlatformApiPingOneRisk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PingOnePlatformApiPingOneRisk.Yyy(); // Construct a model instance.
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
* var xxxSvc = new PingOnePlatformApiPingOneRisk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PingOnePlatformApiPingOneRisk.Yyy(); // Construct a model instance.
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
     * The EnumCompletionStatus model constructor.
     * @property {module:model/EnumCompletionStatus}
     */
    EnumCompletionStatus,

    /**
     * The EnumDistanceUnit model constructor.
     * @property {module:model/EnumDistanceUnit}
     */
    EnumDistanceUnit,

    /**
     * The EnumEventSharingType model constructor.
     * @property {module:model/EnumEventSharingType}
     */
    EnumEventSharingType,

    /**
     * The EnumFlowType model constructor.
     * @property {module:model/EnumFlowType}
     */
    EnumFlowType,

    /**
     * The EnumPredictorCompositeConditionType model constructor.
     * @property {module:model/EnumPredictorCompositeConditionType}
     */
    EnumPredictorCompositeConditionType,

    /**
     * The EnumPredictorNewDeviceDetectType model constructor.
     * @property {module:model/EnumPredictorNewDeviceDetectType}
     */
    EnumPredictorNewDeviceDetectType,

    /**
     * The EnumPredictorType model constructor.
     * @property {module:model/EnumPredictorType}
     */
    EnumPredictorType,

    /**
     * The EnumPredictorUnit model constructor.
     * @property {module:model/EnumPredictorUnit}
     */
    EnumPredictorUnit,

    /**
     * The EnumPredictorVelocityFallbackStrategy model constructor.
     * @property {module:model/EnumPredictorVelocityFallbackStrategy}
     */
    EnumPredictorVelocityFallbackStrategy,

    /**
     * The EnumPredictorVelocityMeasure model constructor.
     * @property {module:model/EnumPredictorVelocityMeasure}
     */
    EnumPredictorVelocityMeasure,

    /**
     * The EnumPredictorVelocityUseType model constructor.
     * @property {module:model/EnumPredictorVelocityUseType}
     */
    EnumPredictorVelocityUseType,

    /**
     * The EnumResultType model constructor.
     * @property {module:model/EnumResultType}
     */
    EnumResultType,

    /**
     * The EnumRiskLevel model constructor.
     * @property {module:model/EnumRiskLevel}
     */
    EnumRiskLevel,

    /**
     * The EnumRiskPolicyConditionType model constructor.
     * @property {module:model/EnumRiskPolicyConditionType}
     */
    EnumRiskPolicyConditionType,

    /**
     * The EnumRiskPolicyResultLevel model constructor.
     * @property {module:model/EnumRiskPolicyResultLevel}
     */
    EnumRiskPolicyResultLevel,

    /**
     * The EnumRiskPolicySetTriggerType model constructor.
     * @property {module:model/EnumRiskPolicySetTriggerType}
     */
    EnumRiskPolicySetTriggerType,

    /**
     * The EnumThresholdSource model constructor.
     * @property {module:model/EnumThresholdSource}
     */
    EnumThresholdSource,

    /**
     * The EnumUserRiskBehaviorRiskModel model constructor.
     * @property {module:model/EnumUserRiskBehaviorRiskModel}
     */
    EnumUserRiskBehaviorRiskModel,

    /**
     * The EnumUserType model constructor.
     * @property {module:model/EnumUserType}
     */
    EnumUserType,

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
     * The ObjectEnvironment model constructor.
     * @property {module:model/ObjectEnvironment}
     */
    ObjectEnvironment,

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
     * The RiskEvaluation model constructor.
     * @property {module:model/RiskEvaluation}
     */
    RiskEvaluation,

    /**
     * The RiskEvaluationDetails model constructor.
     * @property {module:model/RiskEvaluationDetails}
     */
    RiskEvaluationDetails,

    /**
     * The RiskEvaluationDetailsIpAddressReputation model constructor.
     * @property {module:model/RiskEvaluationDetailsIpAddressReputation}
     */
    RiskEvaluationDetailsIpAddressReputation,

    /**
     * The RiskEvaluationDetailsIpVelocityByUser model constructor.
     * @property {module:model/RiskEvaluationDetailsIpVelocityByUser}
     */
    RiskEvaluationDetailsIpVelocityByUser,

    /**
     * The RiskEvaluationDetailsIpVelocityByUserThreshold model constructor.
     * @property {module:model/RiskEvaluationDetailsIpVelocityByUserThreshold}
     */
    RiskEvaluationDetailsIpVelocityByUserThreshold,

    /**
     * The RiskEvaluationDetailsIpVelocityByUserVelocity model constructor.
     * @property {module:model/RiskEvaluationDetailsIpVelocityByUserVelocity}
     */
    RiskEvaluationDetailsIpVelocityByUserVelocity,

    /**
     * The RiskEvaluationDetailsPreviousSuccessfulTransaction model constructor.
     * @property {module:model/RiskEvaluationDetailsPreviousSuccessfulTransaction}
     */
    RiskEvaluationDetailsPreviousSuccessfulTransaction,

    /**
     * The RiskEvaluationDetailsUserBasedRiskBehavior model constructor.
     * @property {module:model/RiskEvaluationDetailsUserBasedRiskBehavior}
     */
    RiskEvaluationDetailsUserBasedRiskBehavior,

    /**
     * The RiskEvaluationDetailsUserRiskBehavior model constructor.
     * @property {module:model/RiskEvaluationDetailsUserRiskBehavior}
     */
    RiskEvaluationDetailsUserRiskBehavior,

    /**
     * The RiskEvaluationDetailsUserVelocityByIp model constructor.
     * @property {module:model/RiskEvaluationDetailsUserVelocityByIp}
     */
    RiskEvaluationDetailsUserVelocityByIp,

    /**
     * The RiskEvaluationDetailsUserVelocityByIpThreshold model constructor.
     * @property {module:model/RiskEvaluationDetailsUserVelocityByIpThreshold}
     */
    RiskEvaluationDetailsUserVelocityByIpThreshold,

    /**
     * The RiskEvaluationDetailsUserVelocityByIpVelocity model constructor.
     * @property {module:model/RiskEvaluationDetailsUserVelocityByIpVelocity}
     */
    RiskEvaluationDetailsUserVelocityByIpVelocity,

    /**
     * The RiskEvaluationEvent model constructor.
     * @property {module:model/RiskEvaluationEvent}
     */
    RiskEvaluationEvent,

    /**
     * The RiskEvaluationEventBrowser model constructor.
     * @property {module:model/RiskEvaluationEventBrowser}
     */
    RiskEvaluationEventBrowser,

    /**
     * The RiskEvaluationEventEvaluatedFactors model constructor.
     * @property {module:model/RiskEvaluationEventEvaluatedFactors}
     */
    RiskEvaluationEventEvaluatedFactors,

    /**
     * The RiskEvaluationEventFlow model constructor.
     * @property {module:model/RiskEvaluationEventFlow}
     */
    RiskEvaluationEventFlow,

    /**
     * The RiskEvaluationEventSession model constructor.
     * @property {module:model/RiskEvaluationEventSession}
     */
    RiskEvaluationEventSession,

    /**
     * The RiskEvaluationEventTargetResource model constructor.
     * @property {module:model/RiskEvaluationEventTargetResource}
     */
    RiskEvaluationEventTargetResource,

    /**
     * The RiskEvaluationEventUser model constructor.
     * @property {module:model/RiskEvaluationEventUser}
     */
    RiskEvaluationEventUser,

    /**
     * The RiskEvaluationEventUserGroupsInner model constructor.
     * @property {module:model/RiskEvaluationEventUserGroupsInner}
     */
    RiskEvaluationEventUserGroupsInner,

    /**
     * The RiskEvaluationResult model constructor.
     * @property {module:model/RiskEvaluationResult}
     */
    RiskEvaluationResult,

    /**
     * The RiskEvaluationRiskPolicySet model constructor.
     * @property {module:model/RiskEvaluationRiskPolicySet}
     */
    RiskEvaluationRiskPolicySet,

    /**
     * The RiskPolicy model constructor.
     * @property {module:model/RiskPolicy}
     */
    RiskPolicy,

    /**
     * The RiskPolicyCondition model constructor.
     * @property {module:model/RiskPolicyCondition}
     */
    RiskPolicyCondition,

    /**
     * The RiskPolicyConditionAggregatedScoresInner model constructor.
     * @property {module:model/RiskPolicyConditionAggregatedScoresInner}
     */
    RiskPolicyConditionAggregatedScoresInner,

    /**
     * The RiskPolicyConditionAggregatedWeightsInner model constructor.
     * @property {module:model/RiskPolicyConditionAggregatedWeightsInner}
     */
    RiskPolicyConditionAggregatedWeightsInner,

    /**
     * The RiskPolicyConditionBetween model constructor.
     * @property {module:model/RiskPolicyConditionBetween}
     */
    RiskPolicyConditionBetween,

    /**
     * The RiskPolicyConditionEquals model constructor.
     * @property {module:model/RiskPolicyConditionEquals}
     */
    RiskPolicyConditionEquals,

    /**
     * The RiskPolicyResult model constructor.
     * @property {module:model/RiskPolicyResult}
     */
    RiskPolicyResult,

    /**
     * The RiskPolicySet model constructor.
     * @property {module:model/RiskPolicySet}
     */
    RiskPolicySet,

    /**
     * The RiskPolicySetDefaultResult model constructor.
     * @property {module:model/RiskPolicySetDefaultResult}
     */
    RiskPolicySetDefaultResult,

    /**
     * The RiskPolicySetEvaluatedPredictorsInner model constructor.
     * @property {module:model/RiskPolicySetEvaluatedPredictorsInner}
     */
    RiskPolicySetEvaluatedPredictorsInner,

    /**
     * The RiskPolicySetTriggersInner model constructor.
     * @property {module:model/RiskPolicySetTriggersInner}
     */
    RiskPolicySetTriggersInner,

    /**
     * The RiskPredictor model constructor.
     * @property {module:model/RiskPredictor}
     */
    RiskPredictor,

    /**
     * The RiskPredictorAdversaryInTheMiddle model constructor.
     * @property {module:model/RiskPredictorAdversaryInTheMiddle}
     */
    RiskPredictorAdversaryInTheMiddle,

    /**
     * The RiskPredictorAnonymousNetwork model constructor.
     * @property {module:model/RiskPredictorAnonymousNetwork}
     */
    RiskPredictorAnonymousNetwork,

    /**
     * The RiskPredictorBotDetection model constructor.
     * @property {module:model/RiskPredictorBotDetection}
     */
    RiskPredictorBotDetection,

    /**
     * The RiskPredictorCommon model constructor.
     * @property {module:model/RiskPredictorCommon}
     */
    RiskPredictorCommon,

    /**
     * The RiskPredictorCommonCondition model constructor.
     * @property {module:model/RiskPredictorCommonCondition}
     */
    RiskPredictorCommonCondition,

    /**
     * The RiskPredictorCommonConditionScoresInner model constructor.
     * @property {module:model/RiskPredictorCommonConditionScoresInner}
     */
    RiskPredictorCommonConditionScoresInner,

    /**
     * The RiskPredictorCommonDefault model constructor.
     * @property {module:model/RiskPredictorCommonDefault}
     */
    RiskPredictorCommonDefault,

    /**
     * The RiskPredictorCommonDefaultResult model constructor.
     * @property {module:model/RiskPredictorCommonDefaultResult}
     */
    RiskPredictorCommonDefaultResult,

    /**
     * The RiskPredictorComposite model constructor.
     * @property {module:model/RiskPredictorComposite}
     */
    RiskPredictorComposite,

    /**
     * The RiskPredictorCompositeAllOfComposition model constructor.
     * @property {module:model/RiskPredictorCompositeAllOfComposition}
     */
    RiskPredictorCompositeAllOfComposition,

    /**
     * The RiskPredictorCompositeAllOfCompositionsInner model constructor.
     * @property {module:model/RiskPredictorCompositeAllOfCompositionsInner}
     */
    RiskPredictorCompositeAllOfCompositionsInner,

    /**
     * The RiskPredictorCompositeAnd model constructor.
     * @property {module:model/RiskPredictorCompositeAnd}
     */
    RiskPredictorCompositeAnd,

    /**
     * The RiskPredictorCompositeCondition model constructor.
     * @property {module:model/RiskPredictorCompositeCondition}
     */
    RiskPredictorCompositeCondition,

    /**
     * The RiskPredictorCompositeConditionBase model constructor.
     * @property {module:model/RiskPredictorCompositeConditionBase}
     */
    RiskPredictorCompositeConditionBase,

    /**
     * The RiskPredictorCompositeConditionOneOf model constructor.
     * @property {module:model/RiskPredictorCompositeConditionOneOf}
     */
    RiskPredictorCompositeConditionOneOf,

    /**
     * The RiskPredictorCompositeConditionOneOf1 model constructor.
     * @property {module:model/RiskPredictorCompositeConditionOneOf1}
     */
    RiskPredictorCompositeConditionOneOf1,

    /**
     * The RiskPredictorCompositeConditionOneOf1Equals model constructor.
     * @property {module:model/RiskPredictorCompositeConditionOneOf1Equals}
     */
    RiskPredictorCompositeConditionOneOf1Equals,

    /**
     * The RiskPredictorCompositeNot model constructor.
     * @property {module:model/RiskPredictorCompositeNot}
     */
    RiskPredictorCompositeNot,

    /**
     * The RiskPredictorCompositeOr model constructor.
     * @property {module:model/RiskPredictorCompositeOr}
     */
    RiskPredictorCompositeOr,

    /**
     * The RiskPredictorCustom model constructor.
     * @property {module:model/RiskPredictorCustom}
     */
    RiskPredictorCustom,

    /**
     * The RiskPredictorCustomAllOfMap model constructor.
     * @property {module:model/RiskPredictorCustomAllOfMap}
     */
    RiskPredictorCustomAllOfMap,

    /**
     * The RiskPredictorCustomItem model constructor.
     * @property {module:model/RiskPredictorCustomItem}
     */
    RiskPredictorCustomItem,

    /**
     * The RiskPredictorCustomItemBetween model constructor.
     * @property {module:model/RiskPredictorCustomItemBetween}
     */
    RiskPredictorCustomItemBetween,

    /**
     * The RiskPredictorCustomItemBetweenBetween model constructor.
     * @property {module:model/RiskPredictorCustomItemBetweenBetween}
     */
    RiskPredictorCustomItemBetweenBetween,

    /**
     * The RiskPredictorCustomItemIPRange model constructor.
     * @property {module:model/RiskPredictorCustomItemIPRange}
     */
    RiskPredictorCustomItemIPRange,

    /**
     * The RiskPredictorCustomItemList model constructor.
     * @property {module:model/RiskPredictorCustomItemList}
     */
    RiskPredictorCustomItemList,

    /**
     * The RiskPredictorDevice model constructor.
     * @property {module:model/RiskPredictorDevice}
     */
    RiskPredictorDevice,

    /**
     * The RiskPredictorEmailReputation model constructor.
     * @property {module:model/RiskPredictorEmailReputation}
     */
    RiskPredictorEmailReputation,

    /**
     * The RiskPredictorGeovelocity model constructor.
     * @property {module:model/RiskPredictorGeovelocity}
     */
    RiskPredictorGeovelocity,

    /**
     * The RiskPredictorIPReputation model constructor.
     * @property {module:model/RiskPredictorIPReputation}
     */
    RiskPredictorIPReputation,

    /**
     * The RiskPredictorUserLocationAnomaly model constructor.
     * @property {module:model/RiskPredictorUserLocationAnomaly}
     */
    RiskPredictorUserLocationAnomaly,

    /**
     * The RiskPredictorUserLocationAnomalyAllOfRadius model constructor.
     * @property {module:model/RiskPredictorUserLocationAnomalyAllOfRadius}
     */
    RiskPredictorUserLocationAnomalyAllOfRadius,

    /**
     * The RiskPredictorUserRiskBehavior model constructor.
     * @property {module:model/RiskPredictorUserRiskBehavior}
     */
    RiskPredictorUserRiskBehavior,

    /**
     * The RiskPredictorUserRiskBehaviorAllOfPredictionModel model constructor.
     * @property {module:model/RiskPredictorUserRiskBehaviorAllOfPredictionModel}
     */
    RiskPredictorUserRiskBehaviorAllOfPredictionModel,

    /**
     * The RiskPredictorVelocity model constructor.
     * @property {module:model/RiskPredictorVelocity}
     */
    RiskPredictorVelocity,

    /**
     * The RiskPredictorVelocityAllOfEvery model constructor.
     * @property {module:model/RiskPredictorVelocityAllOfEvery}
     */
    RiskPredictorVelocityAllOfEvery,

    /**
     * The RiskPredictorVelocityAllOfFallback model constructor.
     * @property {module:model/RiskPredictorVelocityAllOfFallback}
     */
    RiskPredictorVelocityAllOfFallback,

    /**
     * The RiskPredictorVelocityAllOfMaxDelay model constructor.
     * @property {module:model/RiskPredictorVelocityAllOfMaxDelay}
     */
    RiskPredictorVelocityAllOfMaxDelay,

    /**
     * The RiskPredictorVelocityAllOfSlidingWindow model constructor.
     * @property {module:model/RiskPredictorVelocityAllOfSlidingWindow}
     */
    RiskPredictorVelocityAllOfSlidingWindow,

    /**
     * The RiskPredictorVelocityAllOfUse model constructor.
     * @property {module:model/RiskPredictorVelocityAllOfUse}
     */
    RiskPredictorVelocityAllOfUse,

    /**
    * The RiskAdvancedPredictorsApi service constructor.
    * @property {module:api/RiskAdvancedPredictorsApi}
    */
    RiskAdvancedPredictorsApi,

    /**
    * The RiskEvaluationsApi service constructor.
    * @property {module:api/RiskEvaluationsApi}
    */
    RiskEvaluationsApi,

    /**
    * The RiskPoliciesApi service constructor.
    * @property {module:api/RiskPoliciesApi}
    */
    RiskPoliciesApi
};
