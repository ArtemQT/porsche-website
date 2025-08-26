import {useEffect, useState} from "react";

export const useAnimatedLogo = () => {

	const [isScrolledHeader, setIsScrolledHeader] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 100) {
				document.documentElement.style.setProperty('--color-header', 'var(--color-dark)');
				document.documentElement.style.setProperty('--bg-color-header', 'var(--color-grey-dark)');
				setIsScrolledHeader(true);
			} else {
				document.documentElement.style.setProperty('--color-header', 'var(--color-light)');
				document.documentElement.style.setProperty('--bg-color-header', 'transparent');
				setIsScrolledHeader(false);
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);


	return {
		isScrolledHeader
	}
}