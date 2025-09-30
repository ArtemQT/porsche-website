import styles from "../../ModelConfig.module.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {exhaustSwiperConfig} from "../../constants/exhaust-system-swiper.ts";
import {useConfig} from "../../hooks/useConfig.ts";

export const ExhaustSystemSwiper = () => {

	const {changeConfigHandler} = useConfig()

	return (
		<article className={styles.swiperWrapper}>
			<h3 className={`h4 ${styles.swiperTitle}`}>Exhaust system</h3>
			<Swiper
				modules={[Navigation]}
				navigation
				centeredSlides={true}
				slidesPerView={1}
				speed={800}
				spaceBetween={30}
				onSlideChange={(swiper) => changeConfigHandler(swiper.activeIndex, 'exhaust')}
			>
				{
					exhaustSwiperConfig.map(((slide, i) => (
						<SwiperSlide className={styles.swiperSlide} key={i}>
							<p className={styles.swiperSlidePrice}>
								{
									slide.price ?
										<span>+ <b>{slide.price}</b> £</span>
										:
										<span>{slide.priceDescription}</span>
								}
							</p>
							<h4 className={styles.swiperSlideExhaustTitle}>{slide.title}</h4>
							<p className={styles.swiperSlideDescription}>{slide.description}</p>
						</SwiperSlide>
					)))
				}
			</Swiper>
		</article>
	)
}