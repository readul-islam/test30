import React, { useEffect, useState } from "react";
import ResizableLayout from "../../components/ResizableLayout";
import ExchangeRateList from "./ExchangeRateList";
import { LiaEditSolid } from "react-icons/lia";
import { FaTrashAlt } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { exchangeRowData } from "../../utils/mockData";
import { isObjEmpty } from "../../utils/Utils";
import { filter } from "lodash";

const ExchangeRate = () => {
	const [exchanges, setExchanges] = useState(exchangeRowData);
	const [viewExchangeRate, setViewExchangeRate] = useState(false);
	const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);
	const [filterInputData, setFilterInputData] = useState({});

	useEffect(() => {
		if (selectedExchangeRate) {
			setViewExchangeRate(true);
			// console.log(selectedExchangeRate);
		}
	}, [selectedExchangeRate]);

	// regular expression

	useEffect(() => {
		console.log(filterInputData);
		if (!isObjEmpty(filterInputData)) {
			const filteredAgents = exchangeRowData.filter((agent) => {
				for (const [key, value] of Object.entries(filterInputData)) {
					const escapedValue = value.replace(/\\/g, "\\\\");
					const regex = new RegExp(escapedValue, "i");
					if (!regex.test(agent[key])) {
						return false;
					}
				}
				return true;
			});
			setExchanges(filteredAgents);
		} else {
			// If filterInputData is empty, reset agentList to original agentRowData
			setExchanges(exchangeRowData);
		}
	}, [filterInputData]);
	return (
		<>
			<ResizableLayout
				openSplitter={viewExchangeRate}
				leftSideSplitter={
					<ExchangeRateList
						filterInputData={filterInputData}
						setFilterInputData={setFilterInputData}
						exchanges={exchanges}
						selectedExchangeRate={selectedExchangeRate}
						setSelectedExchangeRate={setSelectedExchangeRate}
					/>
				}
				rightSideSplitter={
					selectedExchangeRate && (
						<div className=" bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
							<header className="px-5 flex justify-between items-center py-[23px] border-b border-slate-100 dark:border-slate-700">
								<h2 className="font-semibold text-slate-800/70 dark:text-slate-100">
									{selectedExchangeRate?.currency_name}
								</h2>
								<div className="flex items-center gap-2">
									<IoCloseCircleOutline
										onClick={() => {
											setViewExchangeRate(false);

											setSelectedExchangeRate(null);
										}}
										className="hover:text-red-500 cursor-pointer"
										size={25}
									/>
								</div>
							</header>

							<div className="px-5  py-4 space-y-4">
								<p className="">
									{" "}
									<span>Currency Name :</span>{" "}
									<span>{selectedExchangeRate.currency_name}</span>{" "}
								</p>
								<p>
									{" "}
									<span>Date :</span> <span>{selectedExchangeRate.date}</span>
								</p>
								<p>
									<span>Exchange Rate : </span>
									<span>{selectedExchangeRate.exchange_rate}</span>
								</p>
								{/* <p>
									{" "}
									<span>Active :</span>{" "}
									<span className="uppercase">
										{selectedAgent.active ? "Y" : "N"}
									</span>{" "}
								</p> */}
							</div>

							{/* <div className="px-5 mt-8 flex justify-between items-center py-[12px] border-b border-t border-slate-100 dark:border-slate-700">
								<h2 className=" font-semibold text-slate-800/70 dark:text-slate-100">
									Related Accounts
								</h2>
								<Button
									className="!w-fit !border-none hover:text-indigo-600 !text-sm  text-indigo-500 font-semibold  "
									Icon={<GoPlus className="font-bold" size={18} />}
								>
									Add
								</Button>
							</div> */}
						</div>
					)
				}
			/>
		</>
	);
};

export default ExchangeRate;
