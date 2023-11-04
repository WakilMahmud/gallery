import { useEffect, useState } from "react";

const Images = ({ index, src, refs, handleSort, checkedImage, uncheckedImage }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		isChecked ? checkedImage(src) : uncheckedImage(src);
	}, [isChecked, src]);

	const handleChecked = () => {
		setIsChecked((prevIsChecked) => !prevIsChecked);
	};

	const handleMouseEnter = () => {
		setIsMouseOver(true);
	};

	const handleMouseLeave = () => {
		setIsMouseOver(false);
	};

	return (
		<div
			className={`${index == 0 && "col-span-2 row-span-2"}`}
			draggable
			onDragStart={(e) => {
				e.target.style.opacity = 0.5;
				refs.dragItem.current = index;
			}}
			onDragEnter={() => {
				refs.dragOverItem.current = index;
			}}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDragEnd={(e) => {
				e.preventDefault();
				e.target.style.opacity = 1;
				handleSort();
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<label htmlFor={src} className="hover:cursor-pointer ">
				<div className={`relative rounded-lg border-2 hover:border-none`}>
					<img src={src} alt="Image" className="rounded-lg w-full h-full" />
					<div className={`absolute left-0 top-0 h-full w-full rounded-lg  hover:bg-gray-700 opacity-50 ${isChecked ? "bg-gray-200" : ""}`}></div>

					<input
						type="checkbox"
						name={src}
						id={src}
						className={`absolute left-2 top-2 lg:left-8 lg:top-8 w-4 h-4  ${isChecked || isMouseOver ? "block" : "hidden"}`}
						onClick={() => handleChecked(src)}
					/>
				</div>
			</label>
		</div>
	);
};

export default Images;
