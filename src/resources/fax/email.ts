// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Email extends APIResource {
  /**
   * Delete an email permission associated with a specific iFax Pro account.
   */
  delete(params: EmailDeleteParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { did, email } = params;
    return this._client.delete('/fax/email', {
      query: { did, email },
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Create or update email permissions for sending and receiving faxes for a
   * specific iFax Pro account.
   */
  createUpdate(params: EmailCreateUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did, email, allow_receive, allow_send } = params;
    return this._client.post('/fax/email', {
      query: { did, email, allow_receive, allow_send },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type EmailDeleteResponse = string;

export interface EmailDeleteParams {
  /**
   * The Fax Enterprise DID associated with the email permission.
   */
  did: number;

  /**
   * The email address associated with the permission to be deleted.
   */
  email: string;
}

export interface EmailCreateUpdateParams {
  /**
   * The Fax Pro DID associated with the email permissions to be set.
   */
  did: number;

  /**
   * The email address for which permissions are being set.
   */
  email: string;

  /**
   * Permission to allow receiving faxes at this email address. Default is 'no'.
   */
  allow_receive?: 'yes' | 'no';

  /**
   * Permission to allow sending faxes from this email address. Default is 'no'.
   */
  allow_send?: 'yes' | 'no';
}

export declare namespace Email {
  export {
    type EmailDeleteResponse as EmailDeleteResponse,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailCreateUpdateParams as EmailCreateUpdateParams,
  };
}
