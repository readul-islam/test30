import React from "react";
import useInitialData from "../../../../hooks/useInitialData";
import { INITIAL_DATA } from "./constants";
import { Form, Formik } from "formik";
import Label from "../../../../components/UI Components/basic/Label";
import PlusMinusBtn from "../../../../components/PlusMinusBtn";
import PercentageInputField from "../../../../components/UI Components/basic/PercentageInputField";
import ActiveButton from "../../../../components/UI Components/basic/ActiveButton";
import InputField from "../../../../components/UI Components/basic/InputField";
import { ActiveData } from "../../../../utils/mockData";

const AddCurrencyForm = ({ formId, handleFormSubmit, initialData }) => {
	const { isDataEmpty, initialValues } = useInitialData({
		initialData,
		INITIAL_DATA,
	});
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
							<Label required htmlFor="currency_name">
								Name
							</Label>
							<InputField
								id="currency_name"
								name="currency_name"
								type="text"
								placeholder="name"
							/>
						</div>
						<div className="mb-3">
							<Label required htmlFor="alias">
								Alias
							</Label>
							<InputField
								id="alias"
								name="alias"
								type="text"
								placeholder="alias"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default AddCurrencyForm;
