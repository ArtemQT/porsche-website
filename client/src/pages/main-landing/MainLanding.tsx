import type {FC} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../modules/header";
import {Footer} from "./components/footer";

export const MainLanding: FC = () => {
	return (
		<>
			<Header/>

			<main>
				<h1 className='visually-hidden'>Porsche website</h1>
				<Outlet/>
			</main>

			<Footer/>
		</>
	)
}