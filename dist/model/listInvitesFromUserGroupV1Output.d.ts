import { PaginationOutput } from './paginationOutput';
export declare class ListInvitesFromUserGroupV1Output {
    'emails': Array<string>;
    'pagination': PaginationOutput;
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
