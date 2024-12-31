// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class CallHistory extends APIResource {
  /**
   * Retrieve voice call history for a customer account, with options to filter by
   * additional parameters.
   */
  retrieve(
    query?: CallHistoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallHistoryRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CallHistoryRetrieveResponse>;
  retrieve(
    query: CallHistoryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallHistoryRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/callhistory', { query, ...options });
  }
}

export interface CallHistoryRetrieveResponse {
  data?: Array<CallHistoryRetrieveResponse.Data>;

  /**
   * Total number of records retrieved.
   */
  total?: number;
}

export namespace CallHistoryRetrieveResponse {
  export interface Data {
    /**
     * The number of calls.
     */
    call_number?: number;

    /**
     * Type of the call.
     */
    call_type?: string;

    /**
     * Total cost of the calls.
     */
    cost?: string;

    /**
     * Total duration of calls in minutes.
     */
    total_duration_min?: string;
  }
}

export interface CallHistoryRetrieveParams {
  /**
   * Destination country ID or Destination Zone 2 country ID. Ignored if summary_only
   * is set to 'on'.
   */
  country_id?: number;

  /**
   * Retrieve calls for a specific DID.
   */
  did?: number;

  /**
   * Retrieve fax transmission per minute stat. Values: 'on' (default), 'off'.
   */
  get_fax?: 'on' | 'off';

  /**
   * Show CDR ID. Values: 'on', 'off' (default).
   */
  get_id?: 'on' | 'off';

  /**
   * Last stored call ID. Only CDRs with IDs greater than the specified last_id will
   * be returned. If last_id is set, the period value will be ignored.
   */
  last_id?: number;

  /**
   * Number of records to show per page. Range: 5 - 5000, default is 25.
   */
  per_page?: number;

  /**
   * Date options to filter calls. Possible values: 'thismonth', 'previousmonth',
   * 'thishour', 'previoushour', 'today', 'yesterday', or an array [startDate,
   * endDate] (unix Time Stamp in EST). Max date range: one month.
   */
  period?: 'thismonth' | 'previousmonth' | 'thishour' | 'previoushour' | 'today' | 'yesterday';

  /**
   * Show successful calls only. Values: 'on', 'off' (default).
   */
  success_call_only?: 'on' | 'off';

  /**
   * Display call summary only. Values: 'on', 'off' (default).
   */
  summary_only?: 'on' | 'off';

  /**
   * Timezone identifer to convert start time to exmple America/New_York
   */
  timezone?: string;

  /**
   * SIP Trunk name(s) to retrieve calls for. Can be a single value or an array of
   * values.
   */
  trunk?: Array<string>;

  /**
   * Call type (direction). Values include various inbound and outbound call types.
   */
  type?:
    | 'in'
    | 'out'
    | 'outbound'
    | 'outbound_tf'
    | 'outbound_zone2'
    | 'outbound_fax'
    | 'outbound_fax_tf'
    | 'outbound_enter_fax'
    | 'outbound_info'
    | 'inbound'
    | 'inbound_tf'
    | 'inbound_fax'
    | 'inbound_enter_fax'
    | 'inbound_tf_nous_tf';
}

export declare namespace CallHistory {
  export {
    type CallHistoryRetrieveResponse as CallHistoryRetrieveResponse,
    type CallHistoryRetrieveParams as CallHistoryRetrieveParams,
  };
}
