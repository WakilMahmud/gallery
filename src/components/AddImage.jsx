import { useEffect, useRef } from "react";
import { BiImage } from "react-icons/bi";

const AddImage = () => {
	const fileInputRef = useRef(null);
	useEffect(() => {}, [fileInputRef]);

	const handleImageUpload = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			console.log("Selected file:", selectedFile.name);
		}
	};

	return (
		<div
			className="flex flex-col justify-center items-center gap-2  border-2 border-dashed bg-gray-50 rounded-lg hover:cursor-pointer w-full h-full"
			onClick={handleImageUpload}
		>
			<BiImage className="md:text-2xl"></BiImage>
			<p className="font-custom text-sm md:text-base">Add Image</p>
			<input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
		</div>
	);
};

export default AddImage;
