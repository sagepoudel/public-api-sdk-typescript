/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class AudienceOptions {
    /**
     * Determines whether data prior to the audience being created is included when determining audience membership. Note that including historical data may be needed in order to properly handle the definition specified. In these cases, Segment will automatically handle including historical data and the response will return the includeHistoricalData parameter as true.
     */
    'includeHistoricalData'?: boolean;
    /**
     * Determines whether anonymous users should be included when determining audience membership.
     */
    'includeAnonymousUsers'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'includeHistoricalData',
            baseName: 'includeHistoricalData',
            type: 'boolean',
        },
        {
            name: 'includeAnonymousUsers',
            baseName: 'includeAnonymousUsers',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return AudienceOptions.attributeTypeMap;
    }
}