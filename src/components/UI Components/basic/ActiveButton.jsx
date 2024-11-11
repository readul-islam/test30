import React from "react";

const ActiveButton = ({ options, active, setActive, setFieldValue }) => {
	return (
		<div className="grid grid-cols-2 gap-2 w-full">
			{options.map((option) => (
				<button
					type="button"
					key={option.id}
					onClick={() => {
						{
							setActive && setActive(option.value);
						}

						setFieldValue("active", option.value);
					}}
					className={`px-5 py-3 rounded-md ${
						active === option.value ? "bg-indigo-200" : "bg-indigo-50"
					}`}
				>
					{option.name}
				</button>
			))}
		</div>
	);
};

export default ActiveButton;
