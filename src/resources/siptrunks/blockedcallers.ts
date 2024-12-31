// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Blockedcallers extends APIResource {
  /**
   * Retrieve a list of callers blocked on specific SIP trunk(s).
   */
  list(
    query?: BlockedcallerListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockedcallerListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BlockedcallerListResponse>;
  list(
    query: BlockedcallerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockedcallerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/siptrunk/blockedcallers', { query, ...options });
  }
}

export interface BlockedcallerListResponse {
  /**
   * The current page number.
   */
  current_page?: number;

  data?: Array<BlockedcallerListResponse.Data>;

  /**
   * Total number of blocked callers.
   */
  total?: number;

  /**
   * Total number of pages available.
   */
  total_pages?: number;
}

export namespace BlockedcallerListResponse {
  export interface Data {
    /**
     * The blocked DID (telephone number).
     */
    did?: string;

    /**
     * The IP address associated with the blocked caller.
     */
    ip_address?: string;

    /**
     * The status of the blocked caller.
     */
    status?: string;

    /**
     * The name of the SIP trunk associated with the blocked caller.
     */
    trunk?: string;
  }
}

export interface BlockedcallerListParams {
  /**
   * List only specific blocked TN (telephone number).
   */
  did?: number;

  /**
   * Page number to retrieve data from.
   */
  page?: number;

  /**
   * Number of records to list on a page. The default value is 25. Set a value in the
   * range of 5 to 200 if needed.
   */
  per_page?: number;

  /**
   * SIP Trunk(s) to list blocked callers. This must be an active trunk from your
   * account.
   */
  trunk?: string;
}

export declare namespace Blockedcallers {
  export {
    type BlockedcallerListResponse as BlockedcallerListResponse,
    type BlockedcallerListParams as BlockedcallerListParams,
  };
}
