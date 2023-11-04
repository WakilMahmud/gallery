const Images = ({ index, src }) => {
	return (
		<div className={`${index == 0 && "col-span-2 row-span-2"}`}>
			<label htmlFor={src} className="hover:cursor-pointer">
				<div className={`relative rounded-lg border-2 hover:border-none`}>
					<img src={src} alt="Image" className="rounded-lg w-full h-full" />
					<div className={`absolute left-0 top-0 h-full w-full rounded-lg  hover:bg-gray-700 opacity-50`}></div>
				</div>
			</label>
		</div>
	);
};

export default Images;
