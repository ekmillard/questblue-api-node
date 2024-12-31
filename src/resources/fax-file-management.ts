// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FaxFileManagement extends APIResource {
  /**
   * Upload a fax file to the fax server. The file must be Base64 encoded and should
   * be one of the allowed file types.
   */
  upload(
    body: FaxFileManagementUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FaxFileManagementUploadResponse> {
    return this._client.post('/fax2/upload', { body, ...options });
  }
}

export interface FaxFileManagementUploadResponse {
  /**
   * Unique ID assigned to the uploaded file.
   */
  file_id?: string;
}

export interface FaxFileManagementUploadParams {
  /**
   * Base64 encoded file content. Allowed file types: jpeg, jpg, gif, png, tif, tiff,
   * pdf, doc, rtf, ods, xls, csv, ppt, txt, rar, zip, 7z. Max file size: 8Mb.
   */
  file: string;

  /**
   * Name of the uploaded file.
   */
  filename: string;
}

export declare namespace FaxFileManagement {
  export {
    type FaxFileManagementUploadResponse as FaxFileManagementUploadResponse,
    type FaxFileManagementUploadParams as FaxFileManagementUploadParams,
  };
}
