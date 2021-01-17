import {Weather} from "../pages";
import type {Route} from "../types";

export const Routes: Route[] = [
    {
        title: 'Weather',
        path: '/weather',
        page: Weather,
        color: 'yellow'
    }
]