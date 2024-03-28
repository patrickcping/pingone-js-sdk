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
import Agreement from './Agreement';
import AgreementLanguageRevision from './AgreementLanguageRevision';
import AlertChannel from './AlertChannel';
import ApplicationResourceGrant from './ApplicationResourceGrant';
import BrandingTheme from './BrandingTheme';
import Certificate from './Certificate';
import CustomDomain from './CustomDomain';
import EmailDomain from './EmailDomain';
import EmailDomainTrustedEmail from './EmailDomainTrustedEmail';
import EntityArrayEmbeddedAttributesInner from './EntityArrayEmbeddedAttributesInner';
import EntityArrayEmbeddedGatewaysInner from './EntityArrayEmbeddedGatewaysInner';
import EntityArrayEmbeddedLanguagesInner from './EntityArrayEmbeddedLanguagesInner';
import Environment from './Environment';
import FlowPolicy from './FlowPolicy';
import FlowPolicyAssignment from './FlowPolicyAssignment';
import Form from './Form';
import GatewayCredential from './GatewayCredential';
import GatewayInstance from './GatewayInstance';
import Group from './Group';
import GroupMembership from './GroupMembership';
import IdentityPropagationPlan from './IdentityPropagationPlan';
import IdentityProvider from './IdentityProvider';
import KeyRotationPolicy from './KeyRotationPolicy';
import License from './License';
import NotificationsPolicy from './NotificationsPolicy';
import NotificationsSettingsPhoneDeliverySettings from './NotificationsSettingsPhoneDeliverySettings';
import Organization from './Organization';
import PasswordPolicy from './PasswordPolicy';
import Population from './Population';
import ReadOneApplication200Response from './ReadOneApplication200Response';
import Resource from './Resource';
import ResourceScope from './ResourceScope';
import Role from './Role';
import RoleAssignment from './RoleAssignment';
import Schema from './Schema';
import SignOnPolicy from './SignOnPolicy';
import SignOnPolicyAction from './SignOnPolicyAction';
import SignOnPolicyAssignment from './SignOnPolicyAssignment';
import Subscription from './Subscription';
import Template from './Template';
import TemplateContent from './TemplateContent';
import User from './User';

/**
 * The EntityArrayEmbedded model module.
 * @module model/EntityArrayEmbedded
 * @version 2023-06-29
 */
