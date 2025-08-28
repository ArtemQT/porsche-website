import styles from './Company.module.scss'
import {COMPANIES} from "../../constants/contstants.ts";

export const Company = () => {
	return (
		<div className={styles.company}>
			<h3>Company</h3>
			<ul className={styles.companyList}>
				{
					COMPANIES.map(company => (
						<li key={company.id}
							className={styles.companyItem}>
							<a className={styles.companyLink}
							   href={company.href}
							   target="_blank"
							>
								{company.text}
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)
}