// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permit', () => {
  test('retrieve', async () => {
    const responsePromise = client.ifaxEnterpriseManagement.permit.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ifaxEnterpriseManagement.permit.retrieve({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ifaxEnterpriseManagement.permit.retrieve(
        { did: 0, fax_login: 'fax_login' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.ifaxEnterpriseManagement.permit.delete({ did: 0, fax_login: 'fax_login' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.ifaxEnterpriseManagement.permit.delete({ did: 0, fax_login: 'fax_login' });
  });
});
