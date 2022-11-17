/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.7
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DestinationFilterActionV1 } from './destinationFilterActionV1';
import { PreviewDestinationFilterV1 } from './previewDestinationFilterV1';

/**
 * The filter to preview.
 */
export class Filter {
    /**
     * A FQL statement which determines if the provided filter\'s actions will apply to the provided JSON payload. The literal string \"all\" will result in this filter to all events. For guidance on using FQL, see the Segment documentation site.
     */
    'if': string;
    /**
     * The filtering action to take on events that match the \"if\" statement. Action types must be one of: \"drop\", \"allow_properties\", \"drop_properties\" or \"sample\".
     */
    'actions': Array<DestinationFilterActionV1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'actions',
            baseName: 'actions',
            type: 'Array<DestinationFilterActionV1>',
        },
    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }
}
