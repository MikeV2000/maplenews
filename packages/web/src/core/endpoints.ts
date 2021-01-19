type Endpoint = 'forecast';

export function server(endpoint: Endpoint, data: Object) {
	const request = new Request(`http://localhost:3001/${endpoint}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		credentials: 'same-origin',
		cache: 'default',
		body: JSON.stringify({data}),
	});

	return fetch(request);
}
