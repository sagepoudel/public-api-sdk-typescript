/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SyncNoticeV1 } from './syncNoticeV1';

/**
 * Represents a sync between a Source and Warehouse.  A sync occurs when data from a Source is loaded into a Warehouse.
 */
export class SyncV1 {
    /**
     * The id of the Source loaded in the sync.
     */
    'sourceId': string;
    /**
     * The start time of the sync.
     */
    'start': string;
    /**
     * The time the sync completed. Returns null if unfinished.
     */
    'end': string | null;
    /**
     * The status of the sync.
     */
    'status': string;
    /**
     * The duration of the sync in seconds. Returns the partial duration if the sync has not finished yet.
     */
    'duration': number;
    /**
     * The human-readable counterpart of `duration`.
     */
    'humanDuration': string;
    /**
     * The number of rows synced into the Warehouse.
     */
    'count': number;
    /**
     * Notices that contain the events that occurred during the sync.
     */
    'notices': Array<SyncNoticeV1>;

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
            name: 'start',
            baseName: 'start',
            type: 'string',
        },
        {
            name: 'end',
            baseName: 'end',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'number',
        },
        {
            name: 'humanDuration',
            baseName: 'humanDuration',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'notices',
            baseName: 'notices',
            type: 'Array<SyncNoticeV1>',
        },
    ];

    static getAttributeTypeMap() {
        return SyncV1.attributeTypeMap;
    }
}
