import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "../css/style.css";

// Import pages
import Account from "../pages/Account";
import Agent from "../pages/Agent";
import Customer from "../pages/Customer";

import DrawerWrapper from "../components/Drawer";
import WelcomeBanner from "../components/WelcomeBanner";
import MainLayout from "../components/main/Layout";
import Page404 from "../components/main/pages/Page404";
import Login from "../pages/Auth/Login";
import ResizableLayout from "../components/ResizableLayout";
import Profile from "../pages/Profile";
import ExchangeRate from "../pages/ExchangeRate";
import Currency from "../pages/Currency";
import Dashboard from "../pages/Dashboard";

function App() {
	const location = useLocation();

	useEffect(() => {
		document.querySelector("html").style.scrollBehavior = "auto";
		window.scroll({ top: 0 });
		document.querySelector("html").style.scrollBehavior = "";
	}, [location.pathname]); // triggered on route change

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="*" element={<Page404 />} />

				<Route path="/app/" element={<MainLayout />}>
					<Route index={true} element={<Dashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="agents" element={<Agent />} />
					<Route path="customers" element={<Customer />} />
					<Route path="accounts" element={<Account />} />
					<Route path="dd" element={<ResizableLayout />} />
					<Route path="setting" element={<Page404 />} />
					<Route path="currencies" element={<Currency />} />
					<Route path="exchange_rates" element={<ExchangeRate />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
