import React, { useEffect, useRef, useState } from "react";
import Transition from "../../../utils/Transition";
import Card from "./Card";
import Label from "../basic/Label";
import InputField from "../basic/InputField";
import { Link } from "react-router-dom";

const Modal = ({
	modalOpen,
	title,
	editIcon,
	formId,
	editIconHandler,
	isEditIconHide,
	id,
	topCloseIcon,
	submitHandler,
	cancelHandler,
	isButtons,
	children,
}) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(modalOpen);
	}, [modalOpen]);

	return (
		<>
			<Transition
				// unmountOnExit
				className="fixed inset-0 bg-slate-900 bg-opacity-45 z-50 transition-opacity"
				show={show}
				enter="transition ease-out duration-200"
				enterStart="opacity-0"
				enterEnd="opacity-100"
				leave="transition ease-out duration-100"
				leaveStart="opacity-100"
				leaveEnd="opacity-0"
				aria-hidden="true"
			/>

			<Transition
				// unmountOnExit
				id={id}
				className="fixed inset-0 z-50 overflow-hidden flex items-start top-24 xl:top-42.5  mb-4 justify-center px-4 sm:px-6"
				role="dialog"
				aria-modal="true"
				show={show}
				enter="transition ease-in-out duration-200"
				enterStart="opacity-0 translate-y-4"
				enterEnd="opacity-100 translate-y-0"
				leave="transition ease-in-out duration-200"
				leaveStart="opacity-100 translate-y-0"
				leaveEnd="opacity-0 translate-y-4"
			>
				<div className="bg-white  dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-auto max-w-4xl w-full max-h-full rounded shadow-lg">
					{/* Search form */}
					{show && (
						<Card
							isEditIconHide={isEditIconHide}
							editIconHandler={editIconHandler}
							formId={formId}
							editIcon={editIcon}
							topCloseIcon={topCloseIcon}
							title={title}
							isButtons={isButtons}
							submitHandler={submitHandler}
							cancelHandler={cancelHandler}
						>
							{children}
						</Card>
					)}
				</div>
			</Transition>
		</>
	);
};

export default Modal;
