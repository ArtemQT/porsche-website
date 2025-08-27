import modelRow911Icon from '@assets/icons/911-model-row.svg'
import modelRow718Icon from '@assets/icons/718-model-row.svg'

import modelRow911Poster from '@assets/images/911-model-row-poster.jfif'
import modelRow718Poster from '@assets/images/718-model-row-poster.jfif'

import modelRow911Video from '@assets/videos/911-model-row-video.mp4'
import modelRow718Video from '@assets/videos/718-model-row-video.mp4'

export interface ICarRowModels {
	id: number;
	modelRow: string;
	modelRowIcon: string;
	modelDescription: string;
	fuelType: string;
	modelVideo: string;
	modelPoster: string;
}

export const CAR_ROW_MODELS: ICarRowModels[] = [
	{
		id: 1,
		modelRow: '911',
		modelRowIcon: modelRow911Icon,
		modelDescription: 'Sports car icon with rear-mounted engine and maximum performance',
		fuelType: 'Petrol',
		modelPoster: modelRow911Poster,
		modelVideo: modelRow911Video
	},
	{
		id: 2,
		modelRow: '718',
		modelRowIcon: modelRow718Icon,
		modelDescription: 'Two-seater with powerful dynamics thanks to the central engine location',
		fuelType: 'Petrol',
		modelPoster: modelRow718Poster,
		modelVideo: modelRow718Video
	}
]