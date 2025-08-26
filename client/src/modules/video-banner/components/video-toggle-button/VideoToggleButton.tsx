import type {FC, RefObject} from "react";
import styles from './VideoToggleButton.module.scss'
import {useControls} from "../../hooks/useControls.ts";
import {ReactSVG} from "react-svg";

import playIcon from '@assets/icons/play-button.svg';
import pauseIcon from '@assets/icons/pause-button.svg';

interface VideoControlsProps {
	videoRef: RefObject<HTMLVideoElement | null>;
}

export const VideoToggleButton: FC<VideoControlsProps> = ({videoRef}) => {

	const { isPlaying, togglePlay } = useControls(videoRef);

	return (
		<button className={styles.toggleButton}
				onClick={togglePlay}
			    type='button'
		>
			<ReactSVG src={isPlaying ? playIcon : pauseIcon}/>
		</button>
	)
}