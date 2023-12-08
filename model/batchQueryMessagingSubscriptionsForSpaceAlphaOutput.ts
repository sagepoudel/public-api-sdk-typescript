/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 38.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GetMessagingSubscriptionFailureResponse } from './getMessagingSubscriptionFailureResponse';
import { GetMessagingSubscriptionSuccessResponse } from './getMessagingSubscriptionSuccessResponse';
import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';
import { PaginationOutput } from './paginationOutput';

/**
 * Batch get response.
 */
export class BatchQueryMessagingSubscriptionsForSpaceAlphaOutput {
    /**
     * Array of successful subscription status.
     */
    'successes': Array<GetMessagingSubscriptionSuccessResponse>;
    /**
     * Validation errors due to invalid types or email/phone numbers.
     */
    'failures': Array<GetMessagingSubscriptionFailureResponse>;
    /**
     * General errors when making the request such as invalid payload or wrong http method errors.
     */
    'errors': Array<MessageSubscriptionResponseError>;
    'pagination'?: PaginationOutput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'successes',
            baseName: 'successes',
            type: 'Array<GetMessagingSubscriptionSuccessResponse>',
        },
        {
            name: 'failures',
            baseName: 'failures',
            type: 'Array<GetMessagingSubscriptionFailureResponse>',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<MessageSubscriptionResponseError>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];

    static getAttributeTypeMap() {
        return BatchQueryMessagingSubscriptionsForSpaceAlphaOutput.attributeTypeMap;
    }
}
