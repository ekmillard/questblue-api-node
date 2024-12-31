// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource localNumberPortability', () => {
  test('create: only required params', async () => {
    const responsePromise = client.localNumberPortability.create({
      account_no: 'account_no',
      authorize_contact: 'authorize_contact',
      bill_file: 'bill_file',
      bill_filename: 'bill_filename',
      billing_telephone_no: 'billing_telephone_no',
      city: 'city',
      contact_title: 'contact_title',
      number2port: [0],
      provider_name: 'provider_name',
      street_name: 'street_name',
      street_no: 'street_no',
      zipcode: 'zipcode',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.localNumberPortability.create({
      account_no: 'account_no',
      authorize_contact: 'authorize_contact',
      bill_file: 'bill_file',
      bill_filename: 'bill_filename',
      billing_telephone_no: 'billing_telephone_no',
      city: 'city',
      contact_title: 'contact_title',
      number2port: [0],
      provider_name: 'provider_name',
      street_name: 'street_name',
      street_no: 'street_no',
      zipcode: 'zipcode',
      activate_time: 'activate_time',
      company: 'company',
      did_mode: 'voice',
      dir_prefix: 'dir_prefix',
      dir_suffix: 'dir_suffix',
      extra_services: 'extra_services',
      foc_date: '2019-12-27',
      lidb_list: 'no',
      location: 'business',
      partial_port: 'yes',
      pincode: 0,
      port_out_pin: 'xxxx',
      service_unit: 'service_unit',
      ssn: 0,
      state: 'xx',
      status: 'draft',
      trunk: 'trunk',
      wireless_no: 'no',
    });
  });

  test('check: only required params', async () => {
    const responsePromise = client.localNumberPortability.check({ number2port: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('check: required and optional params', async () => {
    const response = await client.localNumberPortability.check({ number2port: [0] });
  });
});
