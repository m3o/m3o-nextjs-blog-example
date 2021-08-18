import {makeService} from '..';

export const dbService = makeService<m3oDbMethods>('db');

export function readDb<R>(payload: m3oDbQuery): Promise<R> {
  return dbService.request('Read', payload);
}

export function createRecord<T, R>(
  payload: m3oDbCreateRecordPayload<T>,
): Promise<R> {
  return dbService.request('Create', payload);
}
