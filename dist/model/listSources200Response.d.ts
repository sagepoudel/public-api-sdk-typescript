import { ListSourcesV1Output } from './listSourcesV1Output';
export declare class ListSources200Response {
    'data'?: ListSourcesV1Output;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
