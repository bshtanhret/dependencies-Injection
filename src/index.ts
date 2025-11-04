import { Logger } from './services/logger';

import type { User } from './types';
import { createIoCContainer } from './ioc';

const iocContainer = createIoCContainer()

const renderUsers = async () => {
  const usersService = iocContainer.resolve('users')
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  iocContainer.register('config', (window as any).__CONFIG__);
  delete (window as any).__CONFIG__;

  renderUsers();
};

window.onload = () => {
  const logger = iocContainer.resolve('logger');

  logger.info('Page is loaded.');

  app();
};