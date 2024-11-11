import React, { useEffect, useId, useState } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import ResizableLayout from "../../components/ResizableLayout";
import Button from "../../components/UI Components/basic/Button";
import Modal from "../../components/UI Components/wrappers/Modal";
import AgentList from "./AgentList";
import RelatedAccountList from "./RelatedAccountList";
import AgentForm from "./forms/AddAgentForm";
import AddRelatedAccountForm from "./forms/AddRelatedAccountForm";
import EditAgentForm from "./forms/EditAgentForm";

const Agent = () => {
	const [addAgentModalOpen, setAddAgentModalOpen] = useState(false);
	const [addRelatedAccountAgentModalOpen, setAddRelatedAccountAgentModalOpen] =
		useState(false);
	const [viewAgent, setViewAgent] = useState(false);
	const [editAgent, setEditAgent] = useState(false);
	const [agentList, setAgentList] = useState([]);
	const [selectedAgent, setSelectedAgent] = useState(null);
	const [isDisabled, setIsDisabled] = useState(true);
	const [filterInputData, setFilterInputData] = useState({});
	const addAgentFormId = useId();
	const editAgentFormId = useId();

	const removeAgentFormDB = (id) => {
		const newData = agentList.filter((agent) => agent.id !== id);
		setAgentList(newData);
	};

	useEffect(() => {
		if (selectedAgent) {
			setViewAgent(true);
			console.log(selectedAgent);
		}
	}, [selectedAgent]);

	const handleAddAgentFormSubmit = (values, { resetForm }) => {
		setAddAgentModalOpen(false);
		resetForm();
	};

	const handleEditAgentFormSubmit = (values, { resetForm }) => {
		resetForm();

		setViewAgent(false);
	};

	

	useEffect(()=>{
	const fetchData= async() =>{
		const response =  await	fetch('http://127.0.0.1:8000/api/agents',{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			  },
		})
		const agentData = await response.json();
		console.log(agentData)
		setAgentList(agentData)
	}
	fetchData()
	},[])

	// useEffect(() => {
	// 	if (!isObjEmpty(filterInputData)) {
	// 		const filteredAgents = agentList.filter((agent) => {
	// 			for (const [key, value] of Object.entries(filterInputData)) {
	// 				const escapedValue = value.replace(/\\/g, "\\\\");
	// 				const regex = new RegExp(escapedValue, "i"); // 'i' flag for case insensitive
	// 				if (!regex.test(agent[key])) {
	// 					return false;
	// 				}
	// 			}
	// 			return true;
	// 		});
	// 		setAgentList(filteredAgents);
	// 	} else {
	// 		// If filterInputData is empty, reset agentList to original agentRowData
	// 		setAgentList(agentList);
	// 	}
	// }, [filterInputData]);

	return (
		<>
			

			<ResizableLayout
				openSplitter={viewAgent}
				leftSideSplitter={
					<AgentList
						filterInputData={filterInputData}
						setFilterInputData={setFilterInputData}
						selectedAgent={selectedAgent}
						setViewAgent={setViewAgent}
						setSelectedAgent={setSelectedAgent}
						agentList={agentList}
						removeAgentFormDB={removeAgentFormDB}
						setModalOpen={setAddAgentModalOpen}
					/>
				}
				rightSideSplitter={
					selectedAgent && (
						<div className=" bg-white min-w-[35%] dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
							<header className="px-5 flex justify-between items-center py-[23px] border-b border-slate-100 dark:border-slate-700">
								<h2 className="font-semibold text-slate-800/70 dark:text-slate-100">
									{selectedAgent?.agent_name}
								</h2>
								<div className="flex items-center gap-2">
									<LiaEditSolid
										onClick={() => setEditAgent(true)}
										className="hover:text-indigo-500 cursor-pointer"
										size={25}
									/>
									<FaTrashAlt
										onClick={() => {
											removeAgentFormDB(selectedAgent.id);

											setSelectedAgent(null);
											setViewAgent(false);
										}}
										className="cursor-pointer text-gray-500 hover:text-red-400"
										size={18}
									/>

									<IoCloseCircleOutline
										onClick={() => {
											setViewAgent(false);

											setSelectedAgent(null);
										}}
										className="hover:text-red-500 cursor-pointer"
										size={25}
									/>
								</div>
							</header>

							<div className="px-5  py-4 space-y-4">
								<p className="">
									{" "}
									<span>Agent Name :</span>{" "}
									<span>{selectedAgent.agent_name}</span>{" "}
								</p>
								<p>
									{" "}
									<span>Commission Win :</span>{" "}
									<span>{selectedAgent.commission_win}</span>%
								</p>
								<p>
									<span>Commission Loss : </span>
									<span>{selectedAgent.commission_loss}</span>%
								</p>
								<p>
									{" "}
									<span>Active :</span>{" "}
									<span className="uppercase">
										{selectedAgent.active ? "Y" : "N"}
									</span>{" "}
								</p>
							</div>

							<div className="px-5 mt-8 flex justify-between items-center py-[12px] border-b border-t border-slate-100 dark:border-slate-700">
								<h2 className=" font-semibold text-slate-800/70 dark:text-slate-100">
									Related Accounts
								</h2>
								<Button
									className="!w-fit !border-none hover:text-indigo-600 !text-sm  text-indigo-500 font-semibold  "
									Icon={<GoPlus className="font-bold" size={18} />}
									onClick={() => {
										setAddRelatedAccountAgentModalOpen(true);
									}}
								>
									Add
								</Button>
							</div>
							<div>
								<RelatedAccountList />
							</div>
						</div>
					)
				}
			/>

			<Modal
				formId={addAgentFormId}
				topCloseIcon={true}
				title="Agent Form"
				modalOpen={addAgentModalOpen}
				isButtons
				id={"add_new_agent"}
				setModalOpen={setAddAgentModalOpen}
				cancelHandler={() => setAddAgentModalOpen(false)}
			>
				<AgentForm
					formId={addAgentFormId}
					handleFormSubmit={handleAddAgentFormSubmit}
				/>
			</Modal>

			{/* related account modal */}
			<Modal
				formId={addAgentFormId}
				topCloseIcon={true}
				title="Related Account Agent Form"
				modalOpen={addRelatedAccountAgentModalOpen}
				isButtons
				id={"add_new_related_account_agent"}
				setModalOpen={addRelatedAccountAgentModalOpen}
				cancelHandler={() => setAddRelatedAccountAgentModalOpen(false)}
			>
				<AddRelatedAccountForm />
			</Modal>

			<Modal
				formId={editAgentFormId}
				topCloseIcon={true}
				editIcon={true}
				title="Agent"
				isButtons
				id="edit_agent"
				modalOpen={editAgent}
				setModalOpen={setEditAgent}
				cancelHandler={() => {
					// setIsDisabled(true);
					setEditAgent(false);
				}}
			>
				<EditAgentForm
					isDisabled={isDisabled}
					initialData={selectedAgent}
					formId={editAgentFormId}
					handleFormSubmit={handleEditAgentFormSubmit}
				/>
			</Modal>
		</>
	);
};

export default Agent;
