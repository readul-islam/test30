import { capitalize, snakeCase, startCase, toLower } from "lodash";
import React from "react";

const Label = ({ required, children, className, ...others }) => {
	return (
		<label
			className={`${className} block mb-1 text-sm font-medium text-gray-600 dark:text-gray-200  `}
			{...others}
		>
			{startCase(toLower(children))}
			{required ? "*" : ""}
		</label>
	);
};

export default Label;
