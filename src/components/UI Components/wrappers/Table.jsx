import React from "react";

import { GoPlus } from "react-icons/go";

import Pagination from "../../Pagination";
import Button from "../basic/Button";
import { FiFilter } from "react-icons/fi";
function Table({
	isPagination,
	title,
	id,
	haveTopAddIcon,
	addNewHandler,
	children,
	setInputFilter,
	inputFilter,
	isTableHeader,
}) {
	return (
		<div className="col-span-full  xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
			{isTableHeader && (
				<header className="px-5 flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-700">
					<div className="flex gap-2 items-center justify-center">
						<h2 className="font-semibold text-slate-800 dark:text-slate-100">
							{title}
						</h2>
					</div>

					<div className="flex items-center justify-center gap-2">
						{haveTopAddIcon && (
							<div className="flex px-3">
								<Button
									onClick={addNewHandler}
									id={id}
									className={
										"w-fit !border-none pl-2 hover:scale-105 duration-200 transition-all bg-indigo-500 text-white text-xs !rounded-sm  !font-medium hover:bg-indigo-600 !py-1.5 "
									}
									Icon={
										<GoPlus className="font-bold hover:scale-90" size={16} />
									}
								>
									Add
								</Button>
							</div>
						)}
						<div className=" px-3 border-l">
							<FiFilter
								onClick={() => setInputFilter(!inputFilter)}
								title="Filter"
								size={25}
								className={`text-indigo-300 hover:text-indigo-500 cursor-pointer ${inputFilter ? "text-indigo-500" : ""}`}
							/>
						</div>
					</div>
				</header>
			)}
			<div className="p-3">
				{/* Table */}
				<div className="overflow-x-auto max-h-[66.5vh] overflow-y-hidden">
					<table className="table-auto    w-full dark:text-slate-300">
						{children}
					</table>
				</div>
			</div>
			{isPagination && <Pagination />}
		</div>
	);
}

export default Table;
