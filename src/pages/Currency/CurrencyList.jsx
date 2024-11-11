import { isEmpty, snakeCase } from "lodash";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import TableBody from "../../components/UI Components/basic/TableBody";
import TableHead from "../../components/UI Components/basic/TableHead";
import Table from "../../components/UI Components/wrappers/Table";
import { currencyHeaderData } from "../../utils/mockData";
const CurrencyList = ({
	setModalOpen,
	setEditCurrency,
	showCurrency,
	selectedCurrency,
	setSelectedCurrency,
	removeCurrencyFormDB,
	currencyList,
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
				addNewHandler={() => setModalOpen(true)}
				haveTopAddIcon
				id="add_new_currency"
				title={"Currency"}
				setInputFilter={setInputFilter}
				inputFilter={inputFilter}
			>
				<TableHead
					lastHeaderTextLeft
					headerData={currencyHeaderData}
					className={"!w-full"}
				/>
				<TableBody className={"!w-full"}>
					{inputFilter && (
						<tr>
							{currencyHeaderData
								.slice(0, currencyHeaderData.length - 1)
								.map((name, index) => (
									<td className={`${index && "px-20"}`}>
										<input
											onChange={handleFiltering}
											className="block w-32 px-4 py-1.5 text-gray-700 bg-white border border-gray-200 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-strokedark focus:border-blue-400/50 focus:ring-opacity-45 dark:focus:border-blue-300/50 focus:ring-0 focus:outline-none  focus:ring-blue-300/50"
											name={snakeCase(name)}
										/>
									</td>
								))}
						</tr>
					)}
					{!isEmpty(currencyList) &&
						currencyList?.map((currency) => (
							<tr
								onClick={() => setSelectedCurrency(currency)}
								// ${selectedCurrency?.id === currency.id && "bg-gray-100"}
								key={currency.id}
								className={`
                                ${selectedCurrency?.id === currency.id && "bg-gray-100"}
                                 hover:bg-gray-100 cursor-pointer  w-full`}
							>
								<td className="p-2">
									<div className="text-left text-nowrap font-semibold text-gray-500">
										{currency.currency_name}
									</div>
								</td>

								<td className="flex p-2 items-center text-nowrap justify-end text-gray-500/80 gap-2">
									<FaTrashAlt
										onClick={(e) => {
											e.stopPropagation();
											removeCurrencyFormDB(currency.id);
											// setEditCurrency(null);
										}}
										className="cursor-pointer hover:text-red-400"
										size={18}
									/>
									<LiaEditSolid
										onClick={() => setEditCurrency(true)}
										className="hover:text-indigo-500 cursor-pointer"
										size={25}
									/>
									<MdOutlineCurrencyExchange
										onClick={() => showCurrency(true)}
										className="hover:text-indigo-500 cursor-pointer"
										size={22}
									/>
								</td>
							</tr>
						))}
				</TableBody>
			</Table>
		</>
	);
};

export default CurrencyList;
