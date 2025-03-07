export default function ModalBase({
	children,
	setState,
}: {
	children: React.ReactNode;
	setState: (state: boolean) => void;
}) {
	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				setState(false);
			}}
			className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-10"
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="border-4 border-gray-400 bg-gray-50 p-8 rounded-3xl flex items-center space-x-2"
			>
				{children}
			</div>
		</div>
	);
}
