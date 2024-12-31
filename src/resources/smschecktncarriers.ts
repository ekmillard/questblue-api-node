// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Smschecktncarriers extends APIResource {
  /**
   * Retrieve information about the carrier associated with a given telephone number
   * (TN), including whether it is a wireless number.
   */
  retrieve(
    query: SmschecktncarrierRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmschecktncarrierRetrieveResponse> {
    return this._client.get('/smschecktncarrier', { query, ...options });
  }
}

export interface SmschecktncarrierRetrieveResponse {
  data?: Array<SmschecktncarrierRetrieveResponse.Data>;

  /**
   * The total number of TNs found.
   */
  total?: number;
}

export namespace SmschecktncarrierRetrieveResponse {
  export interface Data {
    /**
     * The name of the carrier associated with the TN.
     */
    carrier?: string;

    /**
     * Indicates whether the TN is wireless. Possible values are 'yes' or 'no'.
     */
    isWireless?: string;

    /**
     * The telephone number (TN) checked.
     */
    tn?: number;
  }
}

export interface SmschecktncarrierRetrieveParams {
  /**
   * The telephone number(s) (TN) to check. Can be a single number or an array of
   * numbers.
   */
  tn: number;
}

export declare namespace Smschecktncarriers {
  export {
    type SmschecktncarrierRetrieveResponse as SmschecktncarrierRetrieveResponse,
    type SmschecktncarrierRetrieveParams as SmschecktncarrierRetrieveParams,
  };
}
