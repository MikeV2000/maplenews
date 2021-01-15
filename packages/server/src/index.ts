import express from 'express';
import {Forecast} from './Weather';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post('/forecast',(req, res) => {
	const {lat, lon, apiKey, units} = req.body;

	Forecast(lat, lon, apiKey, units).then(data => res.send(data));
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});