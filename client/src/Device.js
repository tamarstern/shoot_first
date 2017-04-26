import { treshold, deviceDownDegs } from './constants.js';

export default class Device {
    constructor() {

    }
    init() {
        window.addEventListener('deviceorientation', this.handleOrientation.bind(this));
    }
    handleOrientation(event) {
        let alpha = event.alpha; //x
        let beta = event.beta; //y
        let gamma = event.gamma; //z
    }
}