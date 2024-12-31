// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class RateZone2 extends APIResource {
  /**
   * Get the call rates for international destinations classified under Zone 2.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<RateZone2RetrieveResponse> {
    return this._client.get('/account/ratezone2', options);
  }
}

export interface RateZone2RetrieveResponse {
  data: Array<RateZone2RetrieveResponse.Data>;
}

export namespace RateZone2RetrieveResponse {
  export interface Data {
    /**
     * Country or region code for the destination.
     */
    code: string;

    /**
     * Name of the destination within Zone 2.
     */
    destination: string;

    /**
     * Rate for calling the destination.
     */
    rate: string;
  }
}

export declare namespace RateZone2 {
  export { type RateZone2RetrieveResponse as RateZone2RetrieveResponse };
}
