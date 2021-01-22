import type {Db} from 'mongodb';
import {Forecast, UserLocation} from '../endpoints';

type Endpoint = {
	path: string;
	function: (req: any, data: Record<string, unknown>, db: Db) => Promise<unknown>;
};

export const endpoints: Endpoint[] = [
	{
		path: 'forecast',
		function: Forecast,
	},
	{
		path: 'user-location',
		function: UserLocation,
	},
];
