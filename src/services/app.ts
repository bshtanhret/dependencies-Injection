import { Users } from "./users"

export class App {
    static $singleton = true
    static $inject = ['users']

    start() {
        void this.users.render()
    }

    constructor(private readonly users: Users) {}
}