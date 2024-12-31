// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class ServiceManagement extends APIResource {
  /**
   * Pause or unpause the iFax service for a specific iFax Enterprise account.
   */
  pause(params: ServiceManagementPauseParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { action, did } = params;
    return this._client.put('/fax2/pause', {
      query: { action, did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ServiceManagementPauseParams {
  /**
   * Action to perform. Specify 'pause' to pause the service or 'unpause' to activate
   * the service.
   */
  action: 'pause' | 'unpause';

  /**
   * Fax DID to manage. The DID should be associated with the iFax Enterprise
   * account.
   */
  did: number;
}

export declare namespace ServiceManagement {
  export { type ServiceManagementPauseParams as ServiceManagementPauseParams };
}
