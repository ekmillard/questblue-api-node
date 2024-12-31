// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Servers extends APIResource {
  /**
   * Order a regular or QuBe server with specified parameters.
   */
  create(params: ServerCreateParams, options?: Core.RequestOptions): Core.APIPromise<ServerCreateResponse> {
    const { server_type } = params;
    return this._client.post('/server', { query: { server_type }, ...options });
  }

  /**
   * Retrieve the list of servers ordered along with their inventory and properties.
   */
  list(query?: ServerListParams, options?: Core.RequestOptions): Core.APIPromise<ServerListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ServerListResponse>;
  list(
    query: ServerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/server', { query, ...options });
  }

  /**
   * Removes a server from the user's account based on the specified server ID.
   */
  delete(params: ServerDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { server_id } = params;
    return this._client.delete('/server', { query: { server_id }, ...options });
  }

  /**
   * Adds an IP address to the list of allowed IPs for a specified server.
   */
  addIP(params: ServerAddIPParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { ip_address, server_id, note } = params;
    return this._client.put('/server/addip', {
      query: { ip_address, server_id, note },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a list of available backups for a specified server.
   */
  listBackups(
    query: ServerListBackupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerListBackupsResponse> {
    return this._client.get('/server/listbackups', { query, ...options });
  }

  /**
   * Set or manage the backup schedule for a server, including enrolling or
   * unenrolling from the backup service.
   */
  manageBackupSchedule(
    params: ServerManageBackupScheduleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { schedule, server_id } = params;
    return this._client.post('/server/managebackupschedule', {
      query: { schedule, server_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Remove a specified backup from the server.
   */
  removeBackup(
    params: ServerRemoveBackupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerRemoveBackupResponse> {
    const { backup_id, server_id } = params;
    return this._client.delete('/server/removebackup', { query: { backup_id, server_id }, ...options });
  }

  /**
   * Removes an IP address from the list of allowed IPs for a specified server.
   */
  removeIP(params: ServerRemoveIPParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { server_id } = params;
    return this._client.delete('/server/deleip', {
      query: { server_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Restore the server from a specified backup.
   */
  restoreBackup(
    params: ServerRestoreBackupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerRestoreBackupResponse> {
    const { backup_id, server_id } = params;
    return this._client.post('/server/restorebackup', { query: { backup_id, server_id }, ...options });
  }

  /**
   * Upgrade the configuration of an existing server to a higher configuration.
   */
  upgrade(params: ServerUpgradeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { server_id, server_type } = params;
    return this._client.post('/server/upgrade', {
      query: { server_id, server_type },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ServerCreateResponse {
  data?: ServerCreateResponse.Data;
}

export namespace ServerCreateResponse {
  export interface Data {
    server_id?: number;
  }
}

export interface ServerListResponse {
  data?: Array<ServerListResponse.Data>;

  /**
   * Total number of servers in the response.
   */
  total?: number;
}

export namespace ServerListResponse {
  export interface Data {
    allowed_ip?: Array<string>;

    /**
     * Date the server was ordered (YYYY-MM-DD format).
     */
    ordered_by?: string;

    /**
     * Unique ID of the server.
     */
    server_id?: number;

    /**
     * Current status of the server (e.g., active, inactive).
     */
    status?: string;

    /**
     * Type of server (e.g., small, medium, large).
     */
    type?: string;
  }
}

/**
 * Empty response on success.
 */
export type ServerDeleteResponse = unknown;

export interface ServerListBackupsResponse {
  data?: Array<ServerListBackupsResponse.Data>;

  /**
   * Total number of backups available.
   */
  total?: number;
}

export namespace ServerListBackupsResponse {
  export interface Data {
    /**
     * The unique identifier of the backup.
     */
    backup_id?: number;

    /**
     * The name or timestamp of the backup.
     */
    name?: string;

    /**
     * The type of backup (e.g., manual).
     */
    type?: string;
  }
}

export interface ServerRemoveBackupResponse {
  /**
   * Confirmation message indicating successful removal.
   */
  message?: string;
}

export interface ServerRestoreBackupResponse {
  /**
   * Confirmation message indicating successful restoration.
   */
  message?: string;
}

export interface ServerCreateParams {
  /**
   * Query param: Type of server to order. Available values: small, medium, large,
   * enterprise, enterpriseplusplus. Obsolete values (no longer used): dedicated,
   * qubededicated, qubevirtual.
   */
  server_type: 'small' | 'medium' | 'large' | 'enterprise' | 'enterpriseplusplus';

  /**
   * Body param: Array of server software and parameters.
   */
  params: ServerCreateParams.Params;
}

export namespace ServerCreateParams {
  export interface Params {
    '3cx'?: Params._3cx;

    masstext?: Params.Masstext;

    /**
     * Optional note or comment, up to 255 characters.
     */
    note?: string;

    qube?: Params.Qube;

    'qube-tdr'?: Params.QubeTdr;

    qubev2?: Params.Qubev2;

    sbc?: Params.Sbc;

    'vital-pbx'?: Params.VitalPbx;

    vodia?: Params.Vodia;
  }

  export namespace Params {
    export interface _3cx {
      admin_email?: string;

      admin_password?: string;

      email?: string;

      inbound_trunk_name?: string;

      license_company_name?: string;

      license_contact_name?: string;

      license_email?: string;

      license_key?: string;

      license_phone?: string;
    }

    export interface Masstext {
      domain_name?: string;

      email?: string;

      inbound_trunk_name?: string;

      password?: string;

      username?: string;
    }

    export interface Qube {
      email?: string;

      inbound_trunk_name?: string;

      password?: string;
    }

    export interface QubeTdr {
      domain_name?: string;

      email?: string;

      inbound_trunk_name?: string;

      password?: string;
    }

    export interface Qubev2 {
      domain_name?: string;

      email?: string;

      password?: string;
    }

    export interface Sbc {
      email?: string;

      inbound_trunk_name?: string;

      sbcuser_password?: string;
    }

    export interface VitalPbx {
      email?: string;
    }

    export interface Vodia {
      company?: string;

      did?: string;

      email?: string;

      inbound_trunk_name?: string;

      password?: string;
    }
  }
}

export interface ServerListParams {
  /**
   * Server ID to show. Can be a single integer or an array of IDs.
   */
  server_id?: Array<number>;
}

export interface ServerDeleteParams {
  /**
   * The ID of the server to be removed.
   */
  server_id: number;
}

export interface ServerAddIPParams {
  /**
   * The IP address to add to the allowed list.
   */
  ip_address: string;

  /**
   * The ID of the server to which the IP address will be added.
   */
  server_id: number;

  /**
   * Optional note or comment (up to 64 characters).
   */
  note?: string;
}

export interface ServerListBackupsParams {
  /**
   * The ID of the server for which backups are to be listed.
   */
  server_id: number;
}

export interface ServerManageBackupScheduleParams {
  /**
   * The desired backup schedule. Available values: daily, weekly, monthly, none (to
   * unenroll from backup service).
   */
  schedule: 'daily' | 'weekly' | 'monthly' | 'none';

  /**
   * The ID of the server for which the backup schedule is to be managed.
   */
  server_id: number;
}

export interface ServerRemoveBackupParams {
  /**
   * The ID of the backup to remove.
   */
  backup_id: number;

  /**
   * The ID of the server from which the backup should be removed.
   */
  server_id: number;
}

export interface ServerRemoveIPParams {
  /**
   * The ID of the server from which the IP address will be removed.
   */
  server_id: number;
}

export interface ServerRestoreBackupParams {
  /**
   * The ID of the backup to restore from.
   */
  backup_id: number;

  /**
   * The ID of the server to restore the backup to.
   */
  server_id: number;
}

export interface ServerUpgradeParams {
  /**
   * The ID of the server to upgrade.
   */
  server_id: number;

  /**
   * The new server type to set. Allowed values: medium, large, enterprise,
   * enterpriseplusplus. The new server type must be a higher configuration than the
   * current one.
   */
  server_type: 'medium' | 'large' | 'enterprise' | 'enterpriseplusplus';
}

export declare namespace Servers {
  export {
    type ServerCreateResponse as ServerCreateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerListBackupsResponse as ServerListBackupsResponse,
    type ServerRemoveBackupResponse as ServerRemoveBackupResponse,
    type ServerRestoreBackupResponse as ServerRestoreBackupResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerListParams as ServerListParams,
    type ServerDeleteParams as ServerDeleteParams,
    type ServerAddIPParams as ServerAddIPParams,
    type ServerListBackupsParams as ServerListBackupsParams,
    type ServerManageBackupScheduleParams as ServerManageBackupScheduleParams,
    type ServerRemoveBackupParams as ServerRemoveBackupParams,
    type ServerRemoveIPParams as ServerRemoveIPParams,
    type ServerRestoreBackupParams as ServerRestoreBackupParams,
    type ServerUpgradeParams as ServerUpgradeParams,
  };
}
