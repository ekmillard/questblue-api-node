// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fax2', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fax2.create({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fax2.create({
      did: 0,
      ata_mac_address: 'ata_mac_address',
      cnam: 'on',
      note: 'note',
      pin: 1000,
      post2url: 'post2url',
      sname: 'sname',
      tier: '0',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.fax2.update({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.fax2.update({
      did: 0,
      ata_mac_address: 'ata_mac_address',
      cnam: 'on',
      note: 'note',
      pin: 1000,
      post2url: 'post2url',
      sname: 'sname',
    });
  });

  test('list', async () => {
    const responsePromise = client.fax2.list();
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
    await expect(client.fax2.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fax2.list({ did: 'did', page: 0, per_page: 5 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });
});
