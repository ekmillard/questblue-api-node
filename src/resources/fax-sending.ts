// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FaxSending extends APIResource {
  /**
   * Send a fax using an active DID from your account to a US-based destination fax
   * number.
   */
  send(params: FaxSendingSendParams, options?: Core.RequestOptions): Core.APIPromise<FaxSendingSendResponse> {
    const { did_from, did_to, file_id } = params;
    return this._client.post('/fax2/send', { query: { did_from, did_to, file_id }, ...options });
  }
}

export interface FaxSendingSendResponse {
  /**
   * The unique ID assigned to the sent fax.
   */
  fax_id?: number;
}

export interface FaxSendingSendParams {
  /**
   * Sender Fax Number. Must be an active DID from your account. It should be a
   * ten-digit number.
   */
  did_from: number;

  /**
   * US-based Destination Fax Number. It should be a ten-digit number.
   */
  did_to: number;

  /**
   * Array of IDs of the uploaded file(s).
   */
  file_id: Array<string>;
}

export declare namespace FaxSending {
  export {
    type FaxSendingSendResponse as FaxSendingSendResponse,
    type FaxSendingSendParams as FaxSendingSendParams,
  };
}
