/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Pagination } from './pagination';
import { UsersPerSourceSnapshotV1 } from './usersPerSourceSnapshotV1';

/**
 * Returns a list of daily aggregations of Source level MTU counts.
 */
export class GetDailyPerSourceMTUUsageV1Output {
    /**
     * The list of daily per Source MTU count aggregates.
     */
    'dailyPerSourceMTUUsage': Array<UsersPerSourceSnapshotV1>;
    'pagination': Pagination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'dailyPerSourceMTUUsage',
            baseName: 'dailyPerSourceMTUUsage',
            type: 'Array<UsersPerSourceSnapshotV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];

    static getAttributeTypeMap() {
        return GetDailyPerSourceMTUUsageV1Output.attributeTypeMap;
    }
}
