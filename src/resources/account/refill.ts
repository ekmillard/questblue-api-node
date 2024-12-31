// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Refill extends APIResource {
  /**
   * Configure the automatic refill settings for the account.
   */
  configure(params: RefillConfigureParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { autorefill } = params;
    return this._client.put('/account/setautorefill', {
      query: { autorefill },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RefillConfigureParams {
  /**
   * Enable or disable automatic account autorefill.
   */
  autorefill: 'on' | 'off';
}

export declare namespace Refill {
  export { type RefillConfigureParams as RefillConfigureParams };
}
