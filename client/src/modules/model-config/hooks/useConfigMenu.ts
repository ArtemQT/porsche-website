import {useState} from "react";
import {useScrollTo} from "./useScrollTo.ts";
import {Swiper} from "swiper";

export const useConfigMenu = () => {
	const [isOpenConfigMenu, setOpenConfigMenu] = useState<boolean>(false);

	const [activeIndex, setActiveIndex] = useState<number>(0);
	const handleSetActiveIndex = (index: number) => setActiveIndex(index);

	const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);
	const onBulletClick = (index: number) => {
		if (swiperInstance)	{
			swiperInstance.slideTo(index)
		}
	}

	const {scrollToSelector} = useScrollTo();

	const toggleConfigMenu = () => {
		isOpenConfigMenu ? window.scrollTo(0, 0) : scrollToSelector('#config-menu');
		setOpenConfigMenu(!isOpenConfigMenu);
	}

	return {
		isOpenConfigMenu,
		toggleConfigMenu,
		activeIndex,
		handleSetActiveIndex,
		setSwiperInstance,
		onBulletClick
	}
}