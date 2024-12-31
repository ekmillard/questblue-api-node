# Account

## Balance

Types:

- <code><a href="./src/resources/account/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /account/getbalance">client.account.balance.<a href="./src/resources/account/balance.ts">retrieve</a>() -> BalanceRetrieveResponse</code>
- <code title="put /account/refillbalance">client.account.balance.<a href="./src/resources/account/balance.ts">refill</a>({ ...params }) -> void</code>

## Refill

Methods:

- <code title="put /account/setautorefill">client.account.refill.<a href="./src/resources/account/refill.ts">configure</a>({ ...params }) -> void</code>

## BalanceReload

Methods:

- <code title="put /account/setbalancereload">client.account.balanceReload.<a href="./src/resources/account/balance-reload.ts">set</a>({ ...params }) -> void</code>

## Rates

Types:

- <code><a href="./src/resources/account/rates.ts">RateRetrieveResponse</a></code>

Methods:

- <code title="get /account/rates">client.account.rates.<a href="./src/resources/account/rates.ts">retrieve</a>() -> RateRetrieveResponse</code>

## Countries

Types:

- <code><a href="./src/resources/account/countries.ts">CountryListResponse</a></code>

Methods:

- <code title="get /account/countrylist">client.account.countries.<a href="./src/resources/account/countries.ts">list</a>() -> CountryListResponse</code>

## CountryRate

Types:

- <code><a href="./src/resources/account/country-rate.ts">CountryRateRetrieveResponse</a></code>

Methods:

- <code title="get /account/countryrate">client.account.countryRate.<a href="./src/resources/account/country-rate.ts">retrieve</a>({ ...params }) -> CountryRateRetrieveResponse</code>

## RateZone2

Types:

- <code><a href="./src/resources/account/rate-zone-2.ts">RateZone2RetrieveResponse</a></code>

Methods:

- <code title="get /account/ratezone2">client.account.rateZone2.<a href="./src/resources/account/rate-zone-2.ts">retrieve</a>() -> RateZone2RetrieveResponse</code>

## InternationalTollFreeRate

Types:

- <code><a href="./src/resources/account/international-toll-free-rate.ts">InternationalTollFreeRateRetrieveResponse</a></code>

Methods:

- <code title="get /account/nonusintfrate">client.account.internationalTollFreeRate.<a href="./src/resources/account/international-toll-free-rate.ts">retrieve</a>() -> InternationalTollFreeRateRetrieveResponse</code>

## Details

Types:

- <code><a href="./src/resources/account/details.ts">DetailRetrieveResponse</a></code>

Methods:

- <code title="get /account/getaccoundetails">client.account.details.<a href="./src/resources/account/details.ts">retrieve</a>() -> DetailRetrieveResponse</code>

# UserAccounts

Types:

- <code><a href="./src/resources/user-accounts.ts">UserAccountCallbackStatusResponse</a></code>
- <code><a href="./src/resources/user-accounts.ts">UserAccountSetDailyBalanceAlertResponse</a></code>
- <code><a href="./src/resources/user-accounts.ts">UserAccountSetLowBalanceAlertResponse</a></code>

Methods:

- <code title="post /account/callbackconfig">client.userAccounts.<a href="./src/resources/user-accounts.ts">callbackConfigure</a>({ ...params }) -> void</code>
- <code title="get /account/callbackstatus">client.userAccounts.<a href="./src/resources/user-accounts.ts">callbackStatus</a>() -> UserAccountCallbackStatusResponse</code>
- <code title="put /account/setdailybalancealert">client.userAccounts.<a href="./src/resources/user-accounts.ts">setDailyBalanceAlert</a>({ ...params }) -> UserAccountSetDailyBalanceAlertResponse</code>
- <code title="put /account/setlowbalancealert">client.userAccounts.<a href="./src/resources/user-accounts.ts">setLowBalanceAlert</a>({ ...params }) -> UserAccountSetLowBalanceAlertResponse</code>

# Dids

Types:

- <code><a href="./src/resources/dids/dids.ts">DidListResponse</a></code>

Methods:

