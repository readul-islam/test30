import React, { useState, useEffect, useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
	const location = useLocation();
	const { pathname } = location;

	const trigger = useRef(null);
	const sidebar = useRef(null);

	const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
	const [sidebarExpanded, setSidebarExpanded] = useState(
		storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
	);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return;
			if (
				!sidebarOpen ||
				sidebar.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setSidebarOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	useEffect(() => {
		localStorage.setItem("sidebar-expanded", sidebarExpanded);
		if (sidebarExpanded) {
			document.querySelector("body").classList.add("sidebar-expanded");
		} else {
			document.querySelector("body").classList.remove("sidebar-expanded");
		}
	}, [sidebarExpanded]);

	// console.log(pathname);
	return (
		<div>
			{/* Sidebar backdrop (mobile only) */}
			<div
				className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
					sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				aria-hidden="true"
			></div>

			{/* Sidebar */}
			<div
				id="sidebar"
				ref={sidebar}
				className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
					sidebarOpen ? "translate-x-0" : "-translate-x-64"
				}`}
			>
				{/* Sidebar header */}
				<div className="flex  relative mb-10 pr-3 sm:px-2 pl-2">
					{/* Close button */}
					<button
						ref={trigger}
						className="lg:hidden text-slate-500 top-1 right-2 absolute hover:text-slate-400"
						onClick={() => setSidebarOpen(!sidebarOpen)}
						aria-controls="sidebar"
						aria-expanded={sidebarOpen}
					>
						<span className="sr-only">Close sidebar</span>
						<IoCloseCircleOutline size={28} className="text-gray-400" />
					</button>
					{/* Logo */}
					<NavLink end to="/app" className="flex items-center gap-2">
						<svg width="32" height="32" viewBox="0 0 32 32">
							<defs>
								<linearGradient
									x1="28.538%"
									y1="20.229%"
									x2="100%"
									y2="108.156%"
									id="logo-a"
								>
									<stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
									<stop stopColor="#A5B4FC" offset="100%" />
								</linearGradient>
								<linearGradient
									x1="88.638%"
									y1="29.267%"
									x2="22.42%"
									y2="100%"
									id="logo-b"
								>
									<stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
									<stop stopColor="#38BDF8" offset="100%" />
								</linearGradient>
							</defs>
							<rect fill="#6366F1" width="32" height="32" rx="16" />
							<path
								d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
								fill="#4F46E5"
							/>
							<path
								d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
								fill="url(#logo-a)"
							/>
							<path
								d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
								fill="url(#logo-b)"
							/>
						</svg>
						<p className="lg:hidden 2xl:block block text-white/95 font-semibold text-xl uppercase tracking-widest">
							Fatbets
						</p>
					</NavLink>
				</div>

				{/* Links */}
				<div className="space-y-8">
					{/* Pages group */}
					<div>
						<ul className="mt-3">
							{/* Dashboard */}

							<li
								className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === "/app/" && "bg-slate-900"}`}
							>
								<NavLink
									end
									to="/app/"
									className={`block text-slate-200 truncate transition duration-150 ${
										pathname.includes("/app/")
											? "hover:text-slate-200"
											: "hover:text-white"
									}`}
								>
									<div className="flex items-center justify-between">
										<div className="grow flex items-center">
											<svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
												<path
													className={`fill-current ${
														pathname === "/app/" ||
														pathname.includes("/app/dashboard")
															? "text-indigo-500"
															: "text-slate-400"
													}`}
													d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
												/>
												<path
													className={`fill-current ${
														pathname === "/app/" ||
														pathname.includes("/app/dashboard")
															? "text-indigo-600"
															: "text-slate-600"
													}`}
													d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
												/>
												<path
													className={`fill-current ${
														pathname === "/app/" ||
														pathname.includes("/app/dashboard")
															? "text-indigo-200"
															: "text-slate-400"
													}`}
													d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
												/>
											</svg>

											<span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
												Dashboard
											</span>
										</div>
									</div>
								</NavLink>
							</li>
							{/* Agents */}
							<li
								className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("/app/agents") && "bg-slate-900"}`}
							>
								<NavLink
									end
									to="/app/agents"
									className={`block text-slate-200 truncate transition duration-150 ${
										pathname.includes("/app/agents")
											? "hover:text-slate-200"
											: "hover:text-white"
									}`}
								>
									<div className="flex items-center justify-between">
										<div className="grow flex items-center">
											{/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
												<path
													className={`fill-current ${pathname.includes("/app/agents") ? "text-indigo-500" : "text-slate-600"}`}
													d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
												/>
												<path
													className={`fill-current ${pathname.includes("/app/agents") ? "text-indigo-300" : "text-slate-400"}`}
													d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
												/>
											</svg> */}

											<svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
												<path
													className={`fill-current ${pathname.includes("/app/agents") ? "text-indigo-500" : "text-slate-600"}`}
													d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
												/>
												<path
													className={`fill-current ${pathname.includes("/app/agents") ? "text-indigo-300" : "text-slate-400"}`}
													d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
												/>
											</svg>

											<span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
												Agents
											</span>
										</div>
									</div>
								</NavLink>
							</li>
							{/* Accounts */}
							<li
								className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("/app/accounts") && "bg-slate-900"}`}
							>
								<NavLink
									end
									to="/app/accounts"
									className={`block text-slate-200 truncate transition duration-150 ${
										pathname.includes("/app/agents")
											? "hover:text-slate-200"
											: "hover:text-white"
									}`}
								>
									<div className="flex items-center justify-between">
										<div className="grow flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												width="24"
												height="28"
												viewBox="0 0 470 468"
											>
												<defs>
													<path
														className={`fill-current ${pathname.includes("/app/accounts") ? "text-indigo-500" : "text-slate-600"}`}
														id="b"
														d="M9.635 132.808C24.782 59.782 71.388 19.109 144.085 6.822c53.74-9.081 107.5-9.196 161.15.255 74.852 13.185 119.85 56.23 134.185 130.36 11.075 57.29 11.249 115.191-.174 172.427-15.324 72.52-63.132 117.285-135.561 129.527-53.74 9.08-107.5 9.195-161.15-.255-74.852-13.186-120.05-58.38-134.384-132.509-11.64-57.668-10.52-115.935 1.484-173.82z"
													></path>
												</defs>
												<g fill="none" fillRule="evenodd">
													<g transform="translate(-21 -26) translate(32 33)">
														<use
															fill="#000"
															filter="url(#a)"
															xlinkHref="#b"
														></use>
														<use fill="#2C8BE2" xlinkHref="#b"></use>
													</g>
													<path
														fill="#FFF"
														d="M224.5 348.733c-30.971 0-59.241-11.243-81.081-29.803 16.061-30.317 46.375-42.475 81.081-42.475 34.705 0 65.02 12.159 81.08 42.475-21.839 18.56-50.108 29.803-81.08 29.803M224.5 79C304.191 79 369 143.81 369 223.5c0 79.692-64.809 144.5-144.5 144.5-41.004 0-78.049-17.175-104.37-44.69.6-1.18 9.099-18.476 9.141-18.428 19.843-33.312 55.062-47.694 95.229-47.694s75.386 14.382 95.229 47.694c18.699-21.877 30.004-50.282 30.004-81.382 0-69.279-55.955-125.234-125.233-125.234S99.267 154.221 99.267 223.5c0 14.569 2.481 28.546 7.04 41.536-5.889 2.738-11.555 5.873-17.094 9.238C83.264 258.469 80 241.36 80 223.5 80 143.81 144.809 79 224.5 79zm-36.956 108.44c0-20.586 17.107-37.342 38.726-37.342 21.617 0 38.724 16.756 38.724 37.342s-17.107 37.342-38.724 37.342c-21.62 0-38.726-16.756-38.726-37.342zm94.047 0c0-29.827-24.998-53.939-55.321-53.939-30.324 0-55.323 24.112-55.323 53.939 0 29.828 24.999 53.939 55.323 53.939 30.323 0 55.32-24.111 55.32-53.939"
														transform="translate(-21 -26) translate(32 33)"
													></path>
												</g>
											</svg>

											<span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
												Accounts
											</span>
										</div>
									</div>
								</NavLink>
							</li>
							{/* Customer */}
							<li
								className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("/app/customers") && "bg-slate-900"}`}
							>
								<NavLink
									end
									to="/app/customers"
									className={`block text-slate-200 truncate transition duration-150 ${
										pathname.includes("/app/customers")
											? "hover:text-slate-200"
											: "hover:text-white"
									}`}
								>
									<div className="flex items-center justify-between">
										<div className="grow flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="28"
											>
												<g fill="none" fillRule="evenodd" stroke="#4A4A4A">
													<circle
														className={`fill-current ${pathname.includes("/app/customers") ? "text-indigo-500" : "text-slate-400"}`}
														cx="7.933"
														cy="7.733"
														r="2.667"
													></circle>
													<path
														className={`fill-current ${pathname.includes("/app/customers") ? "text-indigo-500" : "text-slate-600"}`}
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M14.75 15.733h7.583a5.333 5.333 0 00-10.143-2.306"
													></path>
													<path
														className={`fill-current ${pathname.includes("/app/customers") ? "text-indigo-500" : "text-slate-400"}`}
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15.933 20A7.467 7.467 0 101 20h14.933z"
													></path>
													<circle
														className={`fill-current ${pathname.includes("/app/customers") ? "text-indigo-500" : "text-slate-600"}`}
														cx="17"
														cy="6.133"
														r="2.133"
													></circle>
												</g>
											</svg>
											<span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
												Customers
											</span>
										</div>
									</div>
								</NavLink>
							</li>
							{/* Customer */}
							<li
								className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("/app/currencies") && "bg-slate-900"}`}
							>
								<NavLink
									end
									to="/app/currencies"
									className={`block text-slate-200 truncate transition duration-150 ${
										pathname.includes("/app/currencies")
											? "hover:text-slate-200"
											: "hover:text-white"
									}`}
								>
									<div className="flex items-center justify-between">
										<div className="grow flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path
													className={`fill-current ${pathname.includes("/app/currencies") ? "text-indigo-500" : "text-slate-600"}`}
													d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
												></path>
												<path
													className={`fill-current ${pathname.includes("/app/currencies") ? "text-indigo-500" : "text-slate-400"}`}
													d="M12 13c-1.9 0-3.5-1.2-3.9-2.8C8 10 8 9.8 8 9.5 8 7.6 9.8 6 12 6s4 1.6 4 3.5c0 .3 0 .5-.1.7-.1.5-.7.9-1.2.7-.5-.1-.9-.7-.7-1.2v-.3c0-.7-.9-1.4-2-1.4s-2 .7-2 1.5v.3c.2.7 1 1.2 2 1.2.6 0 1 .4 1 1s-.4 1-1 1z"
												></path>
												<path
													className={`fill-current ${pathname.includes("/app/currencies") ? "text-indigo-500" : "text-slate-400"}`}
													d="M12 18c-2.2 0-4-1.6-4-3.5 0-.3 0-.5.1-.7.1-.5.7-.9 1.2-.7.5.1.9.7.7 1.2v.3c0 .8.9 1.5 2 1.5s2-.7 2-1.5v-.3c-.2-.7-1-1.2-2-1.2-.6 0-1-.4-1-1s.4-1 1-1c1.9 0 3.5 1.2 3.9 2.8.1.1.1.3.1.6 0 1.9-1.8 3.5-4 3.5z"
												></path>
												<path
													className={`fill-current ${pathname.includes("/app/currencies") ? "text-indigo-500" : "text-slate-400"}`}
													d="M12 20c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm0-12c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm3 3c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3z"
												></path>
											</svg>
											<span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
												Currencies
											</span>
										</div>
									</div>
								</NavLink>
							</li>
							{/* Customer */}
							<li
								className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("/app/exchange_rates") && "bg-slate-900"}`}
							>
								<NavLink
									end
									to="/app/exchange_rates"
									className={`block text-slate-200 truncate transition duration-150 ${
										pathname.includes("/app/exchange_rates")
											? "hover:text-slate-200"
											: "hover:text-white"
									}`}
								>
									<div className="flex items-center justify-between">
										<div className="grow flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="28"
												version="1"
												viewBox="0 0 64 64"
											>
												<path
													className={`fill-current ${pathname.includes("/app/exchange_rates") ? "text-indigo-500" : "text-slate-400"}`}
													d="M410 566c0-8 6-18 13-23 6-4-85-10-203-13L5 525 2 326C-1 113 3 97 48 102c31 4 42 28 13 28-21 0-21 4-21 185v185h189c184 0 189-1 184-20-7-28 18-26 45 3 28 30 28 48-1 75-27 25-47 28-47 8zM560 520c0-7 9-14 20-17 19-5 20-14 20-189V130H403c-153 0-194 3-185 12 16 16 15 38-1 38-18 0-57-42-57-61s41-59 59-59c8 0 11 8 8 20-5 20 0 20 193 20 156 0 200 3 209 14 8 9 11 74 9 212l-3 199-37 3c-24 2-38-1-38-8z"
													transform="matrix(.1 0 0 -.1 0 64)"
												></path>
												<path
													className={`fill-current ${pathname.includes("/app/exchange_rates") ? "text-indigo-500" : "text-slate-400"}`}
													d="M271 406c-87-48-50-186 49-186 51 0 100 49 100 99 0 75-83 124-149 87zm96-38c29-27 29-65 1-95-27-29-65-29-95-1-29 27-29 65-1 95 27 29 65 29 95 1z"
													transform="matrix(.1 0 0 -.1 0 64)"
												></path>
											</svg>
											<span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
												Exchange Rates
											</span>
										</div>
									</div>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{/* Expand / collapse button */}
			</div>
		</div>
	);
}

export default Sidebar;
