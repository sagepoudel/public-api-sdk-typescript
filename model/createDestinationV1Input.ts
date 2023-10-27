/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 36.3.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Creates a new Destination.
 */
export class CreateDestinationV1Input {
    /**
     * The id of the Source to connect to this Destination instance.  Config API note: analogous to `parent`.
     */
    'sourceId': string;
    /**
     * The id of the metadata to link to the new Destination.
     */
    'metadataId': string;
    /**
     * Whether this Destination should receive data.
     */
    'enabled'?: boolean;
    /**
     * Defines the display name of the Destination.  Config API note: equal to `displayName`.
     */
    'name'?: string;
    /**
     * An object that contains settings for the Destination based on the \"required\" and \"advanced\" settings present in the Destination metadata.  Config API note: equal to `config`.
     */
    'settings': { [key: string]: any };

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
            name: 'metadataId',
            baseName: 'metadataId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];

    static getAttributeTypeMap() {
        return CreateDestinationV1Input.attributeTypeMap;
    }
}
