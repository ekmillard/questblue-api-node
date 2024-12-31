// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CallHistoryAPI from './call-history';
import { CallHistory, CallHistoryRetrieveParams, CallHistoryRetrieveResponse } from './call-history';
import * as FaxDownloadAPI from './fax-download';
import { FaxDownload, FaxDownloadRetrieveParams, FaxDownloadRetrieveResponse } from './fax-download';
import * as FaxHistoryAPI from './fax-history';
import { FaxHistory, FaxHistoryRetrieveParams, FaxHistoryRetrieveResponse } from './fax-history';

export class Reports extends APIResource {
  callHistory: CallHistoryAPI.CallHistory = new CallHistoryAPI.CallHistory(this._client);
  faxHistory: FaxHistoryAPI.FaxHistory = new FaxHistoryAPI.FaxHistory(this._client);
  faxDownload: FaxDownloadAPI.FaxDownload = new FaxDownloadAPI.FaxDownload(this._client);
}

Reports.CallHistory = CallHistory;
Reports.FaxHistory = FaxHistory;
Reports.FaxDownload = FaxDownload;

export declare namespace Reports {
  export {
    CallHistory as CallHistory,
    type CallHistoryRetrieveResponse as CallHistoryRetrieveResponse,
    type CallHistoryRetrieveParams as CallHistoryRetrieveParams,
  };

  export {
    FaxHistory as FaxHistory,
    type FaxHistoryRetrieveResponse as FaxHistoryRetrieveResponse,
    type FaxHistoryRetrieveParams as FaxHistoryRetrieveParams,
  };

  export {
    FaxDownload as FaxDownload,
    type FaxDownloadRetrieveResponse as FaxDownloadRetrieveResponse,
    type FaxDownloadRetrieveParams as FaxDownloadRetrieveParams,
  };
}
