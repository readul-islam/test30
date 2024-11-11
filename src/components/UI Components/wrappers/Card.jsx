import { startCase, toLower } from "lodash";
import React from "react";
import Button from "../basic/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";

IoCloseCircleOutline;

const Card = ({
	title,
	formId,
	editIcon,
	editIconHandler,
	submitHandler,
	isEditIconHide,
	cancelHandler,
	isButtons,
	topCloseIcon,
	children,
	className,
	mainDivStyle,
}) => {
	// console.log("hello card");
	return (
		<>
			<div
				className={` ${className} rounded-sm border border-stroke/50 bg-white shadow-default dark:border-strokedark dark:bg-slate-800`}
			>
				{title && (
					<div className="border-b flex items-center justify-between border-stroke py-4 px-6.5 dark:border-strokedark">
						<div className="flex items-center">
							<h3 className="font-medium text-black dark:text-white">
								{startCase(toLower(title))}
							</h3>
							{/* <LiaEditSolid className="" size={25} /> */}
						</div>

						<div className="flex gap-4">
							{editIcon && (
								<>
									{isEditIconHide && (
										<LiaEditSolid
											onClick={editIconHandler}
											className="hover:text-indigo-500 cursor-pointer"
											size={25}
										/>
									)}
								</>
							)}
							{topCloseIcon && (
								<IoCloseCircleOutline
									onClick={cancelHandler}
									className="hover:text-red-500 cursor-pointer"
									size={25}
								/>
							)}
						</div>
					</div>
				)}
				<div
					className={`${mainDivStyle} flex flex-col max-h-[50vh] overflow-auto p-6.5`}
				>
					{children}
				</div>

				{isButtons && (
					<div className="border-t   flex  justify-end border-stroke py-4 px-6.5 dark:border-strokedark">
						<div className="w-full xs:w-fit items-center flex-col xs:flex-row xs:flex  space-y-3 xs:space-y-0 gap-3 ">
							<Button onClick={cancelHandler} className="">
								Cancel
							</Button>
							<Button
								form={formId}
								type="submit"
								onClick={submitHandler}
								className="bg-indigo-500 text-white"
							>
								Save
							</Button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Card;
