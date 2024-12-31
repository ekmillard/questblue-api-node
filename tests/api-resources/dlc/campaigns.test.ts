// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dlc.campaigns.create({
      age_gated_contact: 'yes',
      brand_id: 0,
      campaign_description: 'campaign_description',
      campaign_did: 'campaign_did',
      campaign_type: 'standard',
      company_name: 'company_name',
      consumer_opt_ins: 'consumer_opt_ins',
      consumer_opt_outs: 'consumer_opt_outs',
      embedded_link: 'yes',
      embedded_phone: 'yes',
      loan_arrange: 'yes',
      marketing_used: 'yes',
      reply_help: 'yes',
      sample_message: 'sample_message',
      vertical_type: 0,
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
    const response = await client.dlc.campaigns.create({
      age_gated_contact: 'yes',
      brand_id: 0,
      campaign_description: 'campaign_description',
      campaign_did: 'campaign_did',
      campaign_type: 'standard',
      company_name: 'company_name',
      consumer_opt_ins: 'consumer_opt_ins',
      consumer_opt_outs: 'consumer_opt_outs',
      embedded_link: 'yes',
      embedded_phone: 'yes',
      loan_arrange: 'yes',
      marketing_used: 'yes',
      reply_help: 'yes',
      sample_message: 'sample_message',
      vertical_type: 0,
      campaign_type_special: 1,
      campaign_type_standard: 1,
    });
  });

  test('list', async () => {
    const responsePromise = client.dlc.campaigns.list();
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
    await expect(client.dlc.campaigns.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.dlc.campaigns.list({ id: 0 }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });
});
