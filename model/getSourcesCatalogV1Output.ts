/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaginationOutput } from './paginationOutput';
import { SourceMetadataV1 } from './sourceMetadataV1';

/**
 * Returns a list of all Source catalog items contained within a given page.
 */
export class GetSourcesCatalogV1Output {
    /**
     * All Source catalog items contained within the requested page.
     */
    'sourcesCatalog': Array<SourceMetadataV1>;
    'pagination': PaginationOutput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'sourcesCatalog',
            baseName: 'sourcesCatalog',
            type: 'Array<SourceMetadataV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];

    static getAttributeTypeMap() {
        return GetSourcesCatalogV1Output.attributeTypeMap;
    }
}
