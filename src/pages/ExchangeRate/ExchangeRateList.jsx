import { isEmpty, kebabCase, snakeCase } from "lodash";
import React, { useState } from "react";
import Table from "../../components/UI Components/wrappers/Table";
import TableHead from "../../components/UI Components/basic/TableHead";
import TableBody from "../../components/UI Components/basic/TableBody";
import { exchangeHeaderData } from "../../utils/mockData";

const ExchangeRateList = ({
	selectedExchangeRate,
	setSelectedExchangeRate,
	exchanges,
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
	return (
		<>
			<Table
				isPagination
				isTableHeader
				// addNewHandler={() => setModalOpen(true)}
				id="add_new_exchangeRate"
				title={"Exchange Rate"}
				setInputFilter={setInputFilter}
				inputFilter={inputFilter}
			>
				<TableHead lastHeaderTextLeft headerData={exchangeHeaderData} />
				<TableBody>
					{inputFilter && (
						<tr>
							{exchangeHeaderData.map((name, index) => (
								<td>
									<div
										className={`w-full flex ${index && "justify-center"} ${index === exchangeHeaderData.length - 1 && "!justify-end"}`}
									>
										<input
											onChange={handleFiltering}
											className="block w-32 place-content-end px-4 py-1.5 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50"
											name={snakeCase(name)}
										/>
									</div>
								</td>
							))}
						</tr>
					)}
					{!isEmpty(exchanges) &&
						exchanges.map((data) => (
							<tr
								onClick={() => setSelectedExchangeRate(data)}
								key={data.id}
								className={`${selectedExchangeRate?.id === data.id && "bg-gray-100"} hover:bg-gray-100 cursor-pointer`}
							>
								<td className="p-2">
									<div className="text-left text-nowrap font-semibold text-gray-500">
										{data.currency_name}
									</div>
								</td>
								<td className="p-2">
									<div className="text-center text-nowrap text-gray-400">
										{data.date}
									</div>
								</td>
								<td className="p-2">
									<div className="text-right text-nowrap text-emerald-400">
										<p className="px-10">{data.exchange_rate}</p>
									</div>
								</td>
								{/* <td className="p-2">
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
								</td> */}
							</tr>
						))}
				</TableBody>
			</Table>
		</>
	);
};

export default ExchangeRateList;
