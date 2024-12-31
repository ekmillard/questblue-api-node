// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Rates extends APIResource {
  /**
   * Retrieve the rates for various services.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<RateRetrieveResponse> {
    return this._client.get('/account/rates', options);
  }
}

export interface RateRetrieveResponse {
  /**
   * CCRF rate.
   */
  ccrf: string;

  /**
   * Rate for inbound calls.
   */
  inbound_call_rate: string;

  /**
   * Cost of a local DID.
   */
  local_did_cost: string;

  /**
   * Rate for VPS servers.
   */
  vps_server_rate: string;
}

export declare namespace Rates {
  export { type RateRetrieveResponse as RateRetrieveResponse };
}
