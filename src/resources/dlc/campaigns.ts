// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Campaigns extends APIResource {
  /**
   * Create a new 10 DLC (Dedicated Long Code) SMS campaign under an existing active
   * brand.
   */
  create(
    params: CampaignCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CampaignCreateResponse> {
    const {
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
    return this._client.post('/dlc/campaign', {
      query: {
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
   * Retrieve a list of active 10 DLC SMS campaigns associated with specific brand
   * IDs or all active campaigns.
   */
  list(query?: CampaignListParams, options?: Core.RequestOptions): Core.APIPromise<CampaignListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CampaignListResponse>;
  list(
    query: CampaignListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CampaignListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/dlc/campaign', { query, ...options });
  }
}

export interface CampaignCreateResponse {
  data?: CampaignCreateResponse.Data;
}

export namespace CampaignCreateResponse {
  export interface Data {
    /**
     * The ID of the newly created DLC campaign.
     */
    id?: string;
  }
}

export interface CampaignListResponse {
  /**
   * The current page of the campaign list.
   */
  current_page?: number;

  data?: Array<CampaignListResponse.Data>;

  /**
   * The total number of campaigns found.
   */
  total?: number;

  /**
   * The total number of pages for the campaigns.
   */
  total_pages?: number;
}

export namespace CampaignListResponse {
  export interface Data {
    /**
     * The ID of the campaign.
     */
    id?: string;

    /**
     * Indicates if the campaign includes any age-gated content as defined by CTIA
     * guidelines. Values are 'yes' or 'no'.
     */
    age_gated_contact?: string;

    /**
     * The ID of the associated brand.
     */
    brand_id?: string;

    /**
     * A description of the campaign.
     */
    campaign_description?: string;

    /**
     * The DID(s) used for this campaign, separated by commas.
     */
    campaign_did?: string;

    /**
     * The type of the campaign (e.g., standard, special).
     */
    campaign_type?: string;

    /**
     * The specific type of standard campaign (e.g., Public Service).
     */
    campaign_type_standard?: string;

    /**
     * How consumer opt-ins are collected and processed.
     */
    consumer_opt_ins?: string;

    /**
     * How consumer opt-outs are collected and processed.
     */
    consumer_opt_outs?: string;

    /**
     * Indicates if the campaign uses any embedded links. Values are 'yes' or 'no'.
     */
    embedded_link?: string;

    /**
     * Indicates if the campaign uses any embedded phone numbers. Values are 'yes' or
     * 'no'.
     */
    embedded_phone?: string;

    /**
     * Indicates if the campaign includes content related to direct lending or loan
     * arrangements. Values are 'yes' or 'no'.
     */
    loan_arrange?: string;

    /**
     * Indicates if affiliate marketing was used in constructing this campaign. Values
     * are 'yes' or 'no'.
     */
    marketing_used?: string;

    /**
     * Indicates whether the 'HELP' keyword response is implemented. Value is 'yes'.
     */
    reply_help?: string;

    /**
     * A sample message used in the campaign.
     */
    sample_message?: string;

    /**
     * The status of the campaign (e.g., Submitted, Approved).
     */
    status?: string;

    /**
     * The industry vertical of the campaign (e.g., Transportation or Logistics).
     */
    vertical_type?: string;
  }
}

export interface CampaignCreateParams {
  /**
   * Indicates whether the campaign includes any age-gated content as defined by CTIA
   * guidelines.
   */
  age_gated_contact: 'yes' | 'no';

  /**
   * The ID of the active brand for which to create the campaign.
   */
  brand_id: number;

  /**
   * A description of the campaign.
   */
  campaign_description: string;

  /**
   * The DID(s) that will be used for this campaign. Separate multiple DIDs with
   * commas or spaces.
   */
  campaign_did: string;

  /**
   * The type of campaign to create. Possible values are 'standard' or 'special'.
   */
  campaign_type: 'standard' | 'special';

  /**
   * The name of the company for the campaign.
   */
  company_name: string;

  /**
   * How consumer opt-ins are collected and processed.
   */
  consumer_opt_ins: string;

  /**
   * How consumer opt-outs are collected and processed.
   */
  consumer_opt_outs: string;

  /**
   * Indicates whether the campaign uses any embedded links.
   */
  embedded_link: 'yes' | 'no';

  /**
   * Indicates whether the campaign uses any embedded phone numbers.
   */
  embedded_phone: 'yes' | 'no';

  /**
   * Indicates whether the campaign includes content related to direct lending or
   * loan arrangements.
   */
  loan_arrange: 'yes' | 'no';

  /**
   * Indicates whether affiliate marketing is used or was used in constructing this
   * campaign.
   */
  marketing_used: 'yes' | 'no';

  /**
   * Indicates whether the campaign has implemented a 'HELP' keyword response. Must
   * be set to 'yes'.
   */
  reply_help: 'yes';

  /**
   * A sample message that will be used in the campaign.
   */
  sample_message: string;

  /**
   * The industry vertical for the campaign. Refer to the list in the Add DLC Brand
   * section.
   */
  vertical_type: number;

  /**
   * The type of special campaign. Required if campaign_type is set to 'special'.
   */
  campaign_type_special?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  /**
   * The type of standard campaign. Required if campaign_type is set to 'standard'.
   */
  campaign_type_standard?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface CampaignListParams {
  /**
   * Brand ID(s) to filter campaigns. Can be a single ID or an array of IDs. If
   * omitted, all active campaigns are returned.
   */
  id?: number;
}

export declare namespace Campaigns {
  export {
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignListParams as CampaignListParams,
  };
}
