/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 42.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a Function Version in a list.
 */
export class Version {
    /**
     * An identifier for this version.
     */
    'id': string;
    /**
     * Author of this version.
     */
    'author'?: string;
    /**
     * Source code of this version.
     */
    'code': string;
    /**
     * The deployed status of this version.
     */
    'isDeployed'?: boolean;
    /**
     * The time of this Version\'s creation.
     */
    'createdAt'?: string;
    /**
     * The time of this Version\'s latest update.
     */
    'updatedAt'?: string;
    /**
     * The time of this Version\'s last deployment.
     */
    'deployedAt'?: string;

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
            name: 'author',
            baseName: 'author',
            type: 'string',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'isDeployed',
            baseName: 'isDeployed',
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
        {
            name: 'deployedAt',
            baseName: 'deployedAt',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Version.attributeTypeMap;
    }
}
