import * as Yup from "yup";

const domainRegex = /@shortcircuit\.science$/;

export const registerFormValidation = Yup.object({
	email: Yup.string().email().matches(domainRegex),
	password: Yup.string().required("Password is required"),
	passwordConfirmation: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
});