class EntityArrayEmbedded {
    /**
     * Constructs a new <code>EntityArrayEmbedded</code>.
     * @alias module:model/EntityArrayEmbedded
     */
    constructor() { 
        
        EntityArrayEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityArrayEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityArrayEmbedded} obj Optional instance to populate.
     * @return {module:model/EntityArrayEmbedded} The populated <code>EntityArrayEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityArrayEmbedded();

            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [SignOnPolicyAction]);
            }
            if (data.hasOwnProperty('agreements')) {
                obj['agreements'] = ApiClient.convertToType(data['agreements'], [Agreement]);
            }
            if (data.hasOwnProperty('alertChannels')) {
                obj['alertChannels'] = ApiClient.convertToType(data['alertChannels'], [AlertChannel]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [EntityArrayEmbeddedAttributesInner]);
            }
            if (data.hasOwnProperty('applications')) {
                obj['applications'] = ApiClient.convertToType(data['applications'], [ReadOneApplication200Response]);
            }
            if (data.hasOwnProperty('certificates')) {
                obj['certificates'] = ApiClient.convertToType(data['certificates'], [Certificate]);
            }
            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], [TemplateContent]);
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [GatewayCredential]);
            }
            if (data.hasOwnProperty('customDomains')) {
                obj['customDomains'] = ApiClient.convertToType(data['customDomains'], [CustomDomain]);
            }
            if (data.hasOwnProperty('emailDomains')) {
                obj['emailDomains'] = ApiClient.convertToType(data['emailDomains'], [EmailDomain]);
            }
            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [Environment]);
            }
            if (data.hasOwnProperty('flowPolicies')) {
                obj['flowPolicies'] = ApiClient.convertToType(data['flowPolicies'], [FlowPolicy]);
            }
            if (data.hasOwnProperty('flowPolicyAssignments')) {
                obj['flowPolicyAssignments'] = ApiClient.convertToType(data['flowPolicyAssignments'], [FlowPolicyAssignment]);
            }
            if (data.hasOwnProperty('forms')) {
                obj['forms'] = ApiClient.convertToType(data['forms'], [Form]);
            }
            if (data.hasOwnProperty('gatewayInstances')) {
                obj['gatewayInstances'] = ApiClient.convertToType(data['gatewayInstances'], [GatewayInstance]);
            }
            if (data.hasOwnProperty('gateways')) {
                obj['gateways'] = ApiClient.convertToType(data['gateways'], [EntityArrayEmbeddedGatewaysInner]);
            }
            if (data.hasOwnProperty('grants')) {
                obj['grants'] = ApiClient.convertToType(data['grants'], [ApplicationResourceGrant]);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
            }
            if (data.hasOwnProperty('groupMemberships')) {
                obj['groupMemberships'] = ApiClient.convertToType(data['groupMemberships'], [GroupMembership]);
            }
            if (data.hasOwnProperty('identityProviders')) {
                obj['identityProviders'] = ApiClient.convertToType(data['identityProviders'], [IdentityProvider]);
            }
            if (data.hasOwnProperty('keys')) {
                obj['keys'] = ApiClient.convertToType(data['keys'], [Certificate]);
            }
            if (data.hasOwnProperty('keyRotationPolicies')) {
                obj['keyRotationPolicies'] = ApiClient.convertToType(data['keyRotationPolicies'], [KeyRotationPolicy]);
            }
            if (data.hasOwnProperty('languages')) {
                obj['languages'] = ApiClient.convertToType(data['languages'], [EntityArrayEmbeddedLanguagesInner]);
            }
            if (data.hasOwnProperty('licenses')) {
                obj['licenses'] = ApiClient.convertToType(data['licenses'], [License]);
            }
            if (data.hasOwnProperty('notificationsPolicies')) {
                obj['notificationsPolicies'] = ApiClient.convertToType(data['notificationsPolicies'], [NotificationsPolicy]);
            }
            if (data.hasOwnProperty('organizations')) {
                obj['organizations'] = ApiClient.convertToType(data['organizations'], [Organization]);
            }
            if (data.hasOwnProperty('passwordPolicies')) {
                obj['passwordPolicies'] = ApiClient.convertToType(data['passwordPolicies'], [PasswordPolicy]);
            }
            if (data.hasOwnProperty('phoneDeliverySettings')) {
                obj['phoneDeliverySettings'] = ApiClient.convertToType(data['phoneDeliverySettings'], [NotificationsSettingsPhoneDeliverySettings]);
            }
            if (data.hasOwnProperty('plans')) {
                obj['plans'] = ApiClient.convertToType(data['plans'], [IdentityPropagationPlan]);
            }
            if (data.hasOwnProperty('populations')) {
                obj['populations'] = ApiClient.convertToType(data['populations'], [Population]);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], [Resource]);
            }
            if (data.hasOwnProperty('revisions')) {
                obj['revisions'] = ApiClient.convertToType(data['revisions'], [AgreementLanguageRevision]);
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], [ResourceScope]);
            }
            if (data.hasOwnProperty('signOnPolicies')) {
                obj['signOnPolicies'] = ApiClient.convertToType(data['signOnPolicies'], [SignOnPolicy]);
            }
            if (data.hasOwnProperty('signOnPolicyAssignments')) {
                obj['signOnPolicyAssignments'] = ApiClient.convertToType(data['signOnPolicyAssignments'], [SignOnPolicyAssignment]);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [Subscription]);
            }
            if (data.hasOwnProperty('templates')) {
                obj['templates'] = ApiClient.convertToType(data['templates'], [Template]);
            }
            if (data.hasOwnProperty('themes')) {
                obj['themes'] = ApiClient.convertToType(data['themes'], [BrandingTheme]);
            }
            if (data.hasOwnProperty('trustedEmails')) {
                obj['trustedEmails'] = ApiClient.convertToType(data['trustedEmails'], [EmailDomainTrustedEmail]);
            }
            if (data.hasOwnProperty('roleAssignments')) {
                obj['roleAssignments'] = ApiClient.convertToType(data['roleAssignments'], [RoleAssignment]);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
            }
            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], [Schema]);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EntityArrayEmbedded</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EntityArrayEmbedded</code>.
     */
    static validateJSON(data) {
        if (data['actions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['actions'])) {
                throw new Error("Expected the field `actions` to be an array in the JSON data but got " + data['actions']);
            }
            // validate the optional field `actions` (array)
            for (const item of data['actions']) {
                SignOnPolicyAction.validateJSON(item);
            };
        }
        if (data['agreements']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['agreements'])) {
                throw new Error("Expected the field `agreements` to be an array in the JSON data but got " + data['agreements']);
            }
            // validate the optional field `agreements` (array)
            for (const item of data['agreements']) {
                Agreement.validateJSON(item);
            };
        }
        if (data['alertChannels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['alertChannels'])) {
                throw new Error("Expected the field `alertChannels` to be an array in the JSON data but got " + data['alertChannels']);
            }
            // validate the optional field `alertChannels` (array)
            for (const item of data['alertChannels']) {
                AlertChannel.validateJSON(item);
            };
        }
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                EntityArrayEmbeddedAttributesInner.validateJSON(item);
            };
        }
        if (data['applications']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['applications'])) {
                throw new Error("Expected the field `applications` to be an array in the JSON data but got " + data['applications']);
            }
            // validate the optional field `applications` (array)
            for (const item of data['applications']) {
                ReadOneApplication200Response.validateJSON(item);
            };
        }
        if (data['certificates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['certificates'])) {
                throw new Error("Expected the field `certificates` to be an array in the JSON data but got " + data['certificates']);
            }
            // validate the optional field `certificates` (array)
            for (const item of data['certificates']) {
                Certificate.validateJSON(item);
            };
        }
        if (data['contents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contents'])) {
                throw new Error("Expected the field `contents` to be an array in the JSON data but got " + data['contents']);
            }
            // validate the optional field `contents` (array)
            for (const item of data['contents']) {
                TemplateContent.validateJSON(item);
            };
        }
        if (data['credentials']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credentials'])) {
                throw new Error("Expected the field `credentials` to be an array in the JSON data but got " + data['credentials']);
            }
            // validate the optional field `credentials` (array)
            for (const item of data['credentials']) {
                GatewayCredential.validateJSON(item);
            };
        }
        if (data['customDomains']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['customDomains'])) {
                throw new Error("Expected the field `customDomains` to be an array in the JSON data but got " + data['customDomains']);
            }
            // validate the optional field `customDomains` (array)
            for (const item of data['customDomains']) {
                CustomDomain.validateJSON(item);
            };
        }
        if (data['emailDomains']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['emailDomains'])) {
                throw new Error("Expected the field `emailDomains` to be an array in the JSON data but got " + data['emailDomains']);
            }
            // validate the optional field `emailDomains` (array)
            for (const item of data['emailDomains']) {
                EmailDomain.validateJSON(item);
            };
        }
        if (data['environments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['environments'])) {
                throw new Error("Expected the field `environments` to be an array in the JSON data but got " + data['environments']);
            }
            // validate the optional field `environments` (array)
            for (const item of data['environments']) {
                Environment.validateJSON(item);
            };
        }
        if (data['flowPolicies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['flowPolicies'])) {
                throw new Error("Expected the field `flowPolicies` to be an array in the JSON data but got " + data['flowPolicies']);
            }
            // validate the optional field `flowPolicies` (array)
            for (const item of data['flowPolicies']) {
                FlowPolicy.validateJSON(item);
            };
        }
        if (data['flowPolicyAssignments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['flowPolicyAssignments'])) {
                throw new Error("Expected the field `flowPolicyAssignments` to be an array in the JSON data but got " + data['flowPolicyAssignments']);
            }
            // validate the optional field `flowPolicyAssignments` (array)
            for (const item of data['flowPolicyAssignments']) {
                FlowPolicyAssignment.validateJSON(item);
            };
        }
        if (data['forms']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['forms'])) {
                throw new Error("Expected the field `forms` to be an array in the JSON data but got " + data['forms']);
            }
            // validate the optional field `forms` (array)
            for (const item of data['forms']) {
                Form.validateJSON(item);
            };
        }
        if (data['gatewayInstances']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['gatewayInstances'])) {
                throw new Error("Expected the field `gatewayInstances` to be an array in the JSON data but got " + data['gatewayInstances']);
            }
            // validate the optional field `gatewayInstances` (array)
            for (const item of data['gatewayInstances']) {
                GatewayInstance.validateJSON(item);
            };
        }
        if (data['gateways']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['gateways'])) {
                throw new Error("Expected the field `gateways` to be an array in the JSON data but got " + data['gateways']);
            }
            // validate the optional field `gateways` (array)
            for (const item of data['gateways']) {
                EntityArrayEmbeddedGatewaysInner.validateJSON(item);
            };
        }
        if (data['grants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['grants'])) {
                throw new Error("Expected the field `grants` to be an array in the JSON data but got " + data['grants']);
            }
            // validate the optional field `grants` (array)
            for (const item of data['grants']) {
                ApplicationResourceGrant.validateJSON(item);
            };
        }
        if (data['groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groups'])) {
                throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
            }
            // validate the optional field `groups` (array)
            for (const item of data['groups']) {
                Group.validateJSON(item);
            };
        }
        if (data['groupMemberships']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groupMemberships'])) {
                throw new Error("Expected the field `groupMemberships` to be an array in the JSON data but got " + data['groupMemberships']);
            }
            // validate the optional field `groupMemberships` (array)
            for (const item of data['groupMemberships']) {
                GroupMembership.validateJSON(item);
            };
        }
        if (data['identityProviders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['identityProviders'])) {
                throw new Error("Expected the field `identityProviders` to be an array in the JSON data but got " + data['identityProviders']);
            }
            // validate the optional field `identityProviders` (array)
            for (const item of data['identityProviders']) {
                IdentityProvider.validateJSON(item);
            };
        }
        if (data['keys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['keys'])) {
                throw new Error("Expected the field `keys` to be an array in the JSON data but got " + data['keys']);
            }
            // validate the optional field `keys` (array)
            for (const item of data['keys']) {
                Certificate.validateJSON(item);
            };
        }
        if (data['keyRotationPolicies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['keyRotationPolicies'])) {
                throw new Error("Expected the field `keyRotationPolicies` to be an array in the JSON data but got " + data['keyRotationPolicies']);
            }
            // validate the optional field `keyRotationPolicies` (array)
            for (const item of data['keyRotationPolicies']) {
                KeyRotationPolicy.validateJSON(item);
            };
        }
        if (data['languages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['languages'])) {
                throw new Error("Expected the field `languages` to be an array in the JSON data but got " + data['languages']);
            }
            // validate the optional field `languages` (array)
            for (const item of data['languages']) {
                EntityArrayEmbeddedLanguagesInner.validateJSON(item);
            };
        }
        if (data['licenses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['licenses'])) {
                throw new Error("Expected the field `licenses` to be an array in the JSON data but got " + data['licenses']);
            }
            // validate the optional field `licenses` (array)
            for (const item of data['licenses']) {
                License.validateJSON(item);
            };
        }
        if (data['notificationsPolicies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['notificationsPolicies'])) {
                throw new Error("Expected the field `notificationsPolicies` to be an array in the JSON data but got " + data['notificationsPolicies']);
            }
            // validate the optional field `notificationsPolicies` (array)
            for (const item of data['notificationsPolicies']) {
                NotificationsPolicy.validateJSON(item);
            };
        }
        if (data['organizations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['organizations'])) {
                throw new Error("Expected the field `organizations` to be an array in the JSON data but got " + data['organizations']);
            }
            // validate the optional field `organizations` (array)
            for (const item of data['organizations']) {
                Organization.validateJSON(item);
            };
        }
        if (data['passwordPolicies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['passwordPolicies'])) {
                throw new Error("Expected the field `passwordPolicies` to be an array in the JSON data but got " + data['passwordPolicies']);
            }
            // validate the optional field `passwordPolicies` (array)
            for (const item of data['passwordPolicies']) {
                PasswordPolicy.validateJSON(item);
            };
        }
        if (data['phoneDeliverySettings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['phoneDeliverySettings'])) {
                throw new Error("Expected the field `phoneDeliverySettings` to be an array in the JSON data but got " + data['phoneDeliverySettings']);
            }
            // validate the optional field `phoneDeliverySettings` (array)
            for (const item of data['phoneDeliverySettings']) {
                NotificationsSettingsPhoneDeliverySettings.validateJSON(item);
            };
        }
        if (data['plans']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['plans'])) {
                throw new Error("Expected the field `plans` to be an array in the JSON data but got " + data['plans']);
            }
            // validate the optional field `plans` (array)
            for (const item of data['plans']) {
                IdentityPropagationPlan.validateJSON(item);
            };
        }
        if (data['populations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['populations'])) {
                throw new Error("Expected the field `populations` to be an array in the JSON data but got " + data['populations']);
            }
            // validate the optional field `populations` (array)
            for (const item of data['populations']) {
                Population.validateJSON(item);
            };
        }
        if (data['resources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['resources'])) {
                throw new Error("Expected the field `resources` to be an array in the JSON data but got " + data['resources']);
            }
            // validate the optional field `resources` (array)
            for (const item of data['resources']) {
                Resource.validateJSON(item);
            };
        }
        if (data['revisions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['revisions'])) {
                throw new Error("Expected the field `revisions` to be an array in the JSON data but got " + data['revisions']);
            }
            // validate the optional field `revisions` (array)
            for (const item of data['revisions']) {
                AgreementLanguageRevision.validateJSON(item);
            };
        }
        if (data['scopes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['scopes'])) {
                throw new Error("Expected the field `scopes` to be an array in the JSON data but got " + data['scopes']);
            }
            // validate the optional field `scopes` (array)
            for (const item of data['scopes']) {
                ResourceScope.validateJSON(item);
            };
        }
        if (data['signOnPolicies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['signOnPolicies'])) {
                throw new Error("Expected the field `signOnPolicies` to be an array in the JSON data but got " + data['signOnPolicies']);
            }
            // validate the optional field `signOnPolicies` (array)
            for (const item of data['signOnPolicies']) {
                SignOnPolicy.validateJSON(item);
            };
        }
        if (data['signOnPolicyAssignments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['signOnPolicyAssignments'])) {
                throw new Error("Expected the field `signOnPolicyAssignments` to be an array in the JSON data but got " + data['signOnPolicyAssignments']);
            }
            // validate the optional field `signOnPolicyAssignments` (array)
            for (const item of data['signOnPolicyAssignments']) {
                SignOnPolicyAssignment.validateJSON(item);
            };
        }
        if (data['subscriptions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscriptions'])) {
                throw new Error("Expected the field `subscriptions` to be an array in the JSON data but got " + data['subscriptions']);
            }
            // validate the optional field `subscriptions` (array)
            for (const item of data['subscriptions']) {
                Subscription.validateJSON(item);
            };
        }
        if (data['templates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['templates'])) {
                throw new Error("Expected the field `templates` to be an array in the JSON data but got " + data['templates']);
            }
            // validate the optional field `templates` (array)
            for (const item of data['templates']) {
                Template.validateJSON(item);
            };
        }
        if (data['themes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['themes'])) {
                throw new Error("Expected the field `themes` to be an array in the JSON data but got " + data['themes']);
            }
            // validate the optional field `themes` (array)
            for (const item of data['themes']) {
                BrandingTheme.validateJSON(item);
            };
        }
        if (data['trustedEmails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['trustedEmails'])) {
                throw new Error("Expected the field `trustedEmails` to be an array in the JSON data but got " + data['trustedEmails']);
            }
            // validate the optional field `trustedEmails` (array)
            for (const item of data['trustedEmails']) {
                EmailDomainTrustedEmail.validateJSON(item);
            };
        }
        if (data['roleAssignments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roleAssignments'])) {
                throw new Error("Expected the field `roleAssignments` to be an array in the JSON data but got " + data['roleAssignments']);
            }
            // validate the optional field `roleAssignments` (array)
            for (const item of data['roleAssignments']) {
                RoleAssignment.validateJSON(item);
            };
        }
        if (data['roles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roles'])) {
                throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
            }
            // validate the optional field `roles` (array)
            for (const item of data['roles']) {
                Role.validateJSON(item);
            };
        }
        if (data['schemas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['schemas'])) {
                throw new Error("Expected the field `schemas` to be an array in the JSON data but got " + data['schemas']);
            }
            // validate the optional field `schemas` (array)
            for (const item of data['schemas']) {
                Schema.validateJSON(item);
            };
        }
        if (data['users']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['users'])) {
                throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
            }
            // validate the optional field `users` (array)
            for (const item of data['users']) {
                User.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/SignOnPolicyAction>} actions
 */
