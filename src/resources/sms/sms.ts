// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DeliveryStatusAPI from './delivery-status';
import {
  DeliveryStatus,
  DeliveryStatusRetrieveParams,
  DeliveryStatusRetrieveResponse,
} from './delivery-status';
import * as OffnetStatusAPI from './offnet-status';
import { OffnetStatus, OffnetStatusRetrieveParams, OffnetStatusRetrieveResponse } from './offnet-status';

export class SMS extends APIResource {
  offnetStatus: OffnetStatusAPI.OffnetStatus = new OffnetStatusAPI.OffnetStatus(this._client);
  deliveryStatus: DeliveryStatusAPI.DeliveryStatus = new DeliveryStatusAPI.DeliveryStatus(this._client);

  /**
   * Update SMS settings for a specific DID. Various SMS modes are supported
   * including forwarding to email, XMPP, posting to a URL, and disabling SMS.
   */
  update(params: SMSUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SMSUpdateResponse> {
    const {
      did,
      sms_mode,
      chat_email,
      chat_passwd,
      forward2email,
      post2url,
      post2urlmethod,
      xmpp_name,
      xmpp_passwd,
    } = params;
    return this._client.put('/sms', {
      query: {
        did,
        sms_mode,
        chat_email,
        chat_passwd,
        forward2email,
        post2url,
        post2urlmethod,
        xmpp_name,
        xmpp_passwd,
      },
      ...options,
    });
  }

  /**
   * Retrieve SMS records for a customer account, filtered by additional options.
   */
  list(query?: SMSListParams, options?: Core.RequestOptions): Core.APIPromise<SMSListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SMSListResponse>;
  list(
    query: SMSListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SMSListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/sms/', { query, ...options });
  }

  /**
   * Create or cancel an Offnet SMS service order for a non-tier 1b DID.
   */
  offnetorder(params: SMSOffnetorderParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { action, did } = params;
    return this._client.post('/sms/offnetorder', { query: { action, did }, ...options });
  }
}

export interface SMSUpdateResponse {
  /**
   * A message indicating the outcome of the request.
   */
  message?: string;

  /**
   * Indicates whether the SMS settings were updated successfully.
   */
  success?: boolean;
}

export interface SMSListResponse {
  /**
   * Current page number.
   */
  current_page: number;

  data: Array<SMSListResponse.Data>;

  /**
   * Total number of SMS records.
   */
  total: number;

  /**
   * Total number of pages.
   */
  total_pages: number;
}

export namespace SMSListResponse {
  export interface Data {
    /**
     * Unique identifier for the SMS record.
     */
    id: string;

    /**
     * Direction of the SMS (inbound or outbound).
     */
    direction: string;

    /**
     * The phone number from which the SMS was sent.
     */
    from: string;

    /**
     * Type of the message (sms or mms).
     */
    msg_type: string;

    /**
     * Status of the SMS.
     */
    status: string;

    /**
     * Timestamp of the SMS record in ISO 8601 format.
     */
    time: string;

    /**
     * The phone number to which the SMS was sent.
     */
    to: string;
  }
}

/**
 * An empty object is returned on success.
 */
export type SMSOffnetorderResponse = unknown;

export interface SMSUpdateParams {
  /**
   * The DID to manage SMS settings for.
   */
  did: number;

  /**
   * Set the mode for handling inbound SMS. Possible values: 'email', 'xmpp', 'both',
   * 'url', 'chat', 'none', '3cx'.
   */
  sms_mode: 'email' | 'xmpp' | 'both' | 'url' | 'chat' | 'none' | '3cx';

  /**
   * A valid email address required if 'sms_mode' is set to 'chat'.
   */
  chat_email?: string;

  /**
   * Password to log in to Wetext.pro. Required if 'sms_mode' is set to 'chat'.
   */
  chat_passwd?: string;

  /**
   * The email address to forward inbound SMS messages to. Required if 'sms_mode' is
   * set to 'email' or 'both'.
   */
  forward2email?: string;

  /**
   * The URL to which SMS will be posted if 'sms_mode' is set to 'url'. The following
   * variables will be sent: 'from', 'to', 'msg'.
   */
  post2url?: string;

  /**
   * The method used to post data to the URL. Possible values: 'form' (default),
   * 'json', 'xml'.
   */
  post2urlmethod?: 'form' | 'json' | 'xml';

  /**
   * The XMPP username. Required if 'sms_mode' is set to 'xmpp' or 'both'.
   */
  xmpp_name?: string;

  /**
   * The XMPP password. Required if 'sms_mode' is set to 'xmpp' or 'both'.
   */
  xmpp_passwd?: string;
}

export interface SMSListParams {
  /**
   * Specify SMS direction.
   */
  direction?: 'in' | 'out' | '';

  /**
   * Retrieve specific message type.
   */
  msg_type?: 'sms' | 'mms' | '';

  /**
   * Sort retrieving data in either ascending or descending order.
   */
  order?: 'asc' | 'desc';

  /**
   * Number of records to list per page.
   */
  per_page?: number;

  /**
   * Date options to filter SMS records.
   */
  period?: 'thishour' | 'previoushour' | 'today' | 'yesterday' | 'array[startDate, endDate]';
}

export interface SMSOffnetorderParams {
  /**
   * The action to perform on the Offnet SMS service. Possible values: 'add' to
   * create a new service request, 'remove' to cancel the service.
   */
  action: 'add' | 'remove';

  /**
   * The non-tier 1b DID for which to manage the Offnet SMS service.
   */
  did: number;
}

SMS.OffnetStatus = OffnetStatus;
SMS.DeliveryStatus = DeliveryStatus;

export declare namespace SMS {
  export {
    type SMSUpdateResponse as SMSUpdateResponse,
    type SMSListResponse as SMSListResponse,
    type SMSOffnetorderResponse as SMSOffnetorderResponse,
    type SMSUpdateParams as SMSUpdateParams,
    type SMSListParams as SMSListParams,
    type SMSOffnetorderParams as SMSOffnetorderParams,
  };

  export {
    OffnetStatus as OffnetStatus,
    type OffnetStatusRetrieveResponse as OffnetStatusRetrieveResponse,
    type OffnetStatusRetrieveParams as OffnetStatusRetrieveParams,
  };

  export {
    DeliveryStatus as DeliveryStatus,
    type DeliveryStatusRetrieveResponse as DeliveryStatusRetrieveResponse,
    type DeliveryStatusRetrieveParams as DeliveryStatusRetrieveParams,
  };
}
