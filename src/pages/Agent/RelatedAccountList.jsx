import { isEmpty, snakeCase } from "lodash";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import TableBody from "../../components/UI Components/basic/TableBody";
import TableHead from "../../components/UI Components/basic/TableHead";
import Table from "../../components/UI Components/wrappers/Table";
import {
	relatedAccountHeaderData,
	relatedAccountData2,
} from "../../utils/mockData";

const RelatedAccountList = () => {
	return (
		<>
			<Table id="related_account" title={"Related"}>
				<TableHead headerData={relatedAccountHeaderData} />
				<TableBody>
					{relatedAccountData2.map((data) => (
						<tr
							key={data.id}
							className={`bg-gray-100 hover:bg-gray-100 cursor-pointer`}
						>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500">
									{data.agent}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500">
									{data.account_name}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500">
									{data.currency}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-emerald-400">
									{data.effective_stake}%
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-emerald-400">
									{data.commission_win}%
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-red-400">
									{data.commission_loss}%
								</div>
							</td>
						</tr>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default RelatedAccountList;
