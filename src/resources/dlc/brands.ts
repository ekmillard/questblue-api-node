// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Brands extends APIResource {
  /**
   * Create a new 10 DLC (Dedicated Long Code) SMS Brand by providing company
   * information and other required details.
   */
  create(params: BrandCreateParams, options?: Core.RequestOptions): Core.APIPromise<BrandCreateResponse> {
    const {
      address,
      company_name,
      contact,
      legal_type,
      tax_number,
      url,
      vertical_type,
      lei_number,
      lei_number_type,
    } = params;
    return this._client.post('/dlc/brand', {
      query: {
        address,
        company_name,
        contact,
        legal_type,
        tax_number,
        url,
        vertical_type,
        lei_number,
        lei_number_type,
      },
      ...options,
    });
  }

  /**
   * Update the details of an existing 10 DLC (Dedicated Long Code) SMS Brand by
   * providing the brand ID and the parameters that need to be updated.
   */
  update(params: BrandUpdateParams, options?: Core.RequestOptions): Core.APIPromise<BrandUpdateResponse> {
    const {
      id,
      address,
      company_name,
      contact,
      legal_type,
      lei_number,
      lei_number_type,
      tax_number,
      url,
      vertical_type,
    } = params;
    return this._client.put('/dlc/brand', {
      query: {
        id,
        address,
        company_name,
        contact,
        legal_type,
        lei_number,
        lei_number_type,
        tax_number,
        url,
        vertical_type,
      },
      ...options,
    });
  }

  /**
   * Retrieve a list of active 10 DLC (Dedicated Long Code) SMS Brands. Optionally,
   * filter the list by specific Brand IDs.
   */
  list(query?: BrandListParams, options?: Core.RequestOptions): Core.APIPromise<BrandListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BrandListResponse>;
  list(
    query: BrandListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrandListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/dlc/brand', { query, ...options });
  }

  /**
   * Delete a specific 10 DLC (Dedicated Long Code) SMS Brand using its Brand ID.
   */
  delete(params: BrandDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { id } = params;
    return this._client.delete('/dlc/brand', { query: { id }, ...options });
  }
}

export interface BrandCreateResponse {
  /**
   * The current page number in the paginated results.
   */
  current_page?: number;

  data?: Array<BrandCreateResponse.Data>;

  /**
   * The total number of brands added.
   */
  total?: number;

  /**
   * The total number of pages of results.
   */
  total_pages?: number;
}

export namespace BrandCreateResponse {
  export interface Data {
    /**
     * The ID of the newly created DLC brand.
     */
    id?: string;

    /**
     * The address of the organization.
     */
    address?: string;

    /**
     * The name of the company.
     */
    company_name?: string;

    /**
     * The contact information for the organization.
     */
    contact?: string;

    /**
     * The legal structure of the organization, e.g., 'Publicly Traded Company',
     * 'Private Company', etc.
     */
    legal_type?: string;

    /**
     * The legal entity identifier number of the organization.
     */
    lei_number?: string;

    /**
     * The type of legal entity identifier, e.g., 'GIIN', 'DUNS', etc.
     */
    lei_number_type?: string;

    /**
     * The approval status of the brand. Possible values include 'Approved', 'Pending',
     * etc.
     */
    status?: string;

    /**
     * The tax number of the organization.
     */
    tax_number?: string;

    /**
     * The website URL of the organization.
     */
    url?: string;

    /**
     * The industry vertical of the organization, e.g., 'Insurance', 'Real Estate',
     * etc.
     */
    vertical_type?: string;
  }
}

export interface BrandUpdateResponse {
  /**
   * Empty response body on success.
   */
  data?: unknown;
}

export interface BrandListResponse {
  /**
   * The current page number of the result set.
   */
  current_page?: number;

  data?: Array<BrandListResponse.Data>;

  /**
   * The total number of DLC brands found.
   */
  total?: number;

