import styles from './Copyright.module.scss'
import upIcon from '@assets/icons/upButton.svg'

export const Copyright = () => {
	return (
		<div className={styles.copyrightWrapper}>
			<div>© 2025 Porsche.com. All rights reserved.</div>

			<a href="#hero">
				<img src={upIcon} alt=""
					 width="25"
					 height="25"
				/>
			</a>
		</div>
	)
}