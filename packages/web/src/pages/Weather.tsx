import {CurrentConditions, DailyForecast} from '../components';
import {environment} from "../core/environment";
import React, {useEffect, useState} from "react";
import {ForecastType} from "../types";
import {Endpoint, server} from "../core/endpoints";

export function Weather() {
    const {lat, lon, apiKey, units} = environment;
    const [forecast, setForecast] = useState<ForecastType>();

    useEffect(() => {
        server(Endpoint.forecast, {lat, lon, apiKey,	units}).then(response => {
            if (response.ok) {
                response.json().then(json => setForecast(json));
            }
        }).catch(error => error);
    }, [apiKey, lat, lon, units])

    if(!forecast?.current || !forecast?.daily) return <>Error Loading Weather from Weather API</>

    return (
        <>
            <CurrentConditions current={forecast.current}/>
            <DailyForecast daily={forecast.daily}/>
        </>
    );
}