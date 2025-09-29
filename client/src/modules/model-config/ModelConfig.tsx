import styles from './ModelConfig.module.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import {ExteriorSwiper} from "./components/exterior-swiper";
import {WheelsSwiper} from "./components/wheels-swiper";
import {InteriorSwiper} from "./components/interior-swiper";

export const ModelConfig = () => {

	const swiperList = [
		ExteriorSwiper,
		WheelsSwiper,
		InteriorSwiper
	]

	return (
		<Swiper
			spaceBetween='30'
			slidesPerView={3}
			centeredSlides={true}
			initialSlide={2}
			className={styles.swiper}
			speed={800}
		>
			{
				swiperList.map(((Swiper, index) => (
					<SwiperSlide key={index} className={styles.swiperConfigSlide}><Swiper/></SwiperSlide>
				)))
			}
		</Swiper>
	)
}