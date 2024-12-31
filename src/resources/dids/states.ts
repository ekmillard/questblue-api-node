// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class States extends APIResource {
  /**
   * List of states(short form) where at least one rate center is available.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<StateListResponse> {
    return this._client.get('/did/states', options);
  }
}

export interface StateListResponse {
  data?: Array<string>;

  total?: number;
}

export declare namespace States {
  export { type StateListResponse as StateListResponse };
}
