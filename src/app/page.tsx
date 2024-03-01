'use client';

import { useState } from 'react';
import SearchBox from '@/components/ui/search-box';
import SearchButton from '@/components/ui/search-button';
import WeatherOverview from '@/components/ui/weather-overview';

export default function Home() {
	const [searching, setSearching] = useState<boolean>(false);
	const [location, setLocation] = useState<string>('');

	return (
		<main className="bg-gray-100 flex flex-col items-center justify-center  min-h-screen relative">
			<WeatherOverview location={location} />

			<div className="absolute bottom-0 right-0 mb-8 mr-8">
				<SearchButton
					searching={searching}
					setSearching={setSearching}
				/>
			</div>
			<SearchBox
				searching={searching}
				setSearching={setSearching}
				setLocation={setLocation}
			/>
		</main>
	);
}
