import styles from './ModelsPage.module.scss'
import {ModelsList} from "../../modules/render-models";
import {ModelsFilter} from "../../modules/models-filter";
import {FilterContextProvider} from "../../modules/models-filter/contexts/filter-context.tsx";
import {Button, ButtonType} from "@components/button";
import {useModal} from "../../modules/modal";
import {FilterModal} from "./components/filter-modal";

export const ModelsPage = () => {

	const {
		isOpen: isFilterModalOpen,
		handleOpen: handleFilterModalOpen,
		handleClose: handleFilterModalClose,
	} = useModal()

	return (
		<section className={'section container'}>
			<h2 className={styles.modelsTitle}>Review of models</h2>
			<div className={`${styles.modelsContainer}`}>
				<FilterContextProvider>
					<Button buttonType={ButtonType.dark}
							className={styles.mobileFilterButton}
							onClick={handleFilterModalOpen}
					>
						Filters
					</Button>
					<div className={styles.mobileFilterModal}>
						<FilterModal isOpen={isFilterModalOpen}
									 onClose={handleFilterModalClose}
						/>
					</div>


					<div className={styles.filterWrapper}>
						<ModelsFilter/>
					</div>
					<ModelsList/>
				</FilterContextProvider>
			</div>
		</section>
	)
}