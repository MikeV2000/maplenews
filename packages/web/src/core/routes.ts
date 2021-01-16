import {Home, Weather} from "../pages";
import {Route} from "../types";

export const Routes: Route[] = [
    {
        title: 'Home',
        path: '/',
        page: Home
    },
    {
        title: 'Weather',
        path: '/Weather',
        page: Weather
    }
]