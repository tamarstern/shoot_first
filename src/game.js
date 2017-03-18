import Device from './Device.js';
import Player from './Player.js';
import State from './State.js';

let Game = (function () {
    'use strict';
    let player;
    let device;

    function init() {
        let player = new Player();
        let device = new Device();
        let state = new State();

        device.init();
    }
})();