/**
 * Exports express
 * @public
 */
import app from './config/express';
import vars from './config/vars'

const {port, env} = vars;

class ServerInit {
    constructor() {
        this.startServer();
    }

    async startServer() {
        // listen to requests
        try {
            app.listen(port, () => {
                console.info(`server started on port ${port} (${env})`);
            });
        } catch (error) {
            console.log(error)
        }

    }
}

new ServerInit();
/**
 * Exports express
 * @public
 */
export default app;