- <code title="post /did">client.dids.<a href="./src/resources/dids/dids.ts">create</a>({ ...params }) -> void</code>
- <code title="put /did">client.dids.<a href="./src/resources/dids/dids.ts">update</a>({ ...params }) -> void</code>
- <code title="get /did">client.dids.<a href="./src/resources/dids/dids.ts">list</a>({ ...params }) -> DidListResponse</code>
- <code title="delete /did">client.dids.<a href="./src/resources/dids/dids.ts">delete</a>({ ...params }) -> void</code>

## States

Types:

- <code><a href="./src/resources/dids/states.ts">StateListResponse</a></code>

Methods:

- <code title="get /did/states">client.dids.states.<a href="./src/resources/dids/states.ts">list</a>() -> StateListResponse</code>

## RateCenters

Types:

- <code><a href="./src/resources/dids/rate-centers.ts">RateCenterListResponse</a></code>

Methods:

- <code title="get /did/ratecenters">client.dids.rateCenters.<a href="./src/resources/dids/rate-centers.ts">list</a>({ ...params }) -> RateCenterListResponse</code>

# VoiceDidManagement

Types:

- <code><a href="./src/resources/voice-did-management/voice-did-management.ts">VoiceDidManagementFraudvalidateResponse</a></code>

Methods:

- <code title="post /did/fraudvalidate">client.voiceDidManagement.<a href="./src/resources/voice-did-management/voice-did-management.ts">fraudvalidate</a>({ ...params }) -> VoiceDidManagementFraudvalidateResponse</code>
- <code title="put /did/move2fax">client.voiceDidManagement.<a href="./src/resources/voice-did-management/voice-did-management.ts">move2fax</a>({ ...params }) -> void</code>

## Available

Types:

- <code><a href="./src/resources/voice-did-management/available.ts">AvailableListResponse</a></code>

Methods:

- <code title="get /did/available">client.voiceDidManagement.available.<a href="./src/resources/voice-did-management/available.ts">list</a>({ ...params }) -> AvailableListResponse</code>

# InternationalDidManagement

Types:

- <code><a href="./src/resources/international-did-management/international-did-management.ts">InternationalDidManagementCreateResponse</a></code>
- <code><a href="./src/resources/international-did-management/international-did-management.ts">InternationalDidManagementListResponse</a></code>

Methods:

- <code title="post /didinter">client.internationalDidManagement.<a href="./src/resources/international-did-management/international-did-management.ts">create</a>({ ...params }) -> InternationalDidManagementCreateResponse</code>
- <code title="put /didinter">client.internationalDidManagement.<a href="./src/resources/international-did-management/international-did-management.ts">update</a>({ ...params }) -> void</code>
- <code title="get /didinter">client.internationalDidManagement.<a href="./src/resources/international-did-management/international-did-management.ts">list</a>({ ...params }) -> InternationalDidManagementListResponse</code>
- <code title="delete /didinter">client.internationalDidManagement.<a href="./src/resources/international-did-management/international-did-management.ts">delete</a>({ ...params }) -> void</code>

## Countrylist

Types:

- <code><a href="./src/resources/international-did-management/countrylist.ts">CountrylistListResponse</a></code>

Methods:

- <code title="get /didinter/countrylist">client.internationalDidManagement.countrylist.<a href="./src/resources/international-did-management/countrylist.ts">list</a>({ ...params }) -> CountrylistListResponse</code>

## Citylist

Types:

- <code><a href="./src/resources/international-did-management/citylist.ts">CitylistListResponse</a></code>

Methods:

- <code title="get /didinter/citylist">client.internationalDidManagement.citylist.<a href="./src/resources/international-did-management/citylist.ts">list</a>({ ...params }) -> CitylistListResponse</code>

# SipTrunkManagement

Types:

- <code><a href="./src/resources/sip-trunk-management.ts">SipTrunkManagementListResponse</a></code>

Methods:

- <code title="get /siptrunk">client.sipTrunkManagement.<a href="./src/resources/sip-trunk-management.ts">list</a>({ ...params }) -> SipTrunkManagementListResponse</code>

# Siptrunks

Types:

- <code><a href="./src/resources/siptrunks/siptrunks.ts">SiptrunkBlockcallerResponse</a></code>
- <code><a href="./src/resources/siptrunks/siptrunks.ts">SiptrunkStatuscheckerResponse</a></code>

Methods:

