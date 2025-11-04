import IoCContainer from 'ioc-lite';
import { HTTP } from '../../src/services/http';
import { Logger } from '../../src/services/logger';
import { Users } from '../../src/services/users';
import { ApiConfig } from '../../src/types';

export type IoCResources = {
  config: ApiConfig;
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
}

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();

  ioc.registerClass('logger', Logger)
  ioc.registerClass('http', HTTP)
  ioc.registerClass('users', Users)

  return ioc;
};
