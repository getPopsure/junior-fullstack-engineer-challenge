/* tslint:disable */
/* eslint-disable */
/**
 * Feather Challenge
 * Feather Policy and Customer API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PolicyEntity,
} from '../models';
import {
    PolicyEntityFromJSON,
    PolicyEntityToJSON,
} from '../models';

export interface PoliciesControllerCreateRequest {
    body: object;
}

export interface PoliciesControllerFindRequest {
    skip: number;
    take: number;
    filterStatus: string;
    filterType: string;
    searchCustomerName: string;
    searchProvider: string;
}

export interface PoliciesControllerFindOneRequest {
    id: string;
}

export interface PoliciesControllerRemoveRequest {
    id: string;
}

export interface PoliciesControllerUpdateRequest {
    id: string;
    body: object;
}

/**
 * 
 */
export class PoliciesApi extends runtime.BaseAPI {

    /**
     * 
     * 
     */
    async policiesControllerCreateRaw(requestParameters: PoliciesControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling policiesControllerCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/policies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * 
     * 
     */
    async policiesControllerCreate(requestParameters: PoliciesControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.policiesControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 
     */
    async policiesControllerFindRaw(requestParameters: PoliciesControllerFindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array>> {
        if (requestParameters.skip === null || requestParameters.skip === undefined) {
            throw new runtime.RequiredError('skip','Required parameter requestParameters.skip was null or undefined when calling policiesControllerFind.');
        }

        if (requestParameters.take === null || requestParameters.take === undefined) {
            throw new runtime.RequiredError('take','Required parameter requestParameters.take was null or undefined when calling policiesControllerFind.');
        }

        if (requestParameters.filterStatus === null || requestParameters.filterStatus === undefined) {
            throw new runtime.RequiredError('filterStatus','Required parameter requestParameters.filterStatus was null or undefined when calling policiesControllerFind.');
        }

        if (requestParameters.filterType === null || requestParameters.filterType === undefined) {
            throw new runtime.RequiredError('filterType','Required parameter requestParameters.filterType was null or undefined when calling policiesControllerFind.');
        }

        if (requestParameters.searchCustomerName === null || requestParameters.searchCustomerName === undefined) {
            throw new runtime.RequiredError('searchCustomerName','Required parameter requestParameters.searchCustomerName was null or undefined when calling policiesControllerFind.');
        }

        if (requestParameters.searchProvider === null || requestParameters.searchProvider === undefined) {
            throw new runtime.RequiredError('searchProvider','Required parameter requestParameters.searchProvider was null or undefined when calling policiesControllerFind.');
        }

        const queryParameters: any = {};

        if (requestParameters.skip !== undefined) {
            queryParameters['skip'] = requestParameters.skip;
        }

        if (requestParameters.take !== undefined) {
            queryParameters['take'] = requestParameters.take;
        }

        if (requestParameters.filterStatus !== undefined) {
            queryParameters['filterStatus'] = requestParameters.filterStatus;
        }

        if (requestParameters.filterType !== undefined) {
            queryParameters['filterType'] = requestParameters.filterType;
        }

        if (requestParameters.searchCustomerName !== undefined) {
            queryParameters['searchCustomerName'] = requestParameters.searchCustomerName;
        }

        if (requestParameters.searchProvider !== undefined) {
            queryParameters['searchProvider'] = requestParameters.searchProvider;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/policies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * 
     * 
     */
    async policiesControllerFind(requestParameters: PoliciesControllerFindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array> {
        const response = await this.policiesControllerFindRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 
     */
    async policiesControllerFindOneRaw(requestParameters: PoliciesControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PolicyEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling policiesControllerFindOne.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/policies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PolicyEntityFromJSON(jsonValue));
    }

    /**
     * 
     * 
     */
    async policiesControllerFindOne(requestParameters: PoliciesControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PolicyEntity> {
        const response = await this.policiesControllerFindOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 
     */
    async policiesControllerRemoveRaw(requestParameters: PoliciesControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling policiesControllerRemove.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/policies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * 
     * 
     */
    async policiesControllerRemove(requestParameters: PoliciesControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.policiesControllerRemoveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 
     */
    async policiesControllerUpdateRaw(requestParameters: PoliciesControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling policiesControllerUpdate.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling policiesControllerUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/policies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * 
     * 
     */
    async policiesControllerUpdate(requestParameters: PoliciesControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.policiesControllerUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
