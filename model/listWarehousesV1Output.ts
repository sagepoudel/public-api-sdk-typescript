/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaginationOutput } from './paginationOutput';
import { WarehouseV1 } from './warehouseV1';

/**
 * Returns a list of Warehouses that belong to a Workspace.
 */
export class ListWarehousesV1Output {
    /**
     * A list of Warehouses that belong to the Workspace.
     */
    'warehouses': Array<WarehouseV1>;
    'pagination': PaginationOutput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'warehouses',
            baseName: 'warehouses',
            type: 'Array<WarehouseV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];

    static getAttributeTypeMap() {
        return ListWarehousesV1Output.attributeTypeMap;
    }
}
