import styles from './Socials.module.scss'
import {SOCIALS} from "../../constants/contstants.ts";

export const Socials = () => {
	return (
		<div className={styles.socials}>
			<h3>Social media</h3>
			<p>Connect with us through social media.</p>
			<ul className={styles.socialsList}>
				{
					SOCIALS.map(social => (
						<li key={social.id}>
							<a href={social.href} className={styles.socialsLink} target="_blank">
								<img src={social.src}
									 alt=""
									 width="30"
									 height="30"
									 loading="lazy"
								/>
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)
}