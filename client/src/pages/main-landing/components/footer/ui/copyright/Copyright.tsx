import styles from './Copyright.module.scss'
import upIcon from '@assets/icons/upButton.svg'
import type {MouseEventHandler} from "react";

export const Copyright = () => {
	const handleScrollToTop: MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault();
		window.scrollTo(0,0);
	}

	return (
		<div className={styles.copyrightWrapper}>
			<div>© 2025 Porsche.com. All rights reserved.</div>

			<a href="#" onClick={handleScrollToTop}>
				<img src={upIcon} alt=""
					 width="25"
					 height="25"
				/>
			</a>
		</div>
	)
}