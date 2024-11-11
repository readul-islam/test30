import React, { useEffect, useId, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import ResizableLayout from "../../components/ResizableLayout";
import Modal from "../../components/UI Components/wrappers/Modal";
import CustomerList from "./CustomerList";
import AddCustomerForm from "./Forms/AddCustomerForm";
import EditCustomerForm from "./Forms/EditCustomerForm/EditCustomerForm";

const Customer = () => {
	// const [modalOpen, setModalOpen] = useState(false);
	const [customers, setCustomers] = useState([]);
	const [viewCustomer, setViewCustomer] = useState(false);
	const [addCustomerModalOpen, setAddCustomerModalOpen] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState(null);
	const [editCustomer, setEditCustomer] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [filterInputData, setFilterInputData] = useState({});
	const addCustomerFormId = useId();
	const editCustomerFormId = useId();
	const removeCustomerFormDB = (id) => {
		const newData = customers.filter((customer) => customer.id !== id);
		setCustomers(newData);
	};

	useEffect(() => {
		if (selectedCustomer) {
			setViewCustomer(true);
		}
	}, [selectedCustomer]);

	const handleAddCustomerFormSubmit = (values, { resetForm }) => {
		setAddCustomerModalOpen(false);
		resetForm();
	};

	const handleEditCustomerFormSubmit = (values, { resetForm }) => {
		resetForm();

		setViewCustomer(false);
	};

	useEffect(()=>{
		const fetchData= async() =>{
			const response =  await	fetch('http://127.0.0.1:8000/api/customers')
			const customerData = await response.json();
			setCustomers(customerData)
			console.log(customerData)
		}
		fetchData()
		},[])
	
	// regular expression
	// useEffect(() => {
	// 	console.log(filterInputData);

	// 	if (!isObjEmpty(filterInputData)) {
	// 		const filteredAgents = customerRowData.filter((agent) => {
	// 			for (const [key, value] of Object.entries(filterInputData)) {
	// 				const escapedValue = value.replace(/\\/g, "\\\\");
	// 				const regex = new RegExp(escapedValue, "i");
	// 				if (!regex.test(agent[key])) {
	// 					return false;
	// 				}
	// 			}
	// 			return true;
	// 		});
	// 		setCustomers(filteredAgents);
	// 	} else {
	// 		// If filterInputData is empty, reset agentList to original agentRowData
	// 		setCustomers(customerRowData);
	// 	}
	// }, [filterInputData]);
	return (
		<>
			<ResizableLayout
				openSplitter={viewCustomer}
				leftSideSplitter={
					<CustomerList
						filterInputData={filterInputData}
						setFilterInputData={setFilterInputData}
						selectedCustomer={selectedCustomer}
						setViewCustomer={setViewCustomer}
						removeCustomerFormDB={removeCustomerFormDB}
						customers={customers}
						setModalOpen={setAddCustomerModalOpen}
						setSelectedCustomer={setSelectedCustomer}
					/>
				}
				rightSideSplitter={
					selectedCustomer && (
						<div className=" bg-white min-w-[35%] dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
							<header className="px-5 flex justify-between items-center py-[23px] border-b border-slate-100 dark:border-slate-700">
								<h2 className="font-semibold text-slate-800/70 dark:text-slate-100">
									{selectedCustomer?.customer_name}
								</h2>
								<div className="flex items-center gap-2">
									<LiaEditSolid
										onClick={() => setEditCustomer(true)}
										className="hover:text-indigo-500 cursor-pointer"
										size={25}
									/>
									<FaTrashAlt
										onClick={() => {
											// removeAgentFormDB(selectedAgent.id);

											setSelectedCustomer(null);
											setViewCustomer(false);
										}}
										className="cursor-pointer text-gray-500 hover:text-red-400"
										size={18}
									/>

									<IoCloseCircleOutline
										onClick={() => {
											setViewCustomer(false);

											setSelectedCustomer(null);
										}}
										className="hover:text-red-500 cursor-pointer"
										size={25}
									/>
								</div>
							</header>

							<div className="px-5  py-4 space-y-4">
								<p className="">
									{" "}
									<span>Customer Name :</span>{" "}
									<span>{selectedCustomer.customer_name}</span>{" "}
								</p>
								<p>
									{" "}
									<span>Chat Id :</span> <span>{selectedCustomer.chat_id}</span>
								</p>
								<p>
									{" "}
									<span>Chat Source :</span>{" "}
									<span>{selectedCustomer.chat_source}</span>
								</p>
								<p>
									{" "}
									<span>Chat Name :</span>{" "}
									<span>{selectedCustomer.chat_name}</span>
								</p>
								<p>
									{" "}
									<span>Account Id :</span>{" "}
									<span>{selectedCustomer.account_id}</span>
								</p>
								<p>
									{" "}
									<span>Commission Win :</span>{" "}
									<span>{selectedCustomer.commission_win}</span>%
								</p>
								<p>
									<span>Commission Loss : </span>
									<span>{selectedCustomer.commission_loss}</span>%
								</p>
								<p>
									<span>Win Shave : </span>
									<span>{selectedCustomer.win_shave}</span>%
								</p>
								<p>
									<span>Lose Shave : </span>
									<span>{selectedCustomer.lose_shave}</span>%
								</p>
								<p>
									{" "}
									<span>Active :</span>{" "}
									<span className="uppercase">
										{selectedCustomer.active ? "Y" : "N"}
									</span>{" "}
								</p>
							</div>
						</div>
					)
				}
			/>

			<Modal
				topCloseIcon
				title="Customer Form"
				modalOpen={addCustomerModalOpen}
				isButtons
				id={"add_new_customer"}
				setModalOpen={setAddCustomerModalOpen}
				// submitHandler={() => setModalOpen(false)}
				cancelHandler={() => setAddCustomerModalOpen(false)}
			>
				<AddCustomerForm
					handleFormSubmit={handleAddCustomerFormSubmit}
					formId={addCustomerFormId}
				/>
			</Modal>

			<Modal
				isEditIconHide={isDisabled}
				editIconHandler={() => setIsDisabled(false)}
				formId={editCustomerFormId}
				topCloseIcon={true}
				editIcon={true}
				title="Customer"
				isButtons
				id="edit_agent"
				modalOpen={editCustomer}
				setModalOpen={setEditCustomer}
				cancelHandler={() => {
					// setIsDisabled(true);
					setEditCustomer(false);
				}}
			>
				<EditCustomerForm
					isDisabled={isDisabled}
					initialData={selectedCustomer}
					formId={addCustomerFormId}
					handleFormSubmit={handleEditCustomerFormSubmit}
				/>
			</Modal>
		</>
	);
};

export default Customer;
