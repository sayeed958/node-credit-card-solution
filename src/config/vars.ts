import * as path from 'path';
import * as dotSafe from 'dotenv-safe';

/**
 *  import .env variables
 */

dotSafe.load({
    allowEmptyValues: true,
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example')
});

export default {
    env: process.env.NODE_ENV,
    basePath: '/api/v1',
    port: process.env.PORT,

};
