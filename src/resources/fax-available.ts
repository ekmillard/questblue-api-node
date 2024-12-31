// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FaxAvailable extends APIResource {
  /**
   * Retrieve a list of available Fax DIDs (Local or Toll-Free).
   */
  list(
    query: FaxAvailableListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxAvailableListResponse> {
    return this._client.get('/fax/available', { query, ...options });
  }
}

export interface FaxAvailableListResponse {
  data?: Array<string>;

  /**
   * The total number of available Fax DIDs.
   */
  total?: number;
}

export interface FaxAvailableListParams {
  /**
   * The type of DID to list. Values can be 'local' for Local DIDs or 'tf' for
   * Toll-Free DIDs. Note that Toll-Free DIDs are not available for Tier 2.
   */
  type: 'local' | 'tf';

  /**
   * The two-character Toll-Free code. This parameter is used only for Toll-Free
   * DIDs. Example: 83.
   */
  code?: number;

  /**
   * The three-character NPA code for Local DIDs. If provided, this takes precedence
   * over state and rate center.
   */
  npa?: number;

  /**
   * The rate center name for Local DIDs. Required if no NPA is provided.
   */
  ratecenter?: string;

  /**
   * The two-character state abbreviation for Local DIDs. Required if no NPA is
   * provided.
   */
  state?: string;

  /**
   * The tier level of the DIDs. Possible values are 0 (No TF DIDs available), 1, 1b
   * (SMS available), 2 (No TF DIDs available), 3 (No TF DIDs available). If not
   * provided, '1b' is used by default.
   */
  tier?: '0' | '1' | '1b' | '2' | '3';

  /**
   * The ZIP code (5 characters long) for Local DIDs. This option is for Tier 1b only
   * and takes precedence over state/rate center and NPA.
   */
  zip?: number;
}

export declare namespace FaxAvailable {
  export {
    type FaxAvailableListResponse as FaxAvailableListResponse,
    type FaxAvailableListParams as FaxAvailableListParams,
  };
}
