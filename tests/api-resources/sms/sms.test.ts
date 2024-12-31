// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sms', () => {
  test('update: only required params', async () => {
    const responsePromise = client.sms.update({ did: 0, sms_mode: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.sms.update({
      did: 0,
      sms_mode: 'email',
      chat_email: 'dev@stainlessapi.com',
      chat_passwd: 'chat_passwd',
      forward2email: 'dev@stainlessapi.com',
      post2url: 'post2url',
      post2urlmethod: 'form',
      xmpp_name: 'xmpp_name',
      xmpp_passwd: 'xmpp_passwd',
    });
  });

  test('list', async () => {
    const responsePromise = client.sms.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sms.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sms.list(
        { direction: 'in', msg_type: 'sms', order: 'asc', per_page: 5, period: 'thishour' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('offnetorder: only required params', async () => {
    const responsePromise = client.sms.offnetorder({ action: 'add', did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('offnetorder: required and optional params', async () => {
    const response = await client.sms.offnetorder({ action: 'add', did: 0 });
  });
});
