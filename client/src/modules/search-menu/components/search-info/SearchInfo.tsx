import styles from './SearchInfo.module.scss'

import type {IModelInfo} from "@shared/types/models-list-types.ts";
import type {FC} from "react";
import {SearchInfoList} from "../search-info-list";
import type {ISearchItemLink} from "../../types/types.ts";
import {SkeletonLink} from "../skeleton-link/SkeletonLink.tsx";
import {SkeletonCardImg} from "../skeleton-card-img";
import {RoutePaths} from "@config/route-paths.ts";

interface SearchListProps {
	searchModelsList: IModelInfo[] | undefined;
	isSearching: boolean;
	handleClose: () => void;
}

export const SearchInfo: FC<SearchListProps> = ({searchModelsList, isSearching, handleClose}) => {

	const listOfLinks: ISearchItemLink[] | undefined = searchModelsList?.map(modelItem => {
		return {
			id: modelItem.id,
			label: modelItem.modelName,
			link: `${RoutePaths.modelConfigPage}/${modelItem.id}`
		}
	})

	return (
		<div className={styles.searchInfoWrapper}>
			{
				isSearching ? (
					<>
						<div className={styles.skeletonLinkList}>
							{
								Array.from({length: 6}).map((_, index) => <SkeletonLink key={index}/>)
							}
						</div>
						<div className={styles.skeletonImgList}>
							{
								Array.from({length: 2}).map((_, index) => <SkeletonCardImg key={index}/>)
							}
						</div>
					</>
				) : (
					<>
						<SearchInfoList title='Models' listOfLinks={listOfLinks} handleClose={handleClose}/>
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
					</>
				)
			}
		</div>

	)
}