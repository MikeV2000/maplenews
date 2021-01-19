import express from 'express';
import cors from 'cors';
import {endpoints} from './core/endpoints';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

endpoints.map(endpoint => {
	app.post(`/${endpoint.path}`, (req, res) => {
		endpoint.function(req.body.data).then(data => res.send(data));
	});
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
