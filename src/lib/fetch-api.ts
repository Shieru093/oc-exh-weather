'use server';

import { convertUnixTimestampToJST } from '@/lib/utils';
import type { WeatherData } from '@/lib/types';

export async function fetchWeatherData(location: string): Promise<WeatherData | undefined> {
	try {
		const apiKey = process.env.WEATHER_API_KEY;
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
		);
		if (!res.ok) {
			throw new Error('HTTP error, status = ' + res.status);
		}
		const fullWeatherData = await res.json();

		const weatherData: WeatherData = {
			main: fullWeatherData.weather[0].main,
			temp: fullWeatherData.main.temp,
			humidity: fullWeatherData.main.humidity,
			cityName: fullWeatherData.name,
			dt: convertUnixTimestampToJST(fullWeatherData.dt),
		};

		return weatherData;
	} catch (error) {
		console.error('Fetch Error: ' + error);
		return undefined;
	}
}
