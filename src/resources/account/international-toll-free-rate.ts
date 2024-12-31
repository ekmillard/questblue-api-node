// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class InternationalTollFreeRate extends APIResource {
  /**
   * Get the call rates for international toll-free numbers outside the US.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<InternationalTollFreeRateRetrieveResponse> {
    return this._client.get('/account/nonusintfrate', options);
  }
}

export interface InternationalTollFreeRateRetrieveResponse {
  data: Array<InternationalTollFreeRateRetrieveResponse.Data>;
}

export namespace InternationalTollFreeRateRetrieveResponse {
  export interface Data {
    /**
     * Country or region code for the toll-free number.
     */
    code: string;

    /**
     * The origin or region of the toll-free number.
     */
    origin: string;

    /**
     * Rate for calling the toll-free number.
     */
    rate: string;
  }
}

export declare namespace InternationalTollFreeRate {
  export { type InternationalTollFreeRateRetrieveResponse as InternationalTollFreeRateRetrieveResponse };
}
