import fetch from 'node-fetch';
import type {Db} from 'mongodb';
import {debug} from 'debug';
import type {ForecastType} from '../../types';
import {cache} from '../../core/cache';

const d = debug('server.forecast');

export async function Forecast(data: Record<string, unknown>, db: Db): Promise<ForecastType | undefined> {
	const {lat, lon, apiKey, units} = data;

	const latShort = Math.round(parseFloat(lat as string) * 10000) / 10000;
	const lonShort = Math.round(parseFloat(lon as string) * 10000) / 10000;

	return cache(db, 30, 'forecast', {lat: latShort, lon: lonShort}, async () => {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);
		return response.json();
	});
}
