import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import vars from './vars';
import routes from '../api/routes/v1';


/**
 * Express instance
 * @public
 */
const app = express();

/**
Parse incoming request bodies in a middleware before your handlers,
available under the req.body property.
 */
app.use(bodyParser.json({ limit: '100mb' })); // Controls the maximum request body size.
app.use(
	bodyParser.urlencoded({
		limit: '100mb',
		extended: true,
		parameterLimit: 100000
	})
);

/** secure apps by setting various HTTP headers  * */
app.use(helmet());

/** CORS - Cross Origin Resource Sharing
 * CORS providing a Connect/Express middleware that can be used to enable CORS with various options.
 * * */
app.use(cors());

/** mount api v1 routes * */
app.use(vars.basePath, routes);

export default app;
