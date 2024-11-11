import { Field } from "formik";
import { startCase, toLower } from "lodash";
import React from "react";

const InputField = ({ type, name, placeholder, className, ...others }) => {
	return (
		<Field
			{...others}
			type={type}
			className={`${className} block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50`}
			name={name}
			placeholder={startCase(toLower(placeholder))}
		/>
	);
};

export default InputField;
