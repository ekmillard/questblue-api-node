// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dids', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dids.create({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.dids.create({
      did: 0,
      cnam: 'on',
      dlda: 'yes',
      dlda_city: 'dlda_city',
      dlda_email: 'dlda_email',
      dlda_firstname: 'dlda_firstname',
      dlda_lastname: 'dlda_lastname',
      dlda_phone: 'dlda_phone',
      dlda_state: 'dlda_state',
      dlda_streetname: 'dlda_streetname',
      dlda_streetnum: 'dlda_streetnum',
      dlda_type: 'business',
      dlda_zip: 'dlda_zip',
      e911_address: 'e911_address',
      e911_city: 'e911_city',
      e911_name: 'e911_name',
      e911_state: 'e911_state',
      e911_unitnumber: 'e911_unitnumber',
      e911_unittype: 'e911_unittype',
      e911_zip: 'e911_zip',
      lidb: 'lidb',
      note: 'note',
      pin: 0,
      route2trunk: 'route2trunk',
      tier: '0',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.dids.update({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.dids.update({
      did: 0,
      cnam: 'on',
      dlda: 'yes',
      dlda_city: 'dlda_city',
      dlda_email: 'dlda_email',
      dlda_firstname: 'dlda_firstname',
      dlda_lastname: 'dlda_lastname',
      dlda_phone: 'dlda_phone',
      dlda_state: 'dlda_state',
      dlda_streetname: 'dlda_streetname',
      dlda_streetnum: 'dlda_streetnum',
      dlda_type: 'business',
      dlda_zip: 'dlda_zip',
      e911_address: 'e911_address',
      e911_call_alert: [['string']],
      e911_city: 'e911_city',
      e911_name: 'e911_name',
      e911_state: 'e911_state',
      e911_unitnumber: 'e911_unitnumber',
      e911_unittype: 'e911_unittype',
      e911_zip: 'e911_zip',
      failover: [['string']],
      forw2did: 0,
      lidb: 'lidb',
      note: 'note',
      pin: 0,
      route2trunk: 'route2trunk',
    });
  });

  test('list', async () => {
    const responsePromise = client.dids.list();
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
    await expect(client.dids.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dids.list({ did: 'did', page: 0, per_page: 5 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dids.delete({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.dids.delete({ did: 0 });
  });
});
