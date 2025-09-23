import styles from './ModelViewSection.module.scss'
import type {FC} from "react";
import type {IModelDetail} from "@shared/types/model-config-types.ts";
import {BackButton} from "@components/back-button";

import {Swiper} from "swiper/react";
import {Navigation} from "swiper/modules";
import {SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css"

interface ModelViewSectionProps {
	model: Omit<IModelDetail, 'price'> | undefined;
	isModelLoading: boolean;
}

export const ModelViewSection: FC<ModelViewSectionProps> = ({model, isModelLoading}) => {
	return (
		<section className={styles.section}>
			<div className={`${styles.wrapper} container`}>
				<BackButton/>

				<h2 className={styles.modelName}
					data-is-skeleton={isModelLoading}
				>
					{model?.modelName}
				</h2>

				<button className={styles.saveConfigButton}
						disabled={isModelLoading}
						data-is-disabled={isModelLoading}
				>
					Save configuration
				</button>
			</div>

			{
				!isModelLoading ? (
					<div className={styles.previewWrapper}
						 data-model-row={model?.modelSeries}
						 data-is-loading={isModelLoading}
					>
						<Swiper
							modules={[Navigation]}
							navigation
							slidesPerView={1}
							centeredSlides={true}
						>
							{
								model?.previewImages.map((img, index) => (
									<SwiperSlide key={index}
												 className={styles.previewSlide}
									>
										<img src={`/model-detail/${img}`}
											 className={`${styles.previewImg} ${styles[`img-${index}`]}`}
											 alt=""
										/>
									</SwiperSlide>
								))
							}
						</Swiper>
					</div>

				) : (
					<div className={styles.previewSkeleton}></div>
				)
			}
		</section>
	)
}