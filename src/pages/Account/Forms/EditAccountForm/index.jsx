import React from "react";
import useInitialData from "../../../../hooks/useInitialData";
import { INITIAL_DATA } from "./constants";
import { Field, Form, Formik } from "formik";
import Label from "../../../../components/UI Components/basic/Label";
import InputField from "../../../../components/UI Components/basic/InputField";
import PercentageInputField from "../../../../components/UI Components/basic/PercentageInputField";
import PlusMinusBtn from "../../../../components/PlusMinusBtn";
import InputSelect from "../../../../components/UI Components/basic/InputSelect";
import { ActiveData } from "../../../../utils/mockData";
import ActiveButton from "../../../../components/UI Components/basic/ActiveButton";

const EditAccountForm = ({
	formId,
	isDisabled,
	handleFormSubmit,
	initialData,
}) => {
	const { isDataEmpty, initialValues } = useInitialData({
		initialData,
		INITIAL_DATA,
	});
	// console.log(initialData);

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleFormSubmit}
				enableReinitialize={isDataEmpty}
				//   validationSchema={employeeAddress}
			>
				{({ handleSubmit, isSubmitting, setFieldValue, values }) => (
					<Form id={formId} onSubmit={handleSubmit}>
						<div className="mb-3">
							<Label htmlFor="agent">Agent</Label>
							<InputField
								name="agent"
								id="agent"
								type="text"
								placeholder="name"
							/>
						</div>

						<div className="mb-3">
							<Label required htmlFor="account_name">
								Account Name
							</Label>
							<InputField name="account_name" id="account_name" type="text" />
						</div>
						<div className="mb-3">
							<Label required htmlFor="account_label">
								Account Label
							</Label>
							<InputField
								value={`${values.account_name + "(" + values.agent + ")"}`}
								name="account_label"
								id="account_label"
								type="text"
							/>
						</div>
						<div className="mb-3">
							<Label required htmlFor="currency">
								Currency
							</Label>
							<InputField name="currency" id="currency" type="text" />
						</div>
						<div className="mb-3 relative">
							<Label required htmlFor="effective_stake">
								Effective Stake
							</Label>
							<PercentageInputField
								id="effective_stake"
								name="effective_stake"
								type="text"
							/>
							<PlusMinusBtn
								minusIconHandler={() =>
									setFieldValue(
										"effective_stake",
										parseFloat(values.effective_stake - 0.1).toFixed(1)
									)
								}
								plusIconHandler={() =>
									setFieldValue(
										"effective_stake",
										parseFloat(
											parseFloat(values.effective_stake) + 0.1
										).toFixed(1)
									)
								}
							/>
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
										parseFloat(parseFloat(values.commission_win) + 0.1).toFixed(
											1
										)
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
										parseFloat(
											parseFloat(values.commission_loss) + 0.1
										).toFixed(1)
									)
								}
							/>
						</div>
						<div className="mt-2 ">
							<Label required>Active</Label>
							<Field
								active={values.active}
								setFieldValue={setFieldValue}
								as={ActiveButton}
								name="active"
								options={ActiveData}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default EditAccountForm;
