/// <reference types="node" />
import http from 'http';
import { CreateReverseEtlModel200Response } from '../model/createReverseEtlModel200Response';
import { CreateReverseEtlModelInput } from '../model/createReverseEtlModelInput';
import { DeleteReverseEtlModel200Response } from '../model/deleteReverseEtlModel200Response';
import { GetReverseEtlModel200Response } from '../model/getReverseEtlModel200Response';
import { ListReverseEtlModels200Response } from '../model/listReverseEtlModels200Response';
import { PaginationInput } from '../model/paginationInput';
import { UpdateReverseEtlModel200Response } from '../model/updateReverseEtlModel200Response';
import { UpdateReverseEtlModelInput } from '../model/updateReverseEtlModelInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum ReverseETLApiApiKeys {
}
export declare class ReverseETLApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        token: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReverseETLApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createReverseEtlModel(CreateReverseEtlModelInput: CreateReverseEtlModelInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateReverseEtlModel200Response;
    }>;
    deleteReverseEtlModel(modelId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteReverseEtlModel200Response;
    }>;
    getReverseEtlModel(modelId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetReverseEtlModel200Response;
    }>;
    listReverseEtlModels(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListReverseEtlModels200Response;
    }>;
    updateReverseEtlModel(modelId: string, UpdateReverseEtlModelInput: UpdateReverseEtlModelInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateReverseEtlModel200Response;
    }>;
}