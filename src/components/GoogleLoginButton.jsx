import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleLoginButton = () => {
	useEffect(() => {
		const handleCredentialResponse = (response) => {
			const userObject = jwtDecode(response.credential);
			console.log("Encoded JWT ID token: " + response.credential);
			console.log(userObject);

			// Send the token to your backend
			fetch("http://localhost:8000/auth/google/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token: response.credential }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					// Handle login success (store tokens, redirect, etc.)
				})
				.catch((error) => {
					console.error("Error:", error);
					// Handle login failure
				});
		};

		// Load Google Identity Services script
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);

		script.onload = () => {
			window.google.accounts.id.initialize({
				client_id:
					"1039431411282-02a365adeahief4ot4h2undurtb0b185.apps.googleusercontent.com",
				callback: handleCredentialResponse,
			});
			window.google.accounts.id.renderButton(
				document.getElementById("google-signin-button"),
				{ theme: "outline" }
			);
			window.google.accounts.id.prompt(); // Display the One Tap prompt
		};
	}, []);

	return (
		<div id="google-signin-container" className="full-width-container">
			{" "}
			{/* Apply the CSS class */}
			<div id="google-signin-button"></div>
		</div>
	);
};

export default GoogleLoginButton;
