// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PermitAPI from './permit';
import { Permit, PermitDeleteParams, PermitRetrieveParams, PermitRetrieveResponse } from './permit';

export class IfaxEnterpriseManagement extends APIResource {
  permit: PermitAPI.Permit = new PermitAPI.Permit(this._client);
}

IfaxEnterpriseManagement.Permit = Permit;

export declare namespace IfaxEnterpriseManagement {
  export {
    Permit as Permit,
    type PermitRetrieveResponse as PermitRetrieveResponse,
    type PermitRetrieveParams as PermitRetrieveParams,
    type PermitDeleteParams as PermitDeleteParams,
  };
}
