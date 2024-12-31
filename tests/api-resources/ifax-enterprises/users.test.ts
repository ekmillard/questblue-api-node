// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.users.create({
      fax_login: 'fax_login',
      fax_name: 'fax_name',
      fax_password: 'fax_password',
      sname: 'sname',
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
    const response = await client.ifaxEnterprises.users.create({
      fax_login: 'fax_login',
      fax_name: 'fax_name',
      fax_password: 'fax_password',
      sname: 'sname',
      fax_email: 'dev@stainlessapi.com',
      fax_lname: 'fax_lname',
      is_admin: 'on',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.users.update({ fax_login: 'fax_login' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.ifaxEnterprises.users.update({
      fax_login: 'fax_login',
      fax_email: 'dev@stainlessapi.com',
      fax_lname: 'fax_lname',
      fax_login_new: 'fax_login_new',
      fax_name: 'fax_name',
      fax_password: 'fax_password',
      is_admin: 'on',
    });
  });

  test('list', async () => {
    const responsePromise = client.ifaxEnterprises.users.list();
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
    await expect(client.ifaxEnterprises.users.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ifaxEnterprises.users.list(
        { fax_login: 'fax_login', sname: 'sname' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.ifaxEnterprises.users.delete({ fax_login: 'fax_login' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.ifaxEnterprises.users.delete({ fax_login: 'fax_login' });
  });
});
