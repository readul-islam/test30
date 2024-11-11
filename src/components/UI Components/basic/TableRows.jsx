import React from "react";

const TableRows = () => {
	const TableRowData = () => {
		return (
			!isEmpty(rowData) &&
			rowData.map((data) => (
				<tr className="hover:bg-gray-100">
					<td className="p-2">
						<div className="text-left text-nowrap font-semibold text-gray-500">
							{data.agent_name}
						</div>
					</td>
					<td className="p-2">
						<div className="text-center text-nowrap text-emerald-400">
							{data.commission_win}
						</div>
					</td>
					<td className="p-2">
						<div className="text-center text-nowrap text-red-400">
							{data.commission_loss}
						</div>
					</td>
					<td className="p-2">
						<div className="text-center text-nowrap text-gray-500">
							{data.active}{" "}
						</div>
					</td>
					<td className="p-2">
						<div className="text-center text-nowrap text-sky-300">
							Related Accounts({data.related_accounts})
						</div>
					</td>

					<td className="flex p-2 items-center text-nowrap justify-center text-gray-500/80 gap-2">
						<AiOutlineEye
							className="cursor-pointer hover:text-indigo-500 "
							size={24}
						/>
						<FaTrashAlt
							className="cursor-pointer hover:text-red-400"
							size={18}
						/>
					</td>
				</tr>
			))
		);
	};

	return (
		<>
			<TableRowData />
		</>
	);
};

export default TableRows;
