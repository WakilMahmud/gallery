import { useEffect, useState } from "react";

const Images = ({ index, src, refs, handleSort, checkedImage, uncheckedImage, selectedImages }) => {
	const [isChecked, setIsChecked] = useState(false);
	const status = selectedImages.includes(src);

	useEffect(() => {
		isChecked ? checkedImage(src) : uncheckedImage(src);
	}, [isChecked, src]);

	const handleChecked = () => {
		setIsChecked((prevIsChecked) => !prevIsChecked);
	};

	return (
		<div
			className={`${index == 0 && "col-span-2 row-span-2"}`}
			draggable
			onDragStart={() => (refs.dragItem.current = index)}
			onDragEnter={() => (refs.dragOverItem.current = index)}
			onDragEnd={handleSort}
			onDragOver={(e) => e.preventDefault()}
		>
			<label htmlFor={src} className="hover:cursor-pointer">
				<div className={`relative rounded-lg border-2 hover:border-none`}>
					<img src={src} alt="Image" className="rounded-lg w-full h-full" />
					<div
						className={`absolute left-0 top-0 h-full w-full rounded-lg  hover:bg-gray-700 opacity-50 ${isChecked && status ? "bg-gray-200" : ""}`}
					></div>
					<input
						type="checkbox"
						name={src}
						id={src}
						className={`absolute left-8 top-8  w-4 h-4 hover:block ${isChecked && status ? "block" : "hidden"}`}
						onClick={() => handleChecked(src)}
					/>
				</div>
			</label>
		</div>
	);
};

export default Images;
