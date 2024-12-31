// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Details extends APIResource {
  /**
   * Get the properties of the user account including balance, minimum balance,
   * reload amount, and notification settings.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<DetailRetrieveResponse> {
    return this._client.get('/account/getaccoundetails', options);
  }
}

export interface DetailRetrieveResponse {
  data: Array<DetailRetrieveResponse.Data>;
}

export namespace DetailRetrieveResponse {
  export interface Data {
    /**
     * Current account balance.
     */
    balance: string;

    /**
     * Autorefill status (on/off).
     */
    balance_autorefill: string;

    /**
     * Notification status for balance (on/off).
     */
    balance_notify: string;

    /**
     * Amount at which low balance alerts are triggered.
     */
    low_balance_alert_amount: string;

    /**
     * Minimum balance required before triggering a refill.
     */
    minimum_balance: string;

    /**
     * Current payment method (e.g., 'cc' for credit card).
     */
    payment_method: string;

    /**
     * Amount to refill when balance is low.
     */
    reload_amount: string;
  }
}

export declare namespace Details {
  export { type DetailRetrieveResponse as DetailRetrieveResponse };
}
