import type {FC} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../modules/header";
import {Footer} from "./components/footer";
import {LoginModal, RegisterModal} from "../../modules/auth";
import {Toaster} from "sonner";

export const MainLanding: FC = () => {

	return (
		<>
			<Header/>

			<Toaster position='top-right'
					 closeButton={true}
					 theme='light'
					 toastOptions={{
						 style: {
							 fontSize: '14px',
						 },
						 duration: 5000,
					 }}
			/>

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