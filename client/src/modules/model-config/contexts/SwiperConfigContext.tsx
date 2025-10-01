import {createContext, type FC, type JSX, type PropsWithChildren, useState} from "react";
import {useScrollTo} from "../hooks/useScrollTo.ts";
import {Swiper} from "swiper";
import {ExteriorSwiper} from "../components/exterior-swiper";
import {WheelsSwiper} from "../components/wheels-swiper";
import {InteriorSwiper} from "../components/interior-swiper";
import {PackageSwiper} from "../components/package-swiper";
import {ExhaustSystemSwiper} from "../components/exhaust-system-swiper";
import type {SwiperProps} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";

interface SwiperConfigContext {
	isOpenConfigMenu: boolean;
	activeIndex: number;

	toggleConfigMenu: () => void;
	handleSetActiveIndex: (index: number) => void;
	setSwiperInstanceHandler: (swiper: Swiper) => void;
	onBulletClick: (index: number) => void;
	swiperList: (() => JSX.Element)[];
	swiperProps: SwiperProps;
}

export const SwiperConfigContext = createContext<SwiperConfigContext | null>(null);

export const SwiperConfigContextProvider: FC<PropsWithChildren> = ({children}) => {

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
	const setSwiperInstanceHandler = (swiper: Swiper) => setSwiperInstance(swiper)

	const swiperList = [
		ExteriorSwiper,
		WheelsSwiper,
		InteriorSwiper,
		PackageSwiper,
		ExhaustSystemSwiper
	]

	const swiperProps: SwiperProps = {
		modules: [EffectCoverflow],
		spaceBetween: '30',
		slidesPerView: 'auto',
		centeredSlides: true,
		initialSlide: 0,
		grabCursor: true,
		speed: 800,

		observer: true,
		observeParents: true,
		watchSlidesProgress: true,

		effect: "coverflow",
		coverflowEffect: {
			rotate: 0,
			stretch: 50,
			depth: 200,
			modifier: 1,
			slideShadows: false
		}
	}

	const contextValue: SwiperConfigContext = {
		isOpenConfigMenu,
		activeIndex,
		swiperList,
		swiperProps,

		toggleConfigMenu,
		handleSetActiveIndex,
		setSwiperInstanceHandler,
		onBulletClick
	}

	return (
		<SwiperConfigContext.Provider value={contextValue}>
			{children}
		</SwiperConfigContext.Provider>
	)
}