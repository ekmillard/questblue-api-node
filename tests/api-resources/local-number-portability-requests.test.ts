// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource localNumberPortabilityRequests', () => {
  test('update: only required params', async () => {
    const responsePromise = client.localNumberPortabilityRequests.update({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.localNumberPortabilityRequests.update({
      id: 0,
      account_no: 'account_no',
      activate_time: 'activate_time',
      authorize_contact: 'authorize_contact',
      bill_file: 'bill_file',
      bill_filename: 'bill_filename',
      billing_telephone_no: 'billing_telephone_no',
      city: 'city',
      company: 'company',
      contact_title: 'contact_title',
      dir_prefix: 'dir_prefix',
      dir_suffix: 'dir_suffix',
      extra_services: 'extra_services',
      foc_date: '2019-12-27',
      lidb_list: 'no',
      location: 'business',
      partial_port: 'yes',
      pincode: 0,
      port_out_pin: 'xxxx',
      provider_name: 'provider_name',
      service_unit: 'service_unit',
      ssn: 0,
      state: 'state',
      status: 'draft',
      street_name: 'street_name',
      street_no: 'street_no',
      trunk: 'trunk',
      wireless_no: 'no',
      zipcode: 'zipcode',
    });
  });

  test('list', async () => {
    const responsePromise = client.localNumberPortabilityRequests.list();
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
    await expect(
      client.localNumberPortabilityRequests.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.localNumberPortabilityRequests.list(
        { id: [0], number2port: 'number2port', page: 0, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.localNumberPortabilityRequests.delete({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.localNumberPortabilityRequests.delete({ id: 0 });
  });
});
