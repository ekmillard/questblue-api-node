// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Countries extends APIResource {
  /**
   * Retrieve a list of countries available for international calls.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CountryListResponse> {
    return this._client.get('/account/countrylist', options);
  }
}

export interface CountryListResponse {
  data: Array<CountryListResponse.Data>;
}

export namespace CountryListResponse {
  export interface Data {
    /**
     * Unique identifier for the country.
     */
    country_id: number;

    /**
     * Name of the country.
     */
    country_name: string;
  }
}

export declare namespace Countries {
  export { type CountryListResponse as CountryListResponse };
}
