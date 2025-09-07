import type {FC} from "react";
import {VideoBanner} from "../../modules/video-banner";
import {VehicleFinderSection} from "./components/vehicle-finder-section";
import {CarRowSection} from "./components/car-row-section";

export const HomePage: FC = () => {

	return (
		<>
			<VideoBanner/>
			<VehicleFinderSection/>
			<CarRowSection/>
		</>
	)
}