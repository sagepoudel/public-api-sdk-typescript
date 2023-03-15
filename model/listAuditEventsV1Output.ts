/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.3.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AuditEventV1 } from './auditEventV1';
import { Pagination } from './pagination';

/**
 * Returns a list of Audit Trail events for the current Workspace.
 */
export class ListAuditEventsV1Output {
    /**
     * Audit trail events for the current Workspace.
     */
    'events': Array<AuditEventV1>;
    'pagination'?: Pagination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'events',
            baseName: 'events',
            type: 'Array<AuditEventV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];

    static getAttributeTypeMap() {
        return ListAuditEventsV1Output.attributeTypeMap;
    }
}
