export const environment = {
	siteTitle: process.env.REACT_APP_SITE_TITLE || 'Maple News Network',
	webUrl: `${process.env.REACT_APP_WEB_DOMAIN}$:{process.env.REACT_APP_WEB_PORT}` || 'http://localhost:3000',
	serverUrl: `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}` || 'http://localhost:3001',
	serverPORT: process.env.REACT_APP_SERVER_PORT || '3001',

	units: process.env.REACT_APP_UNITS || 'metric',
};
