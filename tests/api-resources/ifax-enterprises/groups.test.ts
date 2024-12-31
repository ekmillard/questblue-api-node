// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groups', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.groups.create({ name: 'name', sname: 'sname' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.ifaxEnterprises.groups.create({ name: 'name', sname: 'sname' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.groups.update({
      name_new: 'name_new',
      sname: 'sname',
      sname_new: 'sname_new',
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
    const response = await client.ifaxEnterprises.groups.update({
      name_new: 'name_new',
      sname: 'sname',
      sname_new: 'sname_new',
    });
  });

  test('list', async () => {
    const responsePromise = client.ifaxEnterprises.groups.list();
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
    await expect(client.ifaxEnterprises.groups.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ifaxEnterprises.groups.list({ sname: 'sname' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.groups.delete({ sname: 'sname' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.ifaxEnterprises.groups.delete({ sname: 'sname' });
  });
});
