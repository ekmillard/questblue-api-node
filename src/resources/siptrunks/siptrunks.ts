// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BlockedcallersAPI from './blockedcallers';
import { BlockedcallerListParams, BlockedcallerListResponse, Blockedcallers } from './blockedcallers';

export class Siptrunks extends APIResource {
  blockedcallers: BlockedcallersAPI.Blockedcallers = new BlockedcallersAPI.Blockedcallers(this._client);

  /**
   * Create a new static or registration SIP Trunk
   */
  create(params: SiptrunkCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      trunk,
      allow_e164_rewrite,
      allow_rtp_proxy,
      concurrent_max,
      did,
      inter_call,
      inter_limit,
      ip_address,
      password,
      region,
      tn2forward,
    } = params;
    return this._client.post('/siptrunk', {
      query: {
        trunk,
        allow_e164_rewrite,
        allow_rtp_proxy,
        concurrent_max,
        did,
        inter_call,
        inter_limit,
        ip_address,
        password,
        region,
        tn2forward,
      },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update SIP Trunk
   */
  update(params: SiptrunkUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      trunk,
      allow_e164_rewrite,
      allow_rtp_proxy,
      concurrent_max,
      did,
      inter_call,
      inter_limit,
      ip_address,
      password,
      region,
      status,
      tn2forward,
    } = params;
    return this._client.put('/siptrunk', {
      query: {
        trunk,
        allow_e164_rewrite,
        allow_rtp_proxy,
        concurrent_max,
        did,
        inter_call,
        inter_limit,
        ip_address,
        password,
        region,
        status,
        tn2forward,
      },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Completely remove SIP Trunk
   */
  delete(params: SiptrunkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { trunk } = params;
    return this._client.delete('/siptrunk', {
      query: { trunk },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Block or unblock inbound calls to a specified SIP trunk or array of trunks.
   */
  blockcaller(params: SiptrunkBlockcallerParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { action, did, trunk } = params;
    return this._client.post('/siptrunk/blockcaller', { query: { action, did, trunk }, ...options });
  }

  /**
   * Get registration status of SIP Trunk
   */
  statuschecker(
    query: SiptrunkStatuscheckerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiptrunkStatuscheckerResponse> {
    return this._client.get('/siptrunk/statuschecker', { query, ...options });
  }
}

/**
 * Empty response body for a successful request.
 */
export type SiptrunkBlockcallerResponse = unknown;

export interface SiptrunkStatuscheckerResponse {
  data?: Record<string, Array<string>>;

  res?: 'online' | 'offline' | 'error';

  total?: number;
}

export interface SiptrunkCreateParams {
  /**
   * Alphanumeric trunk name. Maximum 30 chars
   */
  trunk: string;

  /**
   * Allow E164 rewrite
   */
  allow_e164_rewrite?: 'yes' | 'no';

  /**
   * If enabled we will proxy audio for this trunk
   */
  allow_rtp_proxy?: 'yes' | 'no';

  /**
   * Limit channels on the trunk
   */
  concurrent_max?: string;

  /**
   * DID to route to trunk.
   */
  did?: number;

  /**
   * Allow international calls
   */
  inter_call?: 'on' | 'off';

  /**
   * Limit daily cost for international calls
   */
  inter_limit?: number;

  /**
   * Required for static trunks
   */
  ip_address?: string;

  /**
   * Password for registration trunks. Alphanumeric 4-38 chars
   */
  password?: string;

  /**
   * Region to create trunk in. Default is United States
   */
  region?:
    | 'us'
    | 'us-ca'
    | 'us-fl'
    | 'us-il'
    | 'us-ny'
    | 'au'
    | 'ca'
    | 'fr'
    | 'de'
    | 'mx'
    | 'pl'
    | 'sg'
    | 'uk';

  /**
   * US based DID to forward all inbound calls to
   */
  tn2forward?: number;
}

export interface SiptrunkUpdateParams {
  /**
   * Name of SIP Trunk to update
   */
  trunk: string;

  /**
   * Allow E164 rewrite
   */
  allow_e164_rewrite?: 'yes' | 'no';

  /**
   * If enabled we will proxy audio for this trunk
   */
  allow_rtp_proxy?: 'yes' | 'no';

  /**
   * Limit channels on the trunk
   */
  concurrent_max?: string;

  /**
   * DID to route to trunk.
   */
  did?: number;

  /**
   * Allow international calls
   */
  inter_call?: 'on' | 'off';

  /**
   * Limit daily cost for international calls
   */
  inter_limit?: number;

  /**
   * Required for static trunks
   */
  ip_address?: string;

  /**
   * Password for registration trunks. Alphanumeric 4-38 chars
   */
  password?: string;

  /**
   * Region to create trunk in. Default is United States
   */
  region?:
    | 'us'
    | 'us-ca'
    | 'us-fl'
    | 'us-il'
    | 'us-ny'
    | 'au'
    | 'ca'
    | 'fr'
    | 'de'
    | 'mx'
    | 'pl'
    | 'sg'
    | 'uk';

  /**
   * Enable or Disable(Lock) SIP Trunk
   */
  status?: 'on' | 'off';

  /**
   * US based DID to forward all inbound calls to
   */
  tn2forward?: number;
}

export interface SiptrunkDeleteParams {
  /**
   * Trunk to remove
   */
  trunk: string;
}

export interface SiptrunkBlockcallerParams {
  /**
   * Action to perform. Values can be 'block' or 'unblock'.
   */
  action: 'block' | 'unblock';

  /**
   * Ten characters TN to block.
   */
  did: number;

  /**
   * SIP Trunk(s) to disallow inbound calls. This must be an active trunk from your
   * account.
   */
  trunk: string;
}

export interface SiptrunkStatuscheckerParams {
  /**
   * SIP Trunk name to check
   */
  trunk: string;
}

Siptrunks.Blockedcallers = Blockedcallers;

export declare namespace Siptrunks {
  export {
    type SiptrunkBlockcallerResponse as SiptrunkBlockcallerResponse,
    type SiptrunkStatuscheckerResponse as SiptrunkStatuscheckerResponse,
    type SiptrunkCreateParams as SiptrunkCreateParams,
    type SiptrunkUpdateParams as SiptrunkUpdateParams,
    type SiptrunkDeleteParams as SiptrunkDeleteParams,
    type SiptrunkBlockcallerParams as SiptrunkBlockcallerParams,
    type SiptrunkStatuscheckerParams as SiptrunkStatuscheckerParams,
  };

  export {
    Blockedcallers as Blockedcallers,
    type BlockedcallerListResponse as BlockedcallerListResponse,
    type BlockedcallerListParams as BlockedcallerListParams,
  };
}
