// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AvailableAPI from './available';
import { Available, AvailableListParams, AvailableListResponse } from './available';

export class VoiceDidManagement extends APIResource {
  available: AvailableAPI.Available = new AvailableAPI.Available(this._client);

  /**
   * Verify if phone number(s) are at risk of fraud
   */
  fraudvalidate(
    params: VoiceDidManagementFraudvalidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VoiceDidManagementFraudvalidateResponse> {
    const { tn } = params;
    return this._client.post('/did/fraudvalidate', { query: { tn }, ...options });
  }

  /**
   * Move a number to fax inventory
   */
  move2fax(params: VoiceDidManagementMove2faxParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did } = params;
    return this._client.put('/did/move2fax', {
      query: { did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface VoiceDidManagementFraudvalidateResponse {
  data?: Array<Record<string, string>>;
}

export interface VoiceDidManagementFraudvalidateParams {
  /**
   * Phone number(s) to validate
   */
  tn: number | Array<unknown>;
}

export interface VoiceDidManagementMove2faxParams {
  /**
   * DID to move
   */
  did: number;
}

VoiceDidManagement.Available = Available;

export declare namespace VoiceDidManagement {
  export {
    type VoiceDidManagementFraudvalidateResponse as VoiceDidManagementFraudvalidateResponse,
    type VoiceDidManagementFraudvalidateParams as VoiceDidManagementFraudvalidateParams,
    type VoiceDidManagementMove2faxParams as VoiceDidManagementMove2faxParams,
  };

  export {
    Available as Available,
    type AvailableListResponse as AvailableListResponse,
    type AvailableListParams as AvailableListParams,
  };
}
