// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Email extends APIResource {
  /**
   * Retrieve a list of email permissions associated with iFax Enterprise accounts.
   */
  list(query?: EmailListParams, options?: Core.RequestOptions): Core.APIPromise<EmailListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EmailListResponse>;
  list(
    query: EmailListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/fax2/email', { query, ...options });
  }

  /**
   * Remove an email permissions record for a specific iFax Enterprise DID.
   */
  delete(params: EmailDeleteParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { did, email } = params;
    return this._client.delete('/fax2/email', {
      query: { did, email },
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Set or update email permissions for a specific iFax Enterprise DID.
   */
  createUpdate(params: EmailCreateUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did, email, allow_receive, allow_send } = params;
    return this._client.post('/fax2/email', {
      query: { did, email, allow_receive, allow_send },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EmailListResponse {
  /**
   * Current page number
   */
  current_page?: number;

  data?: Array<EmailListResponse.Data>;

  /**
   * Total number of records
   */
  total?: number;

  /**
   * Total number of pages
   */
  total_pages?: number;
}

export namespace EmailListResponse {
  export interface Data {
    /**
     * Permission to receive faxes
     */
    allow_receive?: 'yes' | 'no';

    /**
     * Permission to send faxes
     */
    allow_send?: 'yes' | 'no';

    /**
     * Fax Enterprise DID
     */
    did?: string;

    /**
     * Email address associated with the permissions
     */
    email?: string;

    /**
     * Fax login name
     */
    sname?: string;
  }
}

export type EmailDeleteResponse = string;

export interface EmailListParams {
  /**
   * The Fax Enterprise DID to filter the email permissions.
   */
  did?: number;

  /**
   * The email address to filter the email permissions.
   */
  email?: string;
}

export interface EmailDeleteParams {
  /**
   * Fax Enterprise DID to delete the email permissions for.
   */
  did: number;

  /**
   * Email address associated with the permissions to delete.
   */
  email: string;
}

export interface EmailCreateUpdateParams {
  /**
   * Fax Enterprise DID to set email permissions.
   */
  did: number;

  /**
   * Email address to set permissions for.
   */
  email: string;

  /**
   * Allow receiving faxes. Values: 'on' or 'off' (default).
   */
  allow_receive?: 'on' | 'off';

  /**
   * Allow sending faxes. Values: 'on' or 'off' (default).
   */
  allow_send?: 'on' | 'off';
}

export declare namespace Email {
  export {
    type EmailListResponse as EmailListResponse,
    type EmailDeleteResponse as EmailDeleteResponse,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCreateUpdateParams as EmailCreateUpdateParams,
  };
}
