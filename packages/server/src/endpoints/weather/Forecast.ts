import fetch from 'node-fetch';
import type {Db} from 'mongodb';
import {debug} from 'debug';
import type {ForecastType} from '../../types';
import {cache} from '../../core/cache';
import {UserLocation} from '../location';
import {environment} from '../../core/environment';

const d = debug('server.forecast');

export async function Forecast(req: unknown, data: Record<string, unknown>, db: Db): Promise<ForecastType | undefined> {
	const {units} = data;

	const userLocation = await UserLocation(req, {}, db);

	let lat = 0;
	let lon = 0;

	if (userLocation) {
		lat = Math.round(userLocation.latitude * 10000) / 10000;
		lon = Math.round(userLocation.longitude * 10000) / 10000;
	}

	return cache(db, 30, 'forecast', {lat, lon}, async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${environment.openWeatherMapApiKey}&units=${units}`,
		);
		return response.json();
	});
}
