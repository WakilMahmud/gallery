const Header = ({ selectedImages }) => {
	return (
		<>
			{selectedImages?.length > 0 ? (
				<div className="flex justify-between border-b-2 px-8 py-4 font-custom font-bold">
					<div className="flex items-center justify-center gap-3">
						<input type="checkbox" className="w-4 h-4" defaultChecked />
						<p className="text-xl">
							{selectedImages.length}
							{selectedImages.length == 1 ? <span> File</span> : <span> Files</span>} Selected
						</p>
					</div>
					<button className="text-red-500">Delete files</button>
				</div>
			) : (
				<div className="border-b-2">
					<h1 className="ps-8 py-4 font-custom font-bold text-xl">Gallery</h1>
				</div>
			)}
		</>
	);
};

export default Header;
