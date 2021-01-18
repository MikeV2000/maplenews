import {environment} from "../core/environment";
import React, {useEffect, useState} from "react";
import type {ForecastType} from '../types';
import {server} from "../core/endpoints";
import {CurrentConditions} from '../components';

export function Home() {
    const {lat, lon, apiKey, units} = environment;
    const [forecast, setForecast] = useState<ForecastType>();

    useEffect(() => {
        server('forecast', {lat, lon, apiKey,	units}).then(response => {
            if (response.ok) {
                response.json().then(json => setForecast(json));
            }
        }).catch(error => error);
    }, [apiKey, lat, lon, units])

    if(!forecast?.current?.weather) return <>Error Loading Weather from Weather API</>

    return (
        <CurrentConditions current={forecast.current}/>
    );
}