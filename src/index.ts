import { createIoCContainer } from './ioc';

const iocContainer = createIoCContainer()

window.onload = () => {
  iocContainer.resolve('logger').info('Page is loaded.');

  const app = iocContainer.resolve('app')

  app.start()
};
