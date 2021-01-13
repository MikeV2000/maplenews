import {ForecastType} from '../../Types';

export async function Forecast(lat: string, lon: string, apiKey: string, units: string): Promise<ForecastType> {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);
	return response.json();
}