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
 * Represents an entry in the Warehouse Selective Sync schema for a Warehouse and Source pair.
 */
export class WarehouseSelectiveSyncItemV1 {
    /**
     * The Source id attached to this Warehouse.
     */
    'sourceId': string;
    /**
     * The collection within the Source.
     */
    'collection': string;
    /**
     * The id of the Warehouse this sync belongs to.
     */
    'warehouseId': string;
    /**
     * A map that contains the properties within the collection to which the Warehouse should sync.
     */
    'properties': { [key: string]: any };

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
            name: 'collection',
            baseName: 'collection',
            type: 'string',
        },
        {
            name: 'warehouseId',
            baseName: 'warehouseId',
            type: 'string',
        },
        {
            name: 'properties',
            baseName: 'properties',
            type: '{ [key: string]: any; }',
        },
    ];

    static getAttributeTypeMap() {
        return WarehouseSelectiveSyncItemV1.attributeTypeMap;
    }
}
