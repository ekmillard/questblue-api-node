// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EmailAPI from './email';
import { Email, EmailCreateUpdateParams, EmailDeleteParams, EmailDeleteResponse } from './email';

export class Fax extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);

  /**
   * Order a Local or Toll-Free Fax DID and create a fully functional iFax.Pro
   * account with the specified parameters.
   */
  create(params: FaxCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const {
      did,
      ata_mac_address,
      cnam,
      fax_email,
      fax_login,
      fax_name,
      fax_password,
      is_full,
      note,
      pin,
      post2url,
      report_att,
      tier,
    } = params;
    return this._client.post('/fax', {
      query: {
        did,
        ata_mac_address,
        cnam,
        fax_email,
        fax_login,
        fax_name,
        fax_password,
        is_full,
        note,
        pin,
        post2url,
        report_att,
        tier,
      },
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Manage the configuration and settings of an active Fax DID. This includes
   * updating account information, managing CNAM, and other related settings.
   */
  update(params: FaxUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      did,
      ata_mac_address,
      cnam,
      fax_email,
      fax_login,
      fax_name,
      fax_password,
      is_full,
      note,
      pin,
      post2url,
      report_att,
      unset_acc,
    } = params;
    return this._client.put('/fax', {
      query: {
        did,
        ata_mac_address,
        cnam,
        fax_email,
        fax_login,
        fax_name,
        fax_password,
        is_full,
        note,
        pin,
        post2url,
        report_att,
        unset_acc,
      },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a list of ordered Fax DIDs and their configurations. Supports Unix
   * style DID searching.
   */
  list(query?: FaxListParams, options?: Core.RequestOptions): Core.APIPromise<FaxListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FaxListResponse>;
  list(
    query: FaxListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/fax', { query, ...options });
  }

  /**
   * Remove an active Fax DID from the system.
   */
  delete(params: FaxDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did } = params;
    return this._client.delete('/fax', {
      query: { did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Move a Fax DID from the fax inventory to the voice inventory.
   */
  move2voice(params: FaxMove2voiceParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did } = params;
    return this._client.put('/fax/move2voice', {
      query: { did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Pause or activate the fax service for a specific iFax Pro account using the
   * provided DID.
   */
  pause(params: FaxPauseParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { action, did } = params;
    return this._client.put('/fax/pause', {
      query: { action, did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Send a fax using the iFax.Pro service.
   */
  send(params: FaxSendParams, options?: Core.RequestOptions): Core.APIPromise<FaxSendResponse> {
    const { did_from, did_to, file, filename } = params;
    return this._client.post('/fax/send', { query: { did_from, did_to, file, filename }, ...options });
  }
}

export type FaxCreateResponse = string;

export interface FaxListResponse {
  /**
   * Current page number.
   */
  current_page?: number;

  data?: Array<FaxListResponse.Data>;

  /**
   * Total number of DIDs found.
   */
  total?: number;

  /**
   * Total number of pages available.
   */
  total_pages?: number;
}

export namespace FaxListResponse {
  export interface Data {
    /**
     * The Fax DID.
     */
    did?: string;

    /**
     * Type of the DID (e.g., local).
     */
    did_type?: string;

    /**
     * Login name for the Fax account.
     */
    fax_login?: string;

    /**
     * Name associated with the Fax account.
     */
    fax_name?: string;

    /**
     * Indicates if full user access is enabled ('yes' or 'no').
     */
    is_full?: string;

    /**
     * Note associated with the DID.
     */
    note?: string;

    /**
     * Indicates if fax files are attached to the report ('yes' or 'no').
     */
    report_att?: string;

    /**
     * Status of the DID (e.g., active).
     */
    status?: string;
  }
}

export interface FaxSendResponse {
  data?: FaxSendResponse.Data;
}

export namespace FaxSendResponse {
  export interface Data {
    /**
     * ID of the sent fax
     */
    fax_id?: number;
  }
}

export interface FaxCreateParams {
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
   * Fax user Email address.
   */
  fax_email?: string;

  /**
   * Fax user login. If provided, a fully functional account will be created.
   */
  fax_login?: string;

  /**
   * Fax user name. If provided, a fully functional account will be created.
   */
  fax_name?: string;

  /**
   * Fax user password. If provided, a fully functional account will be created.
   */
  fax_password?: string;

  /**
   * Set to 'yes' for full user access. Defaults to 'no'.
   */
  is_full?: 'yes' | 'no';

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
   * Attach fax file to the report. Optional values: 'yes' or 'no' (default).
   */
  report_att?: 'yes' | 'no';

  /**
   * The tier level for the DID. Possible values: 0 (No Toll-Free DIDs available), 1,
   * 1b (SMS available), 2 (No Toll-Free DIDs available), 3 (No Toll-Free DIDs
   * available). Defaults to '1b'.
   */
  tier?: '0' | '1' | '1b' | '2' | '3';
}

export interface FaxUpdateParams {
  /**
   * The Fax DID to manage.
   */
  did: number;

  /**
   * Fax ATA MAC address. If set, this overwrites the 'post2url' value.
   */
  ata_mac_address?: string;

  /**
   * Manage CNAM (Caller Name). Optional values: 'on' or 'off'.
   */
  cnam?: 'on' | 'off';

  /**
   * Fax user email address.
   */
  fax_email?: string;

  /**
   * Fax user login. Required to create an iFax.Pro account.
   */
  fax_login?: string;

  /**
   * Fax user name. Required to create an iFax.Pro account.
   */
  fax_name?: string;

  /**
   * Fax user password. Required to create an iFax.Pro account.
   */
  fax_password?: string;

  /**
   * Set to 'yes' for full user access. Defaults to 'no'.
   */
  is_full?: 'yes' | 'no';

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
   * Attach fax file to the report. Optional values: 'yes' or 'no' (default).
   */
  report_att?: 'yes' | 'no';

  /**
   * Set to 'on' to remove the Fax account. This takes priority over other account
   * parameters provided in the same request.
   */
  unset_acc?: 'on';
}

export interface FaxListParams {
  /**
   * Fax DID to retrieve info. Supports Unix style DID searching. Example: '\*890'
   * will find all DIDs ending with '890'. At least three digits are required.
   */
  did?: string;

  /**
   * Page number to retrieve data from.
   */
  page?: number;

  /**
   * Number of records to list per page. Default value is 25. Range is 5 to 200.
   */
  per_page?: number;
}

export interface FaxDeleteParams {
  /**
   * The Fax DID to remove.
   */
  did: number;
}

export interface FaxMove2voiceParams {
  /**
   * The Fax DID to move to the voice inventory.
   */
  did: number;
}

export interface FaxPauseParams {
  /**
   * The action to perform on the iFax Pro account. Possible values: 'pause' to pause
   * the account, 'unpause' to activate the account.
   */
  action: 'pause' | 'unpause';

  /**
   * The Fax DID associated with the iFax Pro account to pause or unpause.
   */
  did: number;
}

export interface FaxSendParams {
  /**
   * Sender's Fax Number. Must be an active ten-digit DID from your account.
   */
  did_from: number;

  /**
   * Ten-digit US-based destination Fax Number.
   */
  did_to: number;

  /**
   * Base64 encoded content of the file to be sent. Supported file types: jpeg, jpg,
   * gif, png, tif, tiff, pdf, doc, rtf, ods, xls, csv, ppt, txt, rar, zip, 7z.
   * Maximum file size: 8MB.
   */
  file: string;

  /**
   * The name of the uploaded file.
   */
  filename: string;
}

Fax.Email = Email;

export declare namespace Fax {
  export {
    type FaxCreateResponse as FaxCreateResponse,
    type FaxListResponse as FaxListResponse,
    type FaxSendResponse as FaxSendResponse,
    type FaxCreateParams as FaxCreateParams,
    type FaxUpdateParams as FaxUpdateParams,
    type FaxListParams as FaxListParams,
    type FaxDeleteParams as FaxDeleteParams,
    type FaxMove2voiceParams as FaxMove2voiceParams,
    type FaxPauseParams as FaxPauseParams,
    type FaxSendParams as FaxSendParams,
  };

  export {
    Email as Email,
    type EmailDeleteResponse as EmailDeleteResponse,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCreateUpdateParams as EmailCreateUpdateParams,
  };
}
