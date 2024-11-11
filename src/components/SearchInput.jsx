import React from "react";

const SearchInput = ({ placeHolder }) => {
	return (
		<>
			<form className="">
				<label
					for="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className={` block w-full px-8 py-2 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50`}
						placeholder={placeHolder}
						required
					/>
				</div>
			</form>
		</>
	);
};

export default SearchInput;
