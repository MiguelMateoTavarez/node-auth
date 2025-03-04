import express, { Router } from 'express';

interface Options {
    port?: number;
    routes: Router;
}

export class Server {

    public readonly app = express();
    private readonly _port: number;
    private readonly _routes: Router;

    constructor(options: Options) {
        const { port = 3100, routes } = options;
        this._port = port;
        this._routes = routes;
    }

    async start() {

        this.app.use(this._routes);
        
        this.app.listen(this._port, () => {
            console.log(
                `Server running on port ${this._port}`
            );
        })
    }
}