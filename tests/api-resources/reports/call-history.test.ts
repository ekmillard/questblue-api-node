// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callHistory', () => {
  test('retrieve', async () => {
    const responsePromise = client.reports.callHistory.retrieve();
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
    await expect(client.reports.callHistory.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.callHistory.retrieve(
        {
          country_id: 0,
          did: 0,
          get_fax: 'on',
          get_id: 'on',
          last_id: 0,
          per_page: 5,
          period: 'thismonth',
          success_call_only: 'on',
          summary_only: 'on',
          timezone: 'timezone',
          trunk: ['string'],
          type: 'in',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Questblue.NotFoundError);
  });
});
