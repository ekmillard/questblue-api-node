// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FaxDownload extends APIResource {
  /**
   * Download a sent or received fax file by providing the Fax ID.
   */
  retrieve(
    query: FaxDownloadRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxDownloadRetrieveResponse> {
    return this._client.get('/faxdownload', { query, ...options });
  }
}

export interface FaxDownloadRetrieveResponse {
  data?: FaxDownloadRetrieveResponse.Data;
}

export namespace FaxDownloadRetrieveResponse {
  export interface Data {
    /**
     * Base64 encoded content of the fax file.
     */
    fax_base64?: string;
  }
}

export interface FaxDownloadRetrieveParams {
  /**
   * Fax ID of the file to download.
   */
  fax_id: number;
}

export declare namespace FaxDownload {
  export {
    type FaxDownloadRetrieveResponse as FaxDownloadRetrieveResponse,
    type FaxDownloadRetrieveParams as FaxDownloadRetrieveParams,
  };
}