- <code title="post /siptrunk">client.siptrunks.<a href="./src/resources/siptrunks/siptrunks.ts">create</a>({ ...params }) -> void</code>
- <code title="put /siptrunk">client.siptrunks.<a href="./src/resources/siptrunks/siptrunks.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /siptrunk">client.siptrunks.<a href="./src/resources/siptrunks/siptrunks.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /siptrunk/blockcaller">client.siptrunks.<a href="./src/resources/siptrunks/siptrunks.ts">blockcaller</a>({ ...params }) -> unknown</code>
- <code title="get /siptrunk/statuschecker">client.siptrunks.<a href="./src/resources/siptrunks/siptrunks.ts">statuschecker</a>({ ...params }) -> SiptrunkStatuscheckerResponse</code>

## Blockedcallers

Types:

- <code><a href="./src/resources/siptrunks/blockedcallers.ts">BlockedcallerListResponse</a></code>

Methods:

- <code title="get /siptrunk/blockedcallers">client.siptrunks.blockedcallers.<a href="./src/resources/siptrunks/blockedcallers.ts">list</a>({ ...params }) -> BlockedcallerListResponse</code>

# SMS

Types:

- <code><a href="./src/resources/sms/sms.ts">SMSUpdateResponse</a></code>
- <code><a href="./src/resources/sms/sms.ts">SMSListResponse</a></code>
- <code><a href="./src/resources/sms/sms.ts">SMSOffnetorderResponse</a></code>

Methods:

- <code title="put /sms">client.sms.<a href="./src/resources/sms/sms.ts">update</a>({ ...params }) -> SMSUpdateResponse</code>
- <code title="get /sms/">client.sms.<a href="./src/resources/sms/sms.ts">list</a>({ ...params }) -> SMSListResponse</code>
- <code title="post /sms/offnetorder">client.sms.<a href="./src/resources/sms/sms.ts">offnetorder</a>({ ...params }) -> unknown</code>

## OffnetStatus

Types:

- <code><a href="./src/resources/sms/offnet-status.ts">OffnetStatusRetrieveResponse</a></code>

Methods:

- <code title="get /sms/offnetstatus">client.sms.offnetStatus.<a href="./src/resources/sms/offnet-status.ts">retrieve</a>({ ...params }) -> OffnetStatusRetrieveResponse</code>

## DeliveryStatus

Types:

- <code><a href="./src/resources/sms/delivery-status.ts">DeliveryStatusRetrieveResponse</a></code>

Methods:

- <code title="get /sms/deliverystatus">client.sms.deliveryStatus.<a href="./src/resources/sms/delivery-status.ts">retrieve</a>({ ...params }) -> DeliveryStatusRetrieveResponse</code>

# Smsv2

Types:

- <code><a href="./src/resources/smsv2.ts">Smsv2SendResponse</a></code>

Methods:

- <code title="post /smsv2">client.smsv2.<a href="./src/resources/smsv2.ts">send</a>({ ...params }) -> Smsv2SendResponse</code>

# Smschecktncarriers

Types:

- <code><a href="./src/resources/smschecktncarriers.ts">SmschecktncarrierRetrieveResponse</a></code>

Methods:

- <code title="get /smschecktncarrier">client.smschecktncarriers.<a href="./src/resources/smschecktncarriers.ts">retrieve</a>({ ...params }) -> SmschecktncarrierRetrieveResponse</code>

# Dlc

## Brands

Types:

- <code><a href="./src/resources/dlc/brands.ts">BrandCreateResponse</a></code>
- <code><a href="./src/resources/dlc/brands.ts">BrandUpdateResponse</a></code>
- <code><a href="./src/resources/dlc/brands.ts">BrandListResponse</a></code>
- <code><a href="./src/resources/dlc/brands.ts">BrandDeleteResponse</a></code>

Methods:

- <code title="post /dlc/brand">client.dlc.brands.<a href="./src/resources/dlc/brands.ts">create</a>({ ...params }) -> BrandCreateResponse</code>
- <code title="put /dlc/brand">client.dlc.brands.<a href="./src/resources/dlc/brands.ts">update</a>({ ...params }) -> BrandUpdateResponse</code>
- <code title="get /dlc/brand">client.dlc.brands.<a href="./src/resources/dlc/brands.ts">list</a>({ ...params }) -> BrandListResponse</code>
- <code title="delete /dlc/brand">client.dlc.brands.<a href="./src/resources/dlc/brands.ts">delete</a>({ ...params }) -> unknown</code>

