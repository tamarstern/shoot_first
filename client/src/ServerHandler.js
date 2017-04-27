import { serverURL } from './constants.js';
import Request from './request.js';

export default class ServerHandler {
    constructor() {

    }

    sendRequest(state) {
        let request = new Request(state);
        return fetch(`http://localhost:3000/api/games`, request).then(function(res){
            return res.text();
        });
    }

    renderResponse(el) {

    }
}