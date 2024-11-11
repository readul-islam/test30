import { startCase, toLower } from "lodash";

const Button = ({ Icon, className, children, ...others }) => {
	return (
		<button
			{...others}
			className={` ${className} flex flex-wrap justify-center items-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-gray-200 dark:border-none hover:border-coolGray-300   rounded-md shadow-button`}
		>
			{Icon && Icon}
			<p>{startCase(toLower(children))}</p>
		</button>
	);
};

export default Button;
