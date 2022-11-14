import { UpdateSourceAlphaOutput } from './updateSourceAlphaOutput';
export declare class UpdateSource200Response1 {
    'data'?: UpdateSourceAlphaOutput;
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
