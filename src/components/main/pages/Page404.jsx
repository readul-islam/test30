import React from "react";
import { Link } from "react-router-dom";

function Page404() {
	return (
		<div className="flex flex-col pt-12 justify-center  items-center">
			<img src="/no-internet.png" alt="error" className="h-24 w-24" />
			<h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
				404
			</h1>
			<p className="text-gray-700 dark:text-gray-300">
				Page not found. Check the address or {}
				<Link
					className="text-indigo-600 hover:underline dark:text-indigo-300"
					to="/app/"
				>
					go back to dashboard
				</Link>
				.
			</p>
		</div>
	);
}

export default Page404;
