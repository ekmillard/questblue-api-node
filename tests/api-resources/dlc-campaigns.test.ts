// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dlcCampaigns', () => {
  test('update: only required params', async () => {
    const responsePromise = client.dlcCampaigns.update({
      id: 0,
      age_gated_contact: 'age_gated_contact',
      brand_id: 0,
      campaign_description: 'campaign_description',
      campaign_did: 'campaign_did',
      campaign_type: 'campaign_type',
      company_name: 'company_name',
      consumer_opt_ins: 'consumer_opt_ins',
      consumer_opt_outs: 'consumer_opt_outs',
      embedded_link: 'embedded_link',
      embedded_phone: 'embedded_phone',
      loan_arrange: 'loan_arrange',
      marketing_used: 'marketing_used',
      reply_help: 'reply_help',
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

  test('update: required and optional params', async () => {
    const response = await client.dlcCampaigns.update({
      id: 0,
      age_gated_contact: 'age_gated_contact',
      brand_id: 0,
      campaign_description: 'campaign_description',
      campaign_did: 'campaign_did',
      campaign_type: 'campaign_type',
      company_name: 'company_name',
      consumer_opt_ins: 'consumer_opt_ins',
      consumer_opt_outs: 'consumer_opt_outs',
      embedded_link: 'embedded_link',
      embedded_phone: 'embedded_phone',
      loan_arrange: 'loan_arrange',
      marketing_used: 'marketing_used',
      reply_help: 'reply_help',
      sample_message: 'sample_message',
      vertical_type: 0,
      campaign_type_special: 1,
      campaign_type_standard: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dlcCampaigns.delete({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.dlcCampaigns.delete({ id: 0 });
  });
});
