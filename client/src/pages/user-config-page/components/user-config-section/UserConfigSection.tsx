import styles from './UserConfigSection.module.scss'

import {ConfigList} from "../../../../modules/render-user-config";

export const UserConfigSection = () => {
	return (
		<section className='section container'>
			<h2 className={styles.sectionTitle}>Saved configurations</h2>
			<ConfigList/>
		</section>
	)
}