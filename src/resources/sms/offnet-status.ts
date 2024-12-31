// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OffnetStatus extends APIResource {
  /**
   * Get the status of an Offnet SMS service order for a specific DID.
   */
  retrieve(
    query: OffnetStatusRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OffnetStatusRetrieveResponse> {
    return this._client.get('/sms/offnetstatus', { query, ...options });
  }
}

export interface OffnetStatusRetrieveResponse {
  data?: OffnetStatusRetrieveResponse.Data;
}

export namespace OffnetStatusRetrieveResponse {
  export interface Data {
    /**
     * The status of the Offnet SMS service order.
     */
    status?: 'unavailable' | 'disabled' | 'received' | 'processing' | 'failed' | 'enabled';
  }
}

export interface OffnetStatusRetrieveParams {
  /**
   * The DID for which to retrieve the Offnet SMS service status.
   */
  did: number;
}

export declare namespace OffnetStatus {
  export {
    type OffnetStatusRetrieveResponse as OffnetStatusRetrieveResponse,
    type OffnetStatusRetrieveParams as OffnetStatusRetrieveParams,
  };
}
