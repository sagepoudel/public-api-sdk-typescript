/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 33.0.4
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Metadata } from './metadata';

/**
 * Business tools or apps that you can connect to the data flowing through Segment.  This is equal to the Destination object in Config API, with the following fields omitted: - catalogId - createTime - updateTime - connectionMode.
 */
export class DestinationV1 {
    /**
     * The unique identifier of this instance of a Destination.  Config API note: analogous to `name`.
     */
    'id': string;
    /**
     * The name of this instance of a Destination.  Config API note: equal to `displayName`.
     */
    'name'?: string;
    /**
     * Whether this instance of a Destination receives data.
     */
    'enabled': boolean;
    'metadata': Metadata;
    /**
     * The id of a Source connected to this instance of a Destination.  Config API note: analogous to `parent`.
     */
    'sourceId': string;
    /**
     * The collection of settings associated with a Destination.  Config API note: equal to `config`.
     */
    'settings': { [key: string]: any };

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
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'Metadata',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationV1.attributeTypeMap;
    }
}