## Campaigns

Types:

- <code><a href="./src/resources/dlc/campaigns.ts">CampaignCreateResponse</a></code>
- <code><a href="./src/resources/dlc/campaigns.ts">CampaignListResponse</a></code>

Methods:

- <code title="post /dlc/campaign">client.dlc.campaigns.<a href="./src/resources/dlc/campaigns.ts">create</a>({ ...params }) -> CampaignCreateResponse</code>
- <code title="get /dlc/campaign">client.dlc.campaigns.<a href="./src/resources/dlc/campaigns.ts">list</a>({ ...params }) -> CampaignListResponse</code>

# DlcCampaigns

Types:

- <code><a href="./src/resources/dlc-campaigns.ts">DlcCampaignUpdateResponse</a></code>
- <code><a href="./src/resources/dlc-campaigns.ts">DlcCampaignDeleteResponse</a></code>

Methods:

- <code title="put /dlc/campaign">client.dlcCampaigns.<a href="./src/resources/dlc-campaigns.ts">update</a>({ ...params }) -> unknown</code>
- <code title="delete /dlc/campaign">client.dlcCampaigns.<a href="./src/resources/dlc-campaigns.ts">delete</a>({ ...params }) -> unknown</code>

# FaxStates

Types:

- <code><a href="./src/resources/fax-states.ts">FaxStateListResponse</a></code>

Methods:

- <code title="get /fax/states">client.faxStates.<a href="./src/resources/fax-states.ts">list</a>() -> FaxStateListResponse</code>

# FaxRatecenters

Types:

- <code><a href="./src/resources/fax-ratecenters.ts">FaxRatecenterListResponse</a></code>

Methods:

- <code title="get /fax/ratecenters">client.faxRatecenters.<a href="./src/resources/fax-ratecenters.ts">list</a>({ ...params }) -> FaxRatecenterListResponse</code>

# FaxAvailable

Types:

- <code><a href="./src/resources/fax-available.ts">FaxAvailableListResponse</a></code>

Methods:

- <code title="get /fax/available">client.faxAvailable.<a href="./src/resources/fax-available.ts">list</a>({ ...params }) -> FaxAvailableListResponse</code>

# Fax

Types:

- <code><a href="./src/resources/fax/fax.ts">FaxCreateResponse</a></code>
- <code><a href="./src/resources/fax/fax.ts">FaxListResponse</a></code>
- <code><a href="./src/resources/fax/fax.ts">FaxSendResponse</a></code>

Methods:

- <code title="post /fax">client.fax.<a href="./src/resources/fax/fax.ts">create</a>({ ...params }) -> string</code>
- <code title="put /fax">client.fax.<a href="./src/resources/fax/fax.ts">update</a>({ ...params }) -> void</code>
- <code title="get /fax">client.fax.<a href="./src/resources/fax/fax.ts">list</a>({ ...params }) -> FaxListResponse</code>
- <code title="delete /fax">client.fax.<a href="./src/resources/fax/fax.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /fax/move2voice">client.fax.<a href="./src/resources/fax/fax.ts">move2voice</a>({ ...params }) -> void</code>
- <code title="put /fax/pause">client.fax.<a href="./src/resources/fax/fax.ts">pause</a>({ ...params }) -> void</code>
- <code title="post /fax/send">client.fax.<a href="./src/resources/fax/fax.ts">send</a>({ ...params }) -> FaxSendResponse</code>

## Email

Types:

- <code><a href="./src/resources/fax/email.ts">EmailDeleteResponse</a></code>

Methods:

- <code title="delete /fax/email">client.fax.email.<a href="./src/resources/fax/email.ts">delete</a>({ ...params }) -> string</code>
- <code title="post /fax/email">client.fax.email.<a href="./src/resources/fax/email.ts">createUpdate</a>({ ...params }) -> void</code>

# Fax2

Types:

- <code><a href="./src/resources/fax2/fax2.ts">Fax2ListResponse</a></code>

Methods:

