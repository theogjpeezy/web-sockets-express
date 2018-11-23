"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_ws = require("express-ws");
class App {
    constructor() {
        this.express = express();
        express_ws(this.express);
        this.express.ws('/ws', (ws, req) => {
            ws.on('message', (msg) => {
                console.log(msg);
            });
            setInterval(() => {
                const time = Date.now();
                console.log(time % 32);
                ws.send(time % 32);
            }, 30000);
        });
    }
}
exports.App = App;
exports.default = new App().express;
//# sourceMappingURL=app.js.map