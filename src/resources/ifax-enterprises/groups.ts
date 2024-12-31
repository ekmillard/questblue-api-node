// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Groups extends APIResource {
  /**
   * Create a new iFax Group of users (company).
   */
  create(params: GroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { name, sname } = params;
    return this._client.post('/fax2/group', {
      query: { name, sname },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update iFax Groups (companies) and their properties.
   */
  update(params: GroupUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { name_new, sname, sname_new } = params;
    return this._client.put('/fax2/group', {
      query: { name_new, sname, sname_new },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List iFax Groups (companies) and their properties.
   */
  list(query?: GroupListParams, options?: Core.RequestOptions): Core.APIPromise<GroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GroupListResponse>;
  list(
    query: GroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/fax2/group', { query, ...options });
  }

  /**
   * Completely remove an iFax Enterprise group.
   */
  delete(params: GroupDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { sname } = params;
    return this._client.delete('/fax2/group', {
      query: { sname },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface GroupListResponse {
  data?: Array<GroupListResponse.Data>;

  /**
   * Total number of iFax groups.
   */
  total?: number;
}

export namespace GroupListResponse {
  export interface Data {
    /**
     * Group name.
     */
    name?: string;

    /**
     * Group short name.
     */
    sname?: string;
  }
}

export interface GroupCreateParams {
  /**
   * Group name. Up to 128 characters.
   */
  name: string;

  /**
   * Group short name. Up to 24 characters.
   */
  sname: string;
}

export interface GroupUpdateParams {
  /**
   * New Group name. Up to 128 characters.
   */
  name_new: string;

  /**
   * Existing Group short name to modify.
   */
  sname: string;

  /**
   * New Group short name. Up to 24 characters.
   */
  sname_new: string;
}

export interface GroupListParams {
  /**
   * Group short name to show property.
   */
  sname?: string;
}

export interface GroupDeleteParams {
  /**
   * Group short name to remove.
   */
  sname: string;
}

export declare namespace Groups {
  export {
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
  };
}