  /**
   * The total number of pages available for the result set.
   */
  total_pages?: number;
}

export namespace BrandListResponse {
  export interface Data {
    /**
     * The unique identifier for the DLC brand.
     */
    id?: string;

    /**
     * The address of the company.
     */
    address?: string;

    /**
     * The name of the company associated with the DLC brand.
     */
    company_name?: string;

    /**
     * The contact information for the company.
     */
    contact?: string;

    /**
     * The legal structure of the company. Example: 'Private Company'.
     */
    legal_type?: string;

    /**
     * The legal entity identifier number of the company.
     */
    lei_number?: string;

    /**
     * The type of legal entity identifier. Example: 'GIIN'.
     */
    lei_number_type?: string;

    /**
     * The approval status of the DLC brand. Example: 'Approved'.
     */
    status?: string;

    /**
     * The tax number of the company.
     */
    tax_number?: string;

    /**
     * The website URL of the company.
     */
    url?: string;

    /**
     * The industry vertical of the company. Example: 'Insurance'.
     */
    vertical_type?: string;
  }
}

export type BrandDeleteResponse = unknown;

export interface BrandCreateParams {
  /**
   * The address of the organization.
   */
  address: string;

  /**
   * The name of the company.
   */
  company_name: string;

  /**
   * The contact information for the organization.
   */
  contact: string;

  /**
   * The legal structure of the organization. Possible values include: 1 for Publicly
   * Traded Company, 2 for Private Company, 3 for Non-Profit Organization, 4 for
   * Government.
   */
  legal_type: number;

  /**
   * The tax number of the organization.
   */
  tax_number: string;

  /**
   * The website URL of the organization.
   */
  url: string;

  /**
   * The industry vertical of the organization. Refer to the provided list for
   * possible values (e.g., 1 for Agriculture, 2 for Media and Communications, etc.).
   */
  vertical_type: number;

  /**
   * The legal entity identifier number of the organization.
   */
  lei_number?: string;

  /**
   * The type of legal entity identifier. Possible values include: duns, giin, lei.
   * This is required if a legal entity identifier number (lei_number) is provided.
   */
  lei_number_type?: string;
}

export interface BrandUpdateParams {
  /**
   * The ID of the DLC brand that needs to be updated.
   */
  id: number;

  /**
   * The address of the organization.
   */
  address?: string;

  /**
   * The name of the company.
   */
  company_name?: string;

  /**
   * The contact information for the organization.
   */
  contact?: string;

  /**
   * The legal structure of the organization. Possible values include: 1 for Publicly
   * Traded Company, 2 for Private Company, 3 for Non-Profit Organization, 4 for
   * Government.
   */
  legal_type?: number;

  /**
   * The legal entity identifier number of the organization.
   */
  lei_number?: string;

  /**
   * The type of legal entity identifier. Possible values include: duns, giin, lei.
   * This is required if a legal entity identifier number (lei_number) is provided.
   */
  lei_number_type?: string;

  /**
   * The tax number of the organization.
   */
  tax_number?: string;

  /**
   * The website URL of the organization.
   */
  url?: string;

  /**
   * The industry vertical of the organization. Refer to the provided list for
   * possible values (e.g., 1 for Agriculture, 2 for Media and Communications, etc.).
   */
  vertical_type?: number;
}

export interface BrandListParams {
  /**
   * Optional Brand ID(s) to filter the list by specific brand(s). Can be a single ID
   * or an array of IDs.
   */
  id?: number;
}

export interface BrandDeleteParams {
  /**
   * The unique identifier (Brand ID) of the DLC brand to be removed.
   */
  id: number;
}

export declare namespace Brands {
  export {
    type BrandCreateResponse as BrandCreateResponse,
    type BrandUpdateResponse as BrandUpdateResponse,
    type BrandListResponse as BrandListResponse,
    type BrandDeleteResponse as BrandDeleteResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
    type BrandDeleteParams as BrandDeleteParams,
  };
}
