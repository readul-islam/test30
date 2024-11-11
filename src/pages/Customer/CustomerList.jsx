import React, { useState } from "react";
import Table from "../../components/UI Components/wrappers/Table";
import TableHead from "../../components/UI Components/basic/TableHead";
import TableBody from "../../components/UI Components/basic/TableBody";
import { customerHeaderData, customerRowData } from "../../utils/mockData";
import { isEmpty, kebabCase, snakeCase } from "lodash";
import { AiOutlineEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const CustomerList = ({
	customers,
	selectedCustomer,
	setModalOpen,
	removeCustomerFormDB,
	setViewCustomer,
	setSelectedCustomer,
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
				isPagination
				isTableHeader
				haveTopAddIcon
				id="add_new_customer"
				addNewHandler={() => setModalOpen(true)}
				title={"Customers"}
				setInputFilter={setInputFilter}
				inputFilter={inputFilter}
			>
				<TableHead headerData={customerHeaderData} />
				<TableBody>
					{inputFilter && (
						<tr>
							{customerHeaderData
								.slice(0, customerHeaderData.length - 1)
								.map((name, index) => (
									<td className={`${index && "px-10"}`}>
										<input
											onChange={handleFiltering}
											className="block w-full px-4 py-1.5 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50"
											name={snakeCase(name)}
										/>
									</td>
								))}
						</tr>
					)}
					{!isEmpty(customers) &&
						customers.map((data) => (
							<tr
								className={`${selectedCustomer?.id === data.id && "bg-gray-100"} hover:bg-gray-100 cursor-pointer`}
								key={data.id}
								onClick={() => setSelectedCustomer(data)}
							>
								<td className="p-2">
									<div className="text-left text-nowrap font-semibold text-gray-500">
										{data.customer_name}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.chat_id}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.chat_source}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.chat_name}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500">
										{data.account_id}{" "}
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
									<div className="text-center text-nowrap text-emerald-400">
										{data.win_shave}%
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-red-400">
										{data.lose_shave}%
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500">
										{data.active ? "Y" : "N"}
									</div>
								</td>

								<td className="flex p-2 items-center text-nowrap justify-center text-gray-500/80 gap-2">
									<FaTrashAlt
										onClick={(e) => {
											e.stopPropagation();
											removeCustomerFormDB(data.id);
											setViewCustomer(null);
										}}
										className="cursor-pointer hover:text-red-400"
										size={18}
									/>
								</td>
							</tr>
						))}
				</TableBody>
			</Table>
		</>
	);
};

export default CustomerList;
