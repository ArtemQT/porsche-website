import styles from './ModelConfig.module.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperWidgets} from "./components/swiper-widgets";
import {useSwiperConfig} from "./hooks/useSwiperConfig.ts";

export const ModelConfig = () => {

	const {
		isOpenConfigMenu,
		swiperList,
		swiperProps,
		handleSetActiveIndex,
		setSwiperInstanceHandler
	} = useSwiperConfig()

	return (
		<>
			<Swiper
				{...swiperProps}
				className={`${styles.swiper} ${isOpenConfigMenu ? '' : styles.hidden}`}
				onSwiper={swiper => setSwiperInstanceHandler(swiper)}
				onSlideChange={swiper => handleSetActiveIndex(swiper.activeIndex)}
			>
				{
					swiperList.map(((Swiper, index) => (
						<SwiperSlide key={index} className={styles.swiperConfigSlide}>
							<Swiper/>
						</SwiperSlide>
					)))
				}
			</Swiper>

			<SwiperWidgets />
		</>
	)
}