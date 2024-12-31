// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fax', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fax.create({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fax.create({
      did: 0,
      ata_mac_address: 'ata_mac_address',
      cnam: 'on',
      fax_email: 'fax_email',
      fax_login: 'fax_login',
      fax_name: 'fax_name',
      fax_password: 'fax_password',
      is_full: 'yes',
      note: 'note',
      pin: 1000,
      post2url: 'post2url',
      report_att: 'yes',
      tier: '0',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.fax.update({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.fax.update({
      did: 0,
      ata_mac_address: 'ata_mac_address',
      cnam: 'on',
      fax_email: 'fax_email',
      fax_login: 'fax_login',
      fax_name: 'fax_name',
      fax_password: 'fax_password',
      is_full: 'yes',
      note: 'note',
      pin: 1000,
      post2url: 'post2url',
      report_att: 'yes',
      unset_acc: 'on',
    });
  });

  test('list', async () => {
    const responsePromise = client.fax.list();
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
    await expect(client.fax.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fax.list({ did: 'did', page: 0, per_page: 5 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.fax.delete({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.fax.delete({ did: 0 });
  });

  test('move2voice: only required params', async () => {
    const responsePromise = client.fax.move2voice({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('move2voice: required and optional params', async () => {
    const response = await client.fax.move2voice({ did: 0 });
  });

  test('pause: only required params', async () => {
    const responsePromise = client.fax.pause({ action: 'pause', did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pause: required and optional params', async () => {
    const response = await client.fax.pause({ action: 'pause', did: 0 });
  });

  test('send: only required params', async () => {
    const responsePromise = client.fax.send({ did_from: 0, did_to: 0, file: 'file', filename: 'filename' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('send: required and optional params', async () => {
    const response = await client.fax.send({ did_from: 0, did_to: 0, file: 'file', filename: 'filename' });
  });
});
