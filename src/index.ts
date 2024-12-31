// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  DlcCampaignDeleteParams,
  DlcCampaignDeleteResponse,
  DlcCampaignUpdateParams,
  DlcCampaignUpdateResponse,
  DlcCampaigns,
} from './resources/dlc-campaigns';
import { FaxAvailable, FaxAvailableListParams, FaxAvailableListResponse } from './resources/fax-available';
import {
  FaxFileManagement,
  FaxFileManagementUploadParams,
  FaxFileManagementUploadResponse,
} from './resources/fax-file-management';
import {
  FaxRatecenterListParams,
  FaxRatecenterListResponse,
  FaxRatecenters,
} from './resources/fax-ratecenters';
import { FaxSending, FaxSendingSendParams, FaxSendingSendResponse } from './resources/fax-sending';
import { FaxStateListResponse, FaxStates } from './resources/fax-states';
import {
  LocalNumberPortability,
  LocalNumberPortabilityCheckParams,
  LocalNumberPortabilityCheckResponse,
  LocalNumberPortabilityCreateParams,
  LocalNumberPortabilityCreateResponse,
} from './resources/local-number-portability';
import {
  LocalNumberPortabilityRequestDeleteParams,
  LocalNumberPortabilityRequestListParams,
  LocalNumberPortabilityRequestListResponse,
  LocalNumberPortabilityRequestUpdateParams,
  LocalNumberPortabilityRequests,
} from './resources/local-number-portability-requests';
import {
  ServerAddIPParams,
  ServerCreateParams,
  ServerCreateResponse,
  ServerDeleteParams,
  ServerDeleteResponse,
  ServerListBackupsParams,
  ServerListBackupsResponse,
  ServerListParams,
  ServerListResponse,
  ServerManageBackupScheduleParams,
  ServerRemoveBackupParams,
  ServerRemoveBackupResponse,
  ServerRemoveIPParams,
  ServerRestoreBackupParams,
  ServerRestoreBackupResponse,
  ServerUpgradeParams,
  Servers,
} from './resources/servers';
import { ServiceManagement, ServiceManagementPauseParams } from './resources/service-management';
import {
  SipTrunkManagement,
  SipTrunkManagementListParams,
  SipTrunkManagementListResponse,
} from './resources/sip-trunk-management';
import {
  SmschecktncarrierRetrieveParams,
  SmschecktncarrierRetrieveResponse,
  Smschecktncarriers,
} from './resources/smschecktncarriers';
import { Smsv2, Smsv2SendParams, Smsv2SendResponse } from './resources/smsv2';
import {
  UserAccountCallbackConfigureParams,
  UserAccountCallbackStatusResponse,
  UserAccountSetDailyBalanceAlertParams,
  UserAccountSetDailyBalanceAlertResponse,
  UserAccountSetLowBalanceAlertParams,
  UserAccountSetLowBalanceAlertResponse,
  UserAccounts,
} from './resources/user-accounts';
import { Account } from './resources/account/account';
import {
  DidCreateParams,
  DidDeleteParams,
  DidListParams,
  DidListResponse,
  DidUpdateParams,
  Dids,
} from './resources/dids/dids';
import { Dlc } from './resources/dlc/dlc';
import {
  Fax,
  FaxCreateParams,
  FaxCreateResponse,
  FaxDeleteParams,
  FaxListParams,
  FaxListResponse,
  FaxMove2voiceParams,
  FaxPauseParams,
  FaxSendParams,
  FaxSendResponse,
  FaxUpdateParams,
} from './resources/fax/fax';
import {
  Fax2,
  Fax2CreateParams,
  Fax2ListParams,
  Fax2ListResponse,
  Fax2UpdateParams,
} from './resources/fax2/fax2';
import { IfaxEnterpriseManagement } from './resources/ifax-enterprise-management/ifax-enterprise-management';
import {
  IfaxEnterpriseDeleteParams,
  IfaxEnterprisePermitParams,
  IfaxEnterprises,
} from './resources/ifax-enterprises/ifax-enterprises';
import {
  InternationalDidManagement,
  InternationalDidManagementCreateParams,
  InternationalDidManagementCreateResponse,
  InternationalDidManagementDeleteParams,
  InternationalDidManagementListParams,
  InternationalDidManagementListResponse,
  InternationalDidManagementUpdateParams,
} from './resources/international-did-management/international-did-management';
import { Reports } from './resources/reports/reports';
import {
  SiptrunkBlockcallerParams,
  SiptrunkBlockcallerResponse,
  SiptrunkCreateParams,
  SiptrunkDeleteParams,
  SiptrunkStatuscheckerParams,
  SiptrunkStatuscheckerResponse,
  SiptrunkUpdateParams,
  Siptrunks,
} from './resources/siptrunks/siptrunks';
import {
  SMS,
  SMSListParams,
  SMSListResponse,
  SMSOffnetorderParams,
  SMSOffnetorderResponse,
  SMSUpdateParams,
  SMSUpdateResponse,
} from './resources/sms/sms';
import {
  VoiceDidManagement,
  VoiceDidManagementFraudvalidateParams,
  VoiceDidManagementFraudvalidateResponse,
  VoiceDidManagementMove2faxParams,
} from './resources/voice-did-management/voice-did-management';

