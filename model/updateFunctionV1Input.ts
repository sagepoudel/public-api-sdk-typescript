/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 36.1.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { FunctionSettingV1 } from './functionSettingV1';

/**
 * Update a Function.
 */
export class UpdateFunctionV1Input {
    /**
     * The Function code.
     */
    'code'?: string;
    /**
     * The list of settings for this Function.
     */
    'settings'?: Array<FunctionSettingV1>;
    /**
     * A display name for this Function.
     */
    'displayName'?: string;
    /**
     * A logo for this Function.
     */
    'logoUrl'?: string;
    /**
     * A description for this Function.
     */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'Array<FunctionSettingV1>',
        },
        {
            name: 'displayName',
            baseName: 'displayName',
            type: 'string',
        },
        {
            name: 'logoUrl',
            baseName: 'logoUrl',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateFunctionV1Input.attributeTypeMap;
    }
}