EntityArrayEmbedded.prototype['actions'] = undefined;

/**
 * @member {Array.<module:model/Agreement>} agreements
 */
EntityArrayEmbedded.prototype['agreements'] = undefined;

/**
 * @member {Array.<module:model/AlertChannel>} alertChannels
 */
EntityArrayEmbedded.prototype['alertChannels'] = undefined;

/**
 * @member {Array.<module:model/EntityArrayEmbeddedAttributesInner>} attributes
 */
EntityArrayEmbedded.prototype['attributes'] = undefined;

/**
 * @member {Array.<module:model/ReadOneApplication200Response>} applications
 */
EntityArrayEmbedded.prototype['applications'] = undefined;

/**
 * @member {Array.<module:model/Certificate>} certificates
 */
EntityArrayEmbedded.prototype['certificates'] = undefined;

/**
 * @member {Array.<module:model/TemplateContent>} contents
 */
EntityArrayEmbedded.prototype['contents'] = undefined;

/**
 * @member {Array.<module:model/GatewayCredential>} credentials
 */
EntityArrayEmbedded.prototype['credentials'] = undefined;

/**
 * @member {Array.<module:model/CustomDomain>} customDomains
 */
EntityArrayEmbedded.prototype['customDomains'] = undefined;

/**
 * @member {Array.<module:model/EmailDomain>} emailDomains
 */
