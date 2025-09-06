import styles from './AuthLanding.module.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Button, ButtonType} from "@components/button";

export const AuthLanding = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname === '/auth/login' ? 'register' : 'login';

	console.log(path);
	return (
		<main>
			<h1 className='visually-hidden'>Authorization</h1>
			<div className={`${styles.wrapper} container`}>
				<div className={styles.wrapperBody}>
					<Outlet/>
				</div>
				<div className={styles.wrapperBanner}>
					<Button buttonType={ButtonType.dark}
							onClick={() => navigate(-1)}
							className={styles.backButton}
					>
						Back
					</Button>

					<Button buttonType={ButtonType.dark}
							onClick={() => navigate(path)}
							className={styles.authButton}
					>
						{
							path === 'register' ? (
								<span>
									Don't have an account?s<br/>
									Register
								</span>
							) : (
								<span>
									Have an account?<br/>
									Login
								</span>
							)
						}
					</Button>
				</div>
			</div>
		</main>
	)
}