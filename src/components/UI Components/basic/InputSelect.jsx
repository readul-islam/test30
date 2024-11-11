import React from "react";

const InputSelect = ({ options, ...others }) => {
	return (
		<select
			{...others}
			className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50"
		>
			{options.map((data) => (
				<option key={data.id} value={data.value}>
					{data.name}
				</option>
			))}
		</select>
	);
};

export default InputSelect;
