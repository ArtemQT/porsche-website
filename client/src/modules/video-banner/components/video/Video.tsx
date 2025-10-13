import video from "@assets/videos/hero-bg.mp4";
import type {FC, RefObject} from "react";
import styles from './Video.module.scss'

interface VideoProps {
	videoRef: RefObject<HTMLVideoElement | null>;
}

export const Video: FC<VideoProps> = ({videoRef}) => {
	return (
		<video className={styles.video}
			   ref={videoRef}
			   autoPlay
			   muted
			   loop
			   disablePictureInPicture
			   playsInline
			   style={{
				   WebkitTouchCallout: 'none',
				   WebkitUserSelect: 'none',
				   KhtmlUserSelect: 'none',
				   MozUserSelect: 'none',
				   msUserSelect: 'none',
				   userSelect: 'none'
			   }}
		>
			<source src={video} type='video/mp4'/>
		</video>
	)
}