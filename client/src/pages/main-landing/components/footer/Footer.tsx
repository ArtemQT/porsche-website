import styles from './Footer.module.scss'

import {Contacts} from "./ui/contacts";
import {Socials} from "./ui/socials";
import {Company} from "./ui/company";
import {Copyright} from "./ui/copyright";

export const Footer = () => {
	return (
		<footer className={styles.footer}>

			<div className={`${styles.footerInner} container`}>
				<div className={styles.footerWrapper}>
					<Contacts/>
					<Socials/>
				</div>
				<Company/>
				<Copyright/>
			</div>
		</footer>
	)
}