EntityArrayEmbedded.prototype['emailDomains'] = undefined;

/**
 * @member {Array.<module:model/Environment>} environments
 */
EntityArrayEmbedded.prototype['environments'] = undefined;

/**
 * @member {Array.<module:model/FlowPolicy>} flowPolicies
 */
EntityArrayEmbedded.prototype['flowPolicies'] = undefined;

/**
 * @member {Array.<module:model/FlowPolicyAssignment>} flowPolicyAssignments
 */
EntityArrayEmbedded.prototype['flowPolicyAssignments'] = undefined;

/**
 * @member {Array.<module:model/Form>} forms
 */
EntityArrayEmbedded.prototype['forms'] = undefined;

/**
 * @member {Array.<module:model/GatewayInstance>} gatewayInstances
 */
EntityArrayEmbedded.prototype['gatewayInstances'] = undefined;

/**
 * @member {Array.<module:model/EntityArrayEmbeddedGatewaysInner>} gateways
 */
EntityArrayEmbedded.prototype['gateways'] = undefined;

/**
 * @member {Array.<module:model/ApplicationResourceGrant>} grants
 */
EntityArrayEmbedded.prototype['grants'] = undefined;

/**
 * @member {Array.<module:model/Group>} groups
 */
EntityArrayEmbedded.prototype['groups'] = undefined;

