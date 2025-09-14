import {useEffect, useState} from "react";

export const useAnimatedLogo = () => {
	const [isScrolledHeader, setIsScrolledHeader] = useState<boolean>(false);
	const bgColorCssVariable = '--bg-color-header';
	const colorCssVariable = '--color-header';

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 100) {
				document.documentElement.style.setProperty(colorCssVariable, 'var(--color-dark)');
				document.documentElement.style.setProperty(bgColorCssVariable, 'var(--color-grey-dark)');
				setIsScrolledHeader(true);
			} else {
				document.documentElement.style.setProperty(colorCssVariable, 'var(--color-light)');
				document.documentElement.style.setProperty(bgColorCssVariable, 'transparent');
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