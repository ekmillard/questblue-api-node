// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BalanceAPI from './balance';
import { Balance, BalanceRefillParams, BalanceRetrieveResponse } from './balance';
import * as BalanceReloadAPI from './balance-reload';
import { BalanceReload, BalanceReloadSetParams } from './balance-reload';
import * as CountriesAPI from './countries';
import { Countries, CountryListResponse } from './countries';
import * as CountryRateAPI from './country-rate';
import { CountryRate, CountryRateRetrieveParams, CountryRateRetrieveResponse } from './country-rate';
import * as DetailsAPI from './details';
import { DetailRetrieveResponse, Details } from './details';
import * as InternationalTollFreeRateAPI from './international-toll-free-rate';
import {
  InternationalTollFreeRate,
  InternationalTollFreeRateRetrieveResponse,
} from './international-toll-free-rate';
import * as RateZone2API from './rate-zone-2';
import { RateZone2, RateZone2RetrieveResponse } from './rate-zone-2';
import * as RatesAPI from './rates';
import { RateRetrieveResponse, Rates } from './rates';
import * as RefillAPI from './refill';
import { Refill, RefillConfigureParams } from './refill';

export class Account extends APIResource {
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
  refill: RefillAPI.Refill = new RefillAPI.Refill(this._client);
  balanceReload: BalanceReloadAPI.BalanceReload = new BalanceReloadAPI.BalanceReload(this._client);
  rates: RatesAPI.Rates = new RatesAPI.Rates(this._client);
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);
  countryRate: CountryRateAPI.CountryRate = new CountryRateAPI.CountryRate(this._client);
  rateZone2: RateZone2API.RateZone2 = new RateZone2API.RateZone2(this._client);
  internationalTollFreeRate: InternationalTollFreeRateAPI.InternationalTollFreeRate =
    new InternationalTollFreeRateAPI.InternationalTollFreeRate(this._client);
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);
}

Account.Balance = Balance;
Account.Refill = Refill;
Account.BalanceReload = BalanceReload;
Account.Rates = Rates;
Account.Countries = Countries;
Account.CountryRate = CountryRate;
Account.RateZone2 = RateZone2;
Account.InternationalTollFreeRate = InternationalTollFreeRate;
Account.Details = Details;

export declare namespace Account {
  export {
    Balance as Balance,
    type BalanceRetrieveResponse as BalanceRetrieveResponse,
    type BalanceRefillParams as BalanceRefillParams,
  };

  export { Refill as Refill, type RefillConfigureParams as RefillConfigureParams };

  export { BalanceReload as BalanceReload, type BalanceReloadSetParams as BalanceReloadSetParams };

  export { Rates as Rates, type RateRetrieveResponse as RateRetrieveResponse };

  export { Countries as Countries, type CountryListResponse as CountryListResponse };

  export {
    CountryRate as CountryRate,
    type CountryRateRetrieveResponse as CountryRateRetrieveResponse,
    type CountryRateRetrieveParams as CountryRateRetrieveParams,
  };

  export { RateZone2 as RateZone2, type RateZone2RetrieveResponse as RateZone2RetrieveResponse };

  export {
    InternationalTollFreeRate as InternationalTollFreeRate,
    type InternationalTollFreeRateRetrieveResponse as InternationalTollFreeRateRetrieveResponse,
  };

  export { Details as Details, type DetailRetrieveResponse as DetailRetrieveResponse };
}
