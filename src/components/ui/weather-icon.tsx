import { WbSunny, WbCloudy, WaterDrop, AcUnit } from '@mui/icons-material';

const style = 'text-[min(10vw,140px)]';

export default function WeatherIcon({ weather }: { weather: string }) {
	if (weather === 'Clear') {
		return <WbSunny className={`${style} text-orange-600`} />;
	}

	if (weather === 'Clouds') {
		return <WbCloudy className={`${style} text-slate-400`} />;
	}

	if (weather === 'Rain') {
		return <WaterDrop className={`${style} text-blue-600`} />;
	}

	if (weather === 'Snow') {
		return <AcUnit className={`${style} text-blue-400`} />;
	}

	return <div className={`${style}`}>-</div>;
}
