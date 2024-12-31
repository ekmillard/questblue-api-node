// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Countrylist extends APIResource {
  /**
   * List of countries where at least one rate center is available.
   */
  list(
    query: CountrylistListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CountrylistListResponse> {
    return this._client.get('/didinter/countrylist', { query, ...options });
  }
}

export interface CountrylistListResponse {
  data?: Array<Record<string, string>>;

  total?: number;
}

export interface CountrylistListParams {
  /**
   * DID to move
   */
  did: number;
}

export declare namespace Countrylist {
  export {
    type CountrylistListResponse as CountrylistListResponse,
    type CountrylistListParams as CountrylistListParams,
  };
}
