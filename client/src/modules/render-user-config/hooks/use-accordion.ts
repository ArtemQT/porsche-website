import {useState} from "react";

export const useAccordion = () => {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

	return {
		isAccordionOpen,
		toggleAccordion,
	}
}