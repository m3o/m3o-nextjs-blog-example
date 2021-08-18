import {Client} from '@m3o/m3o-node';

const microClient = new Client({token: process.env.MICRO_KEY});

export const makeService = <M extends string>(service: string) => ({
  request: <P, R>(path: M, payload: P): Promise<R> =>
    microClient.call(service, path, payload),
});
