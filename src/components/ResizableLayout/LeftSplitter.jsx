import React from "react";
import AgentList from "../../pages/Agent/AgentList";
import { agentRowData } from "../../utils/mockData";

const LeftSplitter = () => {
	return (
		<div className="text-black">
			<AgentList agentList={agentRowData} />
		</div>
	);
};

export default LeftSplitter;