- <code title="post /fax2">client.fax2.<a href="./src/resources/fax2/fax2.ts">create</a>({ ...params }) -> void</code>
- <code title="put /fax2">client.fax2.<a href="./src/resources/fax2/fax2.ts">update</a>({ ...params }) -> void</code>
- <code title="get /fax2">client.fax2.<a href="./src/resources/fax2/fax2.ts">list</a>({ ...params }) -> Fax2ListResponse</code>

## Email

Types:

- <code><a href="./src/resources/fax2/email.ts">EmailListResponse</a></code>
- <code><a href="./src/resources/fax2/email.ts">EmailDeleteResponse</a></code>

Methods:

- <code title="get /fax2/email">client.fax2.email.<a href="./src/resources/fax2/email.ts">list</a>({ ...params }) -> EmailListResponse</code>
- <code title="delete /fax2/email">client.fax2.email.<a href="./src/resources/fax2/email.ts">delete</a>({ ...params }) -> string</code>
- <code title="post /fax2/email">client.fax2.email.<a href="./src/resources/fax2/email.ts">createUpdate</a>({ ...params }) -> void</code>

# IfaxEnterprises

Methods:

- <code title="delete /fax2">client.ifaxEnterprises.<a href="./src/resources/ifax-enterprises/ifax-enterprises.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /fax2/permit">client.ifaxEnterprises.<a href="./src/resources/ifax-enterprises/ifax-enterprises.ts">permit</a>({ ...params }) -> void</code>

## Groups

Types:

- <code><a href="./src/resources/ifax-enterprises/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="post /fax2/group">client.ifaxEnterprises.groups.<a href="./src/resources/ifax-enterprises/groups.ts">create</a>({ ...params }) -> void</code>
- <code title="put /fax2/group">client.ifaxEnterprises.groups.<a href="./src/resources/ifax-enterprises/groups.ts">update</a>({ ...params }) -> void</code>
- <code title="get /fax2/group">client.ifaxEnterprises.groups.<a href="./src/resources/ifax-enterprises/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /fax2/group">client.ifaxEnterprises.groups.<a href="./src/resources/ifax-enterprises/groups.ts">delete</a>({ ...params }) -> void</code>

## Users

Types:

- <code><a href="./src/resources/ifax-enterprises/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /fax2/user">client.ifaxEnterprises.users.<a href="./src/resources/ifax-enterprises/users.ts">create</a>({ ...params }) -> void</code>
- <code title="put /fax2/user">client.ifaxEnterprises.users.<a href="./src/resources/ifax-enterprises/users.ts">update</a>({ ...params }) -> void</code>
- <code title="get /fax2/user">client.ifaxEnterprises.users.<a href="./src/resources/ifax-enterprises/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /fax2/user">client.ifaxEnterprises.users.<a href="./src/resources/ifax-enterprises/users.ts">delete</a>({ ...params }) -> void</code>

# IfaxEnterpriseManagement

## Permit

Types:

- <code><a href="./src/resources/ifax-enterprise-management/permit.ts">PermitRetrieveResponse</a></code>

Methods:

- <code title="get /fax2/permit">client.ifaxEnterpriseManagement.permit.<a href="./src/resources/ifax-enterprise-management/permit.ts">retrieve</a>({ ...params }) -> PermitRetrieveResponse</code>
- <code title="delete /fax2/permit">client.ifaxEnterpriseManagement.permit.<a href="./src/resources/ifax-enterprise-management/permit.ts">delete</a>({ ...params }) -> void</code>

# FaxFileManagement

Types:

- <code><a href="./src/resources/fax-file-management.ts">FaxFileManagementUploadResponse</a></code>

Methods:

- <code title="post /fax2/upload">client.faxFileManagement.<a href="./src/resources/fax-file-management.ts">upload</a>({ ...params }) -> FaxFileManagementUploadResponse</code>

# FaxSending

Types:

- <code><a href="./src/resources/fax-sending.ts">FaxSendingSendResponse</a></code>

Methods:

- <code title="post /fax2/send">client.faxSending.<a href="./src/resources/fax-sending.ts">send</a>({ ...params }) -> FaxSendingSendResponse</code>

# ServiceManagement

Methods:

