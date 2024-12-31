// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class RateCenters extends APIResource {
  /**
   * List of rate centers for a state
   */
  list(query: RateCenterListParams, options?: Core.RequestOptions): Core.APIPromise<RateCenterListResponse> {
    return this._client.get('/did/ratecenters', { query, ...options });
  }
}

export interface RateCenterListResponse {
  data?: Record<string, string>;

  total?: number;
}

export interface RateCenterListParams {
  /**
   * Two char state abbreviation
   */
  state: string;

  /**
   * DID Tier
   */
  tier: '0' | '1' | '1b' | '2';
}

export declare namespace RateCenters {
  export {
    type RateCenterListResponse as RateCenterListResponse,
    type RateCenterListParams as RateCenterListParams,
  };
}
