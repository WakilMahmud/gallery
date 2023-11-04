import { useRef, useState } from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import AddImage from "./components/AddImage";

function App() {
	const imageData = [
		"/images/image-1.webp",
		"/images/image-2.webp",
		"/images/image-3.webp",
		"/images/image-4.webp",
		"/images/image-5.webp",
		"/images/image-6.webp",
		"/images/image-7.webp",
		"/images/image-8.webp",
		"/images/image-9.webp",
		"/images/image-10.jpeg",
		"/images/image-11.jpeg",
	];

	const [images, setImages] = useState(imageData);

	//save reference for dragItem and dragOverItem
	const dragItem = useRef(null);
	const dragOverItem = useRef(null);

	const refs = {
		dragItem,
		dragOverItem,
	};

	// handle drag sorting
	const handleSort = () => {
		//duplicate items
		let _images = [...images];

		//remove and save the dragged item content
		const draggedItemContent = _images.splice(dragItem.current, 1)[0];

		//switch the position
		_images.splice(dragOverItem.current, 0, draggedItemContent);

		//reset the position ref
		dragItem.current = null;
		dragOverItem.current = null;

		setImages(_images);
	};

	return (
		<div className="flex justify-center">
			<div className="w-4/5 border-none rounded-lg bg-white my-8">
				<Header></Header>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8 auto-rows-fr">
					{images.map((image, index) => (
						<Images key={index} index={index} src={image} refs={refs} handleSort={handleSort}></Images>
					))}
					<AddImage></AddImage>
				</div>
			</div>
		</div>
	);
}

export default App;
