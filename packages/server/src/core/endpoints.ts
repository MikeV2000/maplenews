import {Forecast} from '../endpoints';

type Endpoint = {
	path: string;
	function: (data: Record<string, unknown>) => Promise<unknown>;
};

export const endpoints: Endpoint[] = [
	{
		path: 'forecast',
		function: Forecast,
	},
];
