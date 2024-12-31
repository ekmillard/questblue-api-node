// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brands', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dlc.brands.create({
      address: 'address',
      company_name: 'company_name',
      contact: 'contact',
      legal_type: 0,
      tax_number: 'tax_number',
      url: 'url',
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
    const response = await client.dlc.brands.create({
      address: 'address',
      company_name: 'company_name',
      contact: 'contact',
      legal_type: 0,
      tax_number: 'tax_number',
      url: 'url',
      vertical_type: 0,
      lei_number: 'lei_number',
      lei_number_type: 'lei_number_type',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.dlc.brands.update({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.dlc.brands.update({
      id: 0,
      address: 'address',
      company_name: 'company_name',
      contact: 'contact',
      legal_type: 0,
      lei_number: 'lei_number',
      lei_number_type: 'lei_number_type',
      tax_number: 'tax_number',
      url: 'url',
      vertical_type: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.dlc.brands.list();
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
    await expect(client.dlc.brands.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.dlc.brands.list({ id: 0 }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dlc.brands.delete({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.dlc.brands.delete({ id: 0 });
  });
});
