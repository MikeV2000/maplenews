import {Forecast} from '../endpoints/weather';

type Endpoint = {
	path: string;
	function: (data: Object) => Promise<any>;
}

export const endpoints: Endpoint[] = [
	{
		path: 'forecast',
		function: Forecast
	}
]