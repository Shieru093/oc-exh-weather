'use client';

import { useState } from 'react';
import SearchBox from '@/components/ui/search-box';
import SearchButton from '@/components/ui/search-button';
import WeatherOverview from '@/components/ui/weather-overview';
import Kyocotan from '@/components/ui/kyocotan';

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
			<div className="absolute bottom-0 left-0 ml-8">
				<Kyocotan searching={searching} />
			</div>
			<div className="absolute bottom-0 text-center p-2 w-full">
				(C)KCG 2012
			</div>
		</main>
	);
}
