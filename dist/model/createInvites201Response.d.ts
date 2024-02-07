import { CreateInvitesV1Output } from './createInvitesV1Output';
export declare class CreateInvites201Response {
    'data'?: CreateInvitesV1Output;
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
