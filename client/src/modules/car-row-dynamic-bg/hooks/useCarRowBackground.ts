import {type RefObject, useEffect, useState} from "react";

export const useCarRowBackground = (carRowRef: RefObject<HTMLDivElement | null>) => {

	const [isDarkBg, setIsDarkBg] = useState<boolean>(false);

	const onScroll = () => {

		if (carRowRef.current) {
			const params = carRowRef.current.getBoundingClientRect();
			console.log(params.bottom);
			if (params.top <= 550 && params.bottom > 50) {
				setIsDarkBg(true);
				document.body.classList.add('dark');
			} else {
				setIsDarkBg(false);
				document.body.classList.remove('dark');
			}
		}
	}

	useEffect(() => {

		window.addEventListener("scroll",  onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		}
	}, [carRowRef.current]);

	return {
		isDarkBg,
	}
}