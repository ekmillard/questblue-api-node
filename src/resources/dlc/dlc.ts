// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BrandsAPI from './brands';
import {
  BrandCreateParams,
  BrandCreateResponse,
  BrandDeleteParams,
  BrandDeleteResponse,
  BrandListParams,
  BrandListResponse,
  BrandUpdateParams,
  BrandUpdateResponse,
  Brands,
} from './brands';
import * as CampaignsAPI from './campaigns';
import {
  CampaignCreateParams,
  CampaignCreateResponse,
  CampaignListParams,
  CampaignListResponse,
  Campaigns,
} from './campaigns';

export class Dlc extends APIResource {
  brands: BrandsAPI.Brands = new BrandsAPI.Brands(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
}

Dlc.Brands = Brands;
Dlc.Campaigns = Campaigns;

export declare namespace Dlc {
  export {
    Brands as Brands,
    type BrandCreateResponse as BrandCreateResponse,
    type BrandUpdateResponse as BrandUpdateResponse,
    type BrandListResponse as BrandListResponse,
    type BrandDeleteResponse as BrandDeleteResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
    type BrandDeleteParams as BrandDeleteParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignListParams as CampaignListParams,
  };
}
