import styles from './SearchInfo.module.scss'

import type {IModelInfo} from "@shared/types/models-list-types.ts";
import type {FC} from "react";
import {SearchInfoList} from "../search-info-list";
import type {ISearchItemLink} from "../../types/types.ts";

interface SearchListProps {
	searchModelsList: IModelInfo[] | undefined;
}

export const SearchInfo: FC<SearchListProps> = ({searchModelsList}) => {

	const listOfLinks: ISearchItemLink[] | undefined = searchModelsList?.map(modelItem => {
		return {
			id: modelItem.id,
			label: modelItem.modelName,
			link: ''
		}
	})

	return (
		<div className={styles.searchInfoWrapper}>
			<SearchInfoList title='Models' listOfLinks={listOfLinks}/>

			<ul className={styles.searchInfoImgList}>
				{
					searchModelsList?.map(searchItem => (
						<li key={searchItem.id}
							className={styles.searchInfoImgItem}
						>
							<h4 className={styles.searchInfoImgTitle}>{searchItem.modelName}</h4>
							<img src={`/car-models/${searchItem.modelImage}`}
								 alt=""
							/>
						</li>
					))
				}
			</ul>
		</div>

	)
}