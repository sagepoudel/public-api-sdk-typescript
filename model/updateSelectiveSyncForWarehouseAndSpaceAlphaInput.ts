/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.3.6
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SpaceWarehouseSchemaOverride } from './spaceWarehouseSchemaOverride';

/**
 * Updates the schema for a Warehouse/sources pair.
 */
export class UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput {
    /**
     * A list of sync schema overrides to apply to this Space Warehouse. Note: Selective enabling of Event tables under disabled all event tables conditions is not currently supported. EnableEventTables flag need to be set to true before any selective operation on the event tables.
     */
    'syncOverrides'?: Array<SpaceWarehouseSchemaOverride>;
    /**
     * A flag to enable or disable all event Tables.
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
