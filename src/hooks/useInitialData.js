import { useMemo } from "react";
import { isEmpty } from "lodash";

const useInitialData = ({ INITIAL_DATA, initialData }) =>
	useMemo(() => {
		const isDataEmpty = isEmpty(initialData);
		const initialValues = isDataEmpty ? INITIAL_DATA : initialData;
		return {
			isDataEmpty,
			initialValues,
		};
	}, [INITIAL_DATA, initialData]);

export default useInitialData;
