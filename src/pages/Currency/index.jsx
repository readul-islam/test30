import React, { useEffect, useId, useState } from "react";
import Pagination from "../../components/Pagination";
import InputSelect from "../../components/UI Components/basic/InputSelect";
import Label from "../../components/UI Components/basic/Label";
import CurrencyList from "./CurrencyList";
import Modal from "../../components/UI Components/wrappers/Modal";
import AddCurrencyForm from "./forms/AddCurrencyForm";
import EditCurrencyForm from "./forms/EditCurrencyForm";
import ShowCurrencyData from "./showCurrencyData";
import { currencyRowData } from "../../utils/mockData";
import { isObjEmpty } from "../../utils/Utils";

const Currency = () => {
	const [addCurrencyModalOpen, setAddCurrencyModalOpen] = useState(false);
	const [editCurrencyModalOpen, setEditCurrencyModalOpen] = useState(false);
	const [showCurrencyModalOpen, setShowCurrencyModalOpen] = useState(false);
	const [currencyList, setCurrencyList] = useState(currencyRowData);
	const [selectedCurrency, setSelectedCurrency] = useState(null);
	const [filterInputData, setFilterInputData] = useState({});
	const addCurrencyFormId = useId();
	const editCurrencyFormId = useId();

	const removeCurrencyFormDB = (id) => {
		const newData = currencyList.filter((currency) => currency.id !== id);
		setCurrencyList(newData);
	};

	const handleAddCurrencyFormSubmit = (values, { resetForm }) => {
		setAddAgentModalOpen(false);
		resetForm();
	};

	// regular expression

	useEffect(() => {
		if (!isObjEmpty(filterInputData)) {
			const filteredAgents = currencyRowData.filter((agent) => {
				for (const [key, value] of Object.entries(filterInputData)) {
					const escapedValue = value.replace(/\\/g, "\\\\");
					const regex = new RegExp(escapedValue, "i");
					if (!regex.test(agent[key])) {
						return false;
					}
				}
				return true;
			});
			setCurrencyList(filteredAgents);
		} else {
			// If filterInputData is empty, reset agentList to original agentRowData
			setCurrencyList(currencyRowData);
		}
	}, [filterInputData]);
	return (
		<>
			<CurrencyList
				filterInputData={filterInputData}
				setFilterInputData={setFilterInputData}
				setModalOpen={setAddCurrencyModalOpen}
				setEditCurrency={setEditCurrencyModalOpen}
				selectedCurrency={selectedCurrency}
				setSelectedCurrency={setSelectedCurrency}
				showCurrency={setShowCurrencyModalOpen}
				currencyList={currencyList}
				removeCurrencyFormDB={removeCurrencyFormDB}
			/>

			<Modal
				formId={addCurrencyFormId}
				topCloseIcon={true}
				title="Currency Form"
				modalOpen={addCurrencyModalOpen}
				isButtons
				id={"add_new_currency"}
				setModalOpen={setAddCurrencyModalOpen}
				cancelHandler={() => setAddCurrencyModalOpen(false)}
			>
				<AddCurrencyForm
					formId={addCurrencyFormId}
					handleFormSubmit={handleAddCurrencyFormSubmit}
				/>
			</Modal>

			<Modal
				formId={editCurrencyFormId}
				topCloseIcon={true}
				title="Currency Form"
				modalOpen={editCurrencyModalOpen}
				isButtons
				id={"add_new_currency"}
				setModalOpen={setEditCurrencyModalOpen}
				cancelHandler={() => setEditCurrencyModalOpen(false)}
			>
				<EditCurrencyForm
					initialData={selectedCurrency}
					formId={editCurrencyFormId}
					handleFormSubmit={handleAddCurrencyFormSubmit}
				/>
			</Modal>

			<Modal
				// formId={editCurrencyFormId}
				topCloseIcon={true}
				title="Convert Currency"
				modalOpen={showCurrencyModalOpen}
				// isButtons
				id={"add_new_currency"}
				setModalOpen={setShowCurrencyModalOpen}
				cancelHandler={() => setShowCurrencyModalOpen(false)}
			>
				<ShowCurrencyData initialData={selectedCurrency} />
			</Modal>
		</>
	);
};

export default Currency;
