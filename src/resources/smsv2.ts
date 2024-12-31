// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Smsv2 extends APIResource {
  /**
   * Send an SMS or MMS message to a US-based telephone number. If a file is
   * attached, the message will be sent as an MMS.
   */
  send(params: Smsv2SendParams, options?: Core.RequestOptions): Core.APIPromise<Smsv2SendResponse> {
    const { did, did_to, msg, file_url } = params;
    return this._client.post('/smsv2', { query: { did, did_to, msg, file_url }, ...options });
  }
}

export interface Smsv2SendResponse {
  data?: Array<Smsv2SendResponse.Data>;
}

export namespace Smsv2SendResponse {
  export interface Data {
    /**
     * The ID of the sent message.
     */
    msg_id?: string;
  }
}

export interface Smsv2SendParams {
  /**
   * The DID (phone number) from which the message will be sent. Must be an active,
   * SMS-enabled DID.
   */
  did: number;

  /**
   * The US-based DID to which the message will be sent.
   */
  did_to: number;

  /**
   * The text message to send. Required if no file is selected.
   */
  msg: string;

  /**
   * Array of publicly accessible media urls
   */
  file_url?: Array<string>;
}

export declare namespace Smsv2 {
  export { type Smsv2SendResponse as Smsv2SendResponse, type Smsv2SendParams as Smsv2SendParams };
}