/**
 * @member {Array.<module:model/GroupMembership>} groupMemberships
 */
EntityArrayEmbedded.prototype['groupMemberships'] = undefined;

/**
 * @member {Array.<module:model/IdentityProvider>} identityProviders
 */
EntityArrayEmbedded.prototype['identityProviders'] = undefined;

/**
 * @member {Array.<module:model/Certificate>} keys
 */
EntityArrayEmbedded.prototype['keys'] = undefined;

/**
 * @member {Array.<module:model/KeyRotationPolicy>} keyRotationPolicies
 */
EntityArrayEmbedded.prototype['keyRotationPolicies'] = undefined;

/**
 * @member {Array.<module:model/EntityArrayEmbeddedLanguagesInner>} languages
 */
EntityArrayEmbedded.prototype['languages'] = undefined;

/**
 * @member {Array.<module:model/License>} licenses
 */
EntityArrayEmbedded.prototype['licenses'] = undefined;

/**
 * @member {Array.<module:model/NotificationsPolicy>} notificationsPolicies
 */
EntityArrayEmbedded.prototype['notificationsPolicies'] = undefined;

/**
 * @member {Array.<module:model/Organization>} organizations
 */
EntityArrayEmbedded.prototype['organizations'] = undefined;

/**
 * @member {Array.<module:model/PasswordPolicy>} passwordPolicies
 */
