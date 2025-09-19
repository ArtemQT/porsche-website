import {type ChangeEvent, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "@shared/api/models-list-api.ts";

export const useSearch = () => {
	const [searchValue, setSearchValue] = useState('');

	const {
		data: searchResponse,
		isLoading: isSearchLoading,
		error: searchError
	} = useQuery({
		...modelsListApi.getUseQueryParamsSearchListApi(searchValue),
	})

	const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	}

	return {
		searchModelsList: searchResponse?.data.models,
		isSearchLoading,
		searchError,

		searchValue,
		onChangeSearchValue
	}
}