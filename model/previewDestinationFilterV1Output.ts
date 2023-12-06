/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 38.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Preview output from applying the Destination filter. Segment modifies or nullifies payloads depending on the provided filter actions.
 */
export class PreviewDestinationFilterV1Output {
    /**
     * The pre-filter JSON input.
     */
    'inputPayload': { [key: string]: any };
    /**
     * The filtered JSON output.
     */
    'result': object | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'inputPayload',
            baseName: 'inputPayload',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'result',
            baseName: 'result',
            type: 'object',
        },
    ];

    static getAttributeTypeMap() {
        return PreviewDestinationFilterV1Output.attributeTypeMap;
    }
}
