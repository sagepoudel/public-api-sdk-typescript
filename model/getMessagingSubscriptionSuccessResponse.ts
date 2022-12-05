/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 33.0.3
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GetMessagingSubscriptionSuccessResponse {
    /**
     * Key is the phone number or email.
     */
    'key': string;
    /**
     * Type is communication medium used. Either EMAIL or SMS.
     */
    'type': GetMessagingSubscriptionSuccessResponse.TypeEnum;
    /**
     * The user subscribed, unsubscribed, or on initial status. This is absent if the phone number or email is not found.
     */
    'status'?: GetMessagingSubscriptionSuccessResponse.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'GetMessagingSubscriptionSuccessResponse.TypeEnum',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'GetMessagingSubscriptionSuccessResponse.StatusEnum',
        },
    ];

    static getAttributeTypeMap() {
        return GetMessagingSubscriptionSuccessResponse.attributeTypeMap;
    }
}

export namespace GetMessagingSubscriptionSuccessResponse {
    export enum TypeEnum {
        EMAIL = <any>'EMAIL',
        SMS = <any>'SMS',
    }
    export enum StatusEnum {
        DID_NOT_SUBSCRIBE = <any>'DID_NOT_SUBSCRIBE',
        SUBSCRIBED = <any>'SUBSCRIBED',
        UNSUBSCRIBED = <any>'UNSUBSCRIBED',
    }
}
