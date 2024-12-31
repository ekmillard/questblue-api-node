// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class FaxHistory extends APIResource {
  /**
   * Retrieve fax activity for a customer account, with options to filter by
   * additional parameters.
   */
  retrieve(
    query?: FaxHistoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxHistoryRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<FaxHistoryRetrieveResponse>;
  retrieve(
    query: FaxHistoryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxHistoryRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/faxhistory', { query, ...options });
  }
}

export interface FaxHistoryRetrieveResponse {
  /**
   * Current page number of the retrieved fax records.
   */
  current_page?: number;

  data?: Array<FaxHistoryRetrieveResponse.Data>;

  /**
   * Total number of fax records retrieved.
   */
  total?: number;

  /**
   * Total number of pages of fax records.
   */
  total_pages?: number;
}

export namespace FaxHistoryRetrieveResponse {
  export interface Data {
    /**
     * Sender DID of the fax.
     */
    did_from?: string;

    /**
     * Recipient DID of the fax.
     */
    did_to?: string;

    /**
     * Unique identifier of the fax.
     */
    fax_id?: string;

    /**
     * Time when the fax was sent, in ISO 8601 format.
     */
    send_time?: string;

    /**
     * Service type, either 'pro' or 'enterprise'.
     */
    service?: string;

    /**
     * Current status of the fax.
     */
    status?: string;

    /**
     * Type of fax, either inbound or outbound.
     */
    type?: string;
  }
}

export interface FaxHistoryRetrieveParams {
  /**
   * DID(s) to list faxes for. Can be a single value or an array of values.
   */
  did?: Array<number>;

  /**
   * List only specific fax by Fax ID. Refer to methods #4.5.8 and #4.6.22 for
   * details.
   */
  fax_id?: string;

  /**
   * Page number to show.
   */
  page?: number;

  /**
   * Number of records to show per page. Range: 5 - 1000, default is 25.
   */
  per_page?: number;

  /**
   * Time range to list faxes. Possible values: 'today', 'yesterday', or array with
   * date-time range.
   */
  period?: 'today' | 'yesterday' | Array<string>;

  /**
   * Type of fax to list. Possible values: 'pro', 'enterprise'.
   */
  service?: 'pro' | 'enterprise';

  /**
   * List inbound or outbound faxes. Possible values: 'out', 'in'.
   */
  type?: 'out' | 'in';
}

export declare namespace FaxHistory {
  export {
    type FaxHistoryRetrieveResponse as FaxHistoryRetrieveResponse,
    type FaxHistoryRetrieveParams as FaxHistoryRetrieveParams,
  };
}
