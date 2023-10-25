import { Source1 } from './source1';
export declare class GetSourceAlphaOutput {
    'source': Source1;
    'trackingPlanId': string | null;
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
