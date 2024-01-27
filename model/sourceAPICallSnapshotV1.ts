/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 39.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * A snapshot of the number of API calls for a given Source in a Workspace.
 */
export class SourceAPICallSnapshotV1 {
    /**
     * The Source id.
     */
    'sourceId': string;
    /**
     * A bigint of the number of API calls in this snapshot.
     */
    'apiCalls': string;
    /**
     * Timestamp of this snapshot within the billing cycle in the ISO-8601 format.
     */
    'timestamp': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'apiCalls',
            baseName: 'apiCalls',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return SourceAPICallSnapshotV1.attributeTypeMap;
    }
}
