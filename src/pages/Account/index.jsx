import React, { useEffect, useId, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import ResizableLayout from "../../components/ResizableLayout";
import Modal from "../../components/UI Components/wrappers/Modal";
import AccountList from "./AccountList";
import AddAccountForm from "./Forms/AddAccountForm";
import EditAccountForm from "./Forms/EditAccountForm";

const Account = () => {
	const [accounts, setAccounts] = useState([]);
	const [addAccountModalOpen, setAddAccountModalOpen] = useState(false);
	const [viewAccount, setViewAccount] = useState(false);
	const [editAccount, setEditAccount] = useState(false);
	const [selectedAccount, setSelectedAccount] = useState(null);
	const [filterInputData, setFilterInputData] = useState({});
	const [isDisabled, setIsDisabled] = useState(false);
	const addNewFormId = useId();
	const EditAccountFormId = useId();

	const removeAccountFormDB = (id) => {
		const newData = accounts.filter((agent) => agent.id !== id);
		setAccounts(newData);
	};
	useEffect(() => {
		if (selectedAccount) {
			setViewAccount(true);
			// console.log(selectedAccount);
		}
	}, [selectedAccount]);

	const addAccountFormSubmit = (values, { resetForm }) => {
		console.log(values);

		setAddAccountModalOpen(false);
	};

	const handleAccountEditFormSubmit = (values, { resetForm }) => {
		resetForm();

		setEditAccount(false);
	};



	useEffect(()=>{
		const fetchData= async() =>{
			const response =  await	fetch('http://127.0.0.1:8000/api/accounts',{
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				  },
			})
			const accountData = await response.json();
			setAccounts(accountData)
			console.log(accountData)
		}
		fetchData()
		},[])

	// regular expression

	// useEffect(() => {
	// 	if (Object.keys(filterInputData).length === 0) {
	// 		// If filterInputData is empty, reset accounts to original relatedAccountData
	// 		setAccounts(accounts);
	// 	} else {
	// 		const data = accounts;
	// 		const filteredData = data.map((agentData) => {
	// 			const accounts = agentData.accounts.filter((account) => {
	// 				for (const [key, value] of Object.entries(filterInputData)) {
	// 					const regex = new RegExp(value, "i"); // 'i' flag for case insensitive
	// 					if (!regex.test(account[key])) {
	// 						return false;
	// 					}
	// 				}
	// 				return true;
	// 			});
	// 			return { ...agentData, accounts }; // Return the agentData object with filtered accounts
	// 		});

	// 		// Remove empty arrays from filteredData
	// 		const nonEmptyFilteredData = filteredData.filter(
	// 			(agentData) => agentData.accounts.length > 0
	// 		);

	// 		setAccounts(nonEmptyFilteredData);
	// 	}
	// }, [filterInputData]);

	return (
		<>
			<ResizableLayout
				openSplitter={viewAccount}
				leftSideSplitter={
					<AccountList
						filterInputData={filterInputData}
						setFilterInputData={setFilterInputData}
						selectedAccount={selectedAccount}
						setViewAccount={setViewAccount}
						removeAccountFormDB={removeAccountFormDB}
						setSelectedAccount={setSelectedAccount}
						setModalOpen={setAddAccountModalOpen}
						accounts={accounts}
					/>
				}
				rightSideSplitter={
					selectedAccount && (
						<div className=" bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
							<header className="px-5 flex justify-between items-center py-[23px] border-b border-slate-100 dark:border-slate-700">
								<h2 className="font-semibold text-slate-800/70 dark:text-slate-100">
									{selectedAccount?.account_label}
								</h2>
								<div className="flex items-center gap-2">
									<LiaEditSolid
										onClick={() => setEditAccount(true)}
										className="hover:text-indigo-500 cursor-pointer"
										size={25}
									/>
									<FaTrashAlt
										onClick={() => removeAccountFormDB(selectedAccount.id)}
										className="cursor-pointer text-gray-500 hover:text-red-400"
										size={18}
									/>

									<IoCloseCircleOutline
										onClick={() => {
											setViewAccount(false);

											setSelectedAccount(null);
										}}
										className="hover:text-red-500 cursor-pointer"
										size={25}
									/>
								</div>
							</header>

							<div className="px-5  py-4 space-y-4">
								<p className="">
									{" "}
									<span>Account Label :</span>{" "}
									<span>{selectedAccount.account_label}</span>{" "}
								</p>
								<p className="">
									{" "}
									<span>Account Name :</span>{" "}
									<span>{selectedAccount.account_name}</span>{" "}
								</p>
								<p className="">
									{" "}
									<span>Agent:</span> <span>{selectedAccount.agent}</span>{" "}
								</p>
								<p className="">
									{" "}
									<span>Currency :</span>{" "}
									<span>{selectedAccount.currency}</span>{" "}
								</p>
								<p className="">
									{" "}
									<span>Effective Stake :</span>{" "}
									<span>{selectedAccount.effective_stake}%</span>{" "}
								</p>
								<p>
									{" "}
									<span>Commission Win :</span>{" "}
									<span>{selectedAccount.commission_win}</span>%
								</p>
								<p>
									<span>Commission Loss : </span>
									<span>{selectedAccount.commission_loss}</span>%
								</p>
								<p>
									{" "}
									<span>Active :</span>{" "}
									<span className="uppercase">
										{selectedAccount.active ? "Y" : "N"}
									</span>{" "}
								</p>
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

			{/* add new account form modal */}

			<Modal
				formId={addNewFormId}
				topCloseIcon
				title="Account Form"
				modalOpen={addAccountModalOpen}
				isButtons
				id={"add_new_account"}
				setModalOpen={setAddAccountModalOpen}
				// submitHandler={() => setModalOpen(false)}
				cancelHandler={() => setAddAccountModalOpen(false)}
			>
				<AddAccountForm
					handleFormSubmit={addAccountFormSubmit}
					formId={addNewFormId}
				/>
			</Modal>

			{/* Edit an account form modal */}

			<Modal
				isEditIconHide={isDisabled}
				editIconHandler={() => setIsDisabled(false)}
				formId={EditAccountFormId}
				topCloseIcon={true}
				editIcon={true}
				title="Account"
				isButtons
				id="edit_account"
				modalOpen={editAccount}
				setModalOpen={setEditAccount}
				cancelHandler={() => {
					// setIsDisabled(true);
					setEditAccount(false);
				}}
			>
				<EditAccountForm
					isDisabled={isDisabled}
					initialData={selectedAccount}
					formId={EditAccountFormId}
					handleFormSubmit={handleAccountEditFormSubmit}
				/>
			</Modal>
		</>
	);
};

export default Account;
