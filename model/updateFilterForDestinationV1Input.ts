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
import { DestinationFilterActionV1 } from './destinationFilterActionV1';

/**
 * Input for UpdateDestinationFilterV1.
 */
export class UpdateFilterForDestinationV1Input {
    /**
     * The FQL if condition to update.
     */
    'if'?: string;
    /**
     * Actions for this Destination filter.
     */
    'actions'?: Array<DestinationFilterActionV1>;
    /**
     * The title to update.
     */
    'title'?: string;
    /**
     * The description of this filter.
     */
    'description'?: string | null;
    /**
     * When set to true, this Destination filter is active.
     */
    'enabled'?: boolean;

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
        {
            name: 'title',
            baseName: 'title',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateFilterForDestinationV1Input.attributeTypeMap;
    }
}
