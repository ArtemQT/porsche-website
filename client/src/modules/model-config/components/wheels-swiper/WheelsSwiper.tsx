import styles from "../../ModelConfig.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {wheelsSwiperConfig} from "../../constants/wheels-swiper.ts";

export const WheelsSwiper = () => {
	return (
		<article className={styles.swiperWrapper}>
			<h3 className={`h4 ${styles.swiperTitle}`}>Wheels</h3>
			<Swiper
				modules={[Navigation]}
				navigation
				centeredSlides={true}
				slidesPerView={3}
				speed={800}
				className={styles.wheelsSwiper}
				spaceBetween={30}
			>
				{
					wheelsSwiperConfig.map(((slide, i) => (
						<SwiperSlide className={styles.wheelsSwiperSlide} key={i}>
							<p className={styles.wheelsSwiperSlidePrice}>
								<span>+ <b>{slide.price}</b> £</span>
							</p>
							<img className={styles.wheelsSwiperSlideImg}
								 src={slide.path}
								 alt=""
							/>
							<h4 className={styles.wheelsSwiperSlideTitle}>{slide.label}</h4>
						</SwiperSlide>
					)))
				}
			</Swiper>
		</article>
	)
}
