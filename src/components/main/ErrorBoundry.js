import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ErrorBoundary(props) {
	const navigate = useNavigate();
	const [hasError, setHasError] = useState(false);
	useEffect(() => {
		window.onerror = () => {
			setHasError(true);
		};
	}, []);

	const handleGoBack = () => {
		navigate(-1);
		setHasError(false);
	};

	if (hasError) {
		// Fallback UI
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "75vh",
				}}
			>
				<h3>Oops!</h3>
				<h3>Something went wrong.</h3>
				<h1
					style={{
						color: "blue",
						textDecoration: "underline",
						cursor: "pointer",
					}}
					onClick={handleGoBack}
				>
					Go Back
				</h1>
			</div>
		);
	}

	return props.children;
}
export default ErrorBoundary;
