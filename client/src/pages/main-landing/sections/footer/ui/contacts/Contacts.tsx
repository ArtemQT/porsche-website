import styles from './Contacts.module.scss'

export const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<h3>Divisions and contact information</h3>
			<p>Do you have any questions?</p>
			<a href="https://www.porsche.com/central-eastern-europe/ru/locations-and-contact/" target='_blank'>
				Find contacts
			</a>
		</div>
	)
}