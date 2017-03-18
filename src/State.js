export default class State {
    constructor() {
        this.state = "";
    }
    getCurrentState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
}