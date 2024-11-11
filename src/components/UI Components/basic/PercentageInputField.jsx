import { Field } from "formik";

const PercentageInputField = ({ name, className, ...props }) => {
	return (
		<Field name={name}>
			{({ field, form }) => (
				<div>
					<input
						className={`${className} block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50`}
						{...field}
						{...props}
						value={field.value + "%"}
						onChange={(e) => {
							const value = e.target.value.replace("%", "");
							form.setFieldValue(name, parseFloat(value));
						}}
					/>
				</div>
			)}
		</Field>
	);
};

export default PercentageInputField;
