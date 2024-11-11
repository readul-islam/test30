import React from "react";
import WelcomeBanner from "../../components/WelcomeBanner";
import Card from "../../components/UI Components/wrappers/Card";

const Dashboard = () => {
	return (
		<div>
			<WelcomeBanner />
			<div className="grid grid-cols-4  gap-5">
				<Card
					mainDivStyle={"!p-0 !py-4 !px-4"}
					className={"max-w-73 !rounded-2xl !py-0 border !border-gray-400/30 "}
				>
					<div className="flex items-center  gap-5">
						<div className="p-4 bg-indigo-100 rounded-full">
							<svg className="shrink-0 h-5 w-5" viewBox="0 0 24 24">
								<path
									className={`fill-current text-indigo-500`}
									d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
								/>
								<path
									className={`fill-current text-indigo-500`}
									d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
								/>
							</svg>
						</div>
						<div className="space-y-1">
							<p className="text-xl text-gray-500 font-medium">Total Agent</p>
							<h2 className="text-2xl text-gray-900 font-medium font-medium ">
								46,250
							</h2>
						</div>
					</div>
				</Card>

				<Card
					mainDivStyle={"!p-0 !py-4 !px-4"}
					className={"max-w-73 !rounded-2xl !py-0 border !border-gray-400/30 "}
				>
					<div className="flex items-center  gap-5">
						<div className="p-4 bg-green-100 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
								<g fill="" fillRule="evenodd">
									<circle
										className={`fill-current text-green-500`}
										cx="7.933"
										cy="7.733"
										r="2.667"
									></circle>
									<path
										className={`fill-current text-green-500`}
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.75 15.733h7.583a5.333 5.333 0 00-10.143-2.306"
									></path>
									<path
										className={` fill-green-500 text-green-500}`}
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.933 20A7.467 7.467 0 101 20h14.933z"
									></path>
									<circle
										className={`fill-green-500 text-green-500}`}
										cx="17"
										cy="6.133"
										r="2.133"
									></circle>
								</g>
							</svg>
						</div>
						<div className="space-y-1">
							<p className="text-xl text-gray-500 font-medium">
								Total Customer
							</p>
							<h2 className="text-2xl text-gray-900 font-medium ">1,46,250</h2>
						</div>
					</div>
				</Card>
				<Card
					mainDivStyle={"!p-0 !py-4 !px-4"}
					className={"max-w-73 !rounded-2xl !py-0 border !border-gray-400/30 "}
				>
					<div className="flex items-center  gap-5">
						<div className="p-4 bg-gray-100 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								width="24"
								height="24"
								viewBox="0 0 470 468"
							>
								<defs>
									<path
										className={`fill-current `}
										id="b"
										d="M9.635 132.808C24.782 59.782 71.388 19.109 144.085 6.822c53.74-9.081 107.5-9.196 161.15.255 74.852 13.185 119.85 56.23 134.185 130.36 11.075 57.29 11.249 115.191-.174 172.427-15.324 72.52-63.132 117.285-135.561 129.527-53.74 9.08-107.5 9.195-161.15-.255-74.852-13.186-120.05-58.38-134.384-132.509-11.64-57.668-10.52-115.935 1.484-173.82z"
									></path>
								</defs>
								<g fill="#FFF" fillRule="evenodd">
									<g transform="translate(-21 -26) translate(32 33)">
										<use fill="#FFF" filter="url(#a)" xlinkHref="#b"></use>
										<use fill="white" xlinkHref="#b"></use>
									</g>
									<path
										fill="#FFF"
										d="M224.5 348.733c-30.971 0-59.241-11.243-81.081-29.803 16.061-30.317 46.375-42.475 81.081-42.475 34.705 0 65.02 12.159 81.08 42.475-21.839 18.56-50.108 29.803-81.08 29.803M224.5 79C304.191 79 369 143.81 369 223.5c0 79.692-64.809 144.5-144.5 144.5-41.004 0-78.049-17.175-104.37-44.69.6-1.18 9.099-18.476 9.141-18.428 19.843-33.312 55.062-47.694 95.229-47.694s75.386 14.382 95.229 47.694c18.699-21.877 30.004-50.282 30.004-81.382 0-69.279-55.955-125.234-125.233-125.234S99.267 154.221 99.267 223.5c0 14.569 2.481 28.546 7.04 41.536-5.889 2.738-11.555 5.873-17.094 9.238C83.264 258.469 80 241.36 80 223.5 80 143.81 144.809 79 224.5 79zm-36.956 108.44c0-20.586 17.107-37.342 38.726-37.342 21.617 0 38.724 16.756 38.724 37.342s-17.107 37.342-38.724 37.342c-21.62 0-38.726-16.756-38.726-37.342zm94.047 0c0-29.827-24.998-53.939-55.321-53.939-30.324 0-55.323 24.112-55.323 53.939 0 29.828 24.999 53.939 55.323 53.939 30.323 0 55.32-24.111 55.32-53.939"
										transform="translate(-21 -26) translate(32 33)"
									></path>
								</g>
							</svg>
						</div>
						<div className="space-y-1">
							<p className="text-xl text-gray-500 font-medium">Total Account</p>
							<h2 className="text-2xl text-gray-900 font-medium ">46,250</h2>
						</div>
					</div>
				</Card>

				<Card
					mainDivStyle={"!p-0 !py-4 !px-4"}
					className={"max-w-73 !rounded-2xl !py-0 border !border-gray-400/30 "}
				>
					<div className="flex items-center  gap-5">
						<div className="p-4 bg-orange-100 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
								<path
									className={`fill-current text-orange-500`}
									d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
								></path>
								<path
									className={`fill-current text-orange-500 `}
									d="M12 13c-1.9 0-3.5-1.2-3.9-2.8C8 10 8 9.8 8 9.5 8 7.6 9.8 6 12 6s4 1.6 4 3.5c0 .3 0 .5-.1.7-.1.5-.7.9-1.2.7-.5-.1-.9-.7-.7-1.2v-.3c0-.7-.9-1.4-2-1.4s-2 .7-2 1.5v.3c.2.7 1 1.2 2 1.2.6 0 1 .4 1 1s-.4 1-1 1z"
								></path>
								<path
									className={`fill-current text-orange-500`}
									d="M12 18c-2.2 0-4-1.6-4-3.5 0-.3 0-.5.1-.7.1-.5.7-.9 1.2-.7.5.1.9.7.7 1.2v.3c0 .8.9 1.5 2 1.5s2-.7 2-1.5v-.3c-.2-.7-1-1.2-2-1.2-.6 0-1-.4-1-1s.4-1 1-1c1.9 0 3.5 1.2 3.9 2.8.1.1.1.3.1.6 0 1.9-1.8 3.5-4 3.5z"
								></path>
								<path
									className={`fill-current text-orange-500`}
									d="M12 20c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm0-12c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm3 3c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3z"
								></path>
							</svg>
						</div>
						<div className="space-y-1">
							<p className="text-xl text-gray-500 font-medium">
								Total Currency
							</p>
							<h2 className="text-2xl text-gray-900 font-medium ">1,150</h2>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;
