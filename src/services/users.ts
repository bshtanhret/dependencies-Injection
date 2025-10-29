import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  static $singleton = true
  static $inject = ['http', 'config']

  private getUsers() {
    return this.http.get(this.config.resources.users) as unknown as Promise<User[]>;
  }

  async render() {
    const users = await this.getUsers();
  
    const listNode = document.getElementById('users-list');
  
    users.forEach((user) => {
      const listItemNode = document.createElement('li');
  
      listItemNode.innerHTML = user.name;
      listNode.appendChild(listItemNode);
    });
  }

  constructor(private readonly http: HTTP, private readonly config: ApiConfig) {}
}
