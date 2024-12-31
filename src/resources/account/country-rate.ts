// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class CountryRate extends APIResource {
  /**
   * Get the call rates for international destinations based on country ID.
   */
  retrieve(
    query: CountryRateRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CountryRateRetrieveResponse> {
    return this._client.get('/account/countryrate', { query, ...options });
  }
}

export interface CountryRateRetrieveResponse {
  data: Array<CountryRateRetrieveResponse.Data>;
}

export namespace CountryRateRetrieveResponse {
  export interface Data {
    /**
     * Country code for the destination.
     */
    code: string;

    /**
     * Name of the destination within the country.
     */
    destination: string;

    /**
     * Rate for calling the destination.
     */
    rate: string;
  }
}

export interface CountryRateRetrieveParams {
  /**
   * The unique identifier of the country for which the rate is requested.
   */
  country_id: number;
}

export declare namespace CountryRate {
  export {
    type CountryRateRetrieveResponse as CountryRateRetrieveResponse,
    type CountryRateRetrieveParams as CountryRateRetrieveParams,
  };
}
