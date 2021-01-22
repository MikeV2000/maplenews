import {config} from 'dotenv';

config();

export const environment = {
	siteTitle: process.env.REACT_APP_SITE_TITLE || 'Maple News Network',
	openWeatherMapApiKey: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY || '',
	ipStackApiKey: process.env.REACT_APP_IP_STACK_API_KEY || '',
	webUrl: `${process.env.REACT_APP_WEB_DOMAIN}$:{process.env.REACT_APP_WEB_PORT}` || 'http://localhost:3000',
	serverUrl: `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}` || 'http://localhost:3001',
	serverPORT: process.env.REACT_APP_SERVER_PORT || '3001',
	databaseURL: `${process.env.REACT_APP_DATABASE_DOMAIN}:${process.env.REACT_DATABASE_SERVER_PORT}` || 'http://localhost:27017',
	databaseName: process.env.REACT_APP_DATABASE_NAME || 'maple-news-network',
};
