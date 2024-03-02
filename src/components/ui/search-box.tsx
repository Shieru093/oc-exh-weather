'use client';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ModalBase from '@/components/ui/modal-base';

export default function SearchBox({
	searching,
	setSearching,
	setLocation,
}: {
	searching: boolean;
	setSearching: (searching: boolean) => void;
	setLocation: (location: string) => void;
}) {
	const [inputLocation, setInputLocation] = useState<string>('');

	if (!searching) {
		return <></>;
	}

	return (
		<ModalBase setState={setSearching}>
			<input
				type="text"
				placeholder="都市名を入力してください"
				value={inputLocation}
				onChange={(e) => {
					setInputLocation(e.target.value);
				}}
				className="bg-gray-50 pl-2 text-[min(4vw,60px)] focus:outline-none"
			></input>
			<button
				onClick={(e) => {
					e.stopPropagation();
					setLocation(inputLocation);
					setInputLocation('');
					setSearching(false);
				}}
				className="flex justify-center items-center p-2"
			>
				<SearchIcon className="text-[min(4vw,60px)] text-gray-800" />
			</button>
		</ModalBase>
	);
}
