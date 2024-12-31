// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class DeliveryStatus extends APIResource {
  /**
   * Check the delivery status of a previously sent message using its message ID.
   */
  retrieve(
    query: DeliveryStatusRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeliveryStatusRetrieveResponse> {
    return this._client.get('/sms/deliverystatus', { query, ...options });
  }
}

export interface DeliveryStatusRetrieveResponse {
  data?: DeliveryStatusRetrieveResponse.Data;
}

export namespace DeliveryStatusRetrieveResponse {
  export interface Data {
    /**
     * The delivery status of the message. Possible values include 'sent', 'delivered',
     * 'failed', etc.
     */
    status?: string;
  }
}

export interface DeliveryStatusRetrieveParams {
  /**
   * The ID of the sent message for which to check the delivery status.
   */
  msg_id: number;
}

export declare namespace DeliveryStatus {
  export {
    type DeliveryStatusRetrieveResponse as DeliveryStatusRetrieveResponse,
    type DeliveryStatusRetrieveParams as DeliveryStatusRetrieveParams,
  };
}
