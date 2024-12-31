// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class UserAccounts extends APIResource {
  /**
   * Configure a URL to receive messages on inventory updates. Setting an empty value
   * will unset the post messages configuration.
   */
  callbackConfigure(
    params: UserAccountCallbackConfigureParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { sections, url } = params;
    return this._client.post('/account/callbackconfig', {
      query: { sections, url },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve the current configuration for message posting to a specified URL.
   */
  callbackStatus(options?: Core.RequestOptions): Core.APIPromise<UserAccountCallbackStatusResponse> {
    return this._client.get('/account/callbackstatus', options);
  }

  /**
   * Enable or disable daily balance alerts for the account.
   */
  setDailyBalanceAlert(
    params: UserAccountSetDailyBalanceAlertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAccountSetDailyBalanceAlertResponse> {
    const { action } = params;
    return this._client.put('/account/setdailybalancealert', { query: { action }, ...options });
  }

  /**
   * Set or cancel the low balance alert threshold. Notifications will be triggered
   * when the account balance falls below this amount.
   */
  setLowBalanceAlert(
    params: UserAccountSetLowBalanceAlertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAccountSetLowBalanceAlertResponse> {
    const { low_balance_alert_amount } = params;
    return this._client.put('/account/setlowbalancealert', {
      query: { low_balance_alert_amount },
      ...options,
    });
  }
}

export interface UserAccountCallbackStatusResponse {
  data?: Array<UserAccountCallbackStatusResponse.Data>;
}

export namespace UserAccountCallbackStatusResponse {
  export interface Data {
    /**
     * Comma-separated list of sections for which messages are posted (e.g., 'lnp,
     * did').
     */
    sections?: string;

    /**
     * The URL where messages are posted.
     */
    url?: string;
  }
}

export interface UserAccountSetDailyBalanceAlertResponse {
  /**
   * Empty response indicating success.
   */
  data?: string;
}

export interface UserAccountSetLowBalanceAlertResponse {
  /**
   * Empty response indicating success.
   */
  data?: string;
}

export interface UserAccountCallbackConfigureParams {
  /**
   * Comma-separated list of sections to post messages on update. Set to an empty
   * value to unset post messages.
   */
  sections: 'lnp' | 'did' | 'fax' | 'sms' | 'trunk' | 'server';

  /**
   * URL to post messages to. Set to an empty value to unset the post messages.
   */
  url: string;
}

export interface UserAccountSetDailyBalanceAlertParams {
  /**
   * Action to perform for daily balance alerts. Set to 'on' to enable or 'off' to
   * disable.
   */
  action: 'on' | 'off';
}

export interface UserAccountSetLowBalanceAlertParams {
  /**
   * Amount below which a low balance alert is triggered. Set to 0 to cancel the
   * notification.
   */
  low_balance_alert_amount: number;
}

export declare namespace UserAccounts {
  export {
    type UserAccountCallbackStatusResponse as UserAccountCallbackStatusResponse,
    type UserAccountSetDailyBalanceAlertResponse as UserAccountSetDailyBalanceAlertResponse,
    type UserAccountSetLowBalanceAlertResponse as UserAccountSetLowBalanceAlertResponse,
    type UserAccountCallbackConfigureParams as UserAccountCallbackConfigureParams,
    type UserAccountSetDailyBalanceAlertParams as UserAccountSetDailyBalanceAlertParams,
    type UserAccountSetLowBalanceAlertParams as UserAccountSetLowBalanceAlertParams,
  };
}
