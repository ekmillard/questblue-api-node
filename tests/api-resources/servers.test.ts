// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Questblue from 'questblue';
import { Response } from 'node-fetch';

const client = new Questblue({
  username: 'My Username',
  password: 'My Password',
  securityKey: 'My Security Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource servers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.servers.create({ server_type: 'small', params: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.servers.create({
      server_type: 'small',
      params: {
        '3cx': {
          admin_email: 'admin_email',
          admin_password: 'admin_password',
          email: 'email',
          inbound_trunk_name: 'inbound_trunk_name',
          license_company_name: 'license_company_name',
          license_contact_name: 'license_contact_name',
          license_email: 'license_email',
          license_key: 'license_key',
          license_phone: 'license_phone',
        },
        masstext: {
          domain_name: 'domain_name',
          email: 'email',
          inbound_trunk_name: 'inbound_trunk_name',
          password: 'password',
          username: 'username',
        },
        note: 'note',
        qube: { email: 'email', inbound_trunk_name: 'inbound_trunk_name', password: 'password' },
        'qube-tdr': {
          domain_name: 'domain_name',
          email: 'email',
          inbound_trunk_name: 'inbound_trunk_name',
          password: 'password',
        },
        qubev2: { domain_name: 'domain_name', email: 'email', password: 'password' },
        sbc: {
          email: 'email',
          inbound_trunk_name: 'inbound_trunk_name',
          sbcuser_password: 'sbcuser_password',
        },
        'vital-pbx': { email: 'email' },
        vodia: {
          company: 'company',
          did: 'did',
          email: 'email',
          inbound_trunk_name: 'inbound_trunk_name',
          password: 'password',
        },
      },
    });
  });

  test('list', async () => {
    const responsePromise = client.servers.list();
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
    await expect(client.servers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Questblue.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.list({ server_id: [0] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Questblue.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.servers.delete({ server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.servers.delete({ server_id: 0 });
  });

  test('addIP: only required params', async () => {
    const responsePromise = client.servers.addIP({ ip_address: 'ip_address', server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addIP: required and optional params', async () => {
    const response = await client.servers.addIP({ ip_address: 'ip_address', server_id: 0, note: 'note' });
  });

  test('listBackups: only required params', async () => {
    const responsePromise = client.servers.listBackups({ server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBackups: required and optional params', async () => {
    const response = await client.servers.listBackups({ server_id: 0 });
  });

  test('manageBackupSchedule: only required params', async () => {
    const responsePromise = client.servers.manageBackupSchedule({ schedule: 'daily', server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('manageBackupSchedule: required and optional params', async () => {
    const response = await client.servers.manageBackupSchedule({ schedule: 'daily', server_id: 0 });
  });

  test('removeBackup: only required params', async () => {
    const responsePromise = client.servers.removeBackup({ backup_id: 0, server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeBackup: required and optional params', async () => {
    const response = await client.servers.removeBackup({ backup_id: 0, server_id: 0 });
  });

  test('removeIP: only required params', async () => {
    const responsePromise = client.servers.removeIP({ server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeIP: required and optional params', async () => {
    const response = await client.servers.removeIP({ server_id: 0 });
  });

  test('restoreBackup: only required params', async () => {
    const responsePromise = client.servers.restoreBackup({ backup_id: 0, server_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('restoreBackup: required and optional params', async () => {
    const response = await client.servers.restoreBackup({ backup_id: 0, server_id: 0 });
  });

  test('upgrade: only required params', async () => {
    const responsePromise = client.servers.upgrade({ server_id: 0, server_type: 'medium' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upgrade: required and optional params', async () => {
    const response = await client.servers.upgrade({ server_id: 0, server_type: 'medium' });
  });
});
