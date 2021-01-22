import {debug} from 'debug';
import type {ForecastType} from '../types';

const d = debug('server.UserLocation');

export async function UserIP(req: Request): Promise<ForecastType | undefined> {
    // @ts-ignore
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // While developing, this function gets a local IP. So we hardcoded one here so development returns real data. -STT
    if(ip === "::1") ip = "8.8.8.8";

    return ip;
}
