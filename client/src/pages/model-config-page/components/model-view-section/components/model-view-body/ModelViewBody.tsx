import styles from "./ModelViewBody.module.scss";
import "swiper/swiper-bundle.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import type {FC} from "react";


interface ModelViewBodyProps {
	isModelLoading: boolean;
	modelSeries: string | undefined;
	previewImages: string[] | undefined;
}

export const ModelViewBody:FC<ModelViewBodyProps> = ({isModelLoading, modelSeries, previewImages}) => {
	return (
		<>
			{
				!isModelLoading ? (
					<div className={styles.previewWrapper}
						 data-model-row={modelSeries}
						 data-is-loading={isModelLoading}
					>
						<Swiper
							modules={[Navigation]}
							navigation
							slidesPerView={1}
							centeredSlides={true}
						>
							{
								previewImages?.map((img, index) => (
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
		</>
	)
}