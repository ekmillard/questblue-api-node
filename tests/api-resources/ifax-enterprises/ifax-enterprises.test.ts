// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ifaxEnterprises', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.delete({ did: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.ifaxEnterprises.delete({ did: 0 });
  });

  test('permit: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.permit({
      allow_delete: 'on',
      allow_list_in: 'on',
      allow_list_out: 'on',
      allow_send: 'on',
      did: 0,
      fax_login: 'fax_login',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('permit: required and optional params', async () => {
    const response = await client.ifaxEnterprises.permit({
      allow_delete: 'on',
      allow_list_in: 'on',
      allow_list_out: 'on',
      allow_send: 'on',
      did: 0,
      fax_login: 'fax_login',
    });
  });
});
