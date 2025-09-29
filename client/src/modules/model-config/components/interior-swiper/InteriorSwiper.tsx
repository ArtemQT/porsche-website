import styles from "../../ModelConfig.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {interiorSwiperConfig} from "../../constants/interior-swiper.ts";

export const InteriorSwiper = () => {
	return (
		<article className={styles.swiperWrapper}>
			<h3 className={`h4 ${styles.swiperTitle}`}>Interior colours</h3>
			<Swiper
				modules={[Navigation]}
				navigation
				centeredSlides={true}
				slidesPerView={1}
				speed={800}
			>
				{
					interiorSwiperConfig.map(slide => (
						<SwiperSlide className={styles.swiperSlide}>
							<p className={styles.interiorSwiperSlidePrice}>
								{
									slide.price ?
										<span>+ <b>{slide.price}</b> £</span>
										:
										<span>{slide.priceDescription}</span>
								}
							</p>

							<img className={styles.interiorSwiperSlideImg}
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