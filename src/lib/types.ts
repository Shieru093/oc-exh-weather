export type WeatherData = {
	main: string;
	temp: number;
	humidity: number;
	cityName: string;
};

export type Weather = 'Clear' | 'Clouds' | 'Rain' | 'Snow';
