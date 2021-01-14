import express from 'express';
import {Forecast} from './Weather';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/forecast', (req, res) => {
	console.log(req);
	const {lat, lon, apiKey, units} = req.body;
	res.send(Forecast(lat, lon, apiKey, units))
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
