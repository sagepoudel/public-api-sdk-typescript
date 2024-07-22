/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 51.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a Destination filter action.
 */
export class DestinationFilterActionV1 {
    /**
     * The kind of Transformation to apply to any matched properties.
     */
    'type': DestinationFilterActionV1.TypeEnum;
    /**
     * A dictionary of paths to object keys that this filter applies to.  The literal string \'\' represents the top level of the object.
     */
    'fields'?: { [key: string]: any };
    /**
     * A decimal between 0 and 1 used for \'sample\' type events and influences the likelihood of sampling to occur.
     */
    'percent'?: number;
    /**
     * The JSON path to a property within a payload object from which Segment generates a deterministic sampling rate.
     */
    'path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationFilterActionV1.TypeEnum',
        },
        {
            name: 'fields',
            baseName: 'fields',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'percent',
            baseName: 'percent',
            type: 'number',
        },
        {
            name: 'path',
            baseName: 'path',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationFilterActionV1.attributeTypeMap;
    }
}

export namespace DestinationFilterActionV1 {
    export enum TypeEnum {
        ALLOW_PROPERTIES = <any>'ALLOW_PROPERTIES',
        DROP = <any>'DROP',
        DROP_PROPERTIES = <any>'DROP_PROPERTIES',
        SAMPLE = <any>'SAMPLE',
    }
}
