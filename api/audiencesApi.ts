/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 53.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CreateAudience200Response } from '../model/createAudience200Response';
import { CreateAudienceAlphaInput } from '../model/createAudienceAlphaInput';
import { GetAudience200Response } from '../model/getAudience200Response';
import { ListAudiences200Response } from '../model/listAudiences200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveAudienceFromSpace200Response } from '../model/removeAudienceFromSpace200Response';
import { RequestErrorEnvelope } from '../model/requestErrorEnvelope';
import { UpdateAudienceForSpace200Response } from '../model/updateAudienceForSpace200Response';
import { UpdateAudienceForSpaceInput } from '../model/updateAudienceForSpaceInput';

import {
    ObjectSerializer,
    Authentication,
    VoidAuth,
    Interceptor,
} from '../model/models';
import {
    HttpBasicAuth,
    HttpBearerAuth,
    ApiKeyAuth,
    OAuth,
} from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.segmentapis.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AudiencesApiApiKeys {}

export class AudiencesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders: any = {};
    protected _useQuerystring: boolean = false;

    protected authentications = {
        default: <Authentication>new VoidAuth(),
        token: new HttpBearerAuth(),
    };

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(
        basePathOrUsername: string,
        password?: string,
        basePath?: string
    ) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AudiencesApiApiKeys, value: string) {
        (this.authentications as any)[AudiencesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Creates Audience.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending an email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Audience feature enabled. Please reach out to your customer success manager for more information.  • When called, this endpoint may generate the `Audience Created` event in the [audit trail](/tag/Audit-Trail).  Note: The definition for an Audience created via the API is not editable via the Segment App.   The rate limit for this endpoint is 10 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Create Audience
     * @param spaceId
     * @param CreateAudienceAlphaInput
     */
    public async createAudience(
        spaceId: string,
        CreateAudienceAlphaInput: CreateAudienceAlphaInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: CreateAudience200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/audiences'.replace(
                '{' + 'spaceId' + '}',
                encodeURIComponent(String(spaceId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling createAudience.'
            );
        }

        // verify required parameter 'CreateAudienceAlphaInput' is not null or undefined
        if (
            CreateAudienceAlphaInput === null ||
            CreateAudienceAlphaInput === undefined
        ) {
            throw new Error(
                'Required parameter CreateAudienceAlphaInput was null or undefined when calling createAudience.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(
                CreateAudienceAlphaInput,
                'CreateAudienceAlphaInput'
            ),
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: CreateAudience200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'CreateAudience200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns the Audience by id and spaceId.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending an email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Audience feature enabled. Please reach out to your customer success manager for more information.   The rate limit for this endpoint is 100 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Get Audience
     * @param spaceId
     * @param id
     */
    public async getAudience(
        spaceId: string,
        id: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetAudience200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/audiences/{id}'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling getAudience.'
            );
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling getAudience.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetAudience200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetAudience200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns Audiences by spaceId.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending an email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Audience feature enabled. Please reach out to your customer success manager for more information.   The rate limit for this endpoint is 25 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary List Audiences
     * @param spaceId
     * @param pagination Information about the pagination of this response.  [See pagination](https://docs.segmentapis.com/tag/Pagination/#section/Pagination-parameters) for more info.  This parameter exists in alpha.
     */
    public async listAudiences(
        spaceId: string,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ListAudiences200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/audiences'.replace(
                '{' + 'spaceId' + '}',
                encodeURIComponent(String(spaceId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling listAudiences.'
            );
        }

        if (pagination !== undefined) {
            localVarQueryParameters['pagination'] = ObjectSerializer.serialize(
                pagination,
                'PaginationInput'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: ListAudiences200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'ListAudiences200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Deletes an Audience by id and spaceId.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending an email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Audience feature enabled. Please reach out to your customer success manager for more information.  • When called, this endpoint may generate the `Audience Deleted` event in the [audit trail](/tag/Audit-Trail).   The rate limit for this endpoint is 20 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Remove Audience from Space
     * @param spaceId
     * @param id
     */
    public async removeAudienceFromSpace(
        spaceId: string,
        id: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: RemoveAudienceFromSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/audiences/{id}'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling removeAudienceFromSpace.'
            );
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling removeAudienceFromSpace.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: RemoveAudienceFromSpace200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'RemoveAudienceFromSpace200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Updates the enabled status for an audience  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending an email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Audience feature enabled. Please reach out to your customer success manager for more information.  • When called, this endpoint may generate the `Audience Modified` event in the [audit trail](/tag/Audit-Trail).  • Note that when an Audience is updated, the Audience will be locked from future edits until the changes have been incorporated. You can find more information [in the Segment docs](https://segment-docs.netlify.app/docs/engage/audiences/#editing-realtime-audiences-and-traits).  Note: The definition for an Audience updated via the API is not editable via the Segment App.   The rate limit for this endpoint is 10 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Update Audience for Space
     * @param spaceId
     * @param id
     * @param UpdateAudienceForSpaceInput
     */
    public async updateAudienceForSpace(
        spaceId: string,
        id: string,
        UpdateAudienceForSpaceInput: UpdateAudienceForSpaceInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: UpdateAudienceForSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/audiences/{id}'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling updateAudienceForSpace.'
            );
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling updateAudienceForSpace.'
            );
        }

        // verify required parameter 'UpdateAudienceForSpaceInput' is not null or undefined
        if (
            UpdateAudienceForSpaceInput === null ||
            UpdateAudienceForSpaceInput === undefined
        ) {
            throw new Error(
                'Required parameter UpdateAudienceForSpaceInput was null or undefined when calling updateAudienceForSpace.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(
                UpdateAudienceForSpaceInput,
                'UpdateAudienceForSpaceInput'
            ),
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: UpdateAudienceForSpace200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'UpdateAudienceForSpace200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
}