EntityArrayEmbedded.prototype['passwordPolicies'] = undefined;

/**
 * @member {Array.<module:model/NotificationsSettingsPhoneDeliverySettings>} phoneDeliverySettings
 */
EntityArrayEmbedded.prototype['phoneDeliverySettings'] = undefined;

/**
 * @member {Array.<module:model/IdentityPropagationPlan>} plans
 */
EntityArrayEmbedded.prototype['plans'] = undefined;

/**
 * @member {Array.<module:model/Population>} populations
 */
EntityArrayEmbedded.prototype['populations'] = undefined;

/**
 * @member {Array.<module:model/Resource>} resources
 */
EntityArrayEmbedded.prototype['resources'] = undefined;

/**
 * @member {Array.<module:model/AgreementLanguageRevision>} revisions
 */
EntityArrayEmbedded.prototype['revisions'] = undefined;

/**
 * @member {Array.<module:model/ResourceScope>} scopes
 */
EntityArrayEmbedded.prototype['scopes'] = undefined;

/**
 * @member {Array.<module:model/SignOnPolicy>} signOnPolicies
 */
EntityArrayEmbedded.prototype['signOnPolicies'] = undefined;

/**
 * @member {Array.<module:model/SignOnPolicyAssignment>} signOnPolicyAssignments
 */
EntityArrayEmbedded.prototype['signOnPolicyAssignments'] = undefined;

/**
 * @member {Array.<module:model/Subscription>} subscriptions
 */
EntityArrayEmbedded.prototype['subscriptions'] = undefined;

/**
 * @member {Array.<module:model/Template>} templates
 */
EntityArrayEmbedded.prototype['templates'] = undefined;

/**
 * @member {Array.<module:model/BrandingTheme>} themes
 */
EntityArrayEmbedded.prototype['themes'] = undefined;

/**
 * @member {Array.<module:model/EmailDomainTrustedEmail>} trustedEmails
 */
EntityArrayEmbedded.prototype['trustedEmails'] = undefined;

/**
 * @member {Array.<module:model/RoleAssignment>} roleAssignments
 */
EntityArrayEmbedded.prototype['roleAssignments'] = undefined;

/**
 * @member {Array.<module:model/Role>} roles
 */
EntityArrayEmbedded.prototype['roles'] = undefined;

/**
 * @member {Array.<module:model/Schema>} schemas
 */
EntityArrayEmbedded.prototype['schemas'] = undefined;

/**
 * @member {Array.<module:model/User>} users
 */
EntityArrayEmbedded.prototype['users'] = undefined;






export default EntityArrayEmbedded;

