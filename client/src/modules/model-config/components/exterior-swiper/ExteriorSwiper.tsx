import styles from "../../ModelConfig.module.scss"

import {exteriorSwiperConfig} from "../../constants/exterior-swiper.ts";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

export const ExteriorSwiper = () => {
	return (
		<article className={styles.swiperWrapper}>
			<h3 className={`h4 ${styles.swiperTitle}`}>Exterior colours</h3>
			<Swiper
				modules={[Navigation]}
				navigation
				centeredSlides={true}
				slidesPerView={1}
				speed={800}
			>
				{
					exteriorSwiperConfig.map(slide => (
						<SwiperSlide className={styles.swiperSlide}>
							<p className={styles.swiperSlidePrice}>
								{
									slide.price ?
										<span>+ <b>{slide.price}</b> £</span>
										:
										<b>{slide.priceDescription}</b>
								}
							</p>
							<img className={styles.swiperSlideImg}
								 src={slide.path}
								 alt=""
							/>
							<h4 className={styles.swiperSlideTitle}>{slide.label}</h4>
						</SwiperSlide>
					))
				}
			</Swiper>
		</article>
	)
}