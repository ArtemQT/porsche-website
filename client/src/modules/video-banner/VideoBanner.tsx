import {type FC, useRef} from "react";
import styles from './VideoBanner.module.scss'
import {Video} from "./components/video";
import {VideoToggleButton} from "./components/video-toggle-button";
import {VideoDescription} from "./components/video-description";

export const VideoBanner: FC = () => {

	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<section className={styles.videoBannerSection} id='hero'>
			<h2 className='visually-hidden'>Hero section with banner 911 Carrera</h2>
			<div className={styles.videoBannerWrapper}>
				<Video videoRef={videoRef} />
				<VideoToggleButton videoRef={videoRef}/>
				<VideoDescription/>
			</div>
		</section>
	)
}