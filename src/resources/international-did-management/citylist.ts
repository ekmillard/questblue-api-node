// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Citylist extends APIResource {
  /**
   * List of cities where at least one rate center is available.
   */
  list(query: CitylistListParams, options?: Core.RequestOptions): Core.APIPromise<CitylistListResponse> {
    return this._client.get('/didinter/citylist', { query, ...options });
  }
}

export interface CitylistListResponse {
  data?: Array<string>;

  total?: number;
}

export interface CitylistListParams {
  /**
   * Two char Country Code
   */
  country_code: string;
}

export declare namespace Citylist {
  export { type CitylistListResponse as CitylistListResponse, type CitylistListParams as CitylistListParams };
}
