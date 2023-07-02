import React, { useEffect, useState } from "react";
import type { ImageType } from "../Components/Gallery";

const useFetch = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const fetchValue = (
		URL: string,
		options: { method: string; Authorization: string },
		filterData: Function
	) => {
		setIsLoading(true);
		fetch(URL, {
			headers: {
				...options,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				filterData(data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => setIsLoading(false));
	};
	return {
		fetchValue,
		loadingState: isLoading,
	};
};

export default useFetch;
