/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 46.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AccessPermissionV1 } from './accessPermissionV1';

/**
 * Returns the user\'s permissions, including the added permissions.
 */
export class AddPermissionsToUserV1Output {
    /**
     * The new permissions.
     */
    'permissions': Array<AccessPermissionV1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<AccessPermissionV1>',
        },
    ];

    static getAttributeTypeMap() {
        return AddPermissionsToUserV1Output.attributeTypeMap;
    }
}
