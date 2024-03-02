export function WeatherOverviewSkelton() {
	return (
		<div className="bg-white border-4 px-8 py-2 rounded-xl w-1/2">
			<p className="font-bold pb-8 text-[min(4vw,80px)] text-center text-gray-800">-</p>
			<p className="pl-20 text-[min(4vw,24px)]">現在( hh:mm 時点 )の天気は...</p>
			<div className="flex justify-center pb-4">
				<p className="px-12 text-[min(10vw,160px)] text-gray-700">-</p>
			</div>
			<div className="flex justify-around items-center py-4">
				<p className="px-3 text-[min(3vw,46px)] text-gray-800">気温: -°C</p>
				<p className="px-3 text-[min(3vw,48px)] text-gray-800">湿度: -%</p>
			</div>
		</div>
	);
}
