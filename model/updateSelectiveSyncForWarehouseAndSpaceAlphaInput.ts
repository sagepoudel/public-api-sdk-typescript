/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 45.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SpaceWarehouseSchemaOverride } from './spaceWarehouseSchemaOverride';

/**
 * Updates the schema for a Space Warehouse connection.
 */
export class UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput {
    /**
     * A list of sync Schema overrides to apply to this Space Warehouse. Note: Selective Sync is not supported if the enableEventTables flag is false.
     */
    'syncOverrides'?: Array<SpaceWarehouseSchemaOverride>;
    /**
     * A flag to enable or disable all event Tables. This field is optional.
     */
    'enableEventTables'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'syncOverrides',
            baseName: 'syncOverrides',
            type: 'Array<SpaceWarehouseSchemaOverride>',
        },
        {
            name: 'enableEventTables',
            baseName: 'enableEventTables',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput.attributeTypeMap;
    }
}
