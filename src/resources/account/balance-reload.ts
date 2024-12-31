// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class BalanceReload extends APIResource {
  /**
   * Set the minimum account balance and the amount for autorefill.
   */
  set(params: BalanceReloadSetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { min_balance, reload_amount } = params;
    return this._client.put('/account/setbalancereload', {
      query: { min_balance, reload_amount },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface BalanceReloadSetParams {
  /**
   * The minimum account balance threshold.
   */
  min_balance:
    | 5
    | 25
    | 30
    | 35
    | 40
    | 45
    | 50
    | 100
    | 150
    | 200
    | 250
    | 300
    | 350
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 1000;

  /**
   * The amount to add to the account when autorefill is triggered.
   */
  reload_amount: 25 | 50 | 60 | 70 | 80 | 90 | 100 | 200 | 300 | 400 | 500 | 1000 | 1500 | 2000 | 2500;
}

export declare namespace BalanceReload {
  export { type BalanceReloadSetParams as BalanceReloadSetParams };
}
