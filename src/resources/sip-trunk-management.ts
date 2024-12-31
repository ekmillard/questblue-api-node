// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class SipTrunkManagement extends APIResource {
  /**
   * List SIP Trunks and thier properties
   */
  list(
    query?: SipTrunkManagementListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SipTrunkManagementListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SipTrunkManagementListResponse>;
  list(
    query: SipTrunkManagementListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SipTrunkManagementListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/siptrunk', { query, ...options });
  }
}

export interface SipTrunkManagementListResponse {
  current_page?: number;

  data?: Record<string, Array<string>>;

  total?: number;

  total_pages?: number;
}

export interface SipTrunkManagementListParams {
  /**
   * Page number to retrieve data from
   */
  page?: number;

  /**
   * Number of records to list in a page. Default is 25
   */
  per_page?: number;

  /**
   * SIP Trunk name to get
   */
  trunk?: string;
}

export declare namespace SipTrunkManagement {
  export {
    type SipTrunkManagementListResponse as SipTrunkManagementListResponse,
    type SipTrunkManagementListParams as SipTrunkManagementListParams,
  };
}
