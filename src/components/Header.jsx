import { BiSolidTrash } from "react-icons/bi";

const Header = ({ selectedImages, deleteSelectedImages }) => {
	return (
		<>
			{selectedImages?.length > 0 ? (
				<div className="flex flex-col items-start lg:flex-row lg:justify-between border-b-2 px-8 py-4 font-custom font-bold">
					<div className="flex items-center justify-center gap-3">
						<input type="checkbox" className="w-4 h-4" defaultChecked />
						<p className="text-sm lg:text-xl">
							{selectedImages.length}
							{selectedImages.length == 1 ? <span> File</span> : <span> Files</span>} Selected
						</p>
					</div>
					<button className="text-red-500 text-sm lg:text-xl flex items-center gap-3" onClick={deleteSelectedImages}>
						<BiSolidTrash></BiSolidTrash>
						<p>Delete {selectedImages.length == 1 ? <span> file</span> : <span> files</span>}</p>
					</button>
				</div>
			) : (
				<div className="border-b-2">
					<h1 className="ps-8 py-4 font-custom font-bold text-sm lg:text-xl">Gallery</h1>
				</div>
			)}
		</>
	);
};

export default Header;
