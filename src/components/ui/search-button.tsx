import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton({
	searching,
	setSearching,
}: {
	searching: boolean;
	setSearching: (searching: boolean) => void;
}) {
	if (searching) {
		return <></>;
	}

	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				setSearching(true);
			}}
			className="bg-slate-50 border-2 border-gray-400 px-3 py-2 rounded-2xl text-gray-800"
		>
			<SearchIcon className="text-[min(4vw,60px)]" />
		</button>
	);
}
