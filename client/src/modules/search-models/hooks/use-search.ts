import {type ChangeEvent, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "@shared/api/models-list-api.ts";
import {useDebounce} from "./use-debounce.ts";

export const useSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	const debouncedValue = useDebounce(searchValue, 500);

	const {
		data: searchResponse,
		isFetching: isSearching,
		error: searchError
	} = useQuery({
		...modelsListApi.getUseQueryParamsSearchListApi(debouncedValue),
	})

	const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	}

	return {
		searchModelsList: searchResponse?.data.models,
		isSearching,
		searchError,

		searchValue,
		onChangeSearchValue
	}
}