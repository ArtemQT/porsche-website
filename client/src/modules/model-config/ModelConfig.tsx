import styles from './ModelConfig.module.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import {ExteriorSwiper} from "./components/exterior-swiper";
import {WheelsSwiper} from "./components/wheels-swiper";
import {InteriorSwiper} from "./components/interior-swiper";
import {PackageSwiper} from "./components/package-swiper";
import {ExhaustSystemSwiper} from "./components/exhaust-system-swiper";

import {useConfigSwiper} from "./hooks/useConfigSwiper.ts";
import {SwiperWidgets} from "./components/swiper-widgets";
import {ConfigContextProvider} from "./contexts/ConfigContext.tsx";

export const ModelConfig = () => {

	const {
		isOpenConfigMenu,
		toggleConfigMenu,

		activeIndex,
		handleSetActiveIndex,

		setSwiperInstance,

		onBulletClick
	} = useConfigSwiper()

	const swiperList = [
		ExteriorSwiper,
		WheelsSwiper,
		InteriorSwiper,
		PackageSwiper,
		ExhaustSystemSwiper
	]

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
				onSwiper={swiper => setSwiperInstance(swiper)}
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

			<SwiperWidgets isOpenConfigMenu={isOpenConfigMenu}
						   toggleConfigMenu={toggleConfigMenu}
						   activeIndex={activeIndex}
						   onBulletClick={onBulletClick}
			/>
		</ConfigContextProvider>
	)
}