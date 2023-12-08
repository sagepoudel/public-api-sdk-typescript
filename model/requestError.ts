/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 38.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents any error that could have occurred while performing a request.
 */
export class RequestError {
    /**
     * The type for this error (validation, server, unknown, etc).
     */
    'type': string;
    /**
     * An error message attached to this error.
     */
    'message'?: string;
    /**
     * The name of an input field from the request that triggered this error.
     */
    'field'?: string;
    /**
     * Any extra data associated with this error.
     */
    'data'?: any | null;
    /**
     * Http status code.
     */
    'status'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'field',
            baseName: 'field',
            type: 'string',
        },
        {
            name: 'data',
            baseName: 'data',
            type: 'any',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return RequestError.attributeTypeMap;
    }
}
