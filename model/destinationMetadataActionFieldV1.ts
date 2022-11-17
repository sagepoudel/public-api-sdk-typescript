/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.7
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a field used in configuring an action.
 */
export class DestinationMetadataActionFieldV1 {
    /**
     * The primary key of the field.
     */
    'id': string;
    /**
     * The order this particular field is (used in the UI for displaying the fields in a specified order).
     */
    'sortOrder': number;
    /**
     * A unique machine-readable key for the field. Should ideally match the expected key in the action\\\'s API request.
     */
    'fieldKey': string;
    /**
     * A human-readable label for this value.
     */
    'label': string;
    /**
     * The data type for this value.
     */
    'type': DestinationMetadataActionFieldV1.TypeEnum;
    /**
     * A human-readable description of this value. You can use Markdown.
     */
    'description': string;
    /**
     * An example value displayed but not saved.
     */
    'placeholder'?: string;
    /**
     * A default value that is saved the first time an action is created.
     */
    'defaultValue'?: any | null;
    /**
     * Whether this field is required.
     */
    'required': boolean;
    /**
     * Whether a user can provide multiples of this field.
     */
    'multiple': boolean;
    /**
     * A list of machine-readable value/label pairs to populate a static dropdown.
     */
    'choices'?: any | null;
    /**
     * Whether this field should execute a dynamic request to fetch choices to populate a dropdown. When true, `choices` is ignored.
     */
    'dynamic': boolean;
    /**
     * Whether this field allows null values.
     */
    'allowNull': boolean;

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
            name: 'sortOrder',
            baseName: 'sortOrder',
            type: 'number',
        },
        {
            name: 'fieldKey',
            baseName: 'fieldKey',
            type: 'string',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationMetadataActionFieldV1.TypeEnum',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'placeholder',
            baseName: 'placeholder',
            type: 'string',
        },
        {
            name: 'defaultValue',
            baseName: 'defaultValue',
            type: 'any',
        },
        {
            name: 'required',
            baseName: 'required',
            type: 'boolean',
        },
        {
            name: 'multiple',
            baseName: 'multiple',
            type: 'boolean',
        },
        {
            name: 'choices',
            baseName: 'choices',
            type: 'any',
        },
        {
            name: 'dynamic',
            baseName: 'dynamic',
            type: 'boolean',
        },
        {
            name: 'allowNull',
            baseName: 'allowNull',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataActionFieldV1.attributeTypeMap;
    }
}

export namespace DestinationMetadataActionFieldV1 {
    export enum TypeEnum {
        BOOLEAN = <any>'BOOLEAN',
        DATETIME = <any>'DATETIME',
        HIDDEN = <any>'HIDDEN',
        INTEGER = <any>'INTEGER',
        NUMBER = <any>'NUMBER',
        OBJECT = <any>'OBJECT',
        PASSWORD = <any>'PASSWORD',
        STRING = <any>'STRING',
        TEXT = <any>'TEXT',
    }
}
