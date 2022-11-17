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
import { DestinationFilterV1 } from './destinationFilterV1';

/**
 * The newly created Destination filter.
 */
export class Filter2 {
    /**
     * The unique id of this filter.
     */
    'id': string;
    /**
     * The id of the Source associated with this filter.
     */
    'sourceId': string;
    /**
     * The id of the Destination associated with this filter.
     */
    'destinationId': string;
    /**
     * A condition that defines whether to apply this filter to a payload.
     */
    'if': string;
    /**
     * A list of actions this filter performs.
     */
    'actions': Array<DestinationFilterActionV1>;
    /**
     * A title for this filter.
     */
    'title': string;
    /**
     * A description for this filter.
     */
    'description'?: string;
    /**
     * When set to true, this filter is active.
     */
    'enabled': boolean;
    /**
     * The timestamp of this filter\'s creation.
     */
    'createdAt': string;
    /**
     * The timestamp of this filter\'s last change.
     */
    'updatedAt': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'destinationId',
            baseName: 'destinationId',
            type: 'string',
        },
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
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Filter2.attributeTypeMap;
    }
}
