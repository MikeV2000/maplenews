import {Home, Weather} from '../pages';
import type {Route} from '../types';

export const Routes: Route[] = [
	{
		title: 'Home',
		path: '/',
		page: Home,
		color: 'red',
	},
	{
		title: 'Weather',
		path: '/weather',
		page: Weather,
		color: 'yellow',
	},
];
