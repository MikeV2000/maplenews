import React, {useEffect, useState} from 'react';
import {environment} from '../core/environment';
import type {ForecastType} from '../types';
import {server} from '../core/endpoints';
import {CurrentConditions, Loading} from '../components';

export function Home() {
	const {apiKey, units} = environment;
	const [forecast, setForecast] = useState<ForecastType>();

	useEffect(() => {
		server('forecast', {apiKey, units})
			.then(response => {
				if (response.ok) {
					response.json().then(json => setForecast(json));
				}
			})
			.catch(error => error);
	}, [apiKey, units]);

	if (!forecast?.current) return <Loading />;

	return <CurrentConditions current={forecast.current} />;
}
