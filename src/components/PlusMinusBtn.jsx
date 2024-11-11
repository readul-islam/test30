import React from "react";

const PlusMinusBtn = ({ plusIconHandler, minusIconHandler }) => {
	return (
		<>
			<div className="text-xl absolute right-2 top-8 bg-gray-400/70 w-fit  rounded-md">
				<button
					onClick={plusIconHandler}
					type="button"
					className="px-2 hover:bg-indigo-300 rounded-r-none rounded-md border-r text-center"
				>
					+
				</button>
				<button
					onClick={minusIconHandler}
					type="button"
					className="px-2 hover:bg-red-300 rounded-md text-center"
				>
					-
				</button>
			</div>
		</>
	);
};

export default PlusMinusBtn;
