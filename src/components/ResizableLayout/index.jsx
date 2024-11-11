import React, { useState } from "react";
import { useResizable } from "react-resizable-layout";
import Splitter from "./Splitter";
import { cn } from "../../utils/cn";
import "./style.css";
import LeftSplitter from "./LeftSplitter";
import RightSplitter from "./RightSplitter";
const ResizableLayout = ({
	openSplitter,
	setOpenSplitter,
	leftSideSplitter,
	rightSideSplitter,
}) => {
	const {
		isDragging: isPluginDragging,
		position: pluginW,
		splitterProps: pluginDragBarProps,
	} = useResizable({
		axis: "x",
		initial: 400,
		min: 300,
		reverse: true,
		max: 500,
	});

	return (
		<div
			className={
				"flex flex-column h-fit  font-mono color-white overflow-auto xl:overflow-hidden"
			}
		>
			<div className={"flex grow relative"}>
				<div className={"flex grow "}>
					<div className={"grow"}>{leftSideSplitter}</div>
					{openSplitter && (
						<Splitter isDragging={isPluginDragging} {...pluginDragBarProps} />
					)}

					{openSplitter && (
						<div
							className={cn(
								"shrink-0 contents absolute   top-0 lg:right-0 h-full max-w-72 sm:max-w-90 3xl:relative",
								isPluginDragging && "dragging "
							)}
							style={{ width: pluginW }}
						>
							{rightSideSplitter}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ResizableLayout;
