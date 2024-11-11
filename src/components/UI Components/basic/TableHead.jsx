import { isEmpty } from "lodash";
import React from "react";

const TableHead = ({ headerData, className, lastHeaderTextLeft }) => {
	return (
		<>
			<thead
				className={`text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm ${className}`}
			>
				<tr>
					{!isEmpty(headerData) &&
						headerData.map((name, index) => (
							<th key={name} className="p-2">
								<div
									className={`font-semibold text-nowrap ${!index ? "text-left" : lastHeaderTextLeft && headerData?.length - 1 === index ? "text-right px-3" : "text-center"}`}
								>
									{name}
								</div>
							</th>
						))}
				</tr>
			</thead>
		</>
	);
};

export default TableHead;
