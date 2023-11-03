import { APICallSnapshotV1 } from './aPICallSnapshotV1';
import { PaginationOutput } from './paginationOutput';
export declare class GetDailyWorkspaceAPICallsUsageV1Output {
    'dailyWorkspaceAPICallsUsage': Array<APICallSnapshotV1>;
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
