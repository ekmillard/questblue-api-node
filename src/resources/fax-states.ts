// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FaxStates extends APIResource {
  /**
   * Retrieve a list of states (short names) where at least one Rate Center is
   * available for Fax.Pro services.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FaxStateListResponse> {
    return this._client.get('/fax/states', options);
  }
}

export interface FaxStateListResponse {
  /**
   * An array of state abbreviations where Rate Centers are available.
   */
  data?: Array<string>;

  /**
   * The total number of states with available Rate Centers.
   */
  total?: number;
}

export declare namespace FaxStates {
  export { type FaxStateListResponse as FaxStateListResponse };
}
