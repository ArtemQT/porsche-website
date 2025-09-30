import type {TConfigArray} from "../types/swiper-types.ts";
import {exteriorSwiperConfig} from "./exterior-swiper.ts";
import {wheelsSwiperConfig} from "./wheels-swiper.ts";
import {interiorSwiperConfig} from "./interior-swiper.ts";
import {packageSwiperConfig} from "./package-swiper.ts";
import {exhaustSwiperConfig} from "./exhaust-system-swiper.ts";

export const configArray: TConfigArray = {
	exterior: exteriorSwiperConfig,
	wheels: wheelsSwiperConfig,
	interior: interiorSwiperConfig,
	carPackage: packageSwiperConfig,
	exhaust: exhaustSwiperConfig
}