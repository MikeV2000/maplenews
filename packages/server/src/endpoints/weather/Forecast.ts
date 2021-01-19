import fetch from 'node-fetch';
import type {ForecastType} from '../../types';

export async function Forecast(data: Record<string, unknown>): Promise<ForecastType> {
	const {lat, lon, apiKey, units} = data;
	const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);
	return response.json();
}
