import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "../components/main/context";
import "../css/additional-styles/flatpickr.css";
import "../css/additional-styles/utility-patterns.css";
import "../css/style.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>
);
