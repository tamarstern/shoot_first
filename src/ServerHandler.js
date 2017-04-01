import { serverURL } from './constants.js';
import Request from './request.js';

export default class ServerHandler {
    constructor() {

    }

    sendRequest(state) {
        let request = new Request(state);
        return fetch(`https://jeex.us/app/hadarim/shoot/${state}.php`, request).then(function(res){
            return res.text();
        });
    }

    renderResponse(el) {

    }
}