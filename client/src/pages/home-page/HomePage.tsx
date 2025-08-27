import type {FC} from "react";
import {VideoBanner} from "../../modules/video-banner";
import {VehicleFinderSection} from "./components/vehicle-finder-section";

export const HomePage: FC = () => {
	return (
		<>
			<VideoBanner/>
			<VehicleFinderSection/>
		</>
	)
}