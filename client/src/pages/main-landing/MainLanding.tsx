import type {FC} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../modules/header";
import {Footer} from "./components/footer";
import {LoginModal, RegisterModal} from "../../modules/auth";

export const MainLanding: FC = () => {

	return (
		<>
			<Header/>

			<LoginModal/>
			<RegisterModal/>

			<main>
				<h1 className='visually-hidden'>Porsche website</h1>
				<Outlet/>
			</main>

			<Footer/>
		</>
	)
}