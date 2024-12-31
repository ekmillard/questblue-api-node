// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GroupsAPI from './groups';
import {
  GroupCreateParams,
  GroupDeleteParams,
  GroupListParams,
  GroupListResponse,
  GroupUpdateParams,
  Groups,
} from './groups';
import * as UsersAPI from './users';
import {
  UserCreateParams,
  UserDeleteParams,
  UserListParams,
  UserListResponse,
  UserUpdateParams,
  Users,
} from './users';

export class IfaxEnterprises extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Remove a specified iFax Enterprise DID.
   */
  delete(params: IfaxEnterpriseDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { did } = params;
    return this._client.delete('/fax2', {
      query: { did },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Create or update permissions for an iFax Enterprise user for a specific fax DID.
   */
  permit(params: IfaxEnterprisePermitParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { allow_delete, allow_list_in, allow_list_out, allow_send, did, fax_login } = params;
    return this._client.post('/fax2/permit', {
      query: { allow_delete, allow_list_in, allow_list_out, allow_send, did, fax_login },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface IfaxEnterpriseDeleteParams {
  /**
   * The DID to remove.
   */
  did: number;
}

export interface IfaxEnterprisePermitParams {
  /**
   * Allow fax deletion. Values: 'on' | 'off'.
   */
  allow_delete: 'on' | 'off';

  /**
   * Allow viewing of inbound faxes. Values: 'on' | 'off'.
   */
  allow_list_in: 'on' | 'off';

  /**
   * Allow viewing of outbound faxes. Values: 'on' | 'off'.
   */
  allow_list_out: 'on' | 'off';

  /**
   * Allow fax sending. Values: 'on' | 'off'.
   */
  allow_send: 'on' | 'off';

  /**
   * Fax DID to manage permissions. Must be an active DID.
   */
  did: number;

  /**
   * Fax User Login to manage permissions. The user must exist in your inventory.
   */
  fax_login: string;
}

IfaxEnterprises.Groups = Groups;
IfaxEnterprises.Users = Users;

export declare namespace IfaxEnterprises {
  export {
    type IfaxEnterpriseDeleteParams as IfaxEnterpriseDeleteParams,
    type IfaxEnterprisePermitParams as IfaxEnterprisePermitParams,
  };

  export {
    Groups as Groups,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