const environments = {
  production: 'https://api.questblue.com',
  environment_1: 'https://api2.questblue.com',
};
type Environment = keyof typeof environments;
export interface ClientOptions {
  /**
   * Username for basic authentication.
   */
  username?: string | undefined;

  /**
   * Password for basic authentication.
   */
  password?: string | undefined;

  /**
   * API key required to authenticate requests using the Security-Key header.
   */
  securityKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.questblue.com`
   * - `environment_1` corresponds to `https://api2.questblue.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['QUESTBLUE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Questblue API.
 */
export class Questblue extends Core.APIClient {
  username: string;
  password: string;
  securityKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Questblue API.
   *
   * @param {string | undefined} [opts.username=process.env['QUESTBLUE_USERNAME'] ?? undefined]
   * @param {string | undefined} [opts.password=process.env['QUESTBLUE_PASSWORD'] ?? undefined]
   * @param {string | undefined} [opts.securityKey=process.env['QUESTBLUE_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['QUESTBLUE_BASE_URL'] ?? https://api.questblue.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('QUESTBLUE_BASE_URL'),
    username = Core.readEnv('QUESTBLUE_USERNAME'),
    password = Core.readEnv('QUESTBLUE_PASSWORD'),
    securityKey = Core.readEnv('QUESTBLUE_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (username === undefined) {
      throw new Errors.QuestblueError(
        "The QUESTBLUE_USERNAME environment variable is missing or empty; either provide it, or instantiate the Questblue client with an username option, like new Questblue({ username: 'My Username' }).",
      );
    }
    if (password === undefined) {
      throw new Errors.QuestblueError(
        "The QUESTBLUE_PASSWORD environment variable is missing or empty; either provide it, or instantiate the Questblue client with an password option, like new Questblue({ password: 'My Password' }).",
      );
    }
    if (securityKey === undefined) {
      throw new Errors.QuestblueError(
        "The QUESTBLUE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Questblue client with an securityKey option, like new Questblue({ securityKey: 'My Security Key' }).",
      );
    }

    const options: ClientOptions = {
      username,
      password,
      securityKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.QuestblueError(
        'Ambiguous URL; The `baseURL` option (or QUESTBLUE_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.username = username;
    this.password = password;
    this.securityKey = securityKey;
  }

  account: API.Account = new API.Account(this);
  userAccounts: API.UserAccounts = new API.UserAccounts(this);
  dids: API.Dids = new API.Dids(this);
  voiceDidManagement: API.VoiceDidManagement = new API.VoiceDidManagement(this);
  internationalDidManagement: API.InternationalDidManagement = new API.InternationalDidManagement(this);
  sipTrunkManagement: API.SipTrunkManagement = new API.SipTrunkManagement(this);
  siptrunks: API.Siptrunks = new API.Siptrunks(this);
  sms: API.SMS = new API.SMS(this);
  smsv2: API.Smsv2 = new API.Smsv2(this);
  smschecktncarriers: API.Smschecktncarriers = new API.Smschecktncarriers(this);
  dlc: API.Dlc = new API.Dlc(this);
  dlcCampaigns: API.DlcCampaigns = new API.DlcCampaigns(this);
  faxStates: API.FaxStates = new API.FaxStates(this);
  faxRatecenters: API.FaxRatecenters = new API.FaxRatecenters(this);
  faxAvailable: API.FaxAvailable = new API.FaxAvailable(this);
  fax: API.Fax = new API.Fax(this);
  fax2: API.Fax2 = new API.Fax2(this);
  ifaxEnterprises: API.IfaxEnterprises = new API.IfaxEnterprises(this);
  ifaxEnterpriseManagement: API.IfaxEnterpriseManagement = new API.IfaxEnterpriseManagement(this);
  faxFileManagement: API.FaxFileManagement = new API.FaxFileManagement(this);
  faxSending: API.FaxSending = new API.FaxSending(this);
  serviceManagement: API.ServiceManagement = new API.ServiceManagement(this);
  reports: API.Reports = new API.Reports(this);
  localNumberPortability: API.LocalNumberPortability = new API.LocalNumberPortability(this);
  localNumberPortabilityRequests: API.LocalNumberPortabilityRequests = new API.LocalNumberPortabilityRequests(
    this,
  );
  servers: API.Servers = new API.Servers(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const basicAuth = this.basicAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);

    if (
      basicAuth != null &&
      !Core.isEmptyObj(basicAuth) &&
      apiKeyAuth != null &&
      !Core.isEmptyObj(apiKeyAuth)
    ) {
      return { ...basicAuth, ...apiKeyAuth };
    }
    return {};
  }

  protected basicAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.username) {
      return {};
    }

    if (!this.password) {
      return {};
    }

    const credentials = `${this.username}:${this.password}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'Security-Key': this.securityKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Questblue = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static QuestblueError = Errors.QuestblueError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Questblue.Account = Account;
Questblue.UserAccounts = UserAccounts;
Questblue.Dids = Dids;
Questblue.VoiceDidManagement = VoiceDidManagement;
Questblue.InternationalDidManagement = InternationalDidManagement;
Questblue.SipTrunkManagement = SipTrunkManagement;
Questblue.Siptrunks = Siptrunks;
Questblue.SMS = SMS;
Questblue.Smsv2 = Smsv2;
Questblue.Smschecktncarriers = Smschecktncarriers;
Questblue.Dlc = Dlc;
Questblue.DlcCampaigns = DlcCampaigns;
Questblue.FaxStates = FaxStates;
Questblue.FaxRatecenters = FaxRatecenters;
Questblue.FaxAvailable = FaxAvailable;
Questblue.Fax = Fax;
Questblue.Fax2 = Fax2;
Questblue.IfaxEnterprises = IfaxEnterprises;
Questblue.IfaxEnterpriseManagement = IfaxEnterpriseManagement;
Questblue.FaxFileManagement = FaxFileManagement;
Questblue.FaxSending = FaxSending;
Questblue.ServiceManagement = ServiceManagement;
Questblue.Reports = Reports;
Questblue.LocalNumberPortability = LocalNumberPortability;
Questblue.LocalNumberPortabilityRequests = LocalNumberPortabilityRequests;
Questblue.Servers = Servers;
export declare namespace Questblue {
  export type RequestOptions = Core.RequestOptions;

  export { Account as Account };

  export {
    UserAccounts as UserAccounts,
    type UserAccountCallbackStatusResponse as UserAccountCallbackStatusResponse,
    type UserAccountSetDailyBalanceAlertResponse as UserAccountSetDailyBalanceAlertResponse,
    type UserAccountSetLowBalanceAlertResponse as UserAccountSetLowBalanceAlertResponse,
    type UserAccountCallbackConfigureParams as UserAccountCallbackConfigureParams,
    type UserAccountSetDailyBalanceAlertParams as UserAccountSetDailyBalanceAlertParams,
    type UserAccountSetLowBalanceAlertParams as UserAccountSetLowBalanceAlertParams,
  };

  export {
    Dids as Dids,
    type DidListResponse as DidListResponse,
    type DidCreateParams as DidCreateParams,
    type DidUpdateParams as DidUpdateParams,
    type DidListParams as DidListParams,
    type DidDeleteParams as DidDeleteParams,
  };

  export {
    VoiceDidManagement as VoiceDidManagement,
    type VoiceDidManagementFraudvalidateResponse as VoiceDidManagementFraudvalidateResponse,
    type VoiceDidManagementFraudvalidateParams as VoiceDidManagementFraudvalidateParams,
    type VoiceDidManagementMove2faxParams as VoiceDidManagementMove2faxParams,
  };

  export {
    InternationalDidManagement as InternationalDidManagement,
    type InternationalDidManagementCreateResponse as InternationalDidManagementCreateResponse,
    type InternationalDidManagementListResponse as InternationalDidManagementListResponse,
    type InternationalDidManagementCreateParams as InternationalDidManagementCreateParams,
    type InternationalDidManagementUpdateParams as InternationalDidManagementUpdateParams,
    type InternationalDidManagementListParams as InternationalDidManagementListParams,
    type InternationalDidManagementDeleteParams as InternationalDidManagementDeleteParams,
  };

  export {
    SipTrunkManagement as SipTrunkManagement,
    type SipTrunkManagementListResponse as SipTrunkManagementListResponse,
    type SipTrunkManagementListParams as SipTrunkManagementListParams,
  };

  export {
    Siptrunks as Siptrunks,
    type SiptrunkBlockcallerResponse as SiptrunkBlockcallerResponse,
    type SiptrunkStatuscheckerResponse as SiptrunkStatuscheckerResponse,
    type SiptrunkCreateParams as SiptrunkCreateParams,
    type SiptrunkUpdateParams as SiptrunkUpdateParams,
    type SiptrunkDeleteParams as SiptrunkDeleteParams,
    type SiptrunkBlockcallerParams as SiptrunkBlockcallerParams,
    type SiptrunkStatuscheckerParams as SiptrunkStatuscheckerParams,
  };

  export {
    SMS as SMS,
    type SMSUpdateResponse as SMSUpdateResponse,
    type SMSListResponse as SMSListResponse,
    type SMSOffnetorderResponse as SMSOffnetorderResponse,
    type SMSUpdateParams as SMSUpdateParams,
    type SMSListParams as SMSListParams,
    type SMSOffnetorderParams as SMSOffnetorderParams,
  };

  export {
    Smsv2 as Smsv2,
    type Smsv2SendResponse as Smsv2SendResponse,
    type Smsv2SendParams as Smsv2SendParams,
  };

  export {
    Smschecktncarriers as Smschecktncarriers,
    type SmschecktncarrierRetrieveResponse as SmschecktncarrierRetrieveResponse,
    type SmschecktncarrierRetrieveParams as SmschecktncarrierRetrieveParams,
  };

  export { Dlc as Dlc };

  export {
    DlcCampaigns as DlcCampaigns,
    type DlcCampaignUpdateResponse as DlcCampaignUpdateResponse,
    type DlcCampaignDeleteResponse as DlcCampaignDeleteResponse,
    type DlcCampaignUpdateParams as DlcCampaignUpdateParams,
    type DlcCampaignDeleteParams as DlcCampaignDeleteParams,
  };

  export { FaxStates as FaxStates, type FaxStateListResponse as FaxStateListResponse };

  export {
    FaxRatecenters as FaxRatecenters,
    type FaxRatecenterListResponse as FaxRatecenterListResponse,
    type FaxRatecenterListParams as FaxRatecenterListParams,
  };

  export {
    FaxAvailable as FaxAvailable,
    type FaxAvailableListResponse as FaxAvailableListResponse,
    type FaxAvailableListParams as FaxAvailableListParams,
  };

  export {
    Fax as Fax,
    type FaxCreateResponse as FaxCreateResponse,
    type FaxListResponse as FaxListResponse,
    type FaxSendResponse as FaxSendResponse,
    type FaxCreateParams as FaxCreateParams,
    type FaxUpdateParams as FaxUpdateParams,
    type FaxListParams as FaxListParams,
    type FaxDeleteParams as FaxDeleteParams,
    type FaxMove2voiceParams as FaxMove2voiceParams,
    type FaxPauseParams as FaxPauseParams,
    type FaxSendParams as FaxSendParams,
  };

  export {
    Fax2 as Fax2,
    type Fax2ListResponse as Fax2ListResponse,
    type Fax2CreateParams as Fax2CreateParams,
    type Fax2UpdateParams as Fax2UpdateParams,
    type Fax2ListParams as Fax2ListParams,
  };

  export {
    IfaxEnterprises as IfaxEnterprises,
    type IfaxEnterpriseDeleteParams as IfaxEnterpriseDeleteParams,
    type IfaxEnterprisePermitParams as IfaxEnterprisePermitParams,
  };

  export { IfaxEnterpriseManagement as IfaxEnterpriseManagement };

  export {
    FaxFileManagement as FaxFileManagement,
    type FaxFileManagementUploadResponse as FaxFileManagementUploadResponse,
    type FaxFileManagementUploadParams as FaxFileManagementUploadParams,
  };

  export {
    FaxSending as FaxSending,
    type FaxSendingSendResponse as FaxSendingSendResponse,
    type FaxSendingSendParams as FaxSendingSendParams,
  };

  export {
    ServiceManagement as ServiceManagement,
    type ServiceManagementPauseParams as ServiceManagementPauseParams,
  };

  export { Reports as Reports };

  export {
    LocalNumberPortability as LocalNumberPortability,
    type LocalNumberPortabilityCreateResponse as LocalNumberPortabilityCreateResponse,
    type LocalNumberPortabilityCheckResponse as LocalNumberPortabilityCheckResponse,
    type LocalNumberPortabilityCreateParams as LocalNumberPortabilityCreateParams,
    type LocalNumberPortabilityCheckParams as LocalNumberPortabilityCheckParams,
  };

  export {
    LocalNumberPortabilityRequests as LocalNumberPortabilityRequests,
    type LocalNumberPortabilityRequestListResponse as LocalNumberPortabilityRequestListResponse,
    type LocalNumberPortabilityRequestUpdateParams as LocalNumberPortabilityRequestUpdateParams,
    type LocalNumberPortabilityRequestListParams as LocalNumberPortabilityRequestListParams,
    type LocalNumberPortabilityRequestDeleteParams as LocalNumberPortabilityRequestDeleteParams,
  };

  export {
    Servers as Servers,
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

export { toFile, fileFromPath } from './uploads';
export {
  QuestblueError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Questblue;
