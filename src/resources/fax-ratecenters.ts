// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FaxRatecenters extends APIResource {
  /**
   * Retrieve a list of Rate Centers for a specific state where Fax.Pro services are
   * available.
   */
  list(
    query: FaxRatecenterListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxRatecenterListResponse> {
    return this._client.get('/fax/ratecenters', { query, ...options });
  }
}

export interface FaxRatecenterListResponse {
  /**
   * A map of Rate Center names in the specified state.
   */
  data?: Record<string, string>;

  /**
   * The total number of Rate Centers in the specified state.
   */
  total?: number;
}

export interface FaxRatecenterListParams {
  /**
   * The two-character state abbreviation (e.g., 'NC') for which to retrieve Rate
   * Centers.
   */
  state: string;
}

export declare namespace FaxRatecenters {
  export {
    type FaxRatecenterListResponse as FaxRatecenterListResponse,
    type FaxRatecenterListParams as FaxRatecenterListParams,
  };
}
