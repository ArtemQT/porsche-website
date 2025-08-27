
export const isElementEven = (element: HTMLLIElement | null) => {

	if (!element || !element.parentElement) {
		return false
	}

	const children = Array.from(element.parentElement.children);
	const index = children.indexOf(element);

	return index % 2;
}