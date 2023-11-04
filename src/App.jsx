import { useState } from "react";
import Header from "./components/Header";
import Images from "./components/Images";

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

	return (
		<div className="flex justify-center">
			<div className="w-4/5 border-none rounded-lg bg-white my-8">
				<Header></Header>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
					{images.map((image, index) => (
						<Images key={index} index={index} src={image}></Images>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
