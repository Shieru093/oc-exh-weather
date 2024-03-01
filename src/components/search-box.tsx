export default function SearchBox() {
	return (
		<div>
			<input type="text"></input>
			<button
				onClick={(e) => {
					e.stopPropagation();
				}}
			></button>
		</div>
	);
}
