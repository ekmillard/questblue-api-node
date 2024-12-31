// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Users extends APIResource {
  /**
   * Create a new iFax Enterprise user for a specified iFax group.
   */
  create(params: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { fax_login, fax_name, fax_password, sname, fax_email, fax_lname, is_admin } = params;
    return this._client.post('/fax2/user', {
      query: { fax_login, fax_name, fax_password, sname, fax_email, fax_lname, is_admin },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Modify properties of an existing iFax Enterprise user.
   */
  update(params: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { fax_login, fax_email, fax_lname, fax_login_new, fax_name, fax_password, is_admin } = params;
    return this._client.put('/fax2/user', {
      query: { fax_login, fax_email, fax_lname, fax_login_new, fax_name, fax_password, is_admin },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a list of existing iFax Enterprise users with optional filters.
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/fax2/user', { query, ...options });
  }

  /**
   * Completely remove an existing iFax Enterprise user.
   */
  delete(params: UserDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { fax_login } = params;
    return this._client.delete('/fax2/user', {
      query: { fax_login },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UserListResponse {
  /**
   * Current page number.
   */
  current_page?: number;

  data?: Array<UserListResponse.Data>;

  /**
   * Total number of users.
   */
  total?: number;

  /**
   * Total number of pages available.
   */
  total_pages?: number;
}

export namespace UserListResponse {
  export interface Data {
    /**
     * Fax user last name.
     */
    fax_lname?: string;

    /**
     * Fax user first name.
     */
    fax_name?: string;

    /**
     * Admin status ('on' or 'off').
     */
    is_admin?: string;

    /**
     * Fax user login.
     */
    login?: string;

    /**
     * Fax user password.
     */
    password?: string;

    /**
     * Group short name.
     */
    sname?: string;
  }
}

export interface UserCreateParams {
  /**
   * Fax user login. Must be unique in the system, up to 36 characters.
   */
  fax_login: string;

  /**
   * Fax user first name, up to 48 characters.
   */
  fax_name: string;

  /**
   * Fax user password, up to 64 characters.
   */
  fax_password: string;

  /**
   * Group short name to add the new user to.
   */
  sname: string;

  /**
   * Fax user contact email. Must be a valid email address.
   */
  fax_email?: string;

  /**
   * Fax user last name, up to 48 characters.
   */
  fax_lname?: string;

  /**
   * Set the user's admin privileges. Values: 'on' or 'off' (default).
   */
  is_admin?: 'on' | 'off';
}

export interface UserUpdateParams {
  /**
   * Fax user login to modify. The user must exist in your inventory.
   */
  fax_login: string;

  /**
   * Fax user contact email. Must be a valid email address.
   */
  fax_email?: string;

  /**
   * Fax user last name. Up to 48 characters.
   */
  fax_lname?: string;

  /**
   * New fax user login. Up to 36 characters, must be unique in the system.
   */
  fax_login_new?: string;

  /**
   * Fax user first name. Up to 48 characters.
   */
  fax_name?: string;

  /**
   * New fax user password. Up to 64 characters.
   */
  fax_password?: string;

  /**
   * Set the user admin privileges. Values: 'on' or 'off' (default).
   */
  is_admin?: 'on' | 'off';
}

export interface UserListParams {
  /**
   * Fax user login to view details.
   */
  fax_login?: string;

  /**
   * Fax group short name to view details.
   */
  sname?: string;
}

export interface UserDeleteParams {
  /**
   * Fax user login to remove. The user must exist in your inventory.
   */
  fax_login: string;
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
