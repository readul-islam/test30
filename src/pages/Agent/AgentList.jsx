import { isEmpty, snakeCase } from "lodash";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import TableBody from "../../components/UI Components/basic/TableBody";
import TableHead from "../../components/UI Components/basic/TableHead";
import Table from "../../components/UI Components/wrappers/Table";
import { agentHeaderData } from "../../utils/mockData";
import Loader from "../../components/UI Components/basic/Loader";

const AgentList = ({
	selectedAgent,
	setModalOpen,
	setSelectedAgent,
	agentList,
	removeAgentFormDB,
	setViewAgent,
	filterInputData,
	setFilterInputData,
}) => {
	// console.log(agentRowData);

	const [inputFilter, setInputFilter] = useState(false);

	const escapeRegExp = (string) => {
		return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	};

	const handleFiltering = (event) => {
		const { name, value } = event.target;
		const escapedValue = escapeRegExp(value);
		setFilterInputData({
			...filterInputData,
			[name]: escapedValue,
		});
	};
	return (
		<>
			<Table
				isPagination={!isEmpty(agentList) && true}
				isTableHeader
				haveTopAddIcon
				addNewHandler={() => setModalOpen(true)}
				id="add_new_agent"
				title={"Agents"}
				setInputFilter={setInputFilter}
				inputFilter={inputFilter}
			>
				<TableHead headerData={agentHeaderData} />
				<TableBody className="min-h-96 bg-white w-full">
					
					{inputFilter && (
						<tr>
							{agentHeaderData
								.slice(0, agentHeaderData.length - 1)
								.map((name, index) => (
									<td key={name} className={`${index && "px-20"}`}>
										<input
											onChange={handleFiltering}
											className="block w-full px-4 py-1.5 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50"
											name={snakeCase(name)}
										/>
									</td>
								))}
						</tr>
					)}
					{!isEmpty(agentList) &&
						agentList.map((data) => (
							<tr
								onClick={() => setSelectedAgent(data)}
								key={data.id}
								className={`${selectedAgent?.id === data.id && "bg-gray-100"} hover:bg-gray-100 cursor-pointer`}
							>
								<td className="p-2">
									<div className="text-left text-nowrap font-semibold text-gray-500">
										{data.agent_name}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-emerald-400">
										{data.commission_win}%
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-red-400">
										{data.commission_loss}%
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500">
										{data.active ? "Y" : "N"}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-sky-300">
										Related Accounts({data.related_accounts})
									</div>
								</td>

								<td className="flex p-2 items-center text-nowrap justify-center text-gray-500/80 gap-2">
									<FaTrashAlt
										onClick={(e) => {
											e.stopPropagation();
											removeAgentFormDB(data.id);
											setViewAgent(null);
										}}
										className="cursor-pointer hover:text-red-400"
										size={18}
									/>
								</td>
							</tr>
						))
						
							
						
						
						}
				</TableBody>
			</Table>
		</>
	);
};

export default AgentList;
