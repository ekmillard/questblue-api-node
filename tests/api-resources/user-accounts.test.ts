// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource userAccounts', () => {
  test('callbackConfigure: only required params', async () => {
    const responsePromise = client.userAccounts.callbackConfigure({
      sections: 'lnp',
      url: 'https://example.com/callback',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('callbackConfigure: required and optional params', async () => {
    const response = await client.userAccounts.callbackConfigure({
      sections: 'lnp',
      url: 'https://example.com/callback',
    });
  });

  test('callbackStatus', async () => {
    const responsePromise = client.userAccounts.callbackStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('callbackStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.userAccounts.callbackStatus({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('setDailyBalanceAlert: only required params', async () => {
    const responsePromise = client.userAccounts.setDailyBalanceAlert({ action: 'on' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setDailyBalanceAlert: required and optional params', async () => {
    const response = await client.userAccounts.setDailyBalanceAlert({ action: 'on' });
  });

  test('setLowBalanceAlert: only required params', async () => {
    const responsePromise = client.userAccounts.setLowBalanceAlert({ low_balance_alert_amount: 15 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setLowBalanceAlert: required and optional params', async () => {
    const response = await client.userAccounts.setLowBalanceAlert({ low_balance_alert_amount: 15 });
  });
});
