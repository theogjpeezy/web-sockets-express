import express = require('express');
import express_ws = require('express-ws');

export class App {
    public express: express.Express;

    constructor() {
        this.express = express();
        express_ws(this.express);
        (<any>this.express).ws('/ws', (ws, req) => {
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

export default new App().express;