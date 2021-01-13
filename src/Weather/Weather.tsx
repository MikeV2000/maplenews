import React, {useEffect, useState} from 'react';
import {Header, Image, Table, TableBody, TableCell, TableRow} from 'semantic-ui-react';
import {ForecastType} from '../Types';
import {environment} from '../environment';
import {Forecast} from '../Server/Weather';

export function Weather() {
	const {lat, lon, apiKey, units} = environment;
	const [forecast, setForecast] = useState<ForecastType>();

	useEffect(() => {
		Forecast(lat, lon, apiKey, units).then(forecast => setForecast(forecast));
	})

	return (
		<Table>
			<TableBody>
				<TableRow>
					<TableCell>
						<Header as='h2'>
							Current
						</Header>
					</TableCell>
					<TableCell />
				</TableRow>
				<TableRow>
					<TableCell>
						<Header as='h2'>
							<Image src={`https://openweathermap.org/img/wn/${forecast?.current.weather ? forecast?.current?.weather[0].icon : ''}.png`} />
							<Header.Content>
								{Math.round(forecast?.current.temp || 0)}
								<Header.Subheader>{ forecast?.current.weather ? forecast?.current.weather[0].description : ''}</Header.Subheader>
							</Header.Content>
						</Header>
					</TableCell>
					<TableCell>
						{new Date(forecast?.current.dt ? forecast?.current.dt*1000 : "").toLocaleString('en-us',  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Header as='h2'>
							Future
						</Header>
					</TableCell>
					<TableCell />
				</TableRow>
				{forecast?.daily?.map(day => {
					return (
						<TableRow>
							<TableCell>
								<Header as='h2'>
									<Image src={`https://openweathermap.org/img/wn/${day.weather ? day?.weather[0].icon : ''}.png`} />
									<Header.Content>
										{Math.round(day.temp.max)}
										<Header.Subheader>{ day.weather ? day.weather[0].description : ''}</Header.Subheader>
									</Header.Content>
								</Header>
							</TableCell>
							<TableCell>
								{new Date(day.dt*1000).toLocaleString('en-us',  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	)
}