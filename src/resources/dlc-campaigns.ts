// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class DlcCampaigns extends APIResource {
  /**
   * Update the details of an existing 10 DLC SMS campaign using its campaign ID.
   */
  update(params: DlcCampaignUpdateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const {
      id,
      age_gated_contact,
      brand_id,
      campaign_description,
      campaign_did,
      campaign_type,
      company_name,
      consumer_opt_ins,
      consumer_opt_outs,
      embedded_link,
      embedded_phone,
      loan_arrange,
      marketing_used,
      reply_help,
      sample_message,
      vertical_type,
      campaign_type_special,
      campaign_type_standard,
    } = params;
    return this._client.put('/dlc/campaign', {
      query: {
        id,
        age_gated_contact,
        brand_id,
        campaign_description,
        campaign_did,
        campaign_type,
        company_name,
        consumer_opt_ins,
        consumer_opt_outs,
        embedded_link,
        embedded_phone,
        loan_arrange,
        marketing_used,
        reply_help,
        sample_message,
        vertical_type,
        campaign_type_special,
        campaign_type_standard,
      },
      ...options,
    });
  }

  /**
   * Delete an existing 10 DLC SMS campaign using its campaign ID.
   */
  delete(params: DlcCampaignDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { id } = params;
    return this._client.delete('/dlc/campaign', { query: { id }, ...options });
  }
}

export type DlcCampaignUpdateResponse = unknown;

export type DlcCampaignDeleteResponse = unknown;

export interface DlcCampaignUpdateParams {
  /**
   * The ID of the campaign to update.
   */
  id: number;

  /**
   * Indicates if the campaign includes any age-gated content as defined by CTIA
   * guidelines. Values: yes, no.
   */
  age_gated_contact: string;

  /**
   * Active Brand ID to create the campaign.
   */
  brand_id: number;

  /**
   * A description of the campaign.
   */
  campaign_description: string;

  /**
   * The DID(s) used for this campaign. List of active DIDs in your account separated
   * by commas or spaces.
   */
  campaign_did: string;

  /**
   * Type of the campaign. Values: standard, special.
   */
  campaign_type: string;

  /**
   * The name of the company.
   */
  company_name: string;

  /**
   * Information on how consumer opt-ins are collected and processed.
   */
  consumer_opt_ins: string;

  /**
   * Information on how consumer opt-outs are collected and processed.
   */
  consumer_opt_outs: string;

  /**
   * Indicates if the campaign uses any embedded links. Values: yes, no.
   */
  embedded_link: string;

  /**
   * Indicates if the campaign uses any embedded phone numbers. Values: yes, no.
   */
  embedded_phone: string;

  /**
   * Indicates if the campaign includes content related to direct lending or loan
   * arrangements. Values: yes, no.
   */
  loan_arrange: string;

  /**
   * Indicates if affiliate marketing was used in constructing this campaign. Values:
   * yes, no.
   */
  marketing_used: string;

  /**
   * Indicates whether the 'HELP' keyword response is implemented. Value must be
   * 'yes'.
   */
  reply_help: string;

  /**
   * A sample message used in the campaign.
   */
  sample_message: string;

  /**
   * The industry vertical associated with the campaign. See #4.4.8 (Add DLC Brand).
   */
  vertical_type: number;

  /**
   * Specific type of the special campaign. Required if 'campaign_type' is set to
   * 'special'.
   */
  campaign_type_special?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  /**
   * Specific type of the standard campaign. Required if 'campaign_type' is set to
   * 'standard'.
   */
  campaign_type_standard?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface DlcCampaignDeleteParams {
  /**
   * The ID of the campaign to remove.
   */
  id: number;
}

export declare namespace DlcCampaigns {
  export {
    type DlcCampaignUpdateResponse as DlcCampaignUpdateResponse,
    type DlcCampaignDeleteResponse as DlcCampaignDeleteResponse,
    type DlcCampaignUpdateParams as DlcCampaignUpdateParams,
    type DlcCampaignDeleteParams as DlcCampaignDeleteParams,
  };
}
