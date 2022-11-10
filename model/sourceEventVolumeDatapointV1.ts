/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.4
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * SourceEventVolumeDatapoint represents an individual timestamp/event count pair corresponding to a window of time designated by the granularity.
 */
export class SourceEventVolumeDatapointV1 {
    /**
     * The timestamp that corresponds to the beginning of the window given by the requested granularity.
     */
    'time': string;
    /**
     * The number of valid events Segment received in the given window, after the events completed the validation process.
     */
    'count': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'time',
            baseName: 'time',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return SourceEventVolumeDatapointV1.attributeTypeMap;
    }
}
