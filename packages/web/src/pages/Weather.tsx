import React, {useEffect, useState} from 'react';
import {CurrentConditions, DailyForecast, Loading} from '../components';
import {environment} from '../core/environment';
import type {ForecastType} from '../types';
import {server} from '../core/endpoints';

export function Weather() {
	const {units} = environment;
	const [forecast, setForecast] = useState<ForecastType>();

	useEffect(() => {
		server('forecast', {units})
			.then(response => {
				if (response.ok) {
					response.json().then(json => setForecast(json));
				}
			})
			.catch(error => error);
	}, [units]);

	if (!forecast?.current || !forecast?.daily) return <Loading />;

	return (
		<>
			<CurrentConditions current={forecast.current} />
			<DailyForecast daily={forecast.daily} />
		</>
	);
}
