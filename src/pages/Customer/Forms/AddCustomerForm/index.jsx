import React, { useState } from "react";
import Label from "../../../../components/UI Components/basic/Label";
import InputField from "../../../../components/UI Components/basic/InputField";
import InputSelect from "../../../../components/UI Components/basic/InputSelect";
import PlusMinusBtn from "../../../../components/PlusMinusBtn";
import useInitialData from "../../../../hooks/useInitialData";
import { INITIAL_DATA } from "./constants";
import { Form, Formik } from "formik";
import { ActiveData } from "../../../../utils/mockData";
import PercentageInputField from "../../../../components/UI Components/basic/PercentageInputField";
import ActiveButton from "../../../../components/UI Components/basic/ActiveButton";

const AddCustomerForm = ({ initialData, formId, handleFormSubmit }) => {
	const { isDataEmpty, initialValues } = useInitialData({
		initialData,
		INITIAL_DATA,
	});
	const [active, setActive] = useState(true);

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleFormSubmit}
			enableReinitialize={isDataEmpty}
			//   validationSchema={employeeAddress}
		>
			{({ handleSubmit, isSubmitting, setFieldValue, values }) => (
				<Form id={formId} onSubmit={handleSubmit}>
					<div className="mb-3">
						<Label required htmlFor="customer_name">
							Customer Name
						</Label>
						<InputField
							name="customer_name"
							id="customer_name"
							type="text"
							placeholder="name"
						/>
					</div>
					<div className="mb-3">
						<Label required htmlFor="chat_source">
							Chat Source
						</Label>
						<InputField name="chat_source" id="chat_source" type="text" />
					</div>
					<div className="mb-3">
						<Label required htmlFor="chat_name">
							Chat Name
						</Label>
						<InputField name="chat_name" id="chat_name" type="text" />
					</div>
					<div className="mb-3">
						<Label required htmlFor="account_label">
							Chat ID
						</Label>
						<InputField name="account_label" id="account_label" type="text" />
					</div>
					<div className="mb-3 relative">
						<Label required htmlFor="commission_win">
							Commission Win
						</Label>
						<PercentageInputField
							name="commission_win"
							id="commission_win"
							type="text"
						/>
						<PlusMinusBtn
							minusIconHandler={() =>
								setFieldValue(
									"commission_win",
									parseFloat(values.commission_win - 0.1).toFixed(1)
								)
							}
							plusIconHandler={() =>
								setFieldValue(
									"commission_win",
									parseFloat(parseFloat(values.commission_win) + 0.1).toFixed(1)
								)
							}
						/>
					</div>
					<div className="mb-3 relative">
						<Label required htmlFor="commission_win">
							Commission Loss
						</Label>
						<PercentageInputField
							id="commission_loss"
							name="commission_loss"
							type="text"
						/>
						<PlusMinusBtn
							minusIconHandler={() =>
								setFieldValue(
									"commission_loss",
									parseFloat(values.commission_loss - 0.1).toFixed(1)
								)
							}
							plusIconHandler={() =>
								setFieldValue(
									"commission_loss",
									parseFloat(parseFloat(values.commission_loss) + 0.1).toFixed(
										1
									)
								)
							}
						/>
					</div>

					<div className="mb-3 relative">
						<Label required htmlFor="win_shave">
							Win Shave
						</Label>
						<PercentageInputField name="win_shave" id="win_shave" type="text" />
						<PlusMinusBtn
							minusIconHandler={() =>
								setFieldValue(
									"win_shave",
									parseFloat(values.win_shave - 0.1).toFixed(1)
								)
							}
							plusIconHandler={() =>
								setFieldValue(
									"win_shave",
									parseFloat(parseFloat(values.win_shave) + 0.1).toFixed(1)
								)
							}
						/>
					</div>
					<div className="mb-3 relative">
						<Label required htmlFor="lose_shave">
							Loss Shave
						</Label>
						<PercentageInputField
							name="lose_shave"
							id="lose_shave"
							type="text"
						/>
						<PlusMinusBtn
							minusIconHandler={() =>
								setFieldValue(
									"lose_shave",
									parseFloat(values.lose_shave - 0.1).toFixed(1)
								)
							}
							plusIconHandler={() =>
								setFieldValue(
									"lose_shave",
									parseFloat(parseFloat(values.lose_shave) + 0.1).toFixed(1)
								)
							}
						/>
					</div>

					<div className="mt-2 ">
						<Label required>Active</Label>
						<ActiveButton
							options={ActiveData}
							active={active}
							setActive={setActive}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AddCustomerForm;
