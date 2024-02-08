/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 42.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';

export class GetMessagingSubscriptionFailureResponse {
    /**
     * Key is the phone number or email.
     */
    'key': string;
    /**
     * This will be the exact type as given in the request.
     */
    'type': string;
    /**
     * Per key errors, such as validation errors.
     */
    'errors': Array<MessageSubscriptionResponseError>;

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
            type: 'string',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<MessageSubscriptionResponseError>',
        },
    ];

    static getAttributeTypeMap() {
        return GetMessagingSubscriptionFailureResponse.attributeTypeMap;
    }
}
