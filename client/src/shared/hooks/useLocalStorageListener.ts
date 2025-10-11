import  {useState, useEffect} from "react";

export const useLocalStorageListener = (key: string) => {
	const [value, setValue] = useState<string | null>(() => localStorage.getItem(key));

	useEffect(() => {
		const handleStorageChange = () => {
			setValue(localStorage.getItem(key));
		};

		window.addEventListener('storage', handleStorageChange);
		window.addEventListener('localStorageChange', handleStorageChange);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('localStorageChange', handleStorageChange);
		};
	}, [key]);

	return value;
};