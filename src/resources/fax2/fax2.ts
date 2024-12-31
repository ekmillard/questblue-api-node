// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EmailAPI from './email';
import {
  Email,
  EmailCreateUpdateParams,
  EmailDeleteParams,
  EmailDeleteResponse,
  EmailListParams,
  EmailListResponse,
} from './email';

export class Fax2 extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);

  /**
   * Order a Local or Toll-Free Fax DID and create a fully functional iFax Enterprise
   * account with the specified parameters.
   */
  create(params: Fax2CreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did, ata_mac_address, cnam, note, pin, post2url, sname, tier } = params;
    return this._client.post('/fax2', {
      query: { did, ata_mac_address, cnam, note, pin, post2url, sname, tier },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update the properties of a specified iFax Enterprise DID.
   */
  update(params: Fax2UpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did, ata_mac_address, cnam, note, pin, post2url, sname } = params;
    return this._client.put('/fax2', {
      query: { did, ata_mac_address, cnam, note, pin, post2url, sname },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve information about iFax Enterprise DIDs with optional search and
   * pagination capabilities.
   */
  list(query?: Fax2ListParams, options?: Core.RequestOptions): Core.APIPromise<Fax2ListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Fax2ListResponse>;
  list(
    query: Fax2ListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Fax2ListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/fax2', { query, ...options });
  }
}

export interface Fax2ListResponse {
  /**
   * Current page number.
   */
  current_page?: number;

  data?: Array<Fax2ListResponse.Data>;

  /**
   * Total number of DIDs found.
   */
  total?: number;

  /**
   * Total number of pages available.
   */
  total_pages?: number;
}

export namespace Fax2ListResponse {
  export interface Data {
    /**
     * Fax DID.
     */
    did?: string;

    /**
     * Type of DID (e.g., local, toll-free).
     */
    did_type?: string;

    /**
     * Optional note associated with the DID.
     */
    note?: string;

    /**
     * Group short name associated with the DID.
     */
    sname?: string;

    /**
     * Status of the DID (e.g., active).
     */
    status?: string;
  }
}

export interface Fax2CreateParams {
  /**
   * The Fax DID to order.
   */
  did: number;

  /**
   * Fax ATA MAC address. If set, this overwrites the 'post2url' value.
   */
  ata_mac_address?: string;

  /**
   * Manage CNAM (Caller Name). Optional values: 'on' or 'off' (default).
   */
  cnam?: 'on' | 'off';

  /**
   * Optional note for the Fax DID.
   */
  note?: string;

  /**
   * Port Out Security PIN code. Must be an integer between 4-6 characters.
   */
  pin?: number;

  /**
   * Post fax to a specific URL. Provide a valid URL or set 'empty' to remove fax
   * posting. This will be overwritten if 'ata_mac_address' is set.
   */
  post2url?: string;

  /**
   * Group short name to add to the fax number. The group must be created before
   * ordering the DID. If not specified, a functional fax account will not be
   * created.
   */
  sname?: string;

  /**
   * The tier level for the DID. Possible values: 0 (No Toll-Free DIDs available), 1,
   * 1b (SMS available), 2 (No Toll-Free DIDs available), 3 (No Toll-Free DIDs
   * available). Defaults to '1b'.
   */
  tier?: '0' | '1' | '1b' | '2' | '3';
}

export interface Fax2UpdateParams {
  /**
   * The Fax DID to manage.
   */
  did: number;

  /**
   * Fax ATA MAC address. Provide a valid MAC address or set 'empty' (off) to remove
   * the fax ATA. This overwrites the 'post2url' value.
   */
  ata_mac_address?: string;

  /**
   * Manage CNAM (Caller Name). Optional values: 'on' or 'off'.
   */
  cnam?: 'on' | 'off';

  /**
   * Optional note for the DID.
   */
  note?: string;

  /**
   * Port Out Security PIN code. Must be an integer between 4-6 characters.
   */
  pin?: number;

  /**
   * Post fax to a specific URL. Provide a valid URL or set 'empty' (off) to remove
   * fax posting. This will be overwritten if 'ata_mac_address' is set.
   */
  post2url?: string;

  /**
   * Group short name to update. Set to an empty value to remove the current group.
   */
  sname?: string;
}

export interface Fax2ListParams {
  /**
   * Fax DID to retrieve info. Supports Unix style DID searching (e.g., '_890' to
   * find all DIDs ending with 890, '123_' to find all DIDs starting with 123,
   * '_456_' to find all DIDs containing 456). The search pattern will be ignored if
   * less than three digits are used.
   */
  did?: string;

  /**
   * Page number to retrieve data from.
   */
  page?: number;

  /**
   * Number of records to list in a page. Default is 25. Set value in the range of 5
   * to 200 if needed.
   */
  per_page?: number;
}

Fax2.Email = Email;

export declare namespace Fax2 {
  export {
    type Fax2ListResponse as Fax2ListResponse,
    type Fax2CreateParams as Fax2CreateParams,
    type Fax2UpdateParams as Fax2UpdateParams,
    type Fax2ListParams as Fax2ListParams,
  };

  export {
    Email as Email,
    type EmailListResponse as EmailListResponse,
    type EmailDeleteResponse as EmailDeleteResponse,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCreateUpdateParams as EmailCreateUpdateParams,
  };
}
