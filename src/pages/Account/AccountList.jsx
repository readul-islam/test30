import { isEmpty, snakeCase } from "lodash";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import TableBody from "../../components/UI Components/basic/TableBody";
import TableHead from "../../components/UI Components/basic/TableHead";
import Table from "../../components/UI Components/wrappers/Table";
import { accountHeaderData } from "../../utils/mockData";

const AccountList = ({
	selectedAccount,
	accounts,
	setModalOpen,
	setSelectedAccount,
	setViewAccount,
	removeAccountFormDB,
	filterInputData,
	setFilterInputData,
}) => {
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
	// console.log(accounts)
	return (
		<>
			<Table
				isPagination
				isTableHeader
				haveTopAddIcon
				id="add_new_account"
				addNewHandler={() => setModalOpen(true)}
				title={"Accounts"}
				setInputFilter={setInputFilter}
				inputFilter={inputFilter}
			>
				<TableHead headerData={accountHeaderData} />
				<TableBody>
					{inputFilter && (
						<tr>
							{accountHeaderData
								.slice(0, accountHeaderData.length - 1)
								.map((name, index) => (
									<td key={index} className={`${index && "px-10"}`}>
										<input
											onChange={handleFiltering}
											className="block w-full px-4 py-1.5 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50"
											name={snakeCase(name)}
										/>
									</td>
								))}
						</tr>
					)}
					{!isEmpty(accounts) &&
						accounts.map((data) => (
							<tr
								key={data.id}
								onClick={() => {
									setSelectedAccount(data);
									console.log(data.id);
									console.log(data);
								}}
								className={`${selectedAccount?.id === data.id && "bg-gray-100"} hover:bg-gray-100 cursor-pointer`}
							>
								<td className="p-2">
									<div className="text-left text-nowrap font-semibold text-gray-500">
										{data.account_label}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.agent}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.account_name}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500">
										{data.currency}{" "}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-emerald-400">
										{data.effective_stake}%
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

								<td className="flex p-2 items-center text-nowrap justify-center text-gray-500/80 gap-2">
									<FaTrashAlt
										onClick={(e) => {
											e.stopPropagation();
											removeAccountFormDB(data.id);
											setViewAccount(null);
										}}
										className="cursor-pointer hover:text-red-400"
										size={18}
									/>
								</td>
							</tr>
						))}

					{/* {!isEmpty(accounts) &&
						accounts.map((data) => (
							<tr
								key={data.id}
								onClick={() => setSelectedAccount(data)}
								className={`${selectedAccount?.id === data.id && "bg-gray-100"} hover:bg-gray-100 cursor-pointer`}
							>
								<td className="p-2">
									<div className="text-left text-nowrap font-semibold text-gray-500">
										{data.account_label}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.agent}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500 ">
										{data.account_name}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-500">
										{data.currency}{" "}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-emerald-400">
										{data.effective_stake}%
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

								<td className="flex p-2 items-center text-nowrap justify-center text-gray-500/80 gap-2">
									<FaTrashAlt
										onClick={(e) => {
											e.stopPropagation();
											removeAccountFormDB(data.id);
											setViewAccount(null);
										}}
										className="cursor-pointer hover:text-red-400"
										size={18}
									/>
								</td>
							</tr>
						))} */}
				</TableBody>
			</Table>
		</>
	);
};

export default AccountList;
