import {type RefObject, useState} from "react";

export const useControls = (videoRef: RefObject<HTMLVideoElement | null>) => {

	const [isPlaying, setIsPlaying] = useState<boolean>(true);

	const togglePlay = () => {

		if (!videoRef.current) return;

		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	}

	return {
		isPlaying, togglePlay
	}
}