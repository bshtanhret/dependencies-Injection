import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  constructor(private readonly http: HTTP, private readonly config: ApiConfig) {}

  static $singleton = true
  static $inject = ['http', 'config']

  getUsers() {
    return this.http.get(this.config.resources.users) as unknown as Promise<User[]>;
  }
}
