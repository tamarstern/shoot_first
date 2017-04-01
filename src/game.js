import Device from './Device.js';
import Player from './Player.js';
import State from './State.js';
import { state1, state2, state3, state4, state5 } from './constants.js';
import ServerHandler from './ServerHandler.js';

let Game = (function () {
    'use strict';
    let player;
    let device;
    let gameElement = document.querySelector('#game');

    function init() {
        let player = new Player();
        let device = new Device();
        let state = new State();
        let server = new ServerHandler();
        let button;

        state.setState('init');
        device.init();

        server.sendRequest(state.getCurrentState()).then(function (res) {
            gameElement.innerHTML = res;
            button = document.querySelector('#start_game');
            button.addEventListener('click', function(){
                alert('start!');
            })
        });


    }

    return {
        init: init
    }
})();

Game.init();