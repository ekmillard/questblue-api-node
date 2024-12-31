// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class LocalNumberPortabilityRequests extends APIResource {
  /**
   * Update the details of an existing Local Number Portability (LNP) request. Only
   * the parameters provided in the request will be updated.
   */
  update(
    params: LocalNumberPortabilityRequestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const {
      id,
      account_no,
      activate_time,
      authorize_contact,
      bill_file,
      bill_filename,
      billing_telephone_no,
      city,
      company,
      contact_title,
      dir_prefix,
      dir_suffix,
      extra_services,
      foc_date,
      lidb_list,
      location,
      partial_port,
      pincode,
      port_out_pin,
      provider_name,
      service_unit,
      ssn,
      state,
      status,
      street_name,
      street_no,
      trunk,
      wireless_no,
      zipcode,
    } = params;
    return this._client.put('/lnp', {
      query: {
        id,
        account_no,
        activate_time,
        authorize_contact,
        bill_file,
        bill_filename,
        billing_telephone_no,
        city,
        company,
        contact_title,
        dir_prefix,
        dir_suffix,
        extra_services,
        foc_date,
        lidb_list,
        location,
        partial_port,
        pincode,
        port_out_pin,
        provider_name,
        service_unit,
        ssn,
        state,
        status,
        street_name,
        street_no,
        trunk,
        wireless_no,
        zipcode,
      },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a list of active Local Number Portability (LNP) requests based on
   * specified parameters.
   */
  list(
    query?: LocalNumberPortabilityRequestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocalNumberPortabilityRequestListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LocalNumberPortabilityRequestListResponse>;
  list(
    query: LocalNumberPortabilityRequestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocalNumberPortabilityRequestListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/lnp', { query, ...options });
  }

  /**
   * Delete an active (non-completed) Local Number Portability (LNP) request using
   * its unique identifier.
   */
  delete(
    params: LocalNumberPortabilityRequestDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { id } = params;
    return this._client.delete('/lnp', {
      query: { id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface LocalNumberPortabilityRequestListResponse {
  /**
   * Current page number.
   */
  current_page?: number;

  data?: Array<LocalNumberPortabilityRequestListResponse.Data>;

  /**
   * Total number of LNP requests.
   */
  total?: number;

  /**
   * Total number of pages.
   */
  total_pages?: number;
}

export namespace LocalNumberPortabilityRequestListResponse {
  export interface Data {
    /**
     * Unique identifier for the LNP request.
     */
    id?: string;

    /**
     * Service provider account number.
     */
    account_no?: string;

    /**
     * Authorized contact person.
     */
    authorize_contact?: string;

    /**
     * Billing telephone number.
     */
    billing_telephone_no?: string;

    /**
     * City.
     */
    city?: string;

    /**
     * Company name.
     */
    company?: string;

    /**
     * Title of the contact person.
     */
    contact_title?: string;

    /**
     * Timestamp when the request was created.
     */
    created_by?: string;

    /**
     * Type of DID.
     */
    did_mode?: string;

    /**
     * DIR prefix.
     */
    dir_prefix?: string;

    /**
     * DIR suffix.
     */
    dir_suffix?: string;

    /**
     * Requested FOC date.
     */
    foc_date?: string;

    /**
     * LIDB/Directory Listings status.
     */
    lidb_list?: string;

    /**
     * Service location.
     */
    location?: string;

    /**
     * Telephone number being ported.
     */
    number2port?: string;

    /**
     * Partial port status.
     */
    partial_port?: string;

    /**
     * Current service provider name.
     */
    provider_name?: string;

    /**
     * Service suite/unit.
     */
    service_unit?: string;

    /**
     * Status of the LNP request.
     */
    status?: string;

    /**
     * Street name.
     */
    street_name?: string;

    /**
     * Street number.
     */
    street_no?: string;

    /**
     * SIP trunk name for routing.
     */
    trunk?: string;

    /**
     * Wireless number type.
     */
    wireless_no?: string;

    /**
     * Zip code.
     */
    zipcode?: string;
  }
}

export interface LocalNumberPortabilityRequestUpdateParams {
  /**
   * The unique identifier of the LNP request to update.
   */
  id: number;

  /**
   * Service provider account number.
   */
  account_no?: string;

  /**
   * Requested FOC activation time in the format HH:00 (EST).
   */
  activate_time?: string;

  /**
   * Authorized contact person (max 25 chars).
   */
  authorize_contact?: string;

  /**
   * Base64 encoded phone bill file (scan, photo). Supported file types: GIF, JPG,
   * PNG, PDF. Size up to 5MB.
   */
  bill_file?: string;

  /**
   * Base64 encoded phone bill file name.
   */
  bill_filename?: string;

  /**
   * US-based billing telephone number (10 chars).
   */
  billing_telephone_no?: string;

  /**
   * Service city (max 100 chars).
   */
  city?: string;

  /**
   * Company name. Required if location is set to business.
   */
  company?: string;

  /**
   * Contact title. Example: Employee, President, CEO (max 50 chars).
   */
  contact_title?: string;

  /**
   * DIR prefix. Examples: None, N, NE, E, SE, S, SW, W, NW (max 10 chars).
   */
  dir_prefix?: string;

  /**
   * DIR suffix. Example: None, N, NE, E, SE, S, SW, W, NW (max 10 chars).
   */
  dir_suffix?: string;

  /**
   * Additional remaining services. Required if partial_port is set to yes.
   */
  extra_services?: string;

  /**
   * Requested FOC date in the format YYYY-MM-DD. Not available for mobile DIDs.
   */
  foc_date?: string;

  /**
   * LIDB/Directory Listings. Values: no, yes. Default is no.
   */
  lidb_list?: 'no' | 'yes';

  /**
   * Service location. Values: business, residential. Default is business.
   */
  location?: 'business' | 'residential';

  /**
   * Partial port status. Values: yes or no. Default is no.
   */
  partial_port?: 'yes' | 'no';

  /**
   * Wireless account PIN code. Required if wireless_no is set to yes.
   */
  pincode?: number;

  /**
   * Current carrier porting out PIN code (4-10 chars).
   */
  port_out_pin?: string;

  /**
   * Current service provider name (max 255 chars).
   */
  provider_name?: string;

  /**
   * Service suite/unit (max 100 chars).
   */
  service_unit?: string;

  /**
   * SSN last four digits. Required if wireless_no is set to yes.
   */
  ssn?: number;

  /**
   * Service state.
   */
  state?: string;

  /**
   * LNP request status. Allowed if the request is currently in Draft or Submitted
   * status. Values: draft, submitted (default).
   */
  status?: 'draft' | 'submitted';

  /**
   * Street name (max 100 chars).
   */
  street_name?: string;

  /**
   * Service street number (max 50 chars).
   */
  street_no?: string;

  /**
   * SIP trunk name to route DID on completion. Valid for voice DIDs only. Set to an
   * empty value to unset the trunk.
   */
  trunk?: string;

  /**
   * Wireless number type. Values: no, yes. Default is no.
   */
  wireless_no?: 'no' | 'yes';

  /**
   * Service zip code (max 20 chars).
   */
  zipcode?: string;
}

export interface LocalNumberPortabilityRequestListParams {
  /**
   * LNP order ID(s). You can provide a single ID or an array of IDs.
   */
  id?: Array<number>;

  /**
   * Porting numbers to list. Supports Unix-style searching. Examples: _890, 123_,
   * _456_. Minimum three digits required for search.
   */
  number2port?: string;

  /**
   * Page number to show.
   */
  page?: number;

  /**
   * Number of records to show per page. Values range from 1 to 200. Default is 10.
   */
  per_page?: number;
}

export interface LocalNumberPortabilityRequestDeleteParams {
  /**
   * The unique identifier of the LNP request to delete.
   */
  id: number;
}

export declare namespace LocalNumberPortabilityRequests {
  export {
    type LocalNumberPortabilityRequestListResponse as LocalNumberPortabilityRequestListResponse,
    type LocalNumberPortabilityRequestUpdateParams as LocalNumberPortabilityRequestUpdateParams,
    type LocalNumberPortabilityRequestListParams as LocalNumberPortabilityRequestListParams,
    type LocalNumberPortabilityRequestDeleteParams as LocalNumberPortabilityRequestDeleteParams,
  };
}
