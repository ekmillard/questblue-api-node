// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class LocalNumberPortability extends APIResource {
  /**
   * Create a new Local Number Portability (LNP) request for porting US-based
   * telephone numbers.
   */
  create(
    params: LocalNumberPortabilityCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocalNumberPortabilityCreateResponse> {
    const {
      account_no,
      authorize_contact,
      bill_file,
      bill_filename,
      billing_telephone_no,
      city,
      contact_title,
      number2port,
      provider_name,
      street_name,
      street_no,
      zipcode,
      activate_time,
      company,
      did_mode,
      dir_prefix,
      dir_suffix,
      extra_services,
      foc_date,
      lidb_list,
      location,
      partial_port,
      pincode,
      port_out_pin,
      service_unit,
      ssn,
      state,
      status,
      trunk,
      wireless_no,
    } = params;
    return this._client.post('/lnp', {
      query: {
        account_no,
        authorize_contact,
        bill_file,
        bill_filename,
        billing_telephone_no,
        city,
        contact_title,
        number2port,
        provider_name,
        street_name,
        street_no,
        zipcode,
        activate_time,
        company,
        did_mode,
        dir_prefix,
        dir_suffix,
        extra_services,
        foc_date,
        lidb_list,
        location,
        partial_port,
        pincode,
        port_out_pin,
        service_unit,
        ssn,
        state,
        status,
        trunk,
        wireless_no,
      },
      ...options,
    });
  }

  /**
   * Check the portability status for specific US-based telephone numbers (TNs). An
   * array of TNs is allowed.
   */
  check(
    query: LocalNumberPortabilityCheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocalNumberPortabilityCheckResponse> {
    return this._client.get('/lnp/check', { query, ...options });
  }
}

export interface LocalNumberPortabilityCreateResponse {
  data?: Array<LocalNumberPortabilityCreateResponse.Data>;
}

export namespace LocalNumberPortabilityCreateResponse {
  export interface Data {
    /**
     * The unique ID assigned to the LNP request.
     */
    id?: string;
  }
}

export interface LocalNumberPortabilityCheckResponse {
  data?: LocalNumberPortabilityCheckResponse.Data;
}

export namespace LocalNumberPortabilityCheckResponse {
  export interface Data {
    /**
     * Number of days for which the number is free of charge (FOC).
     */
    foc_days?: number;
  }
}

export interface LocalNumberPortabilityCreateParams {
  /**
   * Service Provider Account Number.
   */
  account_no: string;

  /**
   * Authorized Contact. Max 25 characters.
   */
  authorize_contact: string;

  /**
   * Base64 encoded full path phone bill files (scan, photo). Supported file types:
   * GIF, JPG, PNG, or PDF. Size up to 5MB.
   */
  bill_file: string;

  /**
   * Base64 encoded phone bill file name.
   */
  bill_filename: string;

  /**
   * US-based billing telephone number. Ten characters.
   */
  billing_telephone_no: string;

  /**
   * Service City. Max 100 characters.
   */
  city: string;

  /**
   * Contact title. Example: Employee, President, CEO. Max 50 characters.
   */
  contact_title: string;

  /**
   * US-based telephone number(s) to be ported. An array of TNs is allowed.
   */
  number2port: Array<number>;

  /**
   * Current Service provider name. Max 255 characters.
   */
  provider_name: string;

  /**
   * Street name. Max 100 characters.
   */
  street_name: string;

  /**
   * Service street number. Max 50 characters.
   */
  street_no: string;

  /**
   * Service zip code. Max 20 characters.
   */
  zipcode: string;

  /**
   * Requested FOC activation time in HH:00 format (EST).
   */
  activate_time?: string;

  /**
   * Company name. Required if location is set to business.
   */
  company?: string;

  /**
   * Type of DID. Possible values: voice, fax. Default is voice.
   */
  did_mode?: 'voice' | 'fax';

  /**
   * DIR prefix. Examples: None, N, NE, E, SE, S, SW, W, NW. Max 10 characters.
   */
  dir_prefix?: string;

  /**
   * DIR suffix. Example: None, N, NE, E, SE, S, SW, W, NW. Max 10 characters.
   */
  dir_suffix?: string;

  /**
   * Additional Remaining Services. Required if partial_port is set to yes.
   */
  extra_services?: string;

  /**
   * Requested Free of Charge (FOC) date in YYYY-MM-DD format. Not available for
   * mobile DIDs.
   */
  foc_date?: string;

  /**
   * LIDB/Directory Listings. Values: no, yes. Default value is no.
   */
  lidb_list?: 'no' | 'yes';

  /**
   * Service location. Values: business, residential. Default is business.
   */
  location?: 'business' | 'residential';

  /**
   * Partial Port. Values: yes or no. Default is no.
   */
  partial_port?: 'yes' | 'no';

  /**
   * Wireless account PIN code. Required if wireless_no is set to yes.
   */
  pincode?: number;

  /**
   * Current carrier porting out PIN code. Integer, 4-10 characters.
   */
  port_out_pin?: string;

  /**
   * Service Suite/Unit. Max 100 characters.
   */
  service_unit?: string;

  /**
   * SSN last four digits. Required if wireless_no is set to yes.
   */
  ssn?: number;

  /**
   * Service State.
   */
  state?: string;

  /**
   * LNP request status. Values: draft, submitted. Default is submitted.
   */
  status?: 'draft' | 'submitted';

  /**
   * SIP trunk name to route DID on completion. For voice DIDs only. Must be a valid
   * active trunk.
   */
  trunk?: string;

  /**
   * Wireless number type. Values: no, yes. Default value is no.
   */
  wireless_no?: 'no' | 'yes';
}

export interface LocalNumberPortabilityCheckParams {
  /**
   * US-based telephone number(s) to check portability for. An array of numbers is
   * allowed.
   */
  number2port: Array<number>;
}

export declare namespace LocalNumberPortability {
  export {
    type LocalNumberPortabilityCreateResponse as LocalNumberPortabilityCreateResponse,
    type LocalNumberPortabilityCheckResponse as LocalNumberPortabilityCheckResponse,
    type LocalNumberPortabilityCreateParams as LocalNumberPortabilityCreateParams,
    type LocalNumberPortabilityCheckParams as LocalNumberPortabilityCheckParams,
  };
}
