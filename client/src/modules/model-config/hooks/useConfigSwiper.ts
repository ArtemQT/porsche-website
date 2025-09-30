import {useState} from "react";
import {useScrollTo} from "./useScrollTo.ts";
import {Swiper} from "swiper";

export const useConfigSwiper = () => {
	const [isOpenConfigMenu, setOpenConfigMenu] = useState<boolean>(false);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);
	const {scrollToSelector} = useScrollTo();

	const handleSetActiveIndex = (index: number) => setActiveIndex(index);
	const toggleConfigMenu = () => {
		if (isOpenConfigMenu) {
			window.scrollTo(0, 0);
			setActiveIndex(0);

			if (swiperInstance) {
				swiperInstance.slideTo(0);
			}
		} else {
			scrollToSelector('#config-menu');
		}

		setOpenConfigMenu(!isOpenConfigMenu);
	}
	const onBulletClick = (index: number) => {
		if (swiperInstance) {
			swiperInstance.slideTo(index)
		}
	}

	return {
		isOpenConfigMenu,
		activeIndex,
		toggleConfigMenu,
		handleSetActiveIndex,
		setSwiperInstance,
		onBulletClick
	}
}