- <code title="put /fax2/pause">client.serviceManagement.<a href="./src/resources/service-management.ts">pause</a>({ ...params }) -> void</code>

# Reports

## CallHistory

Types:

- <code><a href="./src/resources/reports/call-history.ts">CallHistoryRetrieveResponse</a></code>

Methods:

- <code title="get /callhistory">client.reports.callHistory.<a href="./src/resources/reports/call-history.ts">retrieve</a>({ ...params }) -> CallHistoryRetrieveResponse</code>

## FaxHistory

Types:

- <code><a href="./src/resources/reports/fax-history.ts">FaxHistoryRetrieveResponse</a></code>

Methods:

- <code title="get /faxhistory">client.reports.faxHistory.<a href="./src/resources/reports/fax-history.ts">retrieve</a>({ ...params }) -> FaxHistoryRetrieveResponse</code>

## FaxDownload

Types:

- <code><a href="./src/resources/reports/fax-download.ts">FaxDownloadRetrieveResponse</a></code>

Methods:

- <code title="get /faxdownload">client.reports.faxDownload.<a href="./src/resources/reports/fax-download.ts">retrieve</a>({ ...params }) -> FaxDownloadRetrieveResponse</code>

# LocalNumberPortability

Types:

- <code><a href="./src/resources/local-number-portability.ts">LocalNumberPortabilityCreateResponse</a></code>
- <code><a href="./src/resources/local-number-portability.ts">LocalNumberPortabilityCheckResponse</a></code>

Methods:

- <code title="post /lnp">client.localNumberPortability.<a href="./src/resources/local-number-portability.ts">create</a>({ ...params }) -> LocalNumberPortabilityCreateResponse</code>
- <code title="get /lnp/check">client.localNumberPortability.<a href="./src/resources/local-number-portability.ts">check</a>({ ...params }) -> LocalNumberPortabilityCheckResponse</code>

# LocalNumberPortabilityRequests

Types:

- <code><a href="./src/resources/local-number-portability-requests.ts">LocalNumberPortabilityRequestListResponse</a></code>

Methods:

- <code title="put /lnp">client.localNumberPortabilityRequests.<a href="./src/resources/local-number-portability-requests.ts">update</a>({ ...params }) -> void</code>
- <code title="get /lnp">client.localNumberPortabilityRequests.<a href="./src/resources/local-number-portability-requests.ts">list</a>({ ...params }) -> LocalNumberPortabilityRequestListResponse</code>
- <code title="delete /lnp">client.localNumberPortabilityRequests.<a href="./src/resources/local-number-portability-requests.ts">delete</a>({ ...params }) -> void</code>

# Servers

Types:

- <code><a href="./src/resources/servers.ts">ServerCreateResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerListBackupsResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerRemoveBackupResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerRestoreBackupResponse</a></code>

Methods:

- <code title="post /server">client.servers.<a href="./src/resources/servers.ts">create</a>({ ...params }) -> ServerCreateResponse</code>
- <code title="get /server">client.servers.<a href="./src/resources/servers.ts">list</a>({ ...params }) -> ServerListResponse</code>
- <code title="delete /server">client.servers.<a href="./src/resources/servers.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="put /server/addip">client.servers.<a href="./src/resources/servers.ts">addIP</a>({ ...params }) -> void</code>
- <code title="get /server/listbackups">client.servers.<a href="./src/resources/servers.ts">listBackups</a>({ ...params }) -> ServerListBackupsResponse</code>
- <code title="post /server/managebackupschedule">client.servers.<a href="./src/resources/servers.ts">manageBackupSchedule</a>({ ...params }) -> void</code>
- <code title="delete /server/removebackup">client.servers.<a href="./src/resources/servers.ts">removeBackup</a>({ ...params }) -> ServerRemoveBackupResponse</code>
- <code title="delete /server/deleip">client.servers.<a href="./src/resources/servers.ts">removeIP</a>({ ...params }) -> void</code>
- <code title="post /server/restorebackup">client.servers.<a href="./src/resources/servers.ts">restoreBackup</a>({ ...params }) -> ServerRestoreBackupResponse</code>
- <code title="post /server/upgrade">client.servers.<a href="./src/resources/servers.ts">upgrade</a>({ ...params }) -> void</code>
