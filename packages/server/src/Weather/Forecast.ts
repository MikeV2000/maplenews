import {ForecastType} from '../types';
import fetch from 'node-fetch';

export async function Forecast(data: any): Promise<ForecastType> {
	const {lat, lon, apiKey, units} = data;
	const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);
	return await response.json();
}