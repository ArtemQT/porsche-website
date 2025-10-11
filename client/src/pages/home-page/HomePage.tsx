import type {FC} from "react";
import {VideoBanner} from "@modules/video-banner";
import {CarRowSection} from "./sections/car-row-section";
import {VehicleFinderSection} from "./sections/vehicle-finder-section";

export const HomePage: FC = () => {

	return (
		<>
			<VideoBanner/>
			<VehicleFinderSection/>
			<CarRowSection/>
		</>
	)
}