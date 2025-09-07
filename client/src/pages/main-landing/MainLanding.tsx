import type {FC} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../modules/header";
import {Footer} from "./components/footer";
import {LoginModal, useLoginModal} from "../../modules/auth";

export const MainLanding: FC = () => {

	const {
		isOpen,
		handleClose
	} = useLoginModal();

	return (
		<>
			<Header/>

			<main>
				<h1 className='visually-hidden'>Porsche website</h1>
				<Outlet/>

				<LoginModal handleClose={handleClose}
							isOpen={isOpen}
				/>
			</main>

			<Footer/>
		</>
	)
}