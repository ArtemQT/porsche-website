import styles from './ModelConfig.module.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperWidgets} from "./components/swiper-widgets";
import {ConfigContextProvider} from "./contexts/ConfigContext.tsx";
import {useSwiperConfig} from "./hooks/useSwiperConfig.ts";

export const ModelConfig = () => {

	const {
		isOpenConfigMenu,
		swiperList,
		handleSetActiveIndex,
		setSwiperInstanceHandler
	} = useSwiperConfig()

	return (
		<ConfigContextProvider>
			<Swiper
				spaceBetween='30'
				slidesPerView={3}
				centeredSlides={true}
				initialSlide={0}
				grabCursor={true}
				speed={800}

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
		</ConfigContextProvider>
	)
}