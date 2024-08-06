/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 52.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents the override for a Source/collection/property? path to apply to a Warehouse.
 */
export class WarehouseSyncOverrideV1 {
    /**
     * The id of the Source this schema item applies to.
     */
    'sourceId': string;
    /**
     * The collection the schema item override applies to.
     */
    'collection'?: string;
    /**
     * Enable to apply the override.
     */
    'enabled': boolean;
    /**
     * A property within the collection to which the override applies.
     */
    'property'?: string;

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
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'property',
            baseName: 'property',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return WarehouseSyncOverrideV1.attributeTypeMap;
    }
}
