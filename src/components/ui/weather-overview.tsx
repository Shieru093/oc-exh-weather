'use client';

import { useEffect, useState } from 'react';
import WeatherIcon from '@/components/ui/weather-icon';
import { fetchWeatherData } from '@/lib/fetch-api';
import { locationDict, weatherDict } from '@/lib/dicts';
import { WeatherOverviewSkelton } from '@/components/ui/skeletons';
import type { WeatherData } from '@/lib/types';

export default function WeatherOverview({ location }: { location: string }) {
	const [weather, setWeather] = useState<WeatherData | undefined>(undefined);

	useEffect(() => {
		const getWeatherData = async () => {
			setWeather(undefined);
			const weatherData: WeatherData | undefined = await fetchWeatherData(location);
			setWeather(weatherData);
		};

		if (location !== '') {
			getWeatherData();
		}
	}, [location]);

	if (!weather) {
		return <WeatherOverviewSkelton />;
	}

	return (
		<div className="bg-white border-4 px-8 py-2 rounded-xl w-1/2">
			<p className="font-bold pb-8 text-[min(4vw,80px)] text-center text-gray-800">
				{locationDict[weather.cityName]}
			</p>
			<p className="pl-20 text-[min(4vw,24px)]">現在の天気は...</p>
			<div className="flex justify-center pb-4">
				<div className="flex flex-col item-center justify-center px-4 text-[min(10vw,140px)]">
					<WeatherIcon weather={weather.main} />
				</div>
				<p className="px-12 text-[min(10vw,160px)] text-gray-700">{weatherDict[weather.main]}</p>
			</div>
			<div className="flex justify-around items-center py-4">
				<p className="px-3 text-[min(3vw,46px)] text-gray-800">
					気温: {Math.round(weather.temp * 10) / 10}°C
				</p>
				<p className="px-3 text-[min(3vw,48px)] text-gray-800">湿度: {weather.humidity}%</p>
			</div>
		</div>
	);
}
