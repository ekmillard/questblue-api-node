// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Available extends APIResource {
  /**
   * Get list of available DIDs - Local or Toll Free
   */
  list(query: AvailableListParams, options?: Core.RequestOptions): Core.APIPromise<AvailableListResponse> {
    return this._client.get('/did/available', { query, ...options });
  }
}

export interface AvailableListResponse {
  data?: Array<string>;

  total?: number;
}

export interface AvailableListParams {
  /**
   * DID type to list
   */
  type: 'local' | 'tf';

  /**
   * Two char TF code.(Use Mask instead)
   */
  code?: number;

  /**
   * DID to retrieve by mask. Minimum 3 digits. Unix style searching(i.e. _890 123_
   * _456_)
   */
  mask?: string;

  /**
   * For Local DIDs only. Required for Local DIDs if no NPA is set
   */
  ratecenter?: string;

  /**
   * Two char state abbreviation. Required for Local DIDs if no NPA is set
   */
  state?: string;

  /**
   * DID Tier
   */
  tier?: '0' | '1' | '1b' | '2';

  /**
   * Limit the number of DIDs returned in the response. Default is 100.
   */
  total_list?: number;

  /**
   * Five character zip code. For Local DIDs only. Option overrides
   * state/ratecenter/NPA
   */
  zip?: number;
}

export declare namespace Available {
  export {
    type AvailableListResponse as AvailableListResponse,
    type AvailableListParams as AvailableListParams,
  };
}
