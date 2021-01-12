import React, {useEffect, useState} from 'react';
import {Grid, GridColumn, GridRow, Header, Icon} from 'semantic-ui-react';

const lat = process.env.REACT_APP_LAT;
const lon = process.env.REACT_APP_LON;
const apiKey = process.env.REACT_APP_API_KEY;
const units = process.env.REACT_APP_UNITS;

export interface Forecast {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	hourly?: (HourlyEntity)[] | null;
	minutely?: (MinutelyEntity)[] | null;
	daily?: (DailyEntity)[] | null;
	alerts?: (AlertsEntity)[] | null;
}
export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
}
export interface WeatherEntity {
	id: number;
	main: string;
	description: string;
	icon: string;
}
export interface HourlyEntity {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
	pop: number;
}
export interface MinutelyEntity {
	dt: number;
	precipitation: number;
}
export interface DailyEntity {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
	clouds: number;
	pop: number;
	uvi: number;
}
export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}
export interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}
export interface AlertsEntity {
	sender_name: string;
	event: string;
	start: number;
	end: number;
	description: string;
}


export function Weather() {
	const [forecast, setForecast] = useState<Forecast>();

	console.log(lat);

	useEffect(() => {
		if(lat && lon && apiKey) {
			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`).then(response => response.json()).then(data => {
				setForecast(data);
			})
		}
	}, [lat, lon, apiKey])

	console.log(forecast);

	return (
		<Grid padded>
			{forecast?.daily?.map(day => {
				return (
					<GridRow>
						<GridColumn>
							{new Date(day.dt*1000).toLocaleString('en-us',  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
						</GridColumn>
						<GridColumn>
							<Header as='h2'>
								<Icon name='settings' />
								<Header.Content>
									{day.temp.max}
									<Header.Subheader>{ day.weather ? day.weather[0].description : ''}</Header.Subheader>
								</Header.Content>
							</Header>
						</GridColumn>
					</GridRow>
				);
			})}
		</Grid>
	)
}