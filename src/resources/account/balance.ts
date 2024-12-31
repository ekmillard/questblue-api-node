// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Balance extends APIResource {
  /**
   * Retrieve the current account balance and allowed credit.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.get('/account/getbalance', options);
  }

  /**
   * Reload the account balance with a specified amount.
   */
  refill(params: BalanceRefillParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { amount, Mode } = params;
    return this._client.put('/account/refillbalance', {
      query: { amount, Mode },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface BalanceRetrieveResponse {
  data?: BalanceRetrieveResponse.Data;
}

export namespace BalanceRetrieveResponse {
  export interface Data {
    /**
     * Allowed credit available.
     */
    allowed_credit: string;

    /**
     * Current account balance.
     */
    balance: string;
  }
}

export interface BalanceRefillParams {
  /**
   * The amount to refill the balance. Minimum value is 10 USD.
   */
  amount: number;

  /**
   * Payment processing mode. This parameter is not in use anymore.
   */
  Mode?: 'cc' | 'ach' | 'all';
}

export declare namespace Balance {
  export {
    type BalanceRetrieveResponse as BalanceRetrieveResponse,
    type BalanceRefillParams as BalanceRefillParams,
  };
}
