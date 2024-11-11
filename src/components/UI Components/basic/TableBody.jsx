const TableBody = ({ children, className }) => {
	return (
		<tbody
			className={`text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700 ${className}`}
		>
			{children}
		</tbody>
	);
};

export default TableBody;
