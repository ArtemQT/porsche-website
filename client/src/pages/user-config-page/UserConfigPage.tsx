import {UserConfigSection} from "./components/user-config-section";
import {BackButton} from "@components/back-button";
import styles from "../../modules/render-user-config/ConfigCart.module.scss";

export const UserConfigPage = () => {
	return (
		<>
			<div className='container'>
				<BackButton className={styles.configBackButton}/>
			</div>
			<UserConfigSection/>
		</>
	)
}