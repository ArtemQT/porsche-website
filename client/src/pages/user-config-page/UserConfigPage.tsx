import {BackButton} from "@shared/components/back-button";
import {UserConfigSection} from "./sections/user-config-section";

export const UserConfigPage = () => {
	return (
		<>
			<div className='container'>
				<BackButton/>
			</div>
			<UserConfigSection/>
		</>
	)
}