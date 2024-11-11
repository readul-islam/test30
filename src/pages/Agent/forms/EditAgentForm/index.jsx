import React, { useState } from "react";

import { Field, Form, Formik } from "formik";
import PlusMinusBtn from "../../../../components/PlusMinusBtn";
import InputField from "../../../../components/UI Components/basic/InputField";
import InputSelect from "../../../../components/UI Components/basic/InputSelect";
import Label from "../../../../components/UI Components/basic/Label";
import PercentageInputField from "../../../../components/UI Components/basic/PercentageInputField";
import useInitialData from "../../../../hooks/useInitialData";
import { ActiveData } from "../../../../utils/mockData";
import { INITIAL_DATA } from "../AddAgentForm/constants";
import ActiveButton from "../../../../components/UI Components/basic/ActiveButton";
const EditAgentForm = ({
	formId,

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
							<Label required htmlFor="agent_name">
								Agent Name
							</Label>
							<InputField
								id="agent_name"
								name="agent_name"
								type="text"
								placeholder="name"
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

export default EditAgentForm;
