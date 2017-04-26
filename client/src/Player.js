export default class Player {
    constructor(id, user) {
        this.id = id;
        this.user = user;
        this.isReady = false;
    }
    isReady() {
        return this.isReady;
    }
}