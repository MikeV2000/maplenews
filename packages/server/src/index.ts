import express from 'express';
import cors from 'cors';
import {connect} from 'mongodb';
import debug from 'debug';
import {endpoints} from './core/endpoints';
import {environment} from './core/environment';

const d = debug('server.index');

const app = express();

app.use(express.json());
app.use(cors());

connect(environment.databaseURL, {useUnifiedTopology: true})
	.then(client => {
		const db = client.db(environment.databaseName);

		endpoints.forEach(endpoint => {
			app.post(`/${endpoint.path}`, (req, res) => {
				endpoint.function(req.body.data).then(data => res.send(data));
			});
		});

		app.get('/', (req, res) => res.send('Express + TypeScript Server'));

		app.listen(environment.serverPORT, () => {
			d(`${environment.siteTitle}: Server is running at ${environment.serverUrl}`);
		});
	})
	.catch(error => d(error));

process.on('SIGINT', () => {
	d('Caught interrupt signal');
	process.exit();
});
