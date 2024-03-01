const API_ENDPOINT = '';

export async function fetchWeatherData(location: string) {
	try {
		const res = await fetch(API_ENDPOINT);
		const weatherData = await res.json();
		return weatherData[0];
	} catch (error) {
		console.error('fetchエラー: ' + error);
	}
}
