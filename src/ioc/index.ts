import IoCContainer from 'ioc-lite';
import { HTTP } from '../../src/services/http';
import { Logger } from '../../src/services/logger';
import { Users } from '../../src/services/users';
import { ApiConfig } from '../../src/types';
import { App } from '../../src/services/app';

export type IoCResources = {
  config: ApiConfig;
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  app: typeof App;
}

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();

  ioc.register('config', (window as any).__CONFIG__.api)
  ioc.registerClass('logger', Logger)
  ioc.registerClass('http', HTTP)
  ioc.registerClass('users', Users)
  ioc.registerClass('app', App)

  return ioc;
};
