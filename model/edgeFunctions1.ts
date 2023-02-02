/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { EdgeFunctionsAlpha } from './edgeFunctionsAlpha';

/**
 * The latest version of Edge Function bundle.
 */
export class EdgeFunctions1 {
    /**
     * The Edge Function id.
     */
    'id': string;
    /**
     * The Source id.
     */
    'sourceId': string;
    /**
     * Creation date.
     */
    'createdAt': string;
    /**
     * Creating user\'s id.
     */
    'createdBy': string;
    /**
     * The CDN URL that can be used to fetch your latest EdgeFunctions bundle.
     */
    'downloadURL': string;
    /**
     * Revision number associated with the latest Edge Function.
     */
    'version': number;

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
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'downloadURL',
            baseName: 'downloadURL',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return EdgeFunctions1.attributeTypeMap;
    }
}
