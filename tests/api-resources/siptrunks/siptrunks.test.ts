// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource siptrunks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.siptrunks.create({ trunk: 'trunk' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.siptrunks.create({
      trunk: 'trunk',
      allow_e164_rewrite: 'yes',
      allow_rtp_proxy: 'yes',
      concurrent_max: 'concurrent_max',
      did: 0,
      inter_call: 'on',
      inter_limit: 1,
      ip_address: 'ip_address',
      password: 'password',
      region: 'us',
      tn2forward: 0,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.siptrunks.update({ trunk: 'trunk' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.siptrunks.update({
      trunk: 'trunk',
      allow_e164_rewrite: 'yes',
      allow_rtp_proxy: 'yes',
      concurrent_max: 'concurrent_max',
      did: 0,
      inter_call: 'on',
      inter_limit: 1,
      ip_address: 'ip_address',
      password: 'password',
      region: 'us',
      status: 'on',
      tn2forward: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.siptrunks.delete({ trunk: 'trunk' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.siptrunks.delete({ trunk: 'trunk' });
  });

  test('blockcaller: only required params', async () => {
    const responsePromise = client.siptrunks.blockcaller({ action: 'block', did: 0, trunk: 'trunk' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('blockcaller: required and optional params', async () => {
    const response = await client.siptrunks.blockcaller({ action: 'block', did: 0, trunk: 'trunk' });
  });

  test('statuschecker: only required params', async () => {
    const responsePromise = client.siptrunks.statuschecker({ trunk: 'trunk' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('statuschecker: required and optional params', async () => {
    const response = await client.siptrunks.statuschecker({ trunk: 'trunk' });
  });
});
