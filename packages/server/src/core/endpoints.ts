import type {Db} from 'mongodb';
import {Forecast} from '../endpoints';

type Endpoint = {
	path: string;
	function: (data: Record<string, unknown>, db: Db) => Promise<unknown>;
};

export const endpoints: Endpoint[] = [
	{
		path: 'forecast',
		function: Forecast,
	},
];
