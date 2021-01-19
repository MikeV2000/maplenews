import express from 'express';
import cors from 'cors';
import {endpoints} from './core/endpoints';
import {environment} from './core/environment';

const app = express();

app.use(express.json());
app.use(cors());

endpoints.forEach(endpoint => {
	app.post(`/${endpoint.path}`, (req, res) => {
		endpoint.function(req.body.data).then(data => res.send(data));
	});
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(environment.serverPORT, () => {
	// TODO issue #54
	// eslint-disable-next-line
	console.log(`${environment.siteTitle}: Server is running at ${environment.serverUrl}`);
});
