// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CitylistAPI from './citylist';
import { Citylist, CitylistListParams, CitylistListResponse } from './citylist';
import * as CountrylistAPI from './countrylist';
import { Countrylist, CountrylistListParams, CountrylistListResponse } from './countrylist';

export class InternationalDidManagement extends APIResource {
  countrylist: CountrylistAPI.Countrylist = new CountrylistAPI.Countrylist(this._client);
  citylist: CitylistAPI.Citylist = new CitylistAPI.Citylist(this._client);

  /**
   * Order International DID
   */
  create(
    params: InternationalDidManagementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternationalDidManagementCreateResponse> {
    const { city, country_code, forward2did, route2trunk } = params;
    return this._client.post('/didinter', {
      query: { city, country_code, forward2did, route2trunk },
      ...options,
    });
  }

  /**
   * Update International DID
   */
  update(
    params: InternationalDidManagementUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { did, forward2did, route2trunk } = params;
    return this._client.put('/didinter', {
      query: { did, forward2did, route2trunk },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List ordered DIDs and their configurations
   */
  list(
    query?: InternationalDidManagementListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternationalDidManagementListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InternationalDidManagementListResponse>;
  list(
    query: InternationalDidManagementListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternationalDidManagementListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/didinter', { query, ...options });
  }

  /**
   * Delete International DID
   */
  delete(
    params: InternationalDidManagementDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { did } = params;
    return this._client.delete('/didinter', {
      query: { did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface InternationalDidManagementCreateResponse {
  did?: Array<number>;
}

export interface InternationalDidManagementListResponse {
  current_page?: number;

  data?: Record<string, Array<string>>;

  total?: number;

  total_pages?: number;
}

export interface InternationalDidManagementCreateParams {
  /**
   * City Name
   */
  city: string;

  /**
   * Two char Country Code
   */
  country_code: string;

  /**
   * Local DID to forward inbound call
   */
  forward2did: number;

  /**
   * SIP Trunk to route the DID to. The trunk must be active.
   */
  route2trunk: number;
}

export interface InternationalDidManagementUpdateParams {
  /**
   * DID to update
   */
  did: number;

  /**
   * (Use route2trunk instead)Local DID to forward inbound call
   */
  forward2did: number;

  /**
   * SIP Trunk to route the DID to. The trunk must be active.
   */
  route2trunk: number;
}

export interface InternationalDidManagementListParams {
  /**
   * DID to retrieve. Minimum 3 digits. Unix style searching(i.e. _890 123_ _456_)
   */
  did?: string;

  /**
   * Page number to retrieve data from
   */
  page?: number;

  /**
   * Number of records to list in a page. Default is 25
   */
  per_page?: number;
}

export interface InternationalDidManagementDeleteParams {
  /**
   * DID to remove
   */
  did: number;
}

InternationalDidManagement.Countrylist = Countrylist;
InternationalDidManagement.Citylist = Citylist;

export declare namespace InternationalDidManagement {
  export {
    type InternationalDidManagementCreateResponse as InternationalDidManagementCreateResponse,
    type InternationalDidManagementListResponse as InternationalDidManagementListResponse,
    type InternationalDidManagementCreateParams as InternationalDidManagementCreateParams,
    type InternationalDidManagementUpdateParams as InternationalDidManagementUpdateParams,
    type InternationalDidManagementListParams as InternationalDidManagementListParams,
    type InternationalDidManagementDeleteParams as InternationalDidManagementDeleteParams,
  };

  export {
    Countrylist as Countrylist,
    type CountrylistListResponse as CountrylistListResponse,
    type CountrylistListParams as CountrylistListParams,
  };

  export {
    Citylist as Citylist,
    type CitylistListResponse as CitylistListResponse,
    type CitylistListParams as CitylistListParams,
  };
}
