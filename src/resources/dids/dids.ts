// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RateCentersAPI from './rate-centers';
import { RateCenterListParams, RateCenterListResponse, RateCenters } from './rate-centers';
import * as StatesAPI from './states';
import { StateListResponse, States } from './states';

export class Dids extends APIResource {
  states: StatesAPI.States = new StatesAPI.States(this._client);
  rateCenters: RateCentersAPI.RateCenters = new RateCentersAPI.RateCenters(this._client);

  /**
   * Order a local or toll free DID
   */
  create(params: DidCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      did,
      cnam,
      dlda,
      dlda_city,
      dlda_email,
      dlda_firstname,
      dlda_lastname,
      dlda_phone,
      dlda_state,
      dlda_streetname,
      dlda_streetnum,
      dlda_type,
      dlda_zip,
      e911_address,
      e911_city,
      e911_name,
      e911_state,
      e911_unitnumber,
      e911_unittype,
      e911_zip,
      lidb,
      note,
      pin,
      route2trunk,
      tier,
    } = params;
    return this._client.post('/did', {
      query: {
        did,
        cnam,
        dlda,
        dlda_city,
        dlda_email,
        dlda_firstname,
        dlda_lastname,
        dlda_phone,
        dlda_state,
        dlda_streetname,
        dlda_streetnum,
        dlda_type,
        dlda_zip,
        e911_address,
        e911_city,
        e911_name,
        e911_state,
        e911_unitnumber,
        e911_unittype,
        e911_zip,
        lidb,
        note,
        pin,
        route2trunk,
        tier,
      },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update DID configuration
   */
  update(params: DidUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      did,
      cnam,
      dlda,
      dlda_city,
      dlda_email,
      dlda_firstname,
      dlda_lastname,
      dlda_phone,
      dlda_state,
      dlda_streetname,
      dlda_streetnum,
      dlda_type,
      dlda_zip,
      e911_address,
      e911_call_alert,
      e911_city,
      e911_name,
      e911_state,
      e911_unitnumber,
      e911_unittype,
      e911_zip,
      failover,
      forw2did,
      lidb,
      note,
      pin,
      route2trunk,
    } = params;
    return this._client.put('/did', {
      query: {
        did,
        cnam,
        dlda,
        dlda_city,
        dlda_email,
        dlda_firstname,
        dlda_lastname,
        dlda_phone,
        dlda_state,
        dlda_streetname,
        dlda_streetnum,
        dlda_type,
        dlda_zip,
        e911_address,
        e911_call_alert,
        e911_city,
        e911_name,
        e911_state,
        e911_unitnumber,
        e911_unittype,
        e911_zip,
        failover,
        forw2did,
        lidb,
        note,
        pin,
        route2trunk,
      },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List ordered DIDs and their configurations
   */
  list(query?: DidListParams, options?: Core.RequestOptions): Core.APIPromise<DidListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DidListResponse>;
  list(
    query: DidListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DidListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/did', { query, ...options });
  }

  /**
   * Completly remove DID from inventory
   */
  delete(params: DidDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did } = params;
    return this._client.delete('/did', {
      query: { did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DidListResponse {
  current_page?: number;

  data?: Record<string, Array<string>>;

  total?: number;

  total_pages?: number;
}

export interface DidCreateParams {
  /**
   * DID(s) to order
   */
  did: number | Array<unknown>;

  /**
   * Enable CNAM Services
   */
  cnam?: 'on' | 'off';

  /**
   * Turn directory listing on/off
   */
  dlda?: 'yes' | 'no';

  /**
   * City
   */
  dlda_city?: string;

  /**
   * Contact email
   */
  dlda_email?: string;

  /**
   * Business or person name depending on dlda_type
   */
  dlda_firstname?: string;

  /**
   * Persons last name
   */
  dlda_lastname?: string;

  /**
   * Contact phone number
   */
  dlda_phone?: string;

  /**
   * State
   */
  dlda_state?: string;

  /**
   * Street name
   */
  dlda_streetname?: string;

  /**
   * Street number
   */
  dlda_streetnum?: string;

  /**
   * Directory listing type
   */
  dlda_type?: 'business' | 'residential';

  /**
   * 6 char zip code
   */
  dlda_zip?: string;

  /**
   * Street address of 911 customer
   */
  e911_address?: string;

  /**
   * City of the registered 911 customer
   */
  e911_city?: string;

  /**
   * Name of person or business registering for 911
   */
  e911_name?: string;

  /**
   * 2 char state abbreviation
   */
  e911_state?: string;

  /**
   * Unit number or letter(if any)
   */
  e911_unitnumber?: string;

  /**
   * Type of unit customer lives in(if any)
   */
  e911_unittype?: string;

  /**
   * 6 char zip code
   */
  e911_zip?: string;

  /**
   * Set CallerID name for the did. 4-15 chars alphanumeric
   */
  lidb?: string;

  /**
   * Add note/comment to DID up to 100 chars
   */
  note?: string;

  /**
   * Port out security PIN. 4-6 chars
   */
  pin?: number;

  /**
   * SIP Trunk to route the DID to. The trunk must be active.
   */
  route2trunk?: string;

  /**
   * DID tier
   */
  tier?: '0' | '1' | '1b' | '2';
}

export interface DidUpdateParams {
  /**
   * DID to update
   */
  did: number;

  /**
   * Enable CNAM Services
   */
  cnam?: 'on' | 'off';

  /**
   * Turn directory listing on/off
   */
  dlda?: 'yes' | 'no';

  /**
   * City
   */
  dlda_city?: string;

  /**
   * Contact email
   */
  dlda_email?: string;

  /**
   * Business or person name depending on dlda_type
   */
  dlda_firstname?: string;

  /**
   * Persons last name
   */
  dlda_lastname?: string;

  /**
   * Contact phone number
   */
  dlda_phone?: string;

  /**
   * State
   */
  dlda_state?: string;

  /**
   * Street name
   */
  dlda_streetname?: string;

  /**
   * Street number
   */
  dlda_streetnum?: string;

  /**
   * Directory listing type
   */
  dlda_type?: 'business' | 'residential';

  /**
   * 6 char zip code
   */
  dlda_zip?: string;

  /**
   * Street address of 911 customer
   */
  e911_address?: string;

  /**
   * Set email and phone to recieve 911 notifications
   */
  e911_call_alert?: Array<Array<string>>;

  /**
   * City of the registered 911 customer
   */
  e911_city?: string;

  /**
   * Name of person or business registering for 911
   */
  e911_name?: string;

  /**
   * 2 char state abbreviation
   */
  e911_state?: string;

  /**
   * Unit number or letter(if any)
   */
  e911_unitnumber?: string;

  /**
   * Type of unit customer lives in(if any)
   */
  e911_unittype?: string;

  /**
   * 6 char zip code
   */
  e911_zip?: string;

  /**
   * Use trunk forwarding instead
   */
  failover?: Array<Array<string>>;

  /**
   * (Use trunk forwarding instead) Forward DID to this number.
   */
  forw2did?: number;

  /**
   * Set CallerID name for the did. 4-15 chars alphanumeric
   */
  lidb?: string;

  /**
   * Add note/comment to DID up to 100 chars
   */
  note?: string;

  /**
   * Port out security PIN. 4-6 chars
   */
  pin?: number;

  /**
   * SIP Trunk to route the DID to. The trunk must be active.
   */
  route2trunk?: string;
}

export interface DidListParams {
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

export interface DidDeleteParams {
  /**
   * DID to remove
   */
  did: number;
}

Dids.States = States;
Dids.RateCenters = RateCenters;

export declare namespace Dids {
  export {
    type DidListResponse as DidListResponse,
    type DidCreateParams as DidCreateParams,
    type DidUpdateParams as DidUpdateParams,
    type DidListParams as DidListParams,
    type DidDeleteParams as DidDeleteParams,
  };

  export { States as States, type StateListResponse as StateListResponse };

  export {
    RateCenters as RateCenters,
    type RateCenterListResponse as RateCenterListResponse,
    type RateCenterListParams as RateCenterListParams,
  };
}
