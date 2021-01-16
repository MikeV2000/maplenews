export interface ForecastType {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	hourly?: (HourlyEntity)[] | null;
	minutely?: (MinutelyEntity)[] | null;
	daily?: (DailyEntity)[] | null;
	alerts?: (AlertsEntity)[] | null;
}
export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
}
interface WeatherEntity {
	id: number;
	main: string;
	description: string;
	icon: string;
}
interface HourlyEntity {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
	pop: number;
}
interface MinutelyEntity {
	dt: number;
	precipitation: number;
}
export interface DailyEntity {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
	clouds: number;
	pop: number;
	uvi: number;
}
interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}
interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}
interface AlertsEntity {
	sender_name: string;
	event: string;
	start: number;
	end: number;
	description: string;
}