import styles from './ConfigSwiper.module.scss'

import type {FC} from "react";
import type {IConfig} from "@shared/types/user-config-types.ts";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

interface ConfigSwiperProps {
	config: Omit<IConfig, 'configPrice' | 'totalPrice'>,
	modelName: string,
}

export const ConfigSwiper:FC<ConfigSwiperProps> = ({config, modelName}) => {
	return (
		<article className={styles.configWrapper}>
			<h3 className={styles.configTitle}>{modelName} configuration</h3>
			<Swiper modules={[Navigation]}
					navigation={true}
					slidesPerView={1}

					className={styles.configSwiper}
			>

			</Swiper>
		</article>

	)
}