import styles from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
	return (
		<button type='button' className={styles.burgerButton}>
			<span>Menu</span>
		</button>
	)
}