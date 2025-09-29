
export const useScrollTo = () => {
	const scrollToSelector = (selector: string) => {
		const element = document.querySelector(selector);
		if (element) {
			return element.scrollIntoView({ behavior: "smooth"});
		} else {
			console.log('ошибка')
		}
	}

	return {scrollToSelector}
}