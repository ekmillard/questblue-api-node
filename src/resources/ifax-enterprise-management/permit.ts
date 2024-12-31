// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Permit extends APIResource {
  /**
   * Retrieve the permissions of iFax Enterprise users for specific DIDs or all users
   * if no DID is specified.
   */
  retrieve(
    query?: PermitRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermitRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<PermitRetrieveResponse>;
  retrieve(
    query: PermitRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermitRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/fax2/permit', { query, ...options });
  }

  /**
   * Remove permissions for a specific iFax Enterprise user on a given DID.
   */
  delete(params: PermitDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did, fax_login } = params;
    return this._client.delete('/fax2/permit', {
      query: { did, fax_login },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PermitRetrieveResponse {
  /**
   * Current page number.
   */
  current_page?: number;

  data?: Array<PermitRetrieveResponse.Data>;

  /**
   * Total number of records.
   */
  total?: number;

  /**
   * Total number of pages.
   */
  total_pages?: number;
}

export namespace PermitRetrieveResponse {
  export interface Data {
    /**
     * Permission to delete faxes.
     */
    allow_delete?: 'on' | 'off';

    /**
     * Permission to view inbound faxes.
     */
    allow_list_in?: 'on' | 'off';

    /**
     * Permission to view outbound faxes.
     */
    allow_list_out?: 'on' | 'off';

    /**
     * Permission to send faxes.
     */
    allow_send?: 'on' | 'off';

    /**
     * Date when the permission was created.
     */
    create_date?: string;

    /**
     * Fax DID.
     */
    did?: string;

    /**
     * Fax user login.
     */
    fax_login?: string;
  }
}

export interface PermitRetrieveParams {
  /**
   * Fax Enterprise DID to show permissions.
   */
  did?: number;

  /**
   * Fax user login to show permissions.
   */
  fax_login?: string;
}

export interface PermitDeleteParams {
  /**
   * Fax Enterprise DID from which permissions will be deleted.
   */
  did: number;

  /**
   * Fax user login whose permissions will be deleted.
   */
  fax_login: string;
}

export declare namespace Permit {
  export {
    type PermitRetrieveResponse as PermitRetrieveResponse,
    type PermitRetrieveParams as PermitRetrieveParams,
    type PermitDeleteParams as PermitDeleteParams,
  };